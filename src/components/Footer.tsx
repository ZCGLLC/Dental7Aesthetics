import Image from "next/image";
import Link from "next/link";
import { clinic } from "@/lib/content";

const links = [
  { href: "/", label: "Home" },
  { href: "/services/", label: "Services" },
  { href: "/about/", label: "About Us" },
  { href: "/visit/", label: "Visit" },
];

export function Footer() {
  return (
    <footer className="border-t border-navy-900/10 bg-navy-950 text-silver-200">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.2fr_1fr] md:px-8">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/brand/logo-512.png"
              alt="Dental 7 Aesthetics logo"
              width={56}
              height={56}
              className="h-14 w-14 rounded-full"
            />
            <div>
              <p className="font-display text-2xl text-white">Dental 7 Aesthetics</p>
              <p className="text-xs uppercase tracking-[0.2em] text-silver-400">
                Karachi, Pakistan
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-silver-400">
            {clinic.tagline} Book consultations through Instagram.
          </p>
        </div>

        <div className="flex flex-col justify-between gap-8 sm:flex-row md:justify-end md:gap-16">
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-silver-500">Explore</p>
            <ul className="mt-3 space-y-2 text-sm">
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-sm sm:text-right">
            <p className="text-[11px] uppercase tracking-[0.2em] text-silver-500">Connect</p>
            <div className="mt-3 flex flex-col gap-2 sm:items-end">
              <a
                href={clinic.instagram}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-white"
              >
                Instagram {clinic.instagramHandle}
              </a>
              <a
                href={clinic.linkedin}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-white"
              >
                LinkedIn
              </a>
              <p className="max-w-xs text-silver-500 sm:text-right">{clinic.location}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-silver-500 md:px-8">
        © {new Date().getFullYear()} Dental 7 Aesthetics. All rights reserved.
      </div>
    </footer>
  );
}
