import Link from "next/link";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import Reveal from "@/components/Reveal";
import InstagramFeed from "@/components/InstagramFeed";
import MapEmbed from "@/components/MapEmbed";
import { EVENT_TYPES, SITE } from "@/lib/site";

export const metadata = {
  title: "Tulsa Event Venue for Weddings, Quinceañeras & More",
  description:
    "Cepedas Event Center is an open event venue in Tulsa, OK. Host weddings, quinceañeras, receptions, corporate events, banquets & celebrations. Book a tour today.",
};

export default function Home() {
  return (
    <>
      {/* HERO (full-bleed; supports looping video later) */}
      <section className="relative h-[88vh] min-h-[560px] flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <PhotoPlaceholder label="HERO — full-bleed venue interior, dramatic lighting, set for an event" aspect="h-full" className="h-full" />
          <div className="absolute inset-0 bg-primary/50" />
        </div>
        <div className="relative px-5 max-w-3xl">
          <p className="uppercase tracking-[0.3em] text-xs text-accent mb-4">Tulsa, Oklahoma</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Where Tulsa Celebrates Life&apos;s Biggest Moments
          </h1>
          <p className="mt-5 text-white/85 max-w-xl mx-auto">
            An open, versatile event space for weddings, quinceañeras, receptions, and every celebration in between.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/inquiry" className="bg-accent text-primary font-semibold px-7 py-3 rounded-full hover:opacity-90">Book a Tour</Link>
            <Link href="/gallery" className="border border-white/60 px-7 py-3 rounded-full hover:bg-white/10">View Gallery</Link>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-content mx-auto px-5 py-20 grid md:grid-cols-2 gap-12 items-center">
        <Reveal>
          <p className="text-accent font-semibold uppercase tracking-widest text-xs">Welcome</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">A blank canvas for unforgettable events</h2>
          <p className="text-ink/70 mt-4">
            Cepedas Event Center gives you a clean, open, fully customizable space in the heart of the Tulsa metro.
            Bring your vision, your vendors, and your guest list — we&apos;ll provide the perfect backdrop.
          </p>
          <p className="text-ink/70 mt-4">Proudly serving {SITE.serviceAreas.join(", ")}.</p>
          <Link href="/about" className="inline-block mt-6 text-primary font-semibold underline underline-offset-4 hover:text-accent">Learn about us →</Link>
        </Reveal>
        <Reveal>
          <PhotoPlaceholder label="Venue — open floor plan, natural light" aspect="aspect-[4/3]" className="rounded-2xl overflow-hidden" />
        </Reveal>
      </section>

      {/* SPACES TEASER */}
      <section className="bg-white py-20">
        <div className="max-w-content mx-auto px-5">
          <Reveal className="text-center mb-12">
            <p className="text-accent font-semibold uppercase tracking-widest text-xs">Our Spaces</p>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Flexible spaces, endless possibilities</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {["Main Event Hall", "Outdoor Area", "Bridal / Prep Suite"].map((s) => (
              <Reveal key={s}>
                <PhotoPlaceholder label={`${s} — wide shot`} aspect="aspect-[4/3]" className="rounded-2xl overflow-hidden" />
                <h3 className="text-xl font-semibold mt-4">{s}</h3>
                <p className="text-ink/60 text-sm mt-1">Capacity & details TBD per blueprint.</p>
              </Reveal>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/spaces" className="inline-block border border-primary/30 rounded-full px-6 py-2 text-sm hover:bg-primary hover:text-white transition">Explore Our Spaces</Link>
          </div>
        </div>
      </section>

      {/* EVENTS GRID */}
      <section className="max-w-content mx-auto px-5 py-20">
        <Reveal className="text-center mb-12">
          <p className="text-accent font-semibold uppercase tracking-widest text-xs">Events We Host</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">One venue. Every occasion.</h2>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {EVENT_TYPES.map((e) => (
            <Link key={e.slug} href={e.slug} className="group relative rounded-xl overflow-hidden">
              <PhotoPlaceholder label={e.short} aspect="aspect-square" />
              <span className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white font-semibold text-sm">{e.short}</span>
            </Link>
          ))}
        </div>
      </section>

      <InstagramFeed />

      {/* LOCATION */}
      <section className="bg-white py-20">
        <div className="max-w-content mx-auto px-5 grid md:grid-cols-2 gap-10 items-center">
          <Reveal>
            <p className="text-accent font-semibold uppercase tracking-widest text-xs">Find Us</p>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Conveniently located in the Tulsa metro</h2>
            <address className="not-italic text-ink/70 mt-4 space-y-1">
              <p>{SITE.address.full}</p>
              <p><a href={SITE.phoneHref} className="text-primary hover:text-accent">📞 {SITE.phone}</a></p>
              <p><a href={SITE.emailHref} className="text-primary hover:text-accent">✉ {SITE.email}</a></p>
            </address>
            <Link href="/inquiry" className="inline-block mt-6 bg-accent text-primary font-semibold px-6 py-3 rounded-full hover:opacity-90">Book a Tour</Link>
          </Reveal>
          <Reveal><MapEmbed /></Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 text-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <PhotoPlaceholder label="Wide celebratory crowd shot — full bleed CTA background" aspect="h-full" className="h-full" />
          <div className="absolute inset-0 bg-primary/70" />
        </div>
        <div className="relative max-w-2xl mx-auto px-5">
          <h2 className="text-3xl md:text-4xl font-bold">Let&apos;s plan your event</h2>
          <p className="mt-3 text-white/85">Schedule a tour and see the space for yourself.</p>
          <Link href="/inquiry" className="inline-block mt-7 bg-accent text-primary font-semibold px-8 py-3 rounded-full hover:opacity-90">Book a Tour</Link>
        </div>
      </section>
    </>
  );
}
