// Labeled gray placeholder for photos pending the shoot.
// Swap 1:1 for <Image> when real photos arrive (see EDITING.md).
export default function PhotoPlaceholder({
  label,
  className = "",
  aspect = "aspect-[4/3]",
}: {
  label: string;
  className?: string;
  aspect?: string;
}) {
  return (
    <div className={`photo-ph ${aspect} w-full ${className}`} role="img" aria-label={`Photo placeholder: ${label}`}>
      <span>📷 {label}</span>
    </div>
  );
}
