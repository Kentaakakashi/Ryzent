# Ryzent architecture

This repository keeps the upstream Next.js foundation while the public-facing experience is being rebuilt around Ryzent's studio identity.

## Main routes

```
app/
  layout.tsx              Root document, metadata, viewport and JSON-LD
  page.tsx                Public homepage route
  opengraph-image.tsx     Generated 1200×630 social preview
  sitemap.ts / robots.ts  Search-engine routes
  manifest.ts             PWA metadata
  admin/                  Optional protected enquiry inbox
  api/contact/            Optional Supabase contact endpoint

components/
  portfolio/home-page.tsx Ryzent public homepage composition
  seo/json-ld.tsx         Organization + WebSite structured data
  sections/               Retained upstream section implementations
  portfolio/              Reusable motion, visual and 3D primitives
  ui/                     Shared visual primitives

constants/                Content and site identity data
hooks/                    Scroll, pointer, in-view and deferred-3D hooks
helpers/                  Pure utility functions
animations/               Motion variants and springs
lib/                      Supabase and admin access helpers
supabase/                 SQL migration and notification function
public/assets/            Generic UI icons and technology marks
```

## Public render path

```
app/page.tsx
  └─ components/portfolio/home-page.tsx
       ├─ Brand header + anchor navigation
       ├─ Geometric SVG anomaly hero
       ├─ Product systems (Theo, Ryu, The God Who Forgot)
       ├─ Experiments panel
       ├─ Studio principles
       └─ Contact + footer
```

The homepage is a server component. Its hero geometry is inline SVG and CSS, not a mandatory WebGL canvas. This keeps the opening content light, avoids a GPU dependency for first paint, and makes the same visual language available on mobile. The original 3D, timeline, project and section components remain in the repository as reusable source, but are not mounted by the current homepage.

## Styling

Tailwind CSS v4 is imported in `app/globals.css`. The Ryzent palette is also declared as CSS custom properties so the bespoke artwork can use the same tokens:

- Void: `#070A12`
- Deep Space: `#0D1422`
- Orbit: `#28364D`
- Starlight: `#E9F1FF`
- Nebula Blue: `#B9D7FF`
- Dust: `#8FA2BE`
- Signal Teal: `#7DE3D0`

Keep motion purposeful and honour `prefers-reduced-motion`. Do not add a continuous animation loop for decoration when a CSS compositor animation or static fallback will do.

## Contact and admin

Supabase is optional. Without its public URL/key, the public site still renders and the private dashboard shows its setup state. When configured, the contact route writes to the Supabase table; `proxy.ts`, server-side checks and RLS protect the private inbox.

The SQL migration intentionally does not provision a default administrator. Create your own Auth user in the Supabase dashboard and grant access with `public.grant_admin(email)`. See [docs/admin.md](admin.md).

## Deployment

Netlify detects Next.js and applies its managed OpenNext runtime. The checked-in `netlify.toml` uses `npm run build`, publishes `.next`, and pins Node 22. Do not use static export or an SPA catch-all rewrite: App Router and server routes should remain under the Next.js runtime.
