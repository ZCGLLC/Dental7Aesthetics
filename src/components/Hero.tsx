"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { clinic } from "@/lib/content";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden text-white">
      <Image
        src="/images/hero.jpg"
        alt="Refined dental care environment"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/75 via-navy-900/70 to-navy-950/90" />
      <div className="texture-grid absolute inset-0 opacity-40" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-pearl to-transparent" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-24 pt-32 md:justify-center md:px-8 md:pb-20 md:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <div className="mb-8 flex items-center gap-4">
            <Image
              src="/brand/logo-512.png"
              alt="Dental 7 Aesthetics"
              width={88}
              height={88}
              className="animate-float h-20 w-20 rounded-full shadow-glow md:h-[88px] md:w-[88px]"
              priority
            />
            <div className="h-px w-16 bg-gradient-to-r from-silver-300 to-transparent" />
          </div>

          <h1 className="font-display text-[clamp(2.8rem,8vw,6.4rem)] leading-[0.92] tracking-[-0.02em] text-white">
            Dental 7
            <span className="block text-silver-300">Aesthetics</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-silver-200/95 md:text-lg">
            Classically composed dental care in Karachi—where clinical excellence
            meets refined smile aesthetics.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={clinic.instagram}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white px-7 py-3.5 text-sm font-medium tracking-wide text-navy-900 transition hover:bg-silver-200"
            >
              Reserve a Consultation
            </a>
            <a
              href="#services"
              className="rounded-full border border-white/30 px-7 py-3.5 text-sm tracking-wide text-white transition hover:border-white hover:bg-white/10"
            >
              Explore Services
            </a>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-14 max-w-md text-xs uppercase tracking-[0.22em] text-silver-400"
        >
          {clinic.location}
        </motion.p>
      </div>
    </section>
  );
}
