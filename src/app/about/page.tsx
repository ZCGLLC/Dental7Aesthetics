import type { Metadata } from "next";
import { PageBanner } from "@/components/PageBanner";
import { About } from "@/components/About";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Dental 7 Aesthetics in Karachi—our philosophy, values, and clinicians Dr. Abdullah Baig and Dr. Maira Minhaj.",
};

export default function AboutPage() {
  return (
    <>
      <PageBanner
        eyebrow="About Us"
        title="A Karachi clinic devoted to composure, clarity, and beautiful smiles."
        subtitle="Meet the practice and clinicians behind Dental 7 Aesthetics."
        image="/images/clinic.jpg"
        imageAlt="Dental 7 Aesthetics clinic"
      />
      <About />
    </>
  );
}
