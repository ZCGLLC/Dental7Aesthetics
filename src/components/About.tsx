"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { clinic, team, values } from "@/lib/content";

export function About() {
  return (
    <>
      <section className="relative px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 flex items-center gap-4">
              <Image
                src="/brand/logo-512.png"
                alt="Dental 7 Aesthetics logo"
                width={72}
                height={72}
                className="h-[72px] w-[72px] rounded-full shadow-soft"
              />
              <p className="text-xs uppercase tracking-[0.24em] text-navy-700/70">
                The Practice
              </p>
            </div>
            <h2 className="font-display text-4xl leading-tight text-navy-900 md:text-5xl">
              Certified dental experts for general & aesthetic dentistry.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
              {clinic.name} is a Karachi dental clinic devoted to care that feels
              composed and personal. From everyday preventive visits to smile
              transformations, every appointment is shaped around comfort,
              honesty, and detail.
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted md:text-lg">
              Our approach is modern without being clinical-cold—polished care
              with a human center, guided by clinicians who take pride in
              natural-looking results.
            </p>
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

      <section className="px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <h3 className="font-display text-3xl text-navy-900 md:text-4xl">What guides us</h3>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="border-t border-navy-900/15 pt-5">
                <h4 className="font-display text-2xl text-navy-900">{value.title}</h4>
                <p className="mt-3 text-sm leading-relaxed text-muted">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-24 md:px-8 md:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-end gap-8 md:grid-cols-[1fr_1fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-navy-700/70">
                The Clinicians
              </p>
              <h3 className="font-display mt-4 text-4xl text-navy-900 md:text-5xl">
                Guided by certified dental experts.
              </h3>
            </div>
            <p className="max-w-md text-muted md:justify-self-end">
              A focused team for general and aesthetic dentistry—attentive,
              precise, and present for every patient journey.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {team.map((member, index) => (
              <motion.article
                key={member.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.6 }}
                className="border border-navy-900/10 bg-white/60 p-7 backdrop-blur-sm"
              >
                <p className="text-[11px] uppercase tracking-[0.2em] text-silver-500">
                  {member.role}
                </p>
                <h4 className="font-display mt-3 text-2xl text-navy-900">
                  {member.name}
                </h4>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {member.focus}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
