import type { Metadata } from "next";
import { PageBanner } from "@/components/PageBanner";
import { Visit } from "@/components/Visit";
import { pageCopy } from "@/lib/content";

export const metadata: Metadata = {
  title: "Visit",
  description:
    "Book a dental consultation at Dental 7 Aesthetics on Jinnah Avenue, opposite Malir Cantt, Karachi.",
};

export default function VisitPage() {
  return (
    <>
      <PageBanner
        eyebrow={pageCopy.visit.eyebrow}
        title={pageCopy.visit.title}
        subtitle={pageCopy.visit.subtitle}
        image="/images/consult.jpg"
        imageAlt="Dental consultation and examination"
      />
      <Visit />
    </>
  );
}
