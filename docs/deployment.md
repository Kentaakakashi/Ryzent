# Deploying Ryzent

Ryzent's public website is currently hosted on Netlify.

- Live site: https://ryzent.netlify.app/
- GitHub repository: https://github.com/Kentaakakashi/Ryzent
- Netlify deploy history: https://app.netlify.com/sites/ryzent/deploys

## 1. Website deployment

The production site is connected to GitHub. When changes are pushed to the production branch, Netlify should build and publish the new commit.

For a fresh setup:

1. Open https://app.netlify.com/ and choose Add new site → Import an existing project.
2. Connect GitHub and select Kentaakakashi/Ryzent.
3. Select the production branch (currently main).
4. Use Netlify's Next.js runtime/build integration. The package build script is npm run build. Do not force a static export or set a generic out publish directory.
5. Confirm the deploy's commit SHA matches the intended GitHub commit.

The canonical website URL is currently configured in constants/seo-constants.ts as https://ryzent.netlify.app. Update it when Ryzent moves to an owned domain, then redeploy.

## 2. Optional Supabase contact inbox

The contact form submits to /api/contact. With Supabase configured, submissions are stored in public.contact_submissions and the private inbox is available at /admin.

Create or select the Supabase project intended for Ryzent. In Project Settings → API, copy the project URL and publishable/anon key. Add these values to Netlify:

| Variable | Purpose |
| --- | --- |
| NEXT_PUBLIC_SUPABASE_URL | Supabase project URL |
| NEXT_PUBLIC_SUPABASE_ANON_KEY | Supabase publishable/legacy anon key |

Set them for the Production deploy context (and Preview/Deploy Previews only if those deployments should accept test enquiries). Redeploy after changing Netlify environment variables.

The browser key is public by design. Never put a service-role key or SMTP password in a NEXT_PUBLIC_ variable or in GitHub.

### Create the schema

1. Open supabase/migrations/0001_init.sql from this repository.
2. Review it before running.
3. Run it in Supabase Dashboard → SQL Editor.
4. The migration deliberately does not create a default admin account or commit a password.

### Create your admin

1. In Supabase Dashboard → Authentication → Users, create an account using an email address you control and a strong unique password.
2. Confirm the account.
3. In SQL Editor, grant that account access using its exact email:

    select public.grant_admin('YOUR_OWN_EMAIL');

4. Open https://ryzent.netlify.app/admin/login and sign in.
5. Keep public sign-ups disabled unless there is a deliberate reason to enable them.

Do not reuse passwords from examples, public repositories or another service.

## 3. Optional contact notification emails

Database storage and email delivery are separate. The Edge Function in supabase/functions/notify-contact/ sends an acknowledgement to the visitor and forwards the enquiry to the studio inbox.

The function now requires all of the following Supabase Edge Function secrets:

- SMTP_HOST
- SMTP_PORT (usually 465 for implicit TLS or 587 for STARTTLS)
- SMTP_USER
- SMTP_PASS
- CONTACT_RECIPIENT_EMAIL — an inbox that Ryzent controls
- NOTIFY_WEBHOOK_SECRET — a long random secret shared with the database webhook

Important: the function intentionally does not fall back to SMTP_USER as the destination. Set CONTACT_RECIPIENT_EMAIL explicitly to an address controlled by Ryzent. The repository does not contain a Ryzent email address, so do not copy the original template author's address or invent one.

Set the secrets in the Supabase project that owns the contact_submissions table. You can use the Supabase CLI from a trusted environment:

    supabase secrets set \
      SMTP_HOST=smtp.example.com \
      SMTP_PORT=465 \
      SMTP_USER=your-sender@example.com \
      SMTP_PASS='your-provider-app-password' \
      CONTACT_RECIPIENT_EMAIL=your-ryzent-inbox@example.com \
      NOTIFY_WEBHOOK_SECRET='a-long-random-secret'

Replace every example value with real values from accounts you control. Do not commit secrets to this repository.

Deploy the updated function after setting the secrets:

    supabase functions deploy notify-contact

Then configure a Database Webhook:

| Setting | Value |
| --- | --- |
| Table | contact_submissions |
| Event | INSERT |
| Type | Supabase Edge Function |
| Function | notify-contact |
| Header | x-webhook-secret: <the same NOTIFY_WEBHOOK_SECRET value> |

The webhook header must exactly match the secret configured for the function. The function refuses requests if this secret is missing or incorrect.

If there is no Ryzent-controlled recipient inbox yet, leave email notifications unconfigured. The message can still be stored in Supabase; the function will not silently send it to an inherited SMTP address.

## 4. Verify the complete flow

- [ ] The latest Netlify deploy corresponds to the intended GitHub commit.
- [ ] The homepage loads over HTTPS.
- [ ] /robots.txt and /sitemap.xml resolve to the Ryzent domain.
- [ ] /admin/login loads.
- [ ] A signed-out visitor cannot access the private inbox.
- [ ] A test form submission creates one row in contact_submissions.
- [ ] Only the intended admin account can read and delete submissions.
- [ ] If email is configured, a test visitor receives the acknowledgement.
- [ ] The Ryzent-controlled recipient inbox receives the enquiry.
- [ ] The sender can be replied to using the reply-to address.

If the database stores the submission but no email arrives, check the Edge Function logs and Database Webhook configuration. A successful form submission does not prove email delivery succeeded.

## 5. Project notes

- The public website uses Next.js 16, React 19, TypeScript and Tailwind CSS v4.
- The homepage contains a client-side Three.js astronaut scene and GridScan visual.
- The codebase originated from Hasnain Irfan's MIT-licensed portfolio-template source. See LICENSE and NOTICE.
- Third-party models, artwork, fonts and logos can have separate licenses; verify attribution before redistribution.
- Ryzent's public product showcase currently lists Theo, Ryu and The God Who Forgot. Private projects are intentionally excluded.
