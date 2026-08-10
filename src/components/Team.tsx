"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { team } from "@/lib/content";

export function Team() {
  return (
    <section className="px-5 py-24 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-end gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-navy-700/70">
              The Clinicians
            </p>
            <h2 className="font-display mt-4 text-4xl text-navy-900 md:text-5xl">
              Guided by certified dental experts.
            </h2>
          </div>
          <p className="max-w-md text-muted md:justify-self-end">
            A focused team for general and aesthetic dentistry—attentive,
            precise, and present for every patient journey.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[4/5] overflow-hidden bg-navy-900"
          >
            <Image
              src="/images/whitening.jpg"
              alt="Dental craftsmanship at Dental 7 Aesthetics"
              fill
              className="object-cover opacity-90"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <Image
                src="/brand/logo.png"
                alt=""
                width={56}
                height={56}
                className="mb-4 h-14 w-14 rounded-full"
              />
              <p className="font-display text-2xl text-white">Dental 7 Aesthetics</p>
            </div>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2">
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
                <h3 className="font-display mt-3 text-2xl text-navy-900">
                  {member.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {member.focus}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
