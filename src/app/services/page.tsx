import type { Metadata } from "next";
import { PageBanner } from "@/components/PageBanner";
import { Services } from "@/components/Services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Dental 7 Aesthetics services in Karachi—cosmetic dentistry, whitening, veneers, implants, orthodontics, root canals, and complete family dental care.",
};

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        eyebrow="Services"
        title="Every essential dental service, under one composed roof."
        subtitle="Cosmetic, general, restorative, and specialty care designed around comfort and lasting results."
        image="/images/treatment.jpg"
        imageAlt="Dental treatment at Dental 7 Aesthetics"
      />
      <Services />
    </>
  );
}
