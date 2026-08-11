"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { clinic } from "@/lib/content";
import { Section } from "@/components/Section";

export function Visit() {
  return (
    <Section className="py-20 md:py-24">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-6 flex items-center gap-4">
            <Image
              src="/brand/logo-512.png"
              alt="Dental 7 Aesthetics logo"
              width={64}
              height={64}
              className="h-16 w-16 rounded-full"
            />
            <p className="text-xs uppercase tracking-[0.24em] text-navy-700/70">
              Clinic visit
            </p>
          </div>
          <h2 className="font-display text-4xl text-navy-900 md:text-5xl">
            Find us in Karachi, then reserve your chair time online.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted md:text-lg">
            We welcome patients for examinations, emergency relief, and aesthetic
            consultations. Choose a date and time on our booking page so we can
            prepare for your visit.
          </p>

          <div className="relative mt-10 aspect-[16/10] overflow-hidden">
            <Image
              src="/images/reception.jpg"
              alt="Clinic reception ready for patient visits"
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
          <div className="space-y-6">
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-silver-500">
                Address
              </p>
              <p className="mt-2 text-lg text-navy-900">{clinic.location}</p>
              <p className="text-muted">{clinic.city}</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-silver-500">
                Hours
              </p>
              <ul className="mt-2 max-w-sm space-y-1 text-navy-900">
                {clinic.hours.map((item) => (
                  <li key={item.day} className="flex justify-between gap-6">
                    <span>{item.day}</span>
                    <span className="text-muted">{item.time}</span>
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
                className="mt-2 inline-block text-lg text-navy-900 underline decoration-silver-400 underline-offset-4 transition hover:decoration-navy-900"
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
                className="mt-2 inline-block text-lg text-navy-900 underline decoration-silver-400 underline-offset-4 transition hover:decoration-navy-900"
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
