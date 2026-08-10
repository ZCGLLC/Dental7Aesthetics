import type { Metadata } from "next";
import { PageBanner } from "@/components/PageBanner";
import { About } from "@/components/About";
import { pageCopy } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn how the dentists at Dental 7 Aesthetics in Karachi practice diagnosis-first, conservative, and aesthetically refined dental care.",
};

export default function AboutPage() {
  return (
    <>
      <PageBanner
        eyebrow={pageCopy.about.eyebrow}
        title={pageCopy.about.title}
        subtitle={pageCopy.about.subtitle}
        image="/images/clinic.jpg"
        imageAlt="Dental 7 Aesthetics clinical environment"
      />
      <About />
    </>
  );
}
