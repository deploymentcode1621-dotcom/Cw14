import { siteConfig } from "@/lib/siteConfig";
import { ICONS } from "@/components/Icons";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Services",
  description:
    "Explore dental services at " + siteConfig.clinicName + ": check-ups, root canal, braces, implants, cosmetic dentistry, and more in " + siteConfig.city + ".",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Treatment for every part of your smile"
        description="From routine cleaning to complete smile makeovers, each treatment plan is built around your comfort, timeline, and budget."
      />

      <section className="py-16 md:py-20">
        <div className="container-page grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.services.map((service) => {
            const Icon = ICONS[service.icon] ?? ICONS.tooth;
            return (
              <div
                key={service.title}
                className="rounded-2xl border border-line bg-white p-7"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-surface-2">
                  <Icon className="h-6 w-6 text-brand" />
                </div>
                <h2 className="font-display mt-5 text-xl font-semibold text-ink">
                  {service.title}
                </h2>
                <p className="mt-2.5 text-[15px] leading-6 text-muted">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="border-t border-line bg-white py-16 md:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-medium text-brand">How it works</p>
            <h2 className="font-display mt-2 text-3xl font-semibold text-ink">
              Your visit, in three steps
            </h2>
          </div>
          <ol className="grid gap-6 sm:grid-cols-3">
            {[
              {
                step: "1",
                title: "Tell us what's wrong",
                text: "Call, WhatsApp, or use the contact form to describe your concern.",
              },
              {
                step: "2",
                title: "We plan the visit",
                text: "We confirm a slot and let you know what to expect and roughly how long it will take.",
              },
              {
                step: "3",
                title: "Treatment & follow-up",
                text: "We walk you through the treatment as it happens and schedule any follow-up needed.",
              },
            ].map((item) => (
              <li key={item.step} className="rounded-2xl bg-surface-2 p-6">
                <span className="font-display text-2xl font-semibold text-brand">
                  {item.step}
                </span>
                <p className="mt-3 font-medium text-ink">{item.title}</p>
                <p className="mt-1.5 text-sm leading-6 text-muted">{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CTASection />
    </>
  );
}
