"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { clinic } from "@/lib/content";

const links = [
  { href: "/", label: "Home" },
  { href: "/services/", label: "Services" },
  { href: "/about/", label: "About Us" },
  { href: "/visit/", label: "Visit" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const isHome = pathname === "/" || pathname === "";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const solid = scrolled || !isHome || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-navy-950/90 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <Image
            src="/brand/logo-512.png"
            alt="Dental 7 Aesthetics logo"
            width={52}
            height={52}
            className="h-12 w-12 rounded-full shadow-glow transition-transform duration-500 group-hover:scale-105 md:h-[52px] md:w-[52px]"
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
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => {
            const active =
              link.href === "/"
                ? isHome
                : pathname === link.href || pathname === link.href.replace(/\/$/, "");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors ${
                  active ? "text-white" : "text-silver-200/90 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href={clinic.instagram}
            target="_blank"
            rel="noreferrer"
            className="rounded-sm border border-white/25 bg-white/10 px-5 py-2.5 text-sm text-white transition hover:bg-white hover:text-navy-900"
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
              <Link key={link.href} href={link.href} className="text-silver-100">
                {link.label}
              </Link>
            ))}
            <a
              href={clinic.instagram}
              target="_blank"
              rel="noreferrer"
              className="rounded-sm bg-white px-5 py-3 text-center text-sm text-navy-900"
            >
              Book via Instagram
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
