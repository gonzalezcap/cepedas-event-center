import { SITE } from "@/lib/site";

// CONFIRM exact ZIP for 1444 S 193rd E Ave before relying on the embed pin.
export default function MapEmbed({ className = "" }: { className?: string }) {
  const q = encodeURIComponent(SITE.address.full.replace("[CONFIRM ZIP]", "").trim());
  return (
    <div className={`overflow-hidden rounded-2xl border ${className}`}>
      <iframe
        title="Cepedas Event Center location"
        width="100%"
        height="360"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps?q=${q}&output=embed`}
      />
    </div>
  );
}
