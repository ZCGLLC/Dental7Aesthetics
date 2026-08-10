import Link from "next/link";
import { Hero } from "@/components/Hero";
import { ImageRibbon } from "@/components/ImageRibbon";
import { HomeHighlights } from "@/components/HomeHighlights";
import { Section } from "@/components/Section";
import { clinic } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ImageRibbon />
      <HomeHighlights />
      <Section className="pb-24 md:pb-28">
        <div className="flex flex-col items-start justify-between gap-8 bg-navy-900 px-8 py-12 text-white md:flex-row md:items-center md:px-12">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.24em] text-silver-400">
              Begin with a proper exam
            </p>
            <h2 className="font-display mt-3 text-3xl leading-snug md:text-4xl">
              Book a consultation at {clinic.name} and leave with a clear dental plan.
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
              Browse Treatments
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
