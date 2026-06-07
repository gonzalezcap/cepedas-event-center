import PageHero from "@/components/PageHero";
import InquiryForm from "@/components/InquiryForm";
import { SITE } from "@/lib/site";

export const metadata = {
  title: "Book a Tour | Cepedas Event Center Tulsa",
  description: "Schedule a tour of Cepedas Event Center in Tulsa, OK. Tell us about your event and we'll be in touch within 1–2 business days.",
};

export default function InquiryPage() {
  return (
    <>
      <PageHero title="Book a Tour" subtitle="Tell us about your event — we'll get you on the calendar." photo="Inquiry hero — venue entrance / welcome" />
      <section className="max-w-content mx-auto px-5 py-16 grid lg:grid-cols-[1.4fr_1fr] gap-12">
        <InquiryForm />
        <aside className="space-y-6">
          <div className="bg-white border rounded-2xl p-6">
            <h3 className="font-semibold">Prefer to call?</h3>
            <p className="text-ink/70 text-sm mt-2">We're happy to talk through your event.</p>
            <a href={SITE.phoneHref} className="inline-block mt-3 text-lg font-bold text-primary hover:text-accent">{SITE.phone}</a>
          </div>
          <div className="bg-white border rounded-2xl p-6 text-sm text-ink/75 space-y-2">
            <h3 className="font-semibold text-ink">Visit / Contact</h3>
            <p>{SITE.address.full}</p>
            <p><a href={SITE.emailHref} className="hover:text-accent">{SITE.email}</a></p>
            <p>{SITE.hours}</p>
          </div>
        </aside>
      </section>
    </>
  );
}
