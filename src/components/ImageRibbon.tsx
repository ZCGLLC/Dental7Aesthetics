"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { gallery } from "@/lib/content";

export function ImageRibbon() {
  const sequence = [...gallery, ...gallery];

  return (
    <section className="overflow-hidden border-y border-navy-900/10 bg-white/40 py-10">
      <p className="mb-6 px-5 text-center text-xs uppercase tracking-[0.24em] text-navy-700/70 md:px-8">
        Moments from the practice
      </p>
      <div className="relative">
        <motion.div
          className="flex w-max gap-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, ease: "linear", repeat: Infinity }}
        >
          {sequence.map((item, index) => (
            <div
              key={`${item.src}-${index}`}
              className="relative h-44 w-72 shrink-0 overflow-hidden md:h-56 md:w-96"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover"
                sizes="384px"
              />
              <div className="absolute inset-0 bg-navy-950/15" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
