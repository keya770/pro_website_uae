import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import SectionTitle from "@/components/section-title";
import { services } from "@/lib/services";
import { ShieldCheckIcon, DocumentCheckIcon, ClockIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

const logo = "/pro_logo.png";

export const metadata: Metadata = {
  title: "UAE PRO & Visa Services | Corporate PRO Support & Documentation in Dubai",
  description:
    "Explore UAE PRO services, corporate PRO support, 2-year freelance visa UAE, employment visa Dubai, fine waiver help, and business setup across Dubai mainland and freezones.",
  alternates: { canonical: "https://example.ae/services" },
  openGraph: {
    title: "UAE PRO & Visa Services | Corporate PRO Support & Documentation in Dubai",
    description:
      "Full catalogue of UAE PRO services, Dubai business setup, freelance visa UAE, employment visa Dubai, and fine waiver assistance with transparent pricing.",
    url: "https://example.ae/services",
    type: "website",
    siteName: "HCT Services | AL HASEL Consultancy Services LLC",
    images: [
      { url: "https://example.ae/og-image.jpg", width: 1200, height: 630, alt: "UAE PRO services catalog in Dubai" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UAE PRO & Visa Services | Corporate PRO Support & Documentation in Dubai",
    description:
      "Corporate PRO support, freelance visa UAE, employment visa Dubai, and Dubai business setup services by AL HASEL Consultancy (HCT Services).",
    images: ["https://example.ae/og-image.jpg"],
  },
};

const ServicesPage = () => {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://example.ae" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://example.ae/services" },
    ],
  };

  return (
    <div className="bg-white">
      <h1 className="sr-only">UAE PRO services, visa processing, and Dubai business setup</h1>
      <section className="border-b border-slate-100 bg-gradient-to-br from-[var(--color-light)] via-white to-[#eef2ff] py-12 sm:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[2fr,1fr] lg:items-center">
            <div className="space-y-4">
              <SectionTitle
                eyebrow="Services"
                title="UAE PRO & Visa services built for speed"
                subtitle="Providing 2-year freelance visa at investment pricing plus full PRO, visa, and business setup support."
              />
              {/* Decorative image */}
              <div className="relative h-48 w-full rounded-2xl overflow-hidden bg-gradient-to-br from-[var(--color-green)]/10 to-[var(--color-green)]/5 border border-slate-200 mt-6 hidden lg:block">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image 
                    src={logo} 
                    alt="UAE PRO Services" 
                    width={180} 
                    height={180} 
                    className="object-contain opacity-15"
                  />
                </div>
              </div>
              <div className="flex flex-wrap gap-3 text-sm text-slate-600">
                <span className="flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm ring-1 ring-slate-200">
                  <ShieldCheckIcon className="h-4 w-4 text-[var(--color-green)]" />
                  Compliance-first approach
                </span>
                <span className="flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm ring-1 ring-slate-200">
                  <DocumentCheckIcon className="h-4 w-4 text-[var(--color-green)]" />
                  Clear document checklists
                </span>
                <span className="flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm ring-1 ring-slate-200">
                  <ClockIcon className="h-4 w-4 text-[var(--color-green)]" />
                  Fast processing & updates
                </span>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-100 sm:p-7">
              <div className="text-sm font-semibold text-[var(--color-navy)]">Need guidance?</div>
              <p className="balanced mt-2 text-sm text-slate-600">
                Tell us what you need and we will map the right package, timeline, and government steps for your case.
              </p>
              <Link
                href="/contact"
                className="cta-dark mt-4 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold bg-[var(--color-green)] hover:bg-[var(--color-green-light)]"
              >
                <span>Book a consultation</span>
                <span className="text-base leading-none">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.slug}
              className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-100 transition hover:-translate-y-1 hover:shadow-2xl hover:border-[var(--color-green)]/30"
            >
              <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[var(--color-green)] via-[#1a8a4a] to-[var(--color-green-dark)]" />
              
              {/* Service Image */}
              <div className="relative h-32 w-full rounded-xl overflow-hidden mb-2">
                <Image 
                  src="/medium-shot-smiley-business-man.jpg"
                  alt={service.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent" />
              </div>
              
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-green)]">
                  {service.tagline}
                </div>
                <h2 className="balanced mt-2 text-lg font-semibold text-[var(--color-charcoal)]">{service.name}</h2>
              </div>
              <p className="balanced text-sm text-[var(--color-charcoal-light)]">{service.description}</p>
              <div className="mt-auto text-sm text-[var(--color-charcoal-light)]">
                <div>
                  <span className="font-semibold text-[var(--color-charcoal)]">Processing:</span> {service.processingTime}
                </div>
                <div>
                  <span className="font-semibold text-[var(--color-charcoal)]">Starting fee:</span> {service.startingFee}
                </div>
              </div>
              <Link
                href={`/services/${service.slug}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-green)] transition hover:gap-3"
              >
                View details <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>
      <Script
        id="breadcrumb-services"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
    </div>
  );
};

export default ServicesPage;
