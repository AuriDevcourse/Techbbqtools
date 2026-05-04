# TechBBQ Tools

Internal launcher for tools built for the TechBBQ team. The dashboard itself doesn't host the tools — each card opens the tool's own deployment in a new tab.

Stack: Next.js 16 (App Router) · TypeScript · Tailwind v4 · Auth.js v5 (Google).

## v1 tiles

| Tool | URL |
|---|---|
| Visual Generator | https://tbbqvisualgen.vercel.app/ |
| Email Responder | http://emailresponder.online/ |
| Email Signature | https://auridevcourse.github.io/signaturegenerator/ |
| Components | https://tbbq.vercel.app/ |

Auth: gated to `@techbbq.org` Google Workspace accounts. Anyone signing in from another domain is bounced to `/unauthorized`.

## Local setup

```bash
npm install
cp .env.local.example .env.local
# Fill in AUTH_GOOGLE_ID, AUTH_GOOGLE_SECRET
npm run dev
```

Open http://localhost:3000 → sign in with your `@techbbq.org` account.

## Adding a new tile

Edit `src/lib/tools.ts` — add an entry with `id`, `name`, `tagline`, `description`, `href` (the deployed tool URL), `bg`, `fg`, `cta`. Optional: build a hero illustration at `src/components/heroes/<Id>Hero.tsx` and register it in `src/components/ToolCard.tsx`.

## Project layout

```
src/
  app/
    page.tsx                 # dashboard grid (the launcher)
    login/                   # sign-in screen
    unauthorized/            # bounce page for non-techbbq.org users
    api/auth/[...nextauth]/  # Auth.js handlers
  components/
    AppShell.tsx             # header + footer (server, reads session)
    ToolCard.tsx             # squircle dashboard tile, links external
    heroes/                  # per-tool hero illustrations
  lib/
    tools.ts                 # single source of truth for the launcher
  auth.ts                    # NextAuth config + @techbbq.org domain gate
  proxy.ts                   # auth-gated route handler
```

## Deploy

Recommended: Hetzner systemd + nginx (same recipe as `quizmo.auridev.com`). Domain placeholder: `tools.auridev.com`.

When deploying, create a second OAuth client in Google Cloud with the prod URLs, or add the prod URLs to the existing client.
