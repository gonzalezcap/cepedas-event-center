import Link from "next/link";
import PageHero from "@/components/PageHero";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Our Spaces | Tulsa Event Venue Floor Plans",
  description: "Tour the flexible event spaces at Cepedas Event Center in Tulsa, OK — main hall, outdoor area, and prep suite. Capacity details available on request.",
};

const SPACES = [
  { name: "Main Event Hall", desc: "Our open, light-filled main hall — the heart of every celebration. Configurable for ceremonies, banquets, and dance floors.", photo: "Main hall — full wide angle" },
  { name: "Outdoor Area", desc: "An open-air space ideal for ceremonies, cocktail hours, and photos.", photo: "Outdoor area — golden hour" },
  { name: "Prep / Bridal Suite", desc: "A private space for the guest of honor and party to get ready.", photo: "Prep suite — interior" },
];

export default function SpacesPage() {
  return (
    <>
      <PageHero title="Our Spaces" subtitle="Flexible, open, and ready for your vision." photo="Our Spaces — hero, main hall set for an event" />
      <section className="max-w-content mx-auto px-5 py-16 space-y-16">
        {SPACES.map((s, i) => (
          <Reveal key={s.name}>
            <div className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 ? "md:[direction:rtl]" : ""}`}>
              <div className="[direction:ltr]"><PhotoPlaceholder label={s.photo} aspect="aspect-[4/3]" className="rounded-2xl overflow-hidden" /></div>
              <div className="[direction:ltr]">
                <h2 className="text-2xl md:text-3xl font-bold">{s.name}</h2>
                <p className="text-ink/70 mt-3">{s.desc}</p>
                <p className="text-ink/50 text-sm mt-3">Capacity: TBD (seated / standing) — per blueprint.</p>
              </div>
            </div>
          </Reveal>
        ))}
        <div className="text-center">
          <Link href="/inquiry" className="inline-block bg-accent text-primary font-semibold px-7 py-3 rounded-full hover:opacity-90">Book a Tour</Link>
        </div>
      </section>
    </>
  );
}
