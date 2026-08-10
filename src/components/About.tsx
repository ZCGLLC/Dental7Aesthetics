"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { clinic, values } from "@/lib/content";

export function About() {
  return (
    <section id="about" className="relative px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs uppercase tracking-[0.24em] text-navy-700/70">
            The Practice
          </p>
          <h2 className="font-display mt-4 text-4xl leading-tight text-navy-900 md:text-5xl">
            A dentistry brand built on composure, clarity, and beautiful results.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            {clinic.name} is a Karachi dental clinic devoted to general and
            aesthetic dentistry. From everyday preventive care to smile
            transformations, every visit is shaped around comfort, honesty, and
            detail.
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            Led by certified dental experts, our approach is modern without being
            clinical-cold—polished care with a human center.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="border-t border-navy-900/15 pt-4">
                <h3 className="font-display text-xl text-navy-900">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{value.text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/images/clinic.jpg"
              alt="Dental 7 Aesthetics clinic atmosphere"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -left-4 max-w-xs bg-navy-900 px-6 py-5 text-silver-100 shadow-glow md:-left-8">
            <p className="font-display text-2xl leading-snug">
              General & aesthetic dentistry, refined for Karachi.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
