"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { clinic } from "@/lib/content";
import { Section } from "@/components/Section";

export function Visit() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const phone = String(form.get("phone") || "").trim();
    const service = String(form.get("service") || "").trim();
    const message = String(form.get("message") || "").trim();

    const text = [
      `Hello Dental 7 Aesthetics,`,
      `I would like to book a dental consultation.`,
      ``,
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Concern / interest: ${service}`,
      message ? `Details: ${message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(clinic.instagram, "_blank", "noopener,noreferrer");
    void navigator.clipboard?.writeText(text).catch(() => undefined);
    setSent(true);
  }

  return (
    <Section className="py-20 md:py-24">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-6 flex items-center gap-4">
            <Image
              src="/brand/logo-512.png"
              alt="Dental 7 Aesthetics logo"
              width={64}
              height={64}
              className="h-16 w-16 rounded-full"
            />
            <p className="text-xs uppercase tracking-[0.24em] text-navy-700/70">
              Clinic visit
            </p>
          </div>
          <h2 className="font-display text-4xl text-navy-900 md:text-5xl">
            Tell us what is bothering your teeth or smile.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted md:text-lg">
            Share a few details and continue on Instagram. As dentists, we use
            your note to prepare the right examination and discuss suitable
            treatment options at your visit.
          </p>

          <div className="relative mt-10 aspect-[16/10] overflow-hidden">
            <Image
              src="/images/reception.jpg"
              alt="Clinic reception ready for patient visits"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="mt-10 space-y-6 border-t border-navy-900/10 pt-8">
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-silver-500">
                Address
              </p>
              <p className="mt-2 text-lg text-navy-900">{clinic.location}</p>
              <p className="text-muted">{clinic.city}</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-silver-500">
                Hours
              </p>
              <ul className="mt-2 max-w-sm space-y-1 text-navy-900">
                {clinic.hours.map((item) => (
                  <li key={item.day} className="flex justify-between gap-6">
                    <span>{item.day}</span>
                    <span className="text-muted">{item.time}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-silver-500">
                Social
              </p>
              <a
                href={clinic.instagram}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-block text-lg text-navy-900 underline decoration-silver-400 underline-offset-4 transition hover:decoration-navy-900"
              >
                {clinic.instagramHandle}
              </a>
            </div>
          </div>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.08 }}
          className="shine-border h-fit bg-navy-900 p-7 text-white shadow-glow md:p-10"
        >
          <h3 className="font-display text-3xl">Request a dental appointment</h3>
          <p className="mt-2 text-sm text-silver-300">
            We copy your details so you can paste them into Instagram DM for booking.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="text-xs uppercase tracking-[0.18em] text-silver-400">
                Name
              </span>
              <input
                required
                name="name"
                className="mt-2 w-full border-b border-white/20 bg-transparent py-3 outline-none transition focus:border-white"
                placeholder="Your full name"
              />
            </label>
            <label className="block">
              <span className="text-xs uppercase tracking-[0.18em] text-silver-400">
                Phone
              </span>
              <input
                required
                name="phone"
                className="mt-2 w-full border-b border-white/20 bg-transparent py-3 outline-none transition focus:border-white"
                placeholder="+92 ..."
              />
            </label>
            <label className="block sm:col-span-2">
              <span className="text-xs uppercase tracking-[0.18em] text-silver-400">
                Primary concern
              </span>
              <select
                name="service"
                className="mt-2 w-full border-b border-white/20 bg-navy-900 py-3 outline-none transition focus:border-white"
                defaultValue="Dental checkup & cleaning"
              >
                {[
                  "Dental checkup & cleaning",
                  "Tooth pain / emergency",
                  "Teeth whitening",
                  "Smile design / veneers",
                  "Root canal",
                  "Dental implant consult",
                  "Braces / aligners",
                  "Other",
                ].map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
            <label className="block sm:col-span-2">
              <span className="text-xs uppercase tracking-[0.18em] text-silver-400">
                Symptoms or notes
              </span>
              <textarea
                name="message"
                rows={4}
                className="mt-2 w-full resize-none border-b border-white/20 bg-transparent py-3 outline-none transition focus:border-white"
                placeholder="e.g. sensitivity on the upper left, cracked filling, interested in whitening"
              />
            </label>
          </div>

          <button
            type="submit"
            className="mt-8 w-full rounded-sm bg-white px-6 py-3.5 text-sm font-medium text-navy-900 transition hover:bg-silver-200"
          >
            Continue on Instagram
          </button>

          {sent && (
            <p className="mt-4 text-sm text-silver-300">
              Note copied. Send it via Instagram DM so our team can schedule you.
            </p>
          )}
        </motion.form>
      </div>
    </Section>
  );
}
