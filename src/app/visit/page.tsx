import type { Metadata } from "next";
import { PageBanner } from "@/components/PageBanner";
import { Visit } from "@/components/Visit";
import { pageBanners, pageCopy } from "@/lib/content";

export const metadata: Metadata = {
  title: "Visit",
  description:
    "Book a dental consultation at Dental 7 Aesthetics, Fatima Gold Residency, Opposite Malir Cantt, Jinnah Avenue, Karachi.",
};

export default function VisitPage() {
  return (
    <>
      <PageBanner
        eyebrow={pageCopy.visit.eyebrow}
        title={pageCopy.visit.title}
        subtitle={pageCopy.visit.subtitle}
        image={pageBanners.visit.image}
        imageAlt={pageBanners.visit.imageAlt}
      />
      <Visit />
    </>
  );
}
