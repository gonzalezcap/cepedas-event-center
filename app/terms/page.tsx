import PageHero from "@/components/PageHero";
import { SITE } from "@/lib/site";

export const metadata = {
  title: "Terms of Use | Cepedas Event Center",
  description: "Terms of Use governing your use of the Cepedas Event Center website.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero title="Terms of Use" photo="Terms — neutral venue detail" />
      <section className="max-w-3xl mx-auto px-5 py-16 text-ink/80 space-y-4 text-sm leading-relaxed">
        <p><em>Last updated: {new Date().getFullYear()}. Starter terms — have them reviewed before launch.</em></p>
        <p>By accessing {SITE.url}, you agree to these Terms of Use.</p>
        <h2 className="font-bold text-base">Use of site</h2>
        <p>Content on this site is provided for general information about Cepedas Event Center and is subject to change. Pricing, capacity, and availability are confirmed at the time of booking.</p>
        <h2 className="font-bold text-base">Bookings</h2>
        <p>Submitting an inquiry does not constitute a reservation. Reservations are confirmed only by a signed agreement and required deposit.</p>
        <h2 className="font-bold text-base">Intellectual property</h2>
        <p>All site content, branding, and images are property of Cepedas Event Center unless otherwise noted.</p>
        <h2 className="font-bold text-base">Contact</h2>
        <p>{SITE.name} · {SITE.phone} · {SITE.email}</p>
      </section>
    </>
  );
}
