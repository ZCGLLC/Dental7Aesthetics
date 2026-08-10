import Image from "next/image";
import { clinic } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-navy-900/10 bg-navy-950 text-silver-200">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-14 md:flex-row md:items-end md:justify-between md:px-8">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/brand/logo.png"
              alt="Dental 7 Aesthetics logo"
              width={48}
              height={48}
              className="h-12 w-12 rounded-full"
            />
            <div>
              <p className="font-display text-2xl text-white">Dental 7 Aesthetics</p>
              <p className="text-xs uppercase tracking-[0.2em] text-silver-400">
                Karachi, Pakistan
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-silver-400">
            {clinic.tagline}. Follow our work and book consultations through Instagram.
          </p>
        </div>

        <div className="flex flex-col gap-3 text-sm md:items-end">
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
          <p className="text-silver-500">{clinic.location}</p>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-silver-500 md:px-8">
        © {new Date().getFullYear()} Dental 7 Aesthetics. All rights reserved.
      </div>
    </footer>
  );
}
