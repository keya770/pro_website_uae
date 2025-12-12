import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { notFound } from "next/navigation";
import SectionTitle from "@/components/section-title";
import ServiceEnquiryForm from "@/components/service-enquiry-form";
import { getServiceBySlug, services } from "@/lib/services";
import { ShieldCheckIcon, ClockIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { siteBaseUrl, withBasePath, withBaseUrl } from "@/lib/withBasePath";

const logo = withBasePath("/pro_logo.png");
const serviceImage = withBasePath("/medium-shot-smiley-business-man.jpg");
const serviceOgImage = withBaseUrl("/standard-quality-control-collage-concept.jpg");

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) {
    return {
      title: "Service not found | HCT Services",
    };
  }

  const canonicalUrl = withBaseUrl(`/services/${service.slug}`);

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: canonicalUrl,
      type: "article",
      siteName: "HCT Services | AL HASEL Consultancy Services LLC",
      images: [
        {
          url: serviceOgImage,
          width: 1200,
          height: 630,
          alt: `${service.name} UAE PRO services`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription,
      images: [serviceOgImage],
    },
  };
}

const ServicePage = ({ params }: { params: { slug: string } }) => {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  const currentService = service;
  const relatedServices = services.filter((item) => item.slug !== currentService.slug).slice(0, 3);
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteBaseUrl },
      { "@type": "ListItem", position: 2, name: "Services", item: withBaseUrl("/services") },
      {
        "@type": "ListItem",
        position: 3,
        name: currentService.name,
        item: withBaseUrl(`/services/${currentService.slug}`),
      },
    ],
  };
  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: currentService.name,
    serviceType: currentService.shortDescription,
    areaServed: "United Arab Emirates",
    provider: {
      "@type": "LocalBusiness",
      name: "HCT Services | AL HASEL Consultancy Services LLC",
      telephone: "+971545420537",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dubai",
        addressCountry: "AE",
      },
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "AED",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <div className="bg-white">
      <div className="mx-auto flex max-w-6xl items-center gap-2 px-4 pt-6 text-xs text-[var(--color-charcoal-light)] sm:px-6 lg:px-8">
        <Link href="/" className="hover:text-[var(--color-green)] transition">
          Home
        </Link>
        <span aria-hidden="true">/</span>
        <Link href="/services" className="hover:text-[var(--color-green)] transition">
          Services
        </Link>
        <span aria-hidden="true">/</span>
        <span className="font-semibold text-[var(--color-charcoal)]">{currentService.name}</span>
      </div>
      <section className="relative overflow-hidden bg-gradient-to-br from-[var(--color-charcoal)] via-[var(--color-charcoal-light)] to-[var(--color-charcoal-dark)] py-12 text-white sm:py-14">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E1E1E] via-[#2E2E2E] to-[#1E1E1E] opacity-90" />
        <div className="absolute right-10 top-6 h-40 w-40 rounded-full bg-[var(--color-green)]/15 blur-3xl" />
        <div className="absolute left-0 top-0 w-64 h-64 opacity-10">
          <Image src={logo} alt="" width={256} height={256} className="object-contain" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-green)]">PRO Services</p>
          <h1 className="balanced mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
            {service?.name}
          </h1>
          <p className="balanced mt-3 max-w-3xl text-base text-slate-200">{currentService.tagline}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[2fr,1fr]">
          <div className="space-y-6">
            {/* Service Image */}
            <div className="relative h-64 w-full rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
              <Image 
                src={serviceImage}
                alt={currentService.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h2 className="text-2xl font-semibold text-[var(--color-charcoal)]">{currentService.name}</h2>
                <p className="text-sm text-[var(--color-charcoal-light)] mt-1">{currentService.tagline}</p>
              </div>
            </div>
            
            <SectionTitle
              eyebrow="Overview"
              title={currentService.name}
              subtitle={currentService.description}
            />

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex items-center gap-2 text-sm font-semibold text-[var(--color-charcoal)]">
                  <ClockIcon className="h-4 w-4 text-[var(--color-green)]" /> Processing time
                </div>
                <p className="mt-2 text-sm text-[var(--color-charcoal-light)]">{currentService.processingTime}</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex items-center gap-2 text-sm font-semibold text-[var(--color-charcoal)]">
                  <SparklesIcon className="h-4 w-4 text-[var(--color-green)]" /> Starting fee
                </div>
                <p className="mt-2 text-sm text-[var(--color-charcoal-light)]">{currentService.startingFee}</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:col-span-2">
                <div className="flex items-center gap-2 text-sm font-semibold text-[var(--color-charcoal)]">
                  <ShieldCheckIcon className="h-4 w-4 text-[var(--color-green)]" /> Ideal for
                </div>
                <p className="mt-2 text-sm text-[var(--color-charcoal-light)]">{currentService.idealFor}</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[var(--color-charcoal)]">What&apos;s Included</h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {currentService.whatsIncluded.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-xl bg-slate-50 px-4 py-3 border border-slate-100">
                    <span className="text-[var(--color-green)] font-bold">•</span>
                    <p className="text-sm text-[var(--color-charcoal-light)]">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <div>
                <h3 className="text-lg font-semibold text-[var(--color-charcoal)]">Eligibility</h3>
                <ul className="mt-3 space-y-2 text-sm text-[var(--color-charcoal-light)]">
                  {currentService.eligibility.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-[var(--color-green)] font-bold">–</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[var(--color-charcoal)]">Required Documents</h3>
                <ul className="mt-3 space-y-2 text-sm text-[var(--color-charcoal-light)]">
                  {currentService.documents.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-[var(--color-green)] font-bold">–</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[var(--color-charcoal)]">Step-by-step process</h3>
              <div className="mt-4 space-y-3">
                {currentService.steps.map((step, index) => (
                  <div key={step} className="flex gap-3 rounded-xl border border-slate-200 bg-white p-3 shadow-sm hover:border-[var(--color-green)]/30 transition">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-green)] text-xs font-semibold text-white flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-sm text-[var(--color-charcoal-light)]">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6 lg:sticky lg:top-28">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-100 sm:p-6">
              <div className="text-sm font-semibold text-[var(--color-charcoal)]">Summary</div>
              <p className="balanced mt-2 text-sm text-[var(--color-charcoal-light)]">{currentService.shortDescription}</p>
              <div className="mt-4 space-y-2 text-sm text-[var(--color-charcoal-light)]">
                <div>
                  <span className="font-semibold text-[var(--color-charcoal)]">Processing:</span> {currentService.processingTime}
                </div>
                <div>
                  <span className="font-semibold text-[var(--color-charcoal)]">Starting fee:</span> {currentService.startingFee}
                </div>
                <div>
                  <span className="font-semibold text-[var(--color-charcoal)]">Ideal for:</span> {currentService.idealFor}
                </div>
              </div>
            </div>

            <div>
              <div className="mb-3 text-sm font-semibold text-[var(--color-charcoal)]">Request this service now</div>
              <ServiceEnquiryForm serviceName={currentService.name} />
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-4 pb-14 pt-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-[var(--color-charcoal)]">Related UAE PRO & visa services</h2>
          <p className="mt-2 text-sm text-[var(--color-charcoal-light)]">
            Explore more UAE PRO services, Dubai business setup, and visa solutions tailored to your needs.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-1 md:grid-cols-3">
            {relatedServices.map((item) => (
              <Link
                key={item.slug}
                href={`/services/${item.slug}`}
                className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-semibold text-[var(--color-charcoal)] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md hover:border-[var(--color-green)]/30"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <Script
        id="service-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />
    </div>
  );
};

export default ServicePage;
