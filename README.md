# NOVATEK Website

Marketing site for **NOVATEK&reg; LLC** - a South African AI and data consultancy. Built with Vite, React, TypeScript, Tailwind CSS, and Framer Motion. Deploys to Cloudflare Workers (static assets) via GitHub.

## Stack

| Layer | Tool |
|---|---|
| Build | Vite 5 + SWC |
| UI | React 18 + TypeScript 5 |
| Routing | react-router-dom 6 |
| Styling | Tailwind CSS 3 (brand tokens in `tailwind.config.ts`) |
| Motion | Framer Motion 11 |
| Icons | lucide-react |
| Hosting | Cloudflare Workers static assets (static SPA) |

## Local development

> [!IMPORTANT]
> **OneDrive note** - if this folder lives inside OneDrive, exclude `node_modules/` from sync. OneDrive's file-locking can corrupt large dependency trees. Either move the project outside OneDrive, or right-click `node_modules` after install → "Free up space" / "Always keep on this device" → unselect, and turn off sync for that folder.

```bash
# 1. Install dependencies (first time only)
npm install

# 2. Start the dev server
npm run dev               # → http://localhost:5173

# 3. Production build (also typechecks)
npm run build

# 4. Preview the production build
npm run preview           # → http://localhost:4173

# 5. Typecheck only
npm run typecheck
```

## Project layout

```
novatek-website/
├── public/                    # Static assets served as-is
│   ├── favicon.svg            # Brand favicon (gradient N-mark)
│   ├── _headers               # Security + cache headers
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/            # Layout shell + reusable UI
│   │   ├── Logo.tsx
│   │   ├── Nav.tsx
│   │   ├── Footer.tsx
│   │   └── ui/                # Primitives (Button, Stat, Section, ...)
│   ├── sections/              # Home page composition blocks
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── BusinessBrain.tsx
│   │   ├── CaseStudies.tsx
│   │   ├── Team.tsx
│   │   ├── Compliance.tsx
│   │   ├── CtaStrip.tsx
│   │   ├── Contact.tsx
│   │   ├── Marquee.tsx
│   │   └── visuals/
│   │       └── BusinessBrainOrbit.tsx
│   ├── pages/
│   │   ├── Home.tsx           # Single-page scroll narrative
│   │   └── BusinessBrainPage.tsx  # /businessbrain deep-dive
│   ├── data/
│   │   └── site.ts            # Single source of truth for site copy
│   ├── lib/
│   │   ├── motion.ts          # Easing curves + reusable variants
│   │   └── utils.ts           # cn() helper, scroll utilities
│   ├── App.tsx                # Router shell
│   ├── main.tsx               # Entry point
│   └── index.css              # Tailwind + base + components layers
├── tailwind.config.ts         # Brand palette (navy/cobalt/charcoal/slate ramps)
├── vite.config.ts
├── tsconfig.json + .app/.node
└── package.json
```

## Editing content

All site copy, stats, services, case studies, and capabilities live in **`src/data/site.ts`**. Edit there - not in section components. Stats and case-study metrics are validated against `PROJECT.md` v1.0 and the BusinessBrain Feasibility Review v1.4 (NVT-BB-CFR-001).

## Brand discipline

- **Colors:** `tailwind.config.ts` mirrors `brand.css`. Never use `#000` - use `navy.500` or `charcoal`. Cobalt is an accent, not a fill.
- **Logo:** `<Logo />` renders the SVG N-mark + wordmark with `gradient | navy | cobalt | white` variants. The `™ ®` symbol is included automatically.
- **Motion:** Restrained - tween + `ease.out` only. No springs. See `src/lib/motion.ts`.
- **Accessibility:** WCAG 2.1 AA. Don't remove focus rings; respect `prefers-reduced-motion`.

## Deploying to Cloudflare Workers

Deployment is driven by `wrangler.jsonc`, which declares this as an **assets-only Worker**: there is no `main` entry point, so Cloudflare serves `./dist` directly.

`not_found_handling: "single-page-application"` makes any unmatched path serve `index.html` with a `200`, so React Router can take over. This replaces the Pages-era `/* /index.html 200` rule that used to live in `public/_redirects`.

`public/_headers` ships security + cache defaults; Vite copies it into `dist/`, where Workers reads it.

### One-time setup

1. Push this repo to GitHub (see *Git setup* below).
2. In the Cloudflare dashboard → **Workers & Pages** → **Create** → **Workers** → **Connect to Git**.
3. Select the `novatek-website` repository.
4. **Build settings:**
   - **Build command:** `npm run build`
   - **Deploy command:** `npx wrangler deploy` (production branch) / `npx wrangler versions upload` (preview branches)
   - **Root directory:** `/` (default)

The `name` field in `wrangler.jsonc` must match the Worker in your dashboard, or uploads will target the wrong Worker.

### Validating deploy config locally

```bash
npx wrangler deploy --dry-run    # validates wrangler.jsonc + resolves ./dist, uploads nothing
```

### Custom domain

In the Worker → **Settings** → **Domains & Routes** → add `novatekllc.co.za`. Cloudflare handles DNS automatically if your domain is on Cloudflare; otherwise add the CNAME they show you.

## Git setup

The first commit is created locally without pushing. To publish:

```bash
# Option A - with the GitHub CLI
gh auth login                                     # if you haven't already
gh repo create novatek-website --public --source . --remote origin --push

# Option B - manually
# 1) Create an empty repo at https://github.com/new (DON'T initialize with README)
# 2) Then:
git remote add origin git@github.com:YOUR_USERNAME/novatek-website.git
git branch -M main
git push -u origin main
```

## Lineage

This site supersedes the prior pure-HTML/CSS/JS draft (v1.2) and the print-first company-profile + 8-poster suite that lived under `Company Profile and Posters/`. Those artefacts remain in the parent folder as historical reference. The brand tokens and content data carry forward; the framework choice (React + Framer Motion) does not.

---

© NOVATEK LLC (Pty) Ltd. B-BBEE Level 1 · POPIA compliant · Data stored in South Africa.
