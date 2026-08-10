"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { clinic, gallery, pageCopy } from "@/lib/content";

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % gallery.length);
    }, 5200);
    return () => window.clearInterval(timer);
  }, []);

  const active = gallery[index];

  return (
    <section className="relative min-h-[100svh] overflow-hidden text-white">
      <AnimatePresence mode="sync">
        <motion.div
          key={active.src}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <motion.div
            initial={{ scale: 1.06 }}
            animate={{ scale: 1.14 }}
            transition={{ duration: 6.2, ease: "linear" }}
            className="absolute inset-0"
          >
            <Image
              src={active.src}
              alt={active.alt}
              fill
              priority={index === 0}
              className="object-cover object-center"
              sizes="100vw"
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/75 via-navy-900/68 to-navy-950/92" />
      <div className="texture-grid absolute inset-0 opacity-30" />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-pearl to-transparent" />

      <div className="relative mx-auto flex min-h-[100svh] w-full max-w-7xl flex-col justify-end px-5 pb-24 pt-32 md:justify-center md:px-8 md:pb-24 md:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <div className="mb-8 flex items-center gap-5">
            <Image
              src="/brand/logo-512.png"
              alt="Dental 7 Aesthetics"
              width={112}
              height={112}
              className="animate-float h-24 w-24 rounded-full shadow-glow ring-1 ring-white/30 md:h-28 md:w-28"
              priority
            />
            <div className="h-px w-16 bg-gradient-to-r from-silver-300 to-transparent md:w-24" />
          </div>

          <h1 className="font-display text-[clamp(2.9rem,8vw,6.5rem)] leading-[0.92] tracking-[-0.02em] text-white">
            Dental 7
            <span className="block text-silver-300">Aesthetics</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-silver-200/95 md:text-lg">
            {pageCopy.home.subcopy}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link
              href="/visit/"
              className="rounded-sm bg-white px-7 py-3.5 text-sm font-medium tracking-wide text-navy-900 transition hover:bg-silver-200"
            >
              Book a Consultation
            </Link>
            <Link
              href="/services/"
              className="rounded-sm border border-white/30 px-7 py-3.5 text-sm tracking-wide text-white transition hover:border-white hover:bg-white/10"
            >
              Clinical Services
            </Link>
          </div>
        </motion.div>

        <div className="mt-14 flex flex-wrap items-end justify-between gap-6">
          <p className="max-w-md text-xs uppercase tracking-[0.22em] text-silver-400">
            {clinic.location}
          </p>
          <div className="flex items-center gap-2" aria-label="Gallery slides">
            {gallery.map((item, i) => (
              <button
                key={item.src}
                type="button"
                aria-label={`Show image ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-8 bg-white" : "w-3 bg-white/35 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
