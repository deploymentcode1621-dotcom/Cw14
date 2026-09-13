import { siteConfig } from "@/lib/siteConfig";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Testimonials",
  description: `Read what patients say about visiting ${siteConfig.clinicName} in ${siteConfig.city}.`,
};

function Stars({ rating }) {
  return (
    <div className="flex gap-0.5 text-amber" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" width="16" height="16" fill={i < rating ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1">
          <path d="M10 1.5l2.6 5.3 5.9.8-4.3 4.1 1 5.8L10 14.7l-5.2 2.8 1-5.8L1.5 7.6l5.9-.8z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="What patients say"
        description="A few notes from people we've treated. Real reviews from your Google Business Profile can replace these once you have permission to publish them."
      />

      <section className="py-16 md:py-20">
        <div className="container-page grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {siteConfig.testimonials.map((t) => (
            <figure key={t.quote} className="flex flex-col rounded-2xl border border-line bg-white p-7">
              <Stars rating={t.rating} />
              <blockquote className="mt-4 flex-1 text-[15px] leading-7 text-ink/80">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-5 text-sm font-medium text-ink">
                {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
