# Sonrat Web Page — AI Voice Agent Platform

A world-class, production-quality website for **SonRat AI** — a next-generation AI voice agent company that builds autonomous agents for **customer support** and **sales**.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Animations:** CSS keyframes + Tailwind transitions

## Features

- Fully responsive (mobile, tablet, desktop)
- Dark graphite aesthetic with glassmorphism
- Interactive AI agent simulation (HeroVisual)
- Live call execution trace (AgentInAction)
- Mega-dropdown navigation with mobile drawer
- Modals: Agent Builder & Contact Sales
- 16 detailed page sections

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## SEO configuration

The site includes a canonical URL, Open Graph/Twitter preview image, robots rules,
sitemap, web manifest, and Organization/WebSite structured data. Before deployment,
set `NEXT_PUBLIC_SITE_URL` to the final HTTPS domain (for example,
`https://www.yourdomain.com`) in your hosting environment. This prevents search
engines from indexing the temporary Hostinger URL as the canonical site.

## Project Structure

```
app/           → Next.js App Router pages & layout
components/    → UI, layout, section, interactive components
data/          → Mock data for navigation, integrations, etc.
lib/           → Utility functions
types/         → TypeScript type definitions
```

## Company

> "AI agents that don't just talk. They understand, decide, and act."

SonRat AI builds enterprise-grade voice agents with sub-240ms latency, 40+ native languages, and direct API integration into your business stack.
