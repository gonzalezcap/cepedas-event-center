import PageHero from "@/components/PageHero";

export const metadata = {
  title: "FAQ | Cepedas Event Center Tulsa",
  description: "Frequently asked questions about renting Cepedas Event Center in Tulsa, OK — capacity, catering, parking, alcohol policy, deposits and more.",
};

const FAQS = [
  { q: "Where are you located?", a: "We're at 1444 S 193rd E Ave, Tulsa, OK [CONFIRM ZIP], serving the greater Tulsa metro." },
  { q: "What is your capacity?", a: "Capacity details are coming soon (seated and standing). Contact us for current numbers." },
  { q: "Can I bring my own caterer and vendors?", a: "[Placeholder policy — per blueprint.] We aim to be flexible with outside vendors." },
  { q: "Is parking available?", a: "[Placeholder — parking details per blueprint.]" },
  { q: "Do you allow alcohol?", a: "[Placeholder alcohol/bartending policy — per blueprint.]" },
  { q: "How do I reserve a date?", a: "Book a tour through our inquiry form or call 918-830-3692. A deposit secures your date." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FAQPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <PageHero title="Frequently Asked Questions" subtitle="Everything you need to know before you book." photo="FAQ hero — venue detail" />
      <section className="max-w-3xl mx-auto px-5 py-16 space-y-4">
        {FAQS.map((f) => (
          <details key={f.q} className="bg-white border rounded-xl p-5 group">
            <summary className="font-semibold cursor-pointer list-none flex justify-between items-center">
              {f.q}<span className="text-accent group-open:rotate-45 transition">＋</span>
            </summary>
            <p className="text-ink/70 mt-3 text-sm">{f.a}</p>
          </details>
        ))}
      </section>
    </>
  );
}
