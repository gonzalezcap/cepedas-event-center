import Link from "next/link";
import PageHero from "@/components/PageHero";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import { EVENT_TYPES } from "@/lib/site";

export const metadata = {
  title: "Events We Host | Weddings, Quinceañeras, Corporate & More",
  description: "From weddings and quinceañeras to corporate events and banquets, Cepedas Event Center in Tulsa hosts every celebration. Explore event types.",
};

export default function EventsHub() {
  return (
    <>
      <PageHero title="Events We Host" subtitle="One versatile venue for every occasion." photo="Events hub — montage hero" />
      <section className="max-w-content mx-auto px-5 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {EVENT_TYPES.map((e) => (
            <Link key={e.slug} href={e.slug} className="group rounded-2xl overflow-hidden border hover:shadow-lg transition bg-white">
              <PhotoPlaceholder label={e.label} aspect="aspect-[4/3]" />
              <div className="p-5">
                <h3 className="text-lg font-semibold group-hover:text-accent">{e.label}</h3>
                <p className="text-ink/60 text-sm mt-1">Learn more →</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
