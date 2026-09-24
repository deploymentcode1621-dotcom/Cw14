import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import { ICONS, PhoneIcon, ClockIcon, MapPinIcon } from "@/components/Icons";
import SitePhoto from "@/components/SitePhoto";
import CTASection from "@/components/CTASection";
import MapEmbed from "@/components/MapEmbed";

export const metadata = {
  title: "Home",
  description: `${siteConfig.tagline}. Modern dental care in ${siteConfig.city} — book your visit today.`,
};

// ---- Easy-to-edit hero stats. Move these into siteConfig later if you like. ----
const HERO_RATING = siteConfig.rating ?? "4.9";
const HERO_REVIEWS = siteConfig.reviewCount ?? "500+";
const HERO_PATIENTS = siteConfig.patientsCount ?? "5000+";
const HERO_YEARS = siteConfig.yearsExperience ?? "15+";

// Before/after photos for the floating card. Point these at real patient
// photos (with consent) in /public/images — falling back to existing
// images so nothing breaks if you haven't added them yet.
const BEFORE_IMG = siteConfig.beforeAfter?.before ?? "/images/before-smile.jpg";
const AFTER_IMG = siteConfig.beforeAfter?.after ?? "/images/after-smile.jpg";

// Main hero photo — full-bleed image on the right side of the hero.
// IMPORTANT: this filename must match EXACTLY what's in /public/images
// (case + extension). If your file is hero-doctor-female.png, change the
// line below to end in .png — a mismatch is the #1 cause of a "blurry"
// or missing hero photo.
const HERO_PHOTO = siteConfig.heroPhoto ?? "/images/hero-doctor-female.jpg";

function StarIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className}>
      <path d="M10 1.5l2.6 5.4 5.9.8-4.3 4.1 1 5.9L10 14.9l-5.2 2.8 1-5.9L1.5 7.7l5.9-.8L10 1.5z" />
    </svg>
  );
}

export default function HomePage() {
  const featuredServices = siteConfig.services.slice(0, 6);
  const quickServices = siteConfig.services.slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-surface-2/40">
        {/* Full-bleed photo, pinned to the right edge, fading into the
            text side with a gradient so it reads as one seamless hero
            instead of a photo "card". Hidden on mobile (simplified image
            below takes over there). */}
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[62%] lg:block">
          <SitePhoto
            src={HERO_PHOTO}
            alt="Female dentist smiling with a patient at Dr. Munde's Dental World"
            className="h-full w-full object-cover object-[72%_22%]"
            rounded="rounded-none"
          />
          {/* fade the left edge of the photo into the section background */}
          <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-surface-2/40 via-surface-2/10 to-transparent" />
        </div>

        <div className="container-page relative py-16 md:py-24 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            {/* Left: copy */}
            <div className="relative z-10">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand">
                <span className="h-px w-8 bg-brand" />
                Healthy Teeth &nbsp;•&nbsp; Confident Smiles &nbsp;•&nbsp; Lifelong Care
              </p>

              <h1 className="font-display mt-5 text-[2.75rem] leading-[1.05] font-bold text-ink md:text-[3.75rem] lg:text-[4.25rem]">
                Smile More.
                <br />
                <span className="text-brand">Worry Less.</span>
              </h1>

              <p className="mt-6 max-w-md text-[17px] leading-7 text-muted">
                From routine checkups to advanced treatments, we're here to
                keep your smile healthy, beautiful and confident — right
                here in {siteConfig.city}.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand/20 transition-colors hover:bg-brand-dark"
                >
                  <ClockIcon className="h-4 w-4" /> Book Appointment
                </Link>
                <a
                  href={`tel:${siteConfig.phone.tel}`}
                  className="flex items-center gap-2 rounded-full border border-line bg-white/80 px-7 py-3.5 text-sm font-semibold text-ink backdrop-blur transition-colors hover:border-brand hover:text-brand"
                >
                  <PhoneIcon className="h-4 w-4" /> Call Now
                </a>
              </div>

              {/* Rating row */}
              <div className="mt-9 flex flex-wrap items-center gap-8 border-t border-line pt-7">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold text-[#4285F4]">G</span>
                  <div>
                    <div className="flex items-center gap-1 text-amber-400">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <StarIcon key={i} className="h-4 w-4" />
                      ))}
                    </div>
                    <p className="text-sm">
                      <span className="font-semibold text-ink">{HERO_RATING}</span>{" "}
                      <span className="text-muted">Google Rating ({HERO_REVIEWS} reviews)</span>
                    </p>
                  </div>
                </div>

                <div>
                  <p className="font-display text-xl font-bold text-ink">{HERO_PATIENTS}</p>
                  <p className="text-xs text-muted">Happy Patients</p>
                </div>

                <div>
                  <p className="font-display text-xl font-bold text-ink">{HERO_YEARS}</p>
                  <p className="text-xs text-muted">Years Experience</p>
                </div>
              </div>

              {/* Quick feature strip */}
              <div className="mt-7 flex flex-wrap gap-x-8 gap-y-4 border-t border-line pt-6">
                {quickServices.map((service) => {
                  const Icon = ICONS[service.icon] ?? ICONS.tooth;
                  return (
                    <div key={service.title} className="flex items-center gap-2.5">
                      <Icon className="h-6 w-6 text-brand" />
                      <div>
                        <p className="text-sm font-medium text-ink">{service.title}</p>
                        <p className="text-xs text-muted">{service.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: floating cards over the full-bleed photo (photo itself
                is the absolutely-positioned layer above, so this column is
                just a spacer that holds the cards in place). Kept small and
                pinned to the true corners so they sit on hair/background,
                clear of the face. */}
            <div className="relative hidden min-h-[600px] lg:block">
              {/* Floating before/after card — pinned to the very top-right corner */}
              <div className="absolute top-2 right-2 w-44 overflow-hidden rounded-xl bg-white p-1 shadow-xl ring-1 ring-line">
                <div className="grid grid-cols-2 gap-1">
                  <div className="relative overflow-hidden rounded-lg">
                    <SitePhoto
                      src={BEFORE_IMG}
                      alt="Before treatment"
                      className="h-16 w-full bg-slate-100 object-cover"
                    />
                    <span className="absolute bottom-1 left-1 rounded-full bg-black/60 px-1.5 py-0.5 text-[9px] font-medium text-white">
                      Before
                    </span>
                  </div>
                  <div className="relative overflow-hidden rounded-lg">
                    <SitePhoto
                      src={AFTER_IMG}
                      alt="After treatment"
                      className="h-16 w-full bg-slate-100 object-cover"
                    />
                    <span className="absolute bottom-1 left-1 rounded-full bg-brand px-1.5 py-0.5 text-[9px] font-medium text-white">
                      After
                    </span>
                  </div>
                </div>
              </div>

              {/* Handwritten-style tag — tucked above the quick-links card,
                  clear of the before/after card and the face */}
              <p className="font-display absolute right-4 top-[13.5rem] -rotate-6 text-base italic text-brand drop-shadow-[0_1px_3px_rgba(255,255,255,0.9)]">
                Your Smile,
                <br />
                Our Commitment ♥
              </p>

              {/* Floating quick-links card — pinned to the bottom-right corner */}
              <div className="absolute bottom-2 right-2 w-52 rounded-xl bg-white p-3.5 shadow-xl ring-1 ring-line">
                <ul className="divide-y divide-line">
                  {quickServices.map((service) => {
                    const Icon = ICONS[service.icon] ?? ICONS.tooth;
                    return (
                      <li key={service.title} className="flex items-center justify-between gap-2.5 py-2 first:pt-0 last:pb-0">
                        <span className="flex items-center gap-2 text-[13px] font-medium text-ink">
                          <Icon className="h-4 w-4 shrink-0 text-brand" />
                          {service.title}
                        </span>
                        <span className="text-muted">›</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            {/* Mobile-only simplified image (floating cards hidden below lg) */}
            <div className="lg:hidden">
              <SitePhoto
                src={HERO_PHOTO}
                alt="Female dentist smiling with a patient at Dr. Munde's Dental World"
                className="h-72 w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-b border-line bg-white">
        <div className="container-page grid grid-cols-1 gap-6 py-10 sm:grid-cols-3">
          <div className="flex gap-3">
            <ClockIcon className="h-5 w-5 shrink-0 text-brand mt-0.5" />
            <div>
              <p className="text-sm font-medium text-ink">Open six days a week</p>
              <p className="text-sm text-muted">{siteConfig.hours[0].time}</p>
            </div>
          </div>
          <div className="flex gap-3">
            <MapPinIcon className="h-5 w-5 shrink-0 text-brand mt-0.5" />
            <div>
              <p className="text-sm font-medium text-ink">Easy to find</p>
              <p className="text-sm text-muted">{siteConfig.address.line1}, {siteConfig.city}</p>
            </div>
          </div>
          <div className="flex gap-3">
            <PhoneIcon className="h-5 w-5 shrink-0 text-brand mt-0.5" />
            <div>
              <p className="text-sm font-medium text-ink">Quick to reach</p>
              <p className="text-sm text-muted">Call or WhatsApp for same-day queries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="py-16 md:py-20">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-brand">What we treat</p>
              <h2 className="font-display mt-2 text-3xl md:text-4xl font-semibold text-ink">
                Care for every stage of your smile
              </h2>
            </div>
            <Link href="/services" className="text-sm font-medium text-brand hover:text-brand-dark">
              View all services
            </Link>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service) => {
              const Icon = ICONS[service.icon] ?? ICONS.tooth;
              return (
                <div
                  key={service.title}
                  className="rounded-2xl border border-line bg-white p-6 transition-colors hover:border-brand/40"
                >
                  <Icon className="h-7 w-7 text-brand" />
                  <h3 className="font-display mt-4 text-lg font-semibold text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Doctors preview */}
      <section className="border-y border-line bg-white py-16 md:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-medium text-brand">Meet the team</p>
            <h2 className="font-display mt-2 text-3xl md:text-4xl font-semibold text-ink">
              Care you can put a face to
            </h2>
            <p className="mt-4 text-[15px] leading-7 text-muted">
              Every treatment plan is explained in plain language before we
              begin — no surprises, no rushed appointments.
            </p>
            <Link
              href="/doctors"
              className="mt-6 inline-flex items-center text-sm font-medium text-brand hover:text-brand-dark"
            >
              Meet the doctors
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {siteConfig.doctors.map((doctor) => (
              <div key={doctor.name} className="rounded-2xl border border-line p-5">
                <SitePhoto src={doctor.photo} alt={doctor.name} className="h-48" />
                <p className="font-display mt-4 text-lg font-semibold text-ink">
                  {doctor.name}, {doctor.credentials}
                </p>
                <p className="text-sm text-brand">{doctor.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial preview */}
      <section className="py-16 md:py-20">
        <div className="container-page">
          <p className="text-sm font-medium text-brand">Patient stories</p>
          <h2 className="font-display mt-2 text-3xl md:text-4xl font-semibold text-ink">
            What patients say after their visit
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {siteConfig.testimonials.map((t) => (
              <figure key={t.quote} className="rounded-2xl bg-surface-2 p-6">
                <blockquote className="text-[15px] leading-7 text-ink/80">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-4 text-sm font-medium text-ink">
                  {t.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-16 md:pb-20">
        <div className="container-page grid gap-8 lg:grid-cols-[1fr_1fr] items-center">
          <div>
            <p className="text-sm font-medium text-brand">Find us</p>
            <h2 className="font-display mt-2 text-3xl md:text-4xl font-semibold text-ink">
              Located in {siteConfig.address.line1}
            </h2>
            <p className="mt-4 text-[15px] leading-7 text-muted">
              {siteConfig.address.full}
            </p>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.mapQuery)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-brand hover:text-brand-dark"
            >
              <MapPinIcon className="h-4 w-4" /> Get directions
            </a>
          </div>
          <MapEmbed />
        </div>
      </section>

      <CTASection />
    </>
  );
}