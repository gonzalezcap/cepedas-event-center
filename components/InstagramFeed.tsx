import PhotoPlaceholder from "./PhotoPlaceholder";
import { SITE } from "@/lib/site";

// Embedded Instagram feed.
// RECOMMENDED: drop in a Behold (behold.so) or SnapWidget embed once @cepedasec is live.
// Replace the fallback grid below with the embed <script>/<iframe>.
// Until then we render a graceful static fallback grid so the page never looks broken.
export default function InstagramFeed() {
  const fallback = [
    "IG post — venue interior, draped lighting",
    "IG post — wedding head table",
    "IG post — quinceañera dance floor",
    "IG post — outdoor ceremony setup",
    "IG post — table centerpiece detail",
    "IG post — guests celebrating",
  ];
  return (
    <section className="max-w-content mx-auto px-5 py-20">
      <div className="text-center mb-10">
        <p className="text-accent font-semibold uppercase tracking-widest text-xs">Follow Along</p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">{SITE.instagram} on Instagram</h2>
        <p className="text-ink/60 mt-2 text-sm">Live feed coming soon — confirm handle once the account is active.</p>
      </div>
      {/* TODO: replace this grid with Behold/SnapWidget embed */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {fallback.map((f, i) => (
          <PhotoPlaceholder key={i} label={f} aspect="aspect-square" />
        ))}
      </div>
      <div className="text-center mt-8">
        <a href={SITE.instagramUrl} className="inline-block border border-primary/30 rounded-full px-6 py-2 text-sm hover:bg-primary hover:text-white transition">
          View Instagram
        </a>
      </div>
    </section>
  );
}
