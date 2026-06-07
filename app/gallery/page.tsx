import PageHero from "@/components/PageHero";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata = {
  title: "Gallery | Cepedas Event Center Tulsa",
  description: "Browse photos of events at Cepedas Event Center in Tulsa, OK — weddings, quinceañeras, receptions, corporate events and more.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero title="Gallery" subtitle="A look inside our space and the events we host." photo="Gallery hero — best signature shot" />
      <section className="max-w-content mx-auto px-5 py-16">
        <p className="text-center text-ink/60 text-sm mb-8">Photos shown are placeholders, to be replaced after the upcoming photo shoot.</p>
        <GalleryGrid />
      </section>
    </>
  );
}
