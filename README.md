# Cepedas Event Center — Marketing Website

Photo-forward marketing site for **Cepedas Event Center**, an open event venue in Tulsa, OK.
Built with **Next.js (App Router) + Tailwind CSS**, designed for **Vercel** deployment.

Visual spirit: clean, modern, lots of whitespace, full-bleed imagery, subtle scroll reveals.

## Status / Placeholders (swap when client assets arrive)
- **Branding kit** (logo, colors, fonts): wired as CSS variables in `app/globals.css` — `--color-primary/secondary/accent`, `--font-heading/body`. Update there once the kit lands.
- **Photos**: every image ships as a labeled gray placeholder block showing the shot description. Swap 1:1 after the photo shoot (see `EDITING.md`).
- **ZIP code**: address is `1444 S 193rd E Ave, Tulsa, OK [CONFIRM ZIP]`. Update `lib/site.ts` and the Google Map embed once confirmed.
- **Instagram**: handle `@cepedasec` (CONFIRM once live). Feed uses a graceful static fallback grid; plug in Behold/SnapWidget embed in `components/InstagramFeed.tsx`.
- **Final copy / SEO / pricing / capacity**: placeholder structure in place — replace with the Business Architect blueprint.

## Contact constants (single source: `lib/site.ts`)
- Phone: **918-830-3692** (click-to-call)
- Email: **info@cepedasec.com**
- Address: **1444 S 193rd E Ave, Tulsa, OK [CONFIRM ZIP]**

## Local dev
```bash
npm install
npm run dev
```

## Deploy
1. Import this repo into **Vercel**.
2. Set env vars (see `.env.example`): Supabase URL/anon key for the inquiry form, optional Resend key for email.
3. Deploy. Then add domain `cepedasec.com` in Vercel → Settings → Domains and follow the DNS records into Squarespace (apex A record + `www` CNAME). Verify SSL.

## Inquiry form
Submits to a Next.js Route Handler (`app/api/inquiry/route.ts`) that writes to a **Supabase** `inquiries` table and (optionally) emails `info@cepedasec.com` via Resend. Includes a honeypot field for spam protection and a success state.

See `EDITING.md` for the 1-page "how to edit content / swap photos" guide.
