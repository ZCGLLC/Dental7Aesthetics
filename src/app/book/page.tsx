import type { Metadata } from "next";
import { SiteImage as Image } from "@/components/SiteImage";
import { PageBanner } from "@/components/PageBanner";
import { BookingForm } from "@/components/BookingForm";
import { Section } from "@/components/Section";
import { bookingEmail } from "@/lib/booking";
import { bookFeaturedImage, pageBanners } from "@/lib/content";

export const metadata: Metadata = {
  title: "Book Appointment",
  description:
    "Book a dental appointment at Dental 7 Aesthetics in Karachi. Choose a date and time, share your details, and we will confirm your visit.",
};

export default function BookPage() {
  return (
    <>
      <PageBanner
        eyebrow="Appointments"
        title="Book Your Dental Appointment Online."
        subtitle="Select an available date and time, then share your details. Your request is sent directly to our clinic inbox."
        image={pageBanners.book.image}
        imageAlt={pageBanners.book.imageAlt}
      />

      <Section className="py-16 md:py-24">
        <div className="mb-12 grid items-end gap-6 md:grid-cols-[1.2fr_0.8fr]">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.24em] text-navy-700/70">
              Clinic Schedule
            </p>
            <h2 className="font-display mt-4 text-3xl text-navy-900 md:text-4xl">
              Monday–Saturday Openings From 11:00 AM To 9:00 PM.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
              After you submit, we receive your request at {bookingEmail} and
              confirm availability by email.
            </p>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden md:justify-self-end md:w-full md:max-w-md">
            <Image
              src={bookFeaturedImage.src}
              alt={bookFeaturedImage.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 28rem"
            />
          </div>
        </div>

        <BookingForm />
      </Section>
    </>
  );
}
