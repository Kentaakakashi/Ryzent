# Deployment — Netlify + Supabase

Ryzent is a Next.js 16 App Router application. Deploy it to Netlify using the managed Next.js runtime rather than exporting it as a static site.

## 1. Netlify site

1. Push the repository to GitHub.
2. Open Netlify and choose **Add new site → Import an existing project**.
3. Connect GitHub and select `Kentaakakashi/Ryzent`.
4. Use the configuration already committed in `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: `22` (also pinned in `.nvmrc`)
5. Add optional variables under **Site configuration → Environment variables**. For values read by server-side routes/functions, make sure they are available to both the build and Functions runtime scopes when that scope selector is shown.
6. Trigger the deploy.

Netlify's current Next.js support uses its managed OpenNext-based runtime for App Router, SSR and related features. Let Netlify detect and manage its adapter; do not pin a second Next plugin manually.

**Do not** set `output: "export"` in `next.config.*`, and do not add a generic SPA fallback such as `/* /index.html 200`. The site uses Next.js routes and may use server functions.

## 2. Environment variables

The public homepage works with no environment variables. The enquiry form is shown only when both Supabase public variables are configured; otherwise the contact section shows the email/GitHub fallback.

| Variable | Required? | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Recommended | Your primary public URL, without a trailing slash. Used by canonical metadata, sitemap and robots. |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Optional | Public email address for the contact link. If blank, the contact link points to Ryzent's GitHub profile. |
| `NEXT_PUBLIC_SUPABASE_URL` | Optional | Supabase project URL, used by the contact form and private admin inbox. |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Optional | Supabase anon/publishable key. RLS protects the data. |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Optional | Google Search Console verification token. |

Netlify provides a `URL` value for the primary deployed site; `SITE_URL` uses that as a fallback when `NEXT_PUBLIC_SITE_URL` is not set. For a custom domain, set `NEXT_PUBLIC_SITE_URL` explicitly and redeploy so canonical URLs and generated metadata match the domain.

Only public Supabase URL and anon/publishable key belong in `NEXT_PUBLIC_*` variables. Never expose the service-role key, SMTP credentials or webhook secret to the browser.

## 3. Supabase contact inbox (optional)

Without Supabase, the public site remains usable and the contact section links to email or GitHub. To enable submissions and the private `/admin` inbox:

1. Create a Supabase project.
2. Open `supabase/migrations/0001_init.sql`, review it, then run it in **SQL Editor**.
3. The migration creates tables, RLS policies and helper functions, but intentionally does **not** create a public default administrator.
4. In Supabase Dashboard → **Authentication → Users**, create your own account with a strong password and confirm it.
5. Disable public email sign-ups under **Authentication → Providers → Email**.
6. In SQL Editor, grant only your account access:

   ```sql
   select public.grant_admin('your-address@example.com');
   ```

7. Add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` in Netlify, available to Build and Functions, then redeploy.
8. Test signed-out access to `/admin`, sign in at `/admin/login`, and submit a test enquiry.

The anon key is designed to be public; Row Level Security is the actual access boundary. The application does not need a service-role key.

## 4. Notification emails (optional)

Contact submissions are stored first. Email notifications are sent by the Supabase Edge Function, not by Netlify.

Use the setup in [docs/admin.md](admin.md) to deploy `notify-contact`, set its secrets in Supabase, and configure the database webhook with the `x-webhook-secret` header. SMTP credentials and the webhook secret must stay in Supabase secrets, never GitHub or Netlify public environment variables.

## 5. Production checks

- [ ] Netlify builds from `main` with Node 22.
- [ ] `npm run build` completes successfully.
- [ ] Primary domain is set in `NEXT_PUBLIC_SITE_URL`.
- [ ] Homepage, in-page navigation and external project links work on a phone.
- [ ] `/robots.txt`, `/sitemap.xml`, `/manifest.webmanifest` and `/opengraph-image` resolve.
- [ ] If Supabase is enabled, signed-out visitors cannot read `/admin` or submissions.
- [ ] A test contact submission is stored and, if email is configured, notification delivery is confirmed.
- [ ] No unlicensed template demo assets or personal content remain on the public site.
