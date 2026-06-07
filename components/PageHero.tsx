import PhotoPlaceholder from "./PhotoPlaceholder";

export default function PageHero({ title, subtitle, photo }: { title: string; subtitle?: string; photo: string }) {
  return (
    <section className="relative h-[46vh] min-h-[320px] flex items-center justify-center text-center text-white overflow-hidden">
      <div className="absolute inset-0">
        <PhotoPlaceholder label={photo} aspect="h-full" className="h-full" />
        <div className="absolute inset-0 bg-primary/55" />
      </div>
      <div className="relative px-5 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
        {subtitle && <p className="mt-4 text-white/85">{subtitle}</p>}
      </div>
    </section>
  );
}
