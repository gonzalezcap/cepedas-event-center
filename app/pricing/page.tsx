import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Packages & Pricing | Tulsa Event Venue Rental",
  description: "Event venue rental packages and pricing at Cepedas Event Center in Tulsa, OK. Request a custom quote for your wedding, quinceañera, or celebration.",
};

const TIERS = [
  { name: "Half-Day", price: "$—", note: "Up to X hours", features: ["Space rental", "Tables & chairs (TBD)", "Setup window", "Parking"] },
  { name: "Full-Day", price: "$—", note: "Up to X hours", features: ["Everything in Half-Day", "Extended hours", "Prep suite access", "Cleanup included"], highlight: true },
  { name: "Custom / Premium", price: "Quote", note: "Tailored to your event", features: ["Full venue", "Vendor coordination", "Add-ons & upgrades", "Priority dates"] },
];

export default function PricingPage() {
  return (
    <>
      <PageHero title="Packages & Pricing" subtitle="Transparent options to fit your event and budget." photo="Pricing hero — elegant table setting" />
      <section className="max-w-content mx-auto px-5 py-16">
        <p className="text-center text-ink/60 text-sm mb-10">Pricing structure is placeholder — final tiers & numbers per the Business Architect blueprint.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {TIERS.map((t) => (
            <Reveal key={t.name}>
              <div className={`rounded-2xl border p-7 h-full bg-white ${t.highlight ? "ring-2 ring-accent" : ""}`}>
                {t.highlight && <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-2">Most Popular</p>}
                <h3 className="text-xl font-bold">{t.name}</h3>
                <p className="text-3xl font-bold mt-2">{t.price}</p>
                <p className="text-ink/50 text-sm">{t.note}</p>
                <ul className="mt-5 space-y-2 text-sm text-ink/75">
                  {t.features.map((f) => <li key={f} className="flex gap-2"><span className="text-accent">✓</span>{f}</li>)}
                </ul>
                <Link href="/inquiry" className="block text-center mt-6 bg-accent text-primary font-semibold px-5 py-2.5 rounded-full hover:opacity-90">Request Quote</Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
