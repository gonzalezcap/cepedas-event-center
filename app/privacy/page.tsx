import PageHero from "@/components/PageHero";
import { SITE } from "@/lib/site";

export const metadata = {
  title: "Privacy Policy | Cepedas Event Center",
  description: "Privacy Policy for Cepedas Event Center describing how we collect and use information submitted through our website forms.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" photo="Privacy — neutral venue detail" />
      <section className="max-w-3xl mx-auto px-5 py-16 prose-sm text-ink/80 space-y-4 text-sm leading-relaxed">
        <p><em>Last updated: {new Date().getFullYear()}. This is a starter policy — have it reviewed before launch.</em></p>
        <p>Cepedas Event Center (&quot;we&quot;, &quot;us&quot;) operates {SITE.url}. This policy explains what information we collect and how we use it.</p>
        <h2 className="font-bold text-base">Information we collect</h2>
        <p>When you submit our tour/inquiry or contact forms, we collect the information you provide: name, email, phone, event type, event date, guest count, and message.</p>
        <h2 className="font-bold text-base">How we use it</h2>
        <p>We use your information solely to respond to your inquiry, schedule tours, and provide event services. We do not sell your personal information.</p>
        <h2 className="font-bold text-base">Storage</h2>
        <p>Submissions are stored securely and emailed to {SITE.email}. We retain them only as long as needed to serve you.</p>
        <h2 className="font-bold text-base">Your choices</h2>
        <p>To request access to or deletion of your information, email <a className="text-accent" href={SITE.emailHref}>{SITE.email}</a>.</p>
        <h2 className="font-bold text-base">Contact</h2>
        <p>{SITE.name}, {SITE.address.full} · {SITE.phone} · {SITE.email}</p>
      </section>
    </>
  );
}
