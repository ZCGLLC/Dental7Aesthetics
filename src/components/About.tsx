"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { clinic, team, values } from "@/lib/content";
import { Section } from "@/components/Section";

const aboutGallery = [
  { src: "/images/svc-hygiene.png", alt: "Preventive dental hygiene" },
  { src: "/images/svc-restorative.png", alt: "Restorative dental treatment" },
  { src: "/images/svc-smile-design.png", alt: "Refined aesthetic result" },
];

export function About() {
  return (
    <>
      <Section className="py-20 md:py-24">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
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
                Our clinical philosophy
              </p>
            </div>
            <h2 className="font-display text-4xl leading-tight text-navy-900 md:text-5xl">
              We practice dentistry the way we would want it for our own family.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted md:text-lg">
              At {clinic.name}, we are dentists first. That means careful
              diagnosis, sterile protocol, and treatment plans that prioritize
              tooth preservation. Aesthetic work is never separated from oral
              health—we design smiles that also chew, speak, and age well.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
              Patients come to us for cleanings, pain relief, restorative work,
              and smile refinement. In every case, we explain options, expected
              outcomes, and aftercare before we begin.
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
                src="/images/slide-03-exam.png"
                alt="Dentist providing attentive clinical care"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 via-transparent to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-navy-900/95 px-6 py-5 text-silver-100 md:bottom-6 md:left-6 md:right-auto md:max-w-sm">
              <p className="font-display text-2xl leading-snug">
                Comfortable dentistry with clear clinical reasoning.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      <Section className="pb-8 md:pb-10">
        <div className="grid gap-4 md:grid-cols-3">
          {aboutGallery.map((img) => (
            <div key={img.src} className="relative aspect-[4/3] overflow-hidden">
              <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="33vw" />
            </div>
          ))}
        </div>
      </Section>

      <Section className="py-20 md:py-24">
        <h3 className="font-display text-3xl text-navy-900 md:text-4xl">
          Standards that guide our chairside decisions
        </h3>
        <div className="mt-10 grid gap-8 md:grid-cols-3 md:gap-10">
          {values.map((value) => (
            <div key={value.title} className="border-t border-navy-900/15 pt-5">
              <h4 className="font-display text-2xl text-navy-900">{value.title}</h4>
              <p className="mt-3 text-sm leading-relaxed text-muted">{value.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="pb-24 md:pb-28">
        <div className="grid items-end gap-6 md:grid-cols-2 md:gap-10">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-navy-700/70">
              Our dentists
            </p>
            <h3 className="font-display mt-4 text-4xl text-navy-900 md:text-5xl">
              Clinicians responsible for your care.
            </h3>
          </div>
          <p className="max-w-md text-muted md:justify-self-end md:text-right">
            You will always know who is treating you and why a procedure is
            recommended.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          {team.map((member, index) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.6 }}
              className="overflow-hidden border border-navy-900/10 bg-white/70"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <div className="p-7 md:p-8">
                <p className="text-[11px] uppercase tracking-[0.2em] text-silver-500">
                  {member.role}
                </p>
                <h4 className="font-display mt-3 text-2xl text-navy-900">
                  {member.name}
                </h4>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {member.focus}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </Section>
    </>
  );
}
