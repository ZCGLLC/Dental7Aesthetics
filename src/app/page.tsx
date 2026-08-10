import { Hero } from "@/components/Hero";
import { ImageRibbon } from "@/components/ImageRibbon";
import { HomeHighlights } from "@/components/HomeHighlights";
import Link from "next/link";
import { clinic } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ImageRibbon />
      <HomeHighlights />
      <section className="px-5 pb-24 md:px-8 md:pb-28">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 bg-navy-900 px-8 py-12 text-white md:flex-row md:items-center md:px-12">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-silver-400">
              Ready when you are
            </p>
            <h2 className="font-display mt-3 text-3xl md:text-4xl">
              Reserve your consultation with {clinic.name}.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/visit/"
              className="rounded-sm bg-white px-6 py-3 text-sm text-navy-900 transition hover:bg-silver-200"
            >
              Visit Us
            </Link>
            <Link
              href="/services/"
              className="rounded-sm border border-white/30 px-6 py-3 text-sm text-white transition hover:bg-white/10"
            >
              Browse Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
