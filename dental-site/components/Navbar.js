"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/lib/siteConfig";
import { PhoneIcon } from "./Icons";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/doctors", label: "Doctors" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur">
      <div className="container-page flex h-18 items-center justify-between py-3">
        <Link href="/" className="flex items-baseline gap-2" onClick={() => setOpen(false)}>
          <span className="font-display text-xl md:text-2xl font-semibold text-ink">
            {siteConfig.clinicName}
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[15px] text-ink/80 hover:text-brand transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${siteConfig.phone.tel}`}
            className="flex items-center gap-2 text-sm font-medium text-brand-dark"
          >
            <PhoneIcon className="h-4 w-4" />
            {siteConfig.phone.display}
          </a>
          <Link
            href="/contact"
            className="rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-white hover:bg-brand-dark transition-colors"
          >
            Book a visit
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full border border-line"
        >
          <span className="sr-only">Menu</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            {open ? <path d="M5 5l10 10M15 5L5 15" /> : <path d="M3 5h14M3 10h14M3 15h14" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-line bg-white">
          <nav className="container-page flex flex-col py-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 text-[15px] text-ink border-b border-line/70 last:border-0"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${siteConfig.phone.tel}`}
              className="mt-3 mb-2 flex items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-medium text-white"
            >
              <PhoneIcon className="h-4 w-4" /> Call {siteConfig.phone.display}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
