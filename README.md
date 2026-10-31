# Ryzent — Engineer the Unexpected

Ryzent is an independent software studio exploring thoughtful digital products across intelligent assistants, mobile-first software, interactive web experiences and original games.

The studio is product-led: build a working idea, test it in real use, refine the details, and give each product a clear identity of its own.

**Live site:** https://ryzent.netlify.app/

## Products

The public showcase currently focuses on three Ryzent projects. All are presented transparently as works in development; repository links are the source of truth for implementation status.

| Product | What it is | Repository |
| --- | --- | --- |
| **Theo** | An Android-first personal AI assistant exploring conversational help, useful context and a more natural assistant experience. | [Theo-AI-mobile](https://github.com/Kentaakakashi/Theo-AI-mobile) |
| **Ryu** | A gamified fitness experience built around personal goals, workout planning and progression. | [Ryu-Workout](https://github.com/Kentaakakashi/Ryu-Workout) |
| **The God Who Forgot** | A 2D pixel-art, story-led RPG focused on exploration and world discovery rather than combat. | [The-God-Who-Forgot](https://github.com/Kentaakakashi/The-God-Who-Forgot) |

Private projects are intentionally not listed in this public showcase.

## Focus areas

- **Intelligent assistants:** conversational interfaces, useful context and AI-powered product experiences.
- **Mobile-first products:** Android-oriented workflows, thoughtful onboarding and practical device-aware interaction.
- **Interactive digital experiences:** expressive web interfaces, motion, Three.js and real-time visual experiments.
- **Games and playful systems:** narrative worlds, exploration, progression and gamified experiences.

These are the studio's areas of exploration, not a claim of a large agency team or a catalogue of contracted client work.

## Website technology

- Next.js 16 App Router
- React 19 and TypeScript
- Tailwind CSS v4
- Three.js and React Three Fiber
- Motion
- Supabase integration for contact submissions and the private admin inbox

The site retains useful engineering from its original portfolio-template codebase while its public content is being transformed into the Ryzent studio identity.

## Run locally

Requires Node.js 20.9 or later.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Production build:

```bash
npm run build
npm run start
```

Lint:

```bash
npm run lint
```

## Environment configuration

The public site can render without environment variables. Supabase is required for the contact form and private admin inbox.

Create `.env.local` from `.env.example` and set:

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon/public key; access is controlled by RLS |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Optional Search Console verification token |

Run the SQL migration at `supabase/migrations/0001_init.sql` in the Supabase SQL editor before enabling contact submissions. Review the deployment and admin documentation in `docs/` before exposing the admin route.

The site's current canonical URL is configured in `constants/seo-constants.ts`. Update it when moving from the Netlify domain to an owned domain.

## Repository structure

- `app/` — Next.js routes, API handlers and global styles
- `components/` — studio sections, interactive UI and 3D scenes
- `constants/` — public studio copy, product data, navigation and metadata
- `hooks/`, `helpers/`, `animations/` — shared behavior and utilities
- `lib/` and `supabase/` — backend integration and database setup
- `public/` — static assets and the astronaut model used by the hero scene

## Upstream code and licensing

This repository began from the portfolio template by [Hasnain Irfan](https://github.com/HasnainIrfan/3d-portfolio). The upstream source code is MIT-licensed; see [LICENSE](LICENSE). The original personal portfolio copy, résumé, client work, screenshots and third-party artwork were not automatically covered by that code license.

Ryzent's public content is being replaced with studio-owned descriptions and projects. Third-party assets—including the astronaut model and icon artwork—may have separate licenses and attribution requirements. See [NOTICE](NOTICE) and verify an asset's license before reusing or redistributing it.

## Brand

**Ryzent**  
**ENGINEER THE UNEXPECTED.**

The intended brand direction is futuristic, exploratory and precise: deep-space foundations, restrained light, and expressive technical details. Brand colors and assets should be kept consistent as the site evolves.