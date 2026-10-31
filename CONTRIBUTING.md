# Contributing to Ryzent

Ryzent is an independent software studio exploring intelligent assistants, mobile-first products, interactive digital experiences and original games. This repository contains the studio's public website.

Issues and pull requests are welcome for focused improvements that fit the current product and visual direction.

## What's in scope

**Welcome**
- Bug fixes: layout breaks, WebGL errors, accessibility problems and broken links.
- Performance improvements, especially for the astronaut/GridScan hero and low-end mobile devices.
- Improvements to responsive behavior and device compatibility.
- Documentation corrections and setup improvements.
- Security fixes for contact submissions, admin access and Supabase policies.
- Accurate updates to public descriptions of Ryzent products.

**Out of scope unless explicitly discussed**
- Replacing the Ryzent identity with the upstream personal portfolio identity.
- Adding fictional client work, testimonials, employment history, résumé details or achievement metrics.
- Publishing private projects or private personal information.
- Large visual redesigns that replace the current hero, layout or interactions without an agreed direction.
- Rewrites into another framework or styling system.
- New dependencies that duplicate existing functionality.

## Getting started

Requires Node.js 20.9 or later.

    npm install
    npm run dev

The public website can run without Supabase variables. Supabase is needed for stored contact submissions, the private admin inbox and optional notification emails.

Before submitting a change:

    npm run lint
    npm run build

A successful build and lint are minimum checks. Test any visible change on a real phone-sized viewport as well as desktop. Test the 3D hero on a device with WebGL support, and confirm reduced-motion behavior remains usable.

## Project structure

- app/: Next.js routes, metadata, API handlers and global styles.
- components/: studio sections, interactive UI and 3D scenes.
- constants/: studio copy, product data, navigation and metadata.
- hooks/, helpers/, animations/: shared behavior and utilities.
- lib/ and supabase/: backend integration, schema and Edge Function.
- public/: static assets, product artwork and the astronaut model.

## Conventions

- TypeScript strict. Avoid any unless there is a documented reason.
- Keep public copy and product data in constants/ rather than scattering it through components.
- Distinguish real implementation from planned features in all product descriptions.
- Keep components typed and the server/client boundary as low as practical.
- Tailwind CSS v4 is configured CSS-first in app/globals.css.
- Comments should explain non-obvious decisions and the bugs they prevent.
- Keep changes focused; do not modify unrelated sections while fixing a specific issue.
- Never commit .env files, admin credentials, SMTP passwords, service-role keys or webhook secrets.

## Working on the 3D

Read the relevant component and hook before changing the globe, astronaut or GridScan. The astronaut loader expects the model at public/models/astronaut.glb and the component relies on model node names. Preserve the GLB license and attribution.

GridScan has an optional webcam/face-tracking implementation, but the current hero does not enable it. Do not switch it on without explicit user-facing permission and a clear explanation.

Test 3D changes on a real mid-range Android phone as well as desktop. Respect reduced-motion preferences and retain a usable fallback when WebGL is unavailable.

## Security

Do not put credentials in GitHub. Do not expose Supabase service-role keys or SMTP secrets in client-side code. Contact email delivery must target a mailbox controlled by Ryzent through the explicit CONTACT_RECIPIENT_EMAIL secret. The Edge Function must keep its webhook secret enabled.

If an exploitable issue is found, report it privately to the repository owner rather than publishing exploit details in a public issue.
