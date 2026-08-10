import type { Metadata } from "next";
import { PageBanner } from "@/components/PageBanner";
import { Services } from "@/components/Services";
import { pageCopy } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Dentist-led services at Dental 7 Aesthetics in Karachi—checkups, whitening, veneers, root canals, implants, orthodontics, and emergency dental care.",
};

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        eyebrow={pageCopy.services.eyebrow}
        title={pageCopy.services.title}
        subtitle={pageCopy.services.subtitle}
        image="/images/treatment.jpg"
        imageAlt="Dentist performing precise clinical treatment"
      />
      <Services />
    </>
  );
}
