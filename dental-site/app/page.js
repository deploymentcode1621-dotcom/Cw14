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

export default function HomePage() {
  const featuredServices = siteConfig.services.slice(0, 6);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line">
        <div className="container-page grid gap-12 py-14 md:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-medium text-brand">
              Dentist in {siteConfig.city}
            </p>
            <h1 className="font-display mt-4 text-[2.6rem] leading-[1.08] md:text-6xl font-semibold text-ink">
              A calmer visit to the dentist, right here in Latur.
            </h1>
            <p className="mt-5 max-w-md text-[17px] leading-7 text-muted">
              {siteConfig.clinicName} brings together modern equipment,
              unhurried explanations, and gentle care — for check-ups,
              root canals, braces, and full smile makeovers.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`tel:${siteConfig.phone.tel}`}
                className="flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-medium text-white hover:bg-brand-dark transition-colors"
              >
                <PhoneIcon className="h-4 w-4" /> Call {siteConfig.phone.display}
              </a>
              <Link
                href="/contact"
                className="flex items-center gap-2 rounded-full border border-line px-6 py-3.5 text-sm font-medium text-ink hover:border-brand hover:text-brand transition-colors"
              >
                Book an appointment
              </Link>
            </div>

            <dl className="mt-10 grid grid-cols-3 gap-6 max-w-md border-t border-line pt-6">
              <div>
                <dt className="text-xs text-muted">Care for</dt>
                <dd className="font-display text-xl font-semibold text-ink">All ages</dd>
              </div>
              <div>
                <dt className="text-xs text-muted">Services</dt>
                <dd className="font-display text-xl font-semibold text-ink">{siteConfig.services.length}+</dd>
              </div>
              <div>
                <dt className="text-xs text-muted">Location</dt>
                <dd className="font-display text-xl font-semibold text-ink">Narayan Nagar</dd>
              </div>
            </dl>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <SitePhoto
              src="/images/clinic-exterior.webp"
              alt="Clinic exterior"
              className="col-span-2 h-64"
            />
            <SitePhoto
              src="/images/Treatmentroom.webp"
              alt="Treatment room"
              className="h-44"
            />
            <SitePhoto
              src="/images/dratwork.jpg"
              alt="Doctor at work"
              className="h-44"
            />
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

      {/* Clinic video */}
      <section className="py-16 md:py-20">
        <div className="container-page">
          <p className="text-sm font-medium text-brand">Take a look inside</p>
          <h2 className="font-display mt-2 text-3xl md:text-4xl font-semibold text-ink">
            A quick tour of the clinic
          </h2>
          <p className="mt-3 max-w-lg text-[15px] leading-7 text-muted">
            A short walkthrough of the space before your first visit — replace
            this with a real clinic tour whenever you have one filmed.
          </p>
          <div className="mt-8 overflow-hidden rounded-3xl border border-line">
            <video
              className="w-full aspect-video"
              controls
              muted
              loop
              playsInline
              poster="/images/clinic-exterior.jpg"
            >
              <source src="/videos/clinicintro.mp4" type="video/mp4" />
            </video>
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
