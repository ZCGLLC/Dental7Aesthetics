"use client";

import { SiteImage as Image } from "@/components/SiteImage";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { services, type Service } from "@/lib/content";
import { Section } from "@/components/Section";

const filters = ["All", "Cosmetic", "General", "Restorative", "Specialty"] as const;
type Filter = (typeof filters)[number];

export function Services() {
  const [filter, setFilter] = useState<Filter>("All");

  const visible =
    filter === "All"
      ? services
      : services.filter((service) => service.category === filter);

  return (
    <Section className="py-20 md:py-24">
      <div className="max-w-2xl">
        <p className="text-xs uppercase tracking-[0.24em] text-navy-700/70">
          Treatment menu
        </p>
        <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
          Filter by category to find the pathway that matches your concern. Each
          treatment includes diagnosis, consent, and aftercare.
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
                  : "bg-white/80 text-navy-800 hover:bg-silver-200"
              }`}
            >
              {item}
            </button>
          );
        })}
      </div>

      <motion.div
        layout
        className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12"
      >
        <AnimatePresence mode="popLayout">
          {visible.map((service) => (
            <ServiceItem key={service.title} service={service} />
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
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
      className="group flex h-full flex-col"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
          sizes="(max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col border-t border-navy-900/10 pt-5">
        <p className="text-[11px] uppercase tracking-[0.2em] text-silver-500">
          {service.category}
        </p>
        <h3 className="font-display mt-2 text-2xl text-navy-900">{service.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{service.description}</p>
      </div>
    </motion.article>
  );
}
