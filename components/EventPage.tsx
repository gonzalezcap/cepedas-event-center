import Link from "next/link";
import PageHero from "./PageHero";
import PhotoPlaceholder from "./PhotoPlaceholder";
import Reveal from "./Reveal";

export default function EventPage({
  title,
  intro,
  bullets,
  gallery,
}: {
  title: string;
  intro: string;
  bullets: string[];
  gallery: string[];
}) {
  return (
    <>
      <PageHero title={title} subtitle={intro} photo={`${title} — hero shot at Cepedas Event Center`} />
      <section className="max-w-content mx-auto px-5 py-16 grid md:grid-cols-2 gap-12 items-start">
        <Reveal>
          <h2 className="text-2xl font-bold">Why host your {title.toLowerCase()} here</h2>
          <ul className="mt-5 space-y-3">
            {bullets.map((b) => (
              <li key={b} className="flex gap-3 text-ink/75"><span className="text-accent">◆</span>{b}</li>
            ))}
          </ul>
          <p className="text-ink/60 text-sm mt-6">Final copy, capacity & pricing per the Business Architect blueprint.</p>
          <Link href="/inquiry" className="inline-block mt-6 bg-accent text-primary font-semibold px-6 py-3 rounded-full hover:opacity-90">Book a Tour</Link>
        </Reveal>
        <Reveal>
          <PhotoPlaceholder label={`${title} — featured photo`} aspect="aspect-[4/3]" className="rounded-2xl overflow-hidden" />
        </Reveal>
      </section>
      <section className="max-w-content mx-auto px-5 pb-20">
        <h3 className="text-xl font-semibold mb-6">{title} at Cepedas</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {gallery.map((g) => <PhotoPlaceholder key={g} label={g} aspect="aspect-square" />)}
        </div>
      </section>
    </>
  );
}
