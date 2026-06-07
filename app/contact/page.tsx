import PageHero from "@/components/PageHero";
import MapEmbed from "@/components/MapEmbed";
import InquiryForm from "@/components/InquiryForm";
import { SITE } from "@/lib/site";

export const metadata = {
  title: "Contact | Cepedas Event Center Tulsa",
  description: "Contact Cepedas Event Center in Tulsa, OK. Call 918-830-3692 or email info@cepedasec.com. Find directions and book a tour.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact Us" subtitle="We'd love to hear about your event." photo="Contact hero — venue exterior / signage" />
      <section className="max-w-content mx-auto px-5 py-16 grid lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold">Get in touch</h2>
            <address className="not-italic text-ink/75 mt-4 space-y-2">
              <p><strong>Address:</strong> {SITE.address.full}</p>
              <p><strong>Phone:</strong> <a href={SITE.phoneHref} className="text-primary hover:text-accent">{SITE.phone}</a></p>
              <p><strong>Email:</strong> <a href={SITE.emailHref} className="text-primary hover:text-accent">{SITE.email}</a></p>
              <p><strong>Hours:</strong> {SITE.hours}</p>
              <p><strong>Instagram:</strong> <a href={SITE.instagramUrl} className="text-primary hover:text-accent">{SITE.instagram}</a></p>
            </address>
          </div>
          <MapEmbed />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Send us a message</h2>
          <InquiryForm />
        </div>
      </section>
    </>
  );
}
