import { siteConfig } from "@/lib/siteConfig";
import PageHero from "@/components/PageHero";
import SitePhoto from "@/components/SitePhoto";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Doctors",
  description: `Meet the dental team at ${siteConfig.clinicName} in ${siteConfig.city}.`,
};

export default function DoctorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our team"
        title="Meet the doctors"
        description="Qualified, approachable, and focused on getting your treatment right the first time."
      />

      <section className="py-16 md:py-20">
        <div className="container-page grid gap-10 md:grid-cols-2">
          {siteConfig.doctors.map((doctor) => (
            <div key={doctor.name} className="rounded-3xl border border-line bg-white p-7">
              <SitePhoto src={doctor.photo} alt={doctor.name} className="h-72" />
              <h2 className="font-display mt-6 text-2xl font-semibold text-ink">
                {doctor.name}, {doctor.credentials}
              </h2>
              <p className="mt-1 text-sm font-medium text-brand">{doctor.role}</p>
              <p className="mt-4 text-[15px] leading-7 text-muted">{doctor.bio}</p>
            </div>
          ))}
        </div>

        <div className="container-page mt-4">
          <p className="text-xs text-muted">
            Editing note: confirm each doctor's full name, degree(s), and
            registration details in <code>lib/siteConfig.js</code> before
            publishing.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
