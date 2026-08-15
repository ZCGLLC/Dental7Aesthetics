import { SiteImage as Image } from "@/components/SiteImage";
import Link from "next/link";
import { clinic } from "@/lib/content";

const links = [
  { href: "/", label: "Home" },
  { href: "/services/", label: "Services" },
  { href: "/about/", label: "About Us" },
  { href: "/visit/", label: "Visit" },
  { href: "/book/", label: "Book Appointment" },
];

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="2.5"
        y="2.5"
        width="19"
        height="19"
        rx="5.5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="12" cy="12" r="4.25" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.35" cy="6.65" r="1.1" fill="currentColor" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S.02 4.88.02 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.2 8.25h4.6V23H.2V8.25zM8.34 8.25h4.41v2.01h.06c.61-1.16 2.11-2.38 4.35-2.38 4.65 0 5.51 3.06 5.51 7.04V23h-4.6v-6.63c0-1.58-.03-3.61-2.2-3.61-2.2 0-2.54 1.72-2.54 3.5V23h-4.59V8.25z" />
    </svg>
  );
}

const socials = [
  {
    href: clinic.instagram,
    label: "Instagram",
    handle: clinic.instagramHandle,
    Icon: InstagramIcon,
  },
  {
    href: clinic.linkedin,
    label: "LinkedIn",
    handle: "Dental 7 Aesthetics",
    Icon: LinkedInIcon,
  },
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
            {clinic.tagline}
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
            <div className="mt-3 flex flex-col gap-3 sm:items-end">
              {socials.map(({ href, label, handle, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 transition hover:text-white"
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  <span>
                    {label}
                    <span className="text-silver-500"> · {handle}</span>
                  </span>
                </a>
              ))}
              <address className="mt-1 max-w-[16rem] not-italic leading-relaxed text-silver-500 sm:text-right">
                {clinic.locationLines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </address>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-center text-xs text-silver-500 sm:text-left">
            © {new Date().getFullYear()} Dental 7 Aesthetics. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={`bottom-${label}`}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-silver-400 transition hover:border-white/30 hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
