import type { Metadata } from "next";
import Image from "next/image";
import { PageBanner } from "@/components/PageBanner";
import { BookingForm } from "@/components/BookingForm";
import { Section } from "@/components/Section";
import { bookingEmail } from "@/lib/booking";
import { pageBanners } from "@/lib/content";

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
        title="Book your dental appointment online."
        subtitle="Select an available date and time, then share your details. Your request is sent directly to our clinic inbox."
        image={pageBanners.book.image}
        imageAlt={pageBanners.book.imageAlt}
      />

      <Section className="py-16 md:py-24">
        <div className="mb-12 grid items-end gap-6 md:grid-cols-[1.2fr_0.8fr]">
          <div className="max-w-2xl">
            <div className="mb-5 flex items-center gap-4">
              <Image
                src="/brand/logo-512.png"
                alt="Dental 7 Aesthetics logo"
                width={56}
                height={56}
                className="h-14 w-14 rounded-full"
              />
              <p className="text-xs uppercase tracking-[0.24em] text-navy-700/70">
                Clinic schedule
              </p>
            </div>
            <h2 className="font-display text-3xl text-navy-900 md:text-4xl">
              Choose a day and time that works for your visit.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
              Clinic hours are Monday–Saturday, 11:00 AM – 9:00 PM. After you submit,
              we receive your request at {bookingEmail} and confirm availability.
            </p>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden md:justify-self-end md:w-full md:max-w-md">
            <Image
              src="/images/slide-03-exam.png"
              alt="Dental consultation appointment"
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
