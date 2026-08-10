"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { services, type Service } from "@/lib/content";

const filters = ["All", "Cosmetic", "General", "Restorative", "Specialty"] as const;

type Filter = (typeof filters)[number];

export function Services() {
  const [filter, setFilter] = useState<Filter>("All");

  const visible =
    filter === "All"
      ? services
      : services.filter((service) => service.category === filter);

  return (
    <section id="services" className="relative px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.24em] text-navy-700/70">
            Clinical Menu
          </p>
          <h2 className="font-display mt-4 text-4xl text-navy-900 md:text-5xl">
            Complete dental care, thoughtfully presented.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
            From preventive visits to full smile rehabilitations—every essential
            service a modern dental clinic should offer, under one composed roof.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {filters.map((item) => {
            const active = filter === item;
            return (
              <button
                key={item}
                type="button"
                onClick={() => setFilter(item)}
                className={`rounded-sm px-4 py-2 text-sm transition ${
                  active
                    ? "bg-navy-900 text-white"
                    : "bg-white/70 text-navy-800 hover:bg-silver-200"
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>

        <motion.div layout className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((service) => (
              <ServiceItem key={service.title} service={service} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function ServiceItem({ service }: { service: Service }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.35 }}
      className="group border-t border-navy-900/15 pt-5"
    >
      <p className="text-[11px] uppercase tracking-[0.2em] text-silver-500">
        {service.category}
      </p>
      <h3 className="font-display mt-2 text-2xl text-navy-900 transition-colors group-hover:text-navy-700">
        {service.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{service.description}</p>
    </motion.article>
  );
}
