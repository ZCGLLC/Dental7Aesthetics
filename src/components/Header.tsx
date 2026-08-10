"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { clinic } from "@/lib/content";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#care", label: "Care" },
  { href: "#visit", label: "Visit" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy-950/85 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#top" className="group flex items-center gap-3">
          <Image
            src="/brand/logo.png"
            alt="Dental 7 Aesthetics logo"
            width={44}
            height={44}
            className="h-11 w-11 rounded-full shadow-glow transition-transform duration-500 group-hover:scale-105"
            priority
          />
          <div className="leading-tight">
            <p className="font-display text-lg tracking-[0.04em] text-white md:text-xl">
              Dental 7 Aesthetics
            </p>
            <p className="hidden text-[10px] uppercase tracking-brand text-silver-300 sm:block">
              Karachi
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-silver-200/90 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href={clinic.instagram}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/25 bg-white/10 px-5 py-2.5 text-sm text-white transition hover:bg-white hover:text-navy-900"
          >
            Book via Instagram
          </a>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span
              className={`block h-px w-5 bg-white transition ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
            />
            <span className={`block h-px w-5 bg-white transition ${open ? "opacity-0" : ""}`} />
            <span
              className={`block h-px w-5 bg-white transition ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
            />
          </div>
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-navy-950/95 px-5 py-5 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-silver-100"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={clinic.instagram}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white px-5 py-3 text-center text-sm text-navy-900"
              onClick={() => setOpen(false)}
            >
              Book via Instagram
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
