"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { clinic, homeMoments, pageCopy, values } from "@/lib/content";
import { Section } from "@/components/Section";

export function HomeHighlights() {
  return (
    <>
      <Section className="py-24 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="max-w-xl"
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
                From your dentists
              </p>
            </div>
            <h2 className="font-display text-4xl leading-tight text-navy-900 md:text-5xl">
              {pageCopy.home.headline}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
              At {clinic.name}, every appointment begins with listening and a
              proper examination. We explain findings in plain language, then
              recommend treatment that protects your teeth for the long term—
              while refining aesthetics with restraint.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/book/"
                className="rounded-sm bg-navy-900 px-6 py-3 text-sm text-white transition hover:bg-navy-800"
              >
                Book Appointment
              </Link>
              <Link
                href="/services/"
                className="rounded-sm border border-navy-900/20 px-6 py-3 text-sm text-navy-900 transition hover:bg-white"
              >
                View Treatments
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[5/4] overflow-hidden"
          >
            <Image
              src="/images/atmosphere-clinic.png"
              alt="Composed dental suite at Dental 7 Aesthetics"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </Section>

      <Section className="pb-20 md:pb-24">
        <div className="mb-10 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.24em] text-navy-700/70">
            How we practice
          </p>
          <h3 className="font-display mt-3 text-3xl text-navy-900 md:text-4xl">
            Clinical principles we follow in every chair.
          </h3>
        </div>
        <div className="grid gap-8 md:grid-cols-3 md:gap-10">
          {values.map((value, index) => (
            <motion.article
              key={value.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.55 }}
              className="border-t border-navy-900/15 pt-5"
            >
              <h3 className="font-display text-2xl text-navy-900">{value.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{value.text}</p>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section className="pb-24 md:pb-28">
        <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.24em] text-navy-700/70">
              Patient journeys
            </p>
            <h3 className="font-display mt-3 text-3xl text-navy-900 md:text-4xl">
              Care pathways we guide every week.
            </h3>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {homeMoments.map((moment, index) => (
            <motion.figure
              key={moment.src}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.5 }}
              className="flex h-full flex-col"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={moment.src}
                  alt={moment.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <figcaption className="mt-4 text-sm leading-relaxed text-muted">
                {moment.caption}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </Section>
    </>
  );
}
