# Customising the Ryzent site

This repository is the public website for Ryzent, an independent software studio. The code began from an MIT-licensed portfolio template, but the public identity, product content and operational instructions now describe Ryzent. Do not restore the original author's personal details, clients, résumé or testimonials.

Work from the current Ryzent product direction. Keep the astronaut/GridScan hero and the existing interaction design intact unless a task explicitly calls for a visual change.

## 1. Studio identity and hero copy

The main brand and hero values are in constants/hero-constants.ts:

| Export | Purpose |
| --- | --- |
| HERO_NAME | Public studio name: Ryzent |
| HERO_ROLE | Studio descriptor |
| HERO_LOCATION | Public-facing broad location wording; do not replace with a precise private address |
| HERO_TAGLINE | Short studio description |
| FLIP_WORDS | Animated hero words; use words with similar visual lengths |
| STATS | Four capability labels shown in the About section; these are not customer or revenue metrics |

The hero component is components/portfolio/hero-text.tsx. It controls the phrase layout, animated word block and calls to action. Keep both desktop and mobile variants consistent.

The studio tagline is:

    ENGINEER THE UNEXPECTED.

## 2. Public product showcase

Public project data lives in constants/projects-constants.ts. The current public products are:

| Product | Repository | Status |
| --- | --- | --- |
| Theo | https://github.com/Kentaakakashi/Theo-AI-mobile | In development |
| Ryu | https://github.com/Kentaakakashi/Ryu-Workout | In development |
| The God Who Forgot | https://github.com/Kentaakakashi/The-God-Who-Forgot | In development |

Each entry uses the Project type in types/portfolio-types.ts. Keep the fields:

- id: stable numeric order
- title: product name
- category: concise product type and current status
- description: truthful one-paragraph summary
- subDescription: detail bullets; clearly distinguish implemented features from planned direction
- href: the public project/repository destination
- logo and image: optional assets; empty image values render Ryzent's branded in-development card
- accent: Tailwind gradient classes
- tags: short technology or discipline labels

Do not invent client engagements, shipped metrics, paid customers, testimonials or launch dates. Mark work as in development until its status is verified from the product repository.

TwoFold is a private project and must not be added to the public Ryzent site. The user's separate personal portfolio has a different repository and content plan; don't mix its projects into this site without explicit instruction.

## 3. Focus areas and studio log

The focus-area cards are in constants/services-constants.ts. These are Ryzent's areas of exploration, not a claim that the studio operates a large agency team or has a catalogue of paid client services.

The studio timeline is in constants/experience-constants.ts. It records the development of Ryzent and its products, not another person's employment history. Never copy job titles, employers, locations or career dates from the upstream template.

The public principles cards are in components/sections/testimonial.tsx. They replace the upstream template's client-review carousel. Do not add a named testimonial or five-star rating unless the exact statement and attribution are genuine and the person has approved its public use.

## 4. Tools and technology tags

The capability/tool chips live in constants/skills-constants.ts. Keep them grounded in technologies actually used or actively explored across the current Ryzent repositories. Do not treat a marquee chip as a claim that every project uses that technology.

## 5. Social links and contact

Social profiles are in constants/social-constants.ts. Only add public accounts controlled by Ryzent or explicitly approved for the public studio identity. The current public social link is the GitHub profile:

    https://github.com/Kentaakakashi

No public studio email has been provided. CONTACT_EMAIL is intentionally empty; do not populate it with the upstream author's email or invent an address.

The contact form posts to app/api/contact/route.ts. With Supabase configured, messages are stored in the private contact inbox. Without Supabase, the route returns a clear not-connected response that points to the public GitHub profile. It must not silently route messages to a previous template owner's mailbox.

Optional email notifications are sent by the Supabase Edge Function in supabase/functions/notify-contact/. Its recipient is the explicit CONTACT_RECIPIENT_EMAIL secret. The function no longer falls back to SMTP_USER. Configure it only with a mailbox controlled by Ryzent.

## 6. SEO, metadata and icons

The site metadata and canonical URL are centralised in constants/seo-constants.ts. The current canonical URL is:

    https://ryzent.netlify.app

Update that constant when the site moves to an owned domain. The site-wide metadata is used by app/layout.tsx; the home page metadata is in app/page.tsx; organization structured data is in components/seo/json-ld.tsx.

The old personal profile Open Graph image has been removed. Metadata intentionally does not reference an inherited preview image. Add a new Ryzent-owned 1200×630 image before enabling a large social preview again.

The generated icons are app/icon.tsx and app/apple-icon.tsx. Both should show the Ryzent mark, not the original author's initials.

The web app manifest is app/manifest.ts.

## 7. Visual system and hero assets

Tailwind v4 is configured in app/globals.css using the @theme block. The website currently uses its existing dark visual system, purple/pink/aqua accents and the newer GridScan/astronaut hero. The brand kit palette and any later colour-system changes should be introduced deliberately; don't recolour the whole site as a side effect of replacing content.

The astronaut model loads from:

    /models/astronaut.glb

The corresponding file must exist at public/models/astronaut.glb. It is third-party artwork; preserve required license attribution. Keep the model's node names and embedded animation structure intact if modifying the GLB, because components/portfolio/astronaut.tsx references them by name.

The GridScan implementation lives in components/ui/GridScan.jsx and components/ui/GridScan.css. Its optional webcam/face-tracking path is disabled by default in the current hero configuration. Do not enable camera access without explicit product intent and a visible user-facing explanation.

The parallax background assets are in public/assets/. Do not delete generic sky, mountain or planet assets without checking whether components/portfolio/parallax-background.tsx uses them.

## 8. Backend and environment

The public site uses Next.js 16, React 19, TypeScript and Tailwind CSS v4. Supabase is optional for the front end, but required for saved contact submissions and admin inbox access.

The Netlify production site is:

    https://ryzent.netlify.app/

See docs/deployment.md and docs/admin.md for the current Netlify and Supabase setup. Do not use the old Vercel-only deployment instructions from the upstream template.

Never commit credentials. Never expose Supabase service-role keys, SMTP passwords, webhook secrets or admin credentials to browser code or GitHub.

## 9. Before publishing content

- Confirm every product description matches the current product repository.
- Distinguish released features from plans and prototypes.
- Do not add TwoFold or other private relationship projects.
- Do not publish personal details or a private address.
- Do not invent client testimonials, work history, team size or performance metrics.
- Verify third-party images, icons, models and attribution.
- Run npm run lint and npm run build.
- Verify the Netlify production deploy and test the live page on desktop and Android.
