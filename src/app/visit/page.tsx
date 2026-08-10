import type { Metadata } from "next";
import { PageBanner } from "@/components/PageBanner";
import { Visit } from "@/components/Visit";

export const metadata: Metadata = {
  title: "Visit",
  description:
    "Visit Dental 7 Aesthetics on Jinnah Avenue opposite Malir Cantt, Karachi. Request an appointment via Instagram.",
};

export default function VisitPage() {
  return (
    <>
      <PageBanner
        eyebrow="Visit"
        title="Find us in Karachi and reserve your appointment."
        subtitle="Jinnah Avenue, opposite Malir Cantt—book through Instagram with our appointment form."
        image="/images/consult.jpg"
        imageAlt="Dental consultation"
      />
      <Visit />
    </>
  );
}
