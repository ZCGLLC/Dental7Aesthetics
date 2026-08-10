import Image from "next/image";

type PageBannerProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
};

export function PageBanner({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt,
}: PageBannerProps) {
  return (
    <section className="relative overflow-hidden pt-28 text-white">
      <div className="absolute inset-0">
        <Image src={image} alt={imageAlt} fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/82 via-navy-900/78 to-pearl" />
      </div>
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-16 md:px-8 md:pb-24 md:pt-20">
        <p className="text-xs uppercase tracking-[0.24em] text-silver-300">{eyebrow}</p>
        <h1 className="font-display mt-4 max-w-3xl text-4xl leading-tight md:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-silver-200 md:text-lg">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
