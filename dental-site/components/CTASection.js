import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import { PhoneIcon } from "./Icons";

export default function CTASection() {
  return (
    <section className="bg-ink">
      <div className="container-page py-16 md:py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-white max-w-md">
            Ready to fix that appointment you keep putting off?
          </h2>
          <p className="mt-3 max-w-md text-white/60">
            A short call is all it takes. We'll find a time that works and
            explain the treatment before you arrive.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          <a
            href={`tel:${siteConfig.phone.tel}`}
            className="flex items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-medium text-white hover:bg-white/10 transition-colors"
          >
            <PhoneIcon className="h-4 w-4" /> {siteConfig.phone.display}
          </a>
          <Link
            href="/contact"
            className="flex items-center justify-center rounded-full bg-amber px-6 py-3.5 text-sm font-medium text-ink hover:brightness-95 transition"
          >
            Book an appointment
          </Link>
        </div>
      </div>
    </section>
  );
}
