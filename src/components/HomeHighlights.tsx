"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { clinic, values } from "@/lib/content";

export function HomeHighlights() {
  return (
    <>
      <section className="px-5 py-24 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
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
                Welcome
              </p>
            </div>
            <h2 className="font-display text-4xl text-navy-900 md:text-5xl">
              A dentistry brand built on composure and beautiful results.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg">
              From everyday preventive care to smile transformations,{" "}
              {clinic.name} delivers general and aesthetic dentistry with
              clarity, comfort, and detail.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/about/"
                className="rounded-sm bg-navy-900 px-6 py-3 text-sm text-white transition hover:bg-navy-800"
              >
                About Us
              </Link>
              <Link
                href="/services/"
                className="rounded-sm border border-navy-900/20 px-6 py-3 text-sm text-navy-900 transition hover:bg-white"
              >
                Our Services
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
              src="/images/care.jpg"
              alt="Thoughtful dental care"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </section>

      <section className="px-5 pb-24 md:px-8 md:pb-28">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
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
      </section>
    </>
  );
}
