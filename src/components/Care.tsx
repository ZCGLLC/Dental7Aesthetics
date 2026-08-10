"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function Care() {
  return (
    <section id="care" className="relative overflow-hidden">
      <div className="relative min-h-[70vh]">
        <Image
          src="/images/smile.jpg"
          alt="Confident natural smile"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy-950/70" />
        <div className="texture-grid absolute inset-0 opacity-30" />

        <div className="relative mx-auto flex min-h-[70vh] max-w-7xl items-end px-5 py-20 md:px-8 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white"
          >
            <p className="text-xs uppercase tracking-[0.24em] text-silver-300">
              Aesthetic Philosophy
            </p>
            <h2 className="font-display mt-4 text-4xl leading-tight md:text-5xl">
              Smiles that feel composed—never overdone.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-silver-200 md:text-lg">
              Whitening, veneers, bonding, and smile design are guided by
              proportion and restraint. The goal is a finish that looks like
              you—on your best day.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-2 md:px-8 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative aspect-[5/4] overflow-hidden"
        >
          <Image
            src="/images/treatment.jpg"
            alt="Precise dental treatment"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex flex-col justify-center"
        >
          <h3 className="font-display text-3xl text-navy-900 md:text-4xl">
            Comfort-led clinical care
          </h3>
          <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
            Whether you need a routine scale and polish, a root canal, an implant
            consultation, or emergency relief—we explain every step, protect your
            comfort, and keep the experience unhurried.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-navy-800">
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-navy-700" />
              Digital-minded diagnosis with clear treatment pathways
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-navy-700" />
              Sterile protocols and modern restorative materials
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-navy-700" />
              Aftercare guidance that makes recovery feel manageable
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
