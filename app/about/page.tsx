import Link from "next/link";
import PageHero from "@/components/PageHero";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import Reveal from "@/components/Reveal";
import { SITE } from "@/lib/site";

export const metadata = {
  title: "About Us | Cepedas Event Center Tulsa",
  description: "Learn about Cepedas Event Center, a family-driven open event venue serving Tulsa, Broken Arrow, Owasso and Catoosa, Oklahoma.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero title="About Cepedas Event Center" subtitle="A family-driven venue built for the Tulsa community." photo="About hero — owners / venue exterior" />
      <section className="max-w-content mx-auto px-5 py-16 grid md:grid-cols-2 gap-12 items-center">
        <Reveal>
          <h2 className="text-3xl font-bold">Our story</h2>
          <p className="text-ink/70 mt-4">[Placeholder — final About copy per the Business Architect blueprint.] Cepedas Event Center was created to give Tulsa-area families and businesses a beautiful, flexible space to gather and celebrate.</p>
          <p className="text-ink/70 mt-4">We proudly serve {SITE.serviceAreas.join(", ")} and the surrounding communities.</p>
          <Link href="/inquiry" className="inline-block mt-6 bg-accent text-primary font-semibold px-6 py-3 rounded-full hover:opacity-90">Book a Tour</Link>
        </Reveal>
        <Reveal><PhotoPlaceholder label="About — venue / team portrait" aspect="aspect-[4/3]" className="rounded-2xl overflow-hidden" /></Reveal>
      </section>
    </>
  );
}
