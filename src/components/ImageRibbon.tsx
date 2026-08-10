"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { gallery } from "@/lib/content";

export function ImageRibbon() {
  const sequence = [...gallery, ...gallery];

  return (
    <section className="overflow-hidden border-y border-navy-900/10 bg-white/50 py-12">
      <div className="mx-auto mb-7 max-w-7xl px-5 md:px-8">
        <p className="text-center text-xs uppercase tracking-[0.24em] text-navy-700/70">
          Inside our clinical care
        </p>
      </div>
      <div className="relative">
        <motion.div
          className="flex w-max gap-5"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 36, ease: "linear", repeat: Infinity }}
        >
          {sequence.map((item, index) => (
            <figure
              key={`${item.src}-${index}`}
              className="relative h-48 w-80 shrink-0 overflow-hidden md:h-60 md:w-[26rem]"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover"
                sizes="416px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/45 via-transparent to-transparent" />
            </figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
