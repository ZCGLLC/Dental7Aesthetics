"use client";

import { SiteImage as Image } from "@/components/SiteImage";
import Link from "next/link";
import { motion } from "framer-motion";
import { clinic, visitFeaturedImage } from "@/lib/content";
import { Section } from "@/components/Section";

export function Visit() {
  return (
    <Section className="py-20 md:py-24">
      <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs uppercase tracking-[0.24em] text-navy-700/70">
            Clinic Visit
          </p>
          <h2 className="font-display mt-4 text-4xl text-navy-900 md:text-5xl">
            Arrive Prepared—Your Chair Time Is Reserved Online.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted md:text-lg">
            We see patients for examinations, urgent relief, and aesthetic
            consults. Pick a date on the booking page so we can have your records
            and room ready.
          </p>

          <div className="relative mt-10 aspect-[16/10] overflow-hidden">
            <Image
              src={visitFeaturedImage.src}
              alt={visitFeaturedImage.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.08 }}
          className="h-fit border border-navy-900/10 bg-white/70 p-7 md:p-10"
        >
          <div className="space-y-8">
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-silver-500">
                Address
              </p>
              <address className="mt-3 not-italic">
                {clinic.locationLines.map((line) => (
                  <p key={line} className="text-lg leading-snug text-navy-900">
                    {line}
                  </p>
                ))}
              </address>
            </div>

            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-silver-500">
                Hours
              </p>
              <ul className="mt-3 space-y-2 text-navy-900">
                {clinic.hours.map((item) => (
                  <li
                    key={item.day}
                    className="grid grid-cols-[1fr_auto] items-baseline gap-4 text-base"
                  >
                    <span>{item.day}</span>
                    <span className="text-right text-muted">{item.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-silver-500">
                Email
              </p>
              <a
                href={`mailto:${clinic.email}`}
                className="mt-3 inline-block break-all text-lg text-navy-900 underline decoration-silver-400 underline-offset-4 transition hover:decoration-navy-900"
              >
                {clinic.email}
              </a>
            </div>

            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-silver-500">
                Social
              </p>
              <a
                href={clinic.instagram}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block text-lg text-navy-900 underline decoration-silver-400 underline-offset-4 transition hover:decoration-navy-900"
              >
                {clinic.instagramHandle}
              </a>
            </div>
          </div>

          <Link
            href="/book/"
            className="mt-10 inline-flex w-full items-center justify-center rounded-sm bg-navy-900 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-navy-800"
          >
            Book Appointment
          </Link>
        </motion.div>
      </div>
    </Section>
  );
}
