import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import { PhoneIcon, MapPinIcon, ClockIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="bg-ink text-white/90">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-xl font-semibold text-white">
            {siteConfig.clinicName}
          </p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-white/60">
            {siteConfig.tagline}. Serving families across {siteConfig.city} with
            modern, comfortable dental care.
          </p>
          <div className="mt-5 flex gap-4 text-sm text-white/60">
            {siteConfig.social.facebook && (
              <a href={siteConfig.social.facebook} className="hover:text-white">Facebook</a>
            )}
            {siteConfig.social.instagram && (
              <a href={siteConfig.social.instagram} className="hover:text-white">Instagram</a>
            )}
            {siteConfig.social.google && (
              <a href={siteConfig.social.google} className="hover:text-white">Google</a>
            )}
          </div>
        </div>

        <div>
          <p className="text-sm font-medium tracking-wide text-white/50">Pages</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {[
              ["Home", "/"],
              ["Services", "/services"],
              ["About", "/about"],
              ["Doctors", "/doctors"],
              ["Testimonials", "/testimonials"],
              ["FAQ", "/faq"],
              ["Contact", "/contact"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="text-white/70 hover:text-white">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium tracking-wide text-white/50">Visit us</p>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li className="flex gap-2.5">
              <MapPinIcon className="h-4 w-4 shrink-0 mt-0.5 text-amber" />
              <span>{siteConfig.address.line1}, {siteConfig.address.line2}</span>
            </li>
            <li className="flex gap-2.5">
              <PhoneIcon className="h-4 w-4 shrink-0 mt-0.5 text-amber" />
              <a href={`tel:${siteConfig.phone.tel}`}>{siteConfig.phone.display}</a>
            </li>
            <li className="flex gap-2.5">
              <ClockIcon className="h-4 w-4 shrink-0 mt-0.5 text-amber" />
              <span>{siteConfig.hours[0].day}: {siteConfig.hours[0].time}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <p className="container-page text-xs text-white/40">
          © {new Date().getFullYear()} {siteConfig.clinicName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
