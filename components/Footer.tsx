import Link from "next/link";
import { NAV, EVENT_TYPES, SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-primary text-paper/90 mt-24">
      <div className="max-w-content mx-auto px-5 py-14 grid gap-10 md:grid-cols-4">
        <div>
          <div className="font-heading text-lg font-bold text-white">
            Cepedas <span className="text-accent">Event Center</span>
          </div>
          <p className="mt-3 text-sm text-paper/70">{SITE.tagline}</p>
          <p className="mt-4 text-sm">
            Serving {SITE.serviceAreas.join(", ")}.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.href}><Link href={n.href} className="hover:text-accent">{n.label}</Link></li>
            ))}
            <li><Link href="/inquiry" className="hover:text-accent">Book a Tour</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Events We Host</h4>
          <ul className="space-y-2 text-sm">
            {EVENT_TYPES.slice(0, 6).map((e) => (
              <li key={e.slug}><Link href={e.slug} className="hover:text-accent">{e.short}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Contact</h4>
          <address className="not-italic text-sm space-y-2">
            <p>{SITE.address.full}</p>
            <p><a href={SITE.phoneHref} className="hover:text-accent">📞 {SITE.phone}</a></p>
            <p><a href={SITE.emailHref} className="hover:text-accent">✉ {SITE.email}</a></p>
            <p>{SITE.hours}</p>
            <p><a href={SITE.instagramUrl} className="hover:text-accent">Instagram {SITE.instagram}</a></p>
          </address>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-content mx-auto px-5 py-5 flex flex-col sm:flex-row justify-between gap-2 text-xs text-paper/60">
          <p>© {new Date().getFullYear()} Cepedas Event Center. All rights reserved.</p>
          <p className="flex gap-4">
            <Link href="/privacy" className="hover:text-accent">Privacy</Link>
            <Link href="/terms" className="hover:text-accent">Terms</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
