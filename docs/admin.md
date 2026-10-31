# Ryzent contact inbox

Ryzent's private contact inbox is available at /admin. Authentication is handled by Supabase Auth. Permission to read and delete enquiries is controlled by membership in public.admin_users.

The public website can run without Supabase. With no Supabase connection configured, the form cannot store messages and displays a GitHub contact route instead.

## How access works

| Question | Answered by |
| --- | --- |
| Is this a valid user in the Supabase project? | Supabase Auth |
| Is this user allowed to access Ryzent enquiries? | A row in public.admin_users |

The app checks admin state at the route/action layer, and Row Level Security protects the database. A signed-in user who is not in the admin allowlist should not be able to read enquiry rows.

The migration does not create a default admin user or password. This is deliberate: the repository is public, so a committed starter credential would expose the private inbox.

## Initial setup

### 1. Apply the schema

Run supabase/migrations/0001_init.sql in the Supabase SQL Editor.

It creates:

| Object | Purpose |
| --- | --- |
| contact_submissions | Stores visitor messages and delivery status |
| admin_users | Explicit allowlist of inbox administrators |
| is_admin() | RLS helper used by admin policies |
| RLS policies | Anonymous/authenticated inserts; admin-only select and delete |
| grant_admin() / revoke_admin() | Manage inbox administrators |

The migration contains no real account credentials. Review the SQL before applying it to a project that already contains data.

### 2. Create the first admin account

1. Supabase Dashboard → Authentication → Users → Add user.
2. Use an email address you personally control and a strong, unique password.
3. Confirm the account.
4. In SQL Editor, grant that exact account access:

    select public.grant_admin('YOUR_OWN_EMAIL');

5. Sign in at https://ryzent.netlify.app/admin/login.

To remove an administrator:

    select public.revoke_admin('THE_EMAIL_TO_REVOKE');

Do not use an example email or password copied from a public repository.

### 3. Connect the website

Set the following Netlify environment variables for the production deploy:

    NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
    NEXT_PUBLIC_SUPABASE_ANON_KEY=your-publishable-or-anon-key

Redeploy after adding or changing environment variables. Never expose the Supabase service-role key in the browser or in any NEXT_PUBLIC_ variable.

### 4. Disable public sign-ups

Supabase Dashboard → Authentication → Providers → Email → disable public sign-ups, unless Ryzent has a deliberate reason to allow them. Existing administrators can continue to sign in.

## Contact notification emails

Email delivery is optional and handled by the Supabase Edge Function:

    Visitor submits form
      → Next.js /api/contact
        → Supabase contact_submissions row
          → Database Webhook
            → notify-contact Edge Function
              → acknowledgement to visitor
              → enquiry notification to Ryzent's configured inbox

The Edge Function requires the secrets SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_RECIPIENT_EMAIL and NOTIFY_WEBHOOK_SECRET.

Set CONTACT_RECIPIENT_EMAIL to an inbox controlled by Ryzent. The function deliberately does not use SMTP_USER as a fallback recipient, because that could route enquiries to an inherited template-owner mailbox. No Ryzent contact email is hardcoded in the repository.

The Database Webhook must send the x-webhook-secret header with the exact same value as NOTIFY_WEBHOOK_SECRET. Deploy the current function source with:

    supabase functions deploy notify-contact

Do not assume changing the function code in GitHub automatically updates the deployed Edge Function. It must be redeployed to the correct Supabase project.

## Verify and troubleshoot

- Database not connected: confirm the two NEXT_PUBLIC_SUPABASE_* values are set in Netlify and redeploy.
- Not an admin: confirm the signed-in email has a row in public.admin_users.
- Form submission fails: verify the migration has been applied and the table is exposed to the Data API as required by the project's Supabase settings.
- Submission saved but email not delivered: inspect Edge Function logs, SMTP secrets and the Database Webhook.
- Webhook returns 401/503: verify NOTIFY_WEBHOOK_SECRET exists and exactly matches the x-webhook-secret header.
- No recipient configured: set CONTACT_RECIPIENT_EMAIL to a Ryzent-controlled inbox before expecting notification emails.

A test form submission should be made after setup. Verify both the database row and email delivery separately.
