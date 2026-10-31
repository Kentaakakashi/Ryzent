# Ryzent

**Engineer the unexpected.**

Ryzent is an independent software studio exploring digital products, experimental interfaces and carefully engineered experiences.

The public site is built with Next.js App Router, React, TypeScript, Tailwind CSS v4, Motion and a small amount of custom CSS/SVG artwork. The homepage is intentionally lightweight: the hero geometry is CSS/SVG rather than a mandatory WebGL scene, so the first meaningful content remains available on mobile and devices without strong GPU support.

## Public sections

- **Home** — the Ryzent identity and geometric anomaly.
- **Systems** — Theo, Ryu and The God Who Forgot, each linked to its public repository and labelled as in development.
- **Experiments** — a space for procedural visuals, interaction studies and prototypes.
- **Studio** — the principles behind the work.
- **Contact** — a mail link when `NEXT_PUBLIC_CONTACT_EMAIL` is configured, otherwise the public GitHub profile.

Private relationship projects are intentionally not listed.

## Stack

- Next.js 16 App Router and React 19
- TypeScript (strict)
- Tailwind CSS v4 and custom CSS
- Motion and Three.js / React Three Fiber (available for future sections)
- Optional Supabase Auth, Postgres, RLS and Edge Function email notifications
- Netlify hosting through its managed Next.js runtime

## Run locally

Requires Node.js 20.9 or newer (Node 22 is pinned for the project).

```bash
npm ci
npm run dev
```

The public site renders without environment variables. Optional integrations are documented below.

## Environment

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical public URL. In Netlify, the `URL` environment variable is used as a fallback. Set this explicitly for a custom domain. |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Public contact email. Leave blank to use the GitHub profile link instead. |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL for contact submissions and the private admin inbox. |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon/publishable key. RLS remains the access-control boundary. |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Optional Search Console verification value. |

Never put a Supabase service-role key, SMTP password, webhook secret or administrator password in a `NEXT_PUBLIC_*` variable or in this repository.

## Deploy to Netlify

1. Push this repository to GitHub.
2. In Netlify, choose **Add new site → Import an existing project** and select `Kentaakakashi/Ryzent`.
3. Keep the repository's `netlify.toml` settings: build command `npm run build`, publish directory `.next`, Node 22.
4. Add any optional environment variables above in the Netlify site settings. Add runtime values to both **Builds** and **Functions** scopes where Netlify exposes those scopes.
5. Deploy. Netlify's Next.js runtime handles App Router routes and server features; this project is not configured as a static export.

Do not add a catch-all `/* /index.html 200` redirect. It can interfere with Next.js routes and server rendering.

For Supabase setup, see [docs/deployment.md](docs/deployment.md) and [docs/admin.md](docs/admin.md).

## Source and licensing

The upstream source code was adapted from [HasnainIrfan/3d-portfolio](https://github.com/HasnainIrfan/3d-portfolio). The upstream MIT `LICENSE` is retained. The original creator's personal content and separately licensed demo assets are not part of Ryzent's branding; see [NOTICE](NOTICE) for the remaining attribution boundary.

Ryzent-specific name, copy, page design, geometry and product presentation in this repository are maintained for the Ryzent project.
