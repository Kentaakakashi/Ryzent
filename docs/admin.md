# Ryzent private enquiry inbox

The private dashboard lives at `/admin`. It uses Supabase Auth for sign-in and a row in `public.admin_users` to authorise access. Row Level Security is the final enforcement layer.

## Setup

1. Create a Supabase project.
2. Review and run `supabase/migrations/0001_init.sql` in the Supabase SQL Editor.
3. The migration deliberately does not create a default administrator or publish a password.
4. In Supabase Dashboard → **Authentication → Users**, create your own user and confirm it.
5. Disable public sign-ups under **Authentication → Providers → Email**.
6. From the SQL Editor, grant your own account access:

   ```sql
   select public.grant_admin('your-address@example.com');
   ```

7. Set `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` in Netlify and redeploy.
8. Visit `/admin/login` and sign in.

To grant another administrator, create and confirm their account in Supabase Dashboard first, then run `select public.grant_admin('them@example.com');`. To revoke access, run `select public.revoke_admin('them@example.com');`.

## Access model

- Supabase Auth answers whether the visitor has a valid account.
- `public.admin_users` answers whether that account is an administrator.
- The Next.js request proxy and server actions check access before exposing dashboard data.
- RLS policies allow public inserts to the contact form, while only authorised administrators can read or delete submissions.

Never add a service-role key to the Next.js application. Do not commit passwords or secrets to the repository.

## Notification emails

The `supabase/functions/notify-contact` Edge Function sends an acknowledgement to the visitor and an enquiry notification to the configured recipient. It uses SMTP credentials and a webhook secret held in Supabase secrets.

Deploy the function and configure its secrets from the Supabase dashboard/CLI. Add a Database Webhook for **INSERT** events on `public.contact_submissions`, targeting `notify-contact`, with the header `x-webhook-secret` matching the `NOTIFY_WEBHOOK_SECRET` secret.

Email delivery is optional. The form can still store submissions when email notifications are not configured. Check the inbox and Edge Function logs before assuming a submission failed.
