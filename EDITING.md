# How to Edit Content & Swap Photos — Cepedas Event Center

A quick guide for non-developers (and the next dev). All edits are made in the GitHub repo;
Vercel auto-deploys on every commit to `main`.

## 1. Change contact info, hours, address, ZIP, social
Open **`lib/site.ts`** — this is the single source of truth (NAP). Edit the values and commit.
It updates the header, footer, schema.org markup, contact page, and map automatically.
> Don't forget to replace `[CONFIRM ZIP]` once the ZIP is confirmed.

## 2. Change brand colors & fonts
Open **`app/globals.css`** → the `:root` block. Update:
- `--color-primary`, `--color-secondary`, `--color-accent`
- `--font-heading`, `--font-body`
The whole site re-themes from these variables. Add the real logo to `public/` and swap the
text wordmark in `components/Nav.tsx` and `components/Footer.tsx`.

## 3. Swap a placeholder photo for a real one
Every gray block is a `<PhotoPlaceholder label="..." />`. To replace one:
1. Upload the image to `public/images/` (e.g. `public/images/hero.jpg`).
2. Replace the component with Next's optimized image, keeping the same spot:
   ```tsx
   import Image from "next/image";
   <Image src="/images/hero.jpg" alt="Main hall set for a wedding" width={1600} height={1067} className="w-full h-full object-cover" />
   ```
3. Commit. Each placeholder's `label` text tells you exactly which shot goes there.

## 4. Edit page text
Each page is a file under **`app/`** (e.g. `app/about/page.tsx`). Edit the text between the tags.
SEO title/description live in the `export const metadata` block at the top of each page.

## 5. Instagram feed
Open **`components/InstagramFeed.tsx`**. Once `@cepedasec` is live, paste a Behold (behold.so)
or SnapWidget embed in place of the fallback grid. Confirm the handle in `lib/site.ts`.

## 6. Inquiry form delivery
Submissions save to the Supabase `inquiries` table and (if `RESEND_API_KEY` is set) email
`info@cepedasec.com`. Set env vars in Vercel → Settings → Environment Variables (see `.env.example`).

## 7. Going live on cepedasec.com
In Vercel → Project → Settings → Domains, add `cepedasec.com` and `www.cepedasec.com`.
Vercel shows the exact DNS records. In **Squarespace DNS**, add:
- Apex `@`: **A record → 76.76.21.21**
- `www`: **CNAME → cname.vercel-dns.com**
Wait for propagation; Vercel issues SSL automatically.
