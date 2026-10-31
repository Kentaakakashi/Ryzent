import { createClient } from "jsr:@supabase/supabase-js@2";
import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";
import {
  buildAlertHtml,
  buildAlertSubject,
  buildAlertText,
  buildReplyHtml,
  buildReplySubject,
  buildReplyText,
  type Submission,
} from "./email-template.ts";

interface WebhookPayload {
  type: "INSERT" | "UPDATE" | "DELETE";
  table: string;
  schema: string;
  record: Submission | null;
}

const env = (key: string): string | undefined => Deno.env.get(key);

const json = (body: unknown, status = 200): Response =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });

Deno.serve(async (req: Request): Promise<Response> => {
  if (req.method !== "POST") {
    return json({ error: "Method not allowed" }, 405);
  }

  const expectedSecret = env("NOTIFY_WEBHOOK_SECRET");
  if (!expectedSecret) {
    console.error("NOTIFY_WEBHOOK_SECRET is not configured; refusing webhook.");
    return json({ error: "Webhook is not configured." }, 503);
  }

  const providedSecret = req.headers.get("x-webhook-secret");
  if (providedSecret !== expectedSecret) {
    return json({ error: "Unauthorized" }, 401);
  }

  let payload: WebhookPayload;
  try {
    payload = await req.json();
  } catch {
    return json({ error: "Invalid JSON" }, 400);
  }

  if (payload.type !== "INSERT" || !payload.record) {
    return json({ skipped: true });
  }

  const submission = payload.record;

  const host = env("SMTP_HOST");
  const user = env("SMTP_USER");
  const pass = env("SMTP_PASS");
  const port = Number(env("SMTP_PORT") ?? "465");

  // Never fall back to SMTP_USER for the recipient: that could silently route
  // enquiries to a previous template owner's mailbox.
  const recipient = env("CONTACT_RECIPIENT_EMAIL");

  if (!host || !user || !pass || !recipient) {
    console.error(
      "SMTP is not configured. Set SMTP_HOST, SMTP_USER, SMTP_PASS and the Ryzent-owned CONTACT_RECIPIENT_EMAIL secret."
    );
    await recordResult(submission.id, false, "Ryzent notification email is not configured");
    return json({ ok: false, reason: "smtp-not-configured" }, 503);
  }

  let client: SMTPClient | undefined;

  try {
    client = new SMTPClient({
      connection: {
        hostname: host,
        port,
        tls: port === 465,
        auth: { username: user, password: pass },
      },
    });

    const studioName = "Ryzent";
    const siteUrl = "https://ryzent.netlify.app";

    let replyFailed: string | null = null;
    try {
      await client.send({
        from: `${studioName} <${user}>`,
        to: submission.email,
        replyTo: recipient,
        subject: buildReplySubject(studioName),
        content: buildReplyText(submission, studioName),
        html: buildReplyHtml(submission, studioName, siteUrl),
      });
    } catch (error) {
      replyFailed = error instanceof Error ? error.message : String(error);
      console.error("Acknowledgement to sender failed:", replyFailed);
    }

    await client.send({
      from: `${studioName} <${user}>`,
      to: recipient,
      replyTo: `${submission.name} <${submission.email}>`,
      subject: buildAlertSubject(submission),
      content: buildAlertText(submission),
      html: buildAlertHtml(submission, env("ADMIN_INBOX_URL")),
    });

    await recordResult(
      submission.id,
      true,
      replyFailed ? `Acknowledgement to sender failed: ${replyFailed}` : null
    );
    return json({ ok: true, acknowledgement: replyFailed ? "failed" : "sent" });
  } catch (error) {
    const detail = error instanceof Error ? error.message : String(error);
    console.error("Failed to send notification:", detail);
    await recordResult(submission.id, false, detail.slice(0, 300));
    return json({ ok: false, error: "Email notification failed." }, 500);
  } finally {
    await client?.close().catch(() => {});
  }
});

async function recordResult(
  id: string,
  sent: boolean,
  error: string | null
): Promise<void> {
  const url = env("SUPABASE_URL");
  const serviceKey = env("SUPABASE_SERVICE_ROLE_KEY");
  if (!url || !serviceKey) return;

  try {
    const supabase = createClient(url, serviceKey, {
      auth: { persistSession: false },
    });
    await supabase
      .from("contact_submissions")
      .update({ email_sent: sent, email_error: error })
      .eq("id", id);
  } catch (updateError) {
    console.error("Could not record email status:", updateError);
  }
}
