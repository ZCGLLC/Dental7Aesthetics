"use client";

import { SiteImage as Image } from "@/components/SiteImage";
import Link from "next/link";
import { motion } from "framer-motion";
import { homeFeaturedImage, homeMoments, pageCopy } from "@/lib/content";
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
            <p className="text-xs uppercase tracking-[0.24em] text-navy-700/70">
              From your dentists
            </p>
            <h2 className="font-display mt-4 text-4xl leading-tight text-navy-900 md:text-5xl">
              {pageCopy.home.headline}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
              {pageCopy.home.body}
            </p>
            <div className="mt-8">
              <Link
                href="/about/"
                className="rounded-sm border border-navy-900/20 px-6 py-3 text-sm text-navy-900 transition hover:bg-white"
              >
                Meet the clinicians
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
              src={homeFeaturedImage.src}
              alt={homeFeaturedImage.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </Section>

      <Section className="pb-24 md:pb-28">
        <div className="mb-10 max-w-xl">
          <p className="text-xs uppercase tracking-[0.24em] text-navy-700/70">
            Patient journeys
          </p>
          <h3 className="font-display mt-3 text-3xl text-navy-900 md:text-4xl">
            Care pathways we guide every week.
          </h3>
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
