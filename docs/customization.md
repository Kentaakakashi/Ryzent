# Customising Ryzent

The public page is deliberately composed as a studio site rather than a personal developer portfolio.

## 1. Site identity

- `components/portfolio/home-page.tsx` contains the public page composition and product copy.
- `constants/hero-constants.ts` supplies the shared organisation name and role for retained components.
- `constants/seo-constants.ts` controls the page title, description, canonical base URL, social preview and sitemap section metadata.
- `constants/social-constants.ts` contains the public GitHub link and optional contact email.

Keep the public copy factual. Mark unreleased projects as in development and do not invent client names, testimonials, user numbers or delivery metrics.

## 2. Product systems

The homepage currently highlights three public Ryzent repositories:

| Product | Repository | Public status |
| --- | --- | --- |
| Theo | [Theo-AI](https://github.com/Kentaakakashi/Theo-AI) | In development |
| Ryu | [Ryu-Workout](https://github.com/Kentaakakashi/Ryu-Workout) | In development |
| The God Who Forgot | [The-God-Who-Forgot](https://github.com/Kentaakakashi/The-God-Who-Forgot) | In development |

The matching typed project data also lives in `constants/projects-constants.ts` for retained project components. Private projects should not be added without an explicit decision to make them public.

## 3. Visual system

The palette is declared in `app/globals.css` and repeated as custom properties for the hand-authored visual elements:

| Token | Hex |
| --- | --- |
| Void | `#070A12` |
| Deep Space | `#0D1422` |
| Orbit | `#28364D` |
| Starlight | `#E9F1FF` |
| Nebula Blue | `#B9D7FF` |
| Dust | `#8FA2BE` |
| Signal Teal | `#7DE3D0` |

Avoid generic galaxy backgrounds, stock starfields and excessive glow. The current geometric anomaly is inline SVG; it can be replaced with a custom model or shader later, but the page must keep a useful static/mobile fallback.

## 4. Motion and mobile performance

The site is responsive from 320px. When adding interaction:
- Prefer transforms and opacity for motion.
- Keep touch targets usable and navigation reachable without hover.
- Respect `prefers-reduced-motion`.
- Defer heavy WebGL; do not mount it simply because a device supports it.
- Keep text and contact routes usable when animation or 3D fails.

## 5. Metadata and social cards

Set `NEXT_PUBLIC_SITE_URL` to the primary deployed URL. The generated OG asset is `app/opengraph-image.tsx`; its route is used by `constants/seo-constants.ts`. The title, description, robots and sitemap are defined in the SEO constants and App Router metadata.
