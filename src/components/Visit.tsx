"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { clinic } from "@/lib/content";

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
      `I'd like to book a consultation.`,
      ``,
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Interest: ${service}`,
      message ? `Note: ${message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `${clinic.instagram}`,
      "_blank",
      "noopener,noreferrer",
    );

    // Keep a local confirmation and copy-ready message for the visitor.
    void navigator.clipboard?.writeText(text).catch(() => undefined);
    setSent(true);
  }

  return (
    <section id="visit" className="px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs uppercase tracking-[0.24em] text-navy-700/70">
            Visit Us
          </p>
          <h2 className="font-display mt-4 text-4xl text-navy-900 md:text-5xl">
            Begin with a consultation in Karachi.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted md:text-lg">
            Share a few details and continue on Instagram to confirm your
            appointment with our team.
          </p>

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
              <ul className="mt-2 space-y-1 text-navy-900">
                {clinic.hours.map((item) => (
                  <li key={item.day} className="flex justify-between gap-6 max-w-sm">
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
          className="shine-border bg-navy-900 p-7 text-white shadow-glow md:p-10"
        >
          <h3 className="font-display text-3xl">Request an appointment</h3>
          <p className="mt-2 text-sm text-silver-300">
            Your message details are copied so you can paste them into Instagram DM.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <label className="block sm:col-span-1">
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
            <label className="block sm:col-span-1">
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
                Service interest
              </span>
              <select
                name="service"
                className="mt-2 w-full border-b border-white/20 bg-navy-900 py-3 outline-none transition focus:border-white"
                defaultValue="Smile Design & Makeovers"
              >
                {["Smile Design & Makeovers", "Teeth Whitening", "Dental Checkup", "Root Canal", "Implants", "Braces / Aligners", "Emergency Care", "Other"].map(
                  (option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ),
                )}
              </select>
            </label>
            <label className="block sm:col-span-2">
              <span className="text-xs uppercase tracking-[0.18em] text-silver-400">
                Message
              </span>
              <textarea
                name="message"
                rows={4}
                className="mt-2 w-full resize-none border-b border-white/20 bg-transparent py-3 outline-none transition focus:border-white"
                placeholder="Tell us briefly what you need"
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
              Appointment note copied. Complete your booking in Instagram DM.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
