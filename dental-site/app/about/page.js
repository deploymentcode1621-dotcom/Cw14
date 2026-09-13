import { siteConfig } from "@/lib/siteConfig";
import { ShieldIcon, SparkleIcon, ClockIcon } from "@/components/Icons";
import PageHero from "@/components/PageHero";
import SitePhoto from "@/components/SitePhoto";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "About",
  description: `The story, values, and hours of ${siteConfig.clinicName} in ${siteConfig.city}.`,
};

const values = [
  {
    icon: ShieldIcon,
    title: "Careful, unhurried treatment",
    text: "We take the time to explain a diagnosis before recommending treatment, so you always know what's happening and why.",
  },
  {
    icon: SparkleIcon,
    title: "Modern equipment & hygiene",
    text: "Sterilisation protocols and up-to-date instruments are followed for every single patient, every single time.",
  },
  {
    icon: ClockIcon,
    title: "Respect for your time",
    text: "Appointments are scheduled to minimise waiting, with clear timelines for multi-visit treatments.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={`The story behind ${siteConfig.clinicName}`}
        description={`A dental clinic built for ${siteConfig.city} — combining modern dentistry with the kind of care you'd want for your own family.`}
      />

      <section className="py-16 md:py-20">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <SitePhoto src="/images/clinic-interior.png" alt="Clinic interior" className="h-80 lg:h-[420px]" />
          <div>
            <h2 className="font-display text-3xl font-semibold text-ink">
              Dentistry that puts the patient first
            </h2>
            {/* EDIT_ME — replace this paragraph with the clinic's real founding
                story, year established, and any specialisations. */}
            <p className="mt-4 text-[15px] leading-7 text-muted">
              {siteConfig.clinicName} was started with a simple goal: make
              dental visits something people don't dread. That means clear
              communication, gentle handling, and equipment that keeps
              procedures as quick and comfortable as possible — whether
              you're in for a routine clean-up or a more involved procedure
              like a root canal or implant.
            </p>
            <p className="mt-4 text-[15px] leading-7 text-muted">
              We treat patients of every age, from a child's first check-up
              to complete smile restorations for adults, and we're based
              right in {siteConfig.address.line1}, {siteConfig.city}.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-white py-16 md:py-20">
        <div className="container-page">
          <p className="text-sm font-medium text-brand">What guides us</p>
          <h2 className="font-display mt-2 text-3xl font-semibold text-ink">
            Our approach to care
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl bg-surface-2 p-6">
                <v.icon className="h-6 w-6 text-brand" />
                <h3 className="font-display mt-4 text-lg font-semibold text-ink">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-medium text-brand">Clinic hours</p>
            <h2 className="font-display mt-2 text-3xl font-semibold text-ink">
              When you can find us
            </h2>
            <ul className="mt-6 divide-y divide-line rounded-2xl border border-line">
              {siteConfig.hours.map((h) => (
                <li key={h.day} className="flex items-center justify-between px-5 py-4 text-sm">
                  <span className="font-medium text-ink">{h.day}</span>
                  <span className="text-muted">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
          <SitePhoto src="/images/Waitingroom.avif" className="h-64 lg:h-full" />
        </div>
      </section>

      <CTASection />
    </>
  );
}
