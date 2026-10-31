# Contributing

Ryzent is an independent software studio site and an evolving collection of product experiments. Changes should strengthen the studio identity without sacrificing usability or maintainability.

## In scope

- Responsive layout and accessibility fixes.
- Performance improvements, especially on mid-range Android devices.
- Motion, SVG and 3D components with accessible fallbacks.
- Product information that is accurate and approved for public display.
- Documentation, Netlify and Supabase integration fixes.

## Development

Requires Node.js 20.9+; the project is pinned to Node 22.

```bash
npm ci
npm run dev
```

Before merging:

```bash
npm run lint
npm run build
```

The repository CI workflow runs both commands on pushes and pull requests to `main`.

## Code conventions

- TypeScript strict; keep shared contracts in the relevant file under `types/`.
- Keep content out of low-level presentational components where practical.
- Tailwind CSS v4 is CSS-first; put shared color tokens in `app/globals.css`.
- Use `"use client"` only for components that need state, effects or browser APIs.
- Preserve server rendering for primary content and keep WebGL work isolated.
- Respect `prefers-reduced-motion`; never make hover the only way to access an action.
- Avoid adding a dependency when the current stack already solves the problem.

## Security and licensing

Never commit `.env` files, administrator passwords, Supabase service-role keys, SMTP credentials or webhook secrets. The public Supabase anon key is designed to be shipped to the browser, but row-level security must remain the actual access boundary.

The upstream MIT `LICENSE` is retained. That licence does not automatically cover third-party images, models, logos, fonts or trademarks. Check asset licences and preserve the relevant attribution before introducing external assets.
