import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import type { Metadata } from "next";
import Hero from "@/components/hero";
import ServiceCard from "@/components/service-card";
import SectionTitle from "@/components/section-title";
import FAQAccordion from "@/components/faq-accordion";
import TestimonialCard from "@/components/testimonial-card";
import { faqItems, featureHighlights, processSteps, testimonialItems } from "@/lib/content";
import { services } from "@/lib/services";
import { siteBaseUrl, withBasePath, withBaseUrl } from "@/lib/withBasePath";
import {
  BriefcaseIcon,
  ShieldCheckIcon,
  ClockIcon,
  UserGroupIcon,
  SparklesIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/24/outline";

const homeOgImage = withBaseUrl("/standard-quality-control-collage-concept.jpg");

export const metadata: Metadata = {
  title: "UAE PRO Services, Visa & Business Setup | Dubai Mainland & Freezone Experts",
  description:
    "UAE PRO services, freelance visa UAE, employment visa Dubai, fine waiver help, and Dubai business setup by AL HASEL Consultancy (HCT Services).",
  alternates: { canonical: siteBaseUrl },
  openGraph: {
    title: "UAE PRO Services, Visa & Business Setup | Dubai Mainland & Freezone Experts",
    description:
      "End-to-end UAE PRO services, Dubai business setup, 2-year freelance visa UAE support, and employment visa processing across the UAE.",
    url: siteBaseUrl,
    type: "website",
    siteName: "HCT Services | AL HASEL Consultancy Services LLC",
    images: [
      {
        url: homeOgImage,
        width: 1200,
        height: 630,
        alt: "UAE PRO services and Dubai business setup by HCT Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UAE PRO Services, Visa & Business Setup | Dubai Mainland & Freezone Experts",
    description:
      "Freelance visa UAE, employment visa Dubai, and Dubai business setup with fast PRO services by AL HASEL Consultancy (HCT Services).",
    images: [homeOgImage],
  },
};

const serviceIcons = [BriefcaseIcon, ShieldCheckIcon, ClockIcon, UserGroupIcon, SparklesIcon];
const featureIcons = [ShieldCheckIcon, SparklesIcon, ClockIcon, UserGroupIcon];
const serviceImage = withBasePath("/medium-shot-smiley-business-man.jpg");

export default function Home() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <Hero
  title="Dubai PRO & Visa Services"
  subtitle="Fast, reliable PRO services, visas & business setup in UAE."
  primaryCta={{ label: "Get Consultation", href: "/contact" }}
  secondaryCta={{ label: "View Services", href: "/services" }}
  highlights={[
    "Quick PRO Processing",
    "Freelance & Employment Visas",
    "Business Setup Services",
  ]}
/>


      <section id="services" className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Services"
            title="Our Core UAE PRO & Visa Services"
            subtitle="UAE PRO services, Dubai business setup, freelance visa UAE, employment visa Dubai, fine waiver assistance, and corporate documentation support."
            align="center"
          />
          
          <div className="mt-10 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = serviceIcons[index % serviceIcons.length];
              return (
                <div
                  key={service.slug}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${0.1 + index * 0.1}s`, opacity: 0 }}
                >
                  <ServiceCard
                    service={service}
                    icon={<Icon className="h-6 w-6" />}
                  />
                </div>
              );
            })}
          </div>
          
          <div className="mt-10 text-center">
            <Link 
              href="/services" 
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-green)] px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-[var(--color-green)]/50 transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--color-green-light)] hover:shadow-[var(--color-green)]/60 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
              <span className="relative z-10">View all UAE PRO & Visa Services</span>
              <span className="relative z-10 text-base transition-transform group-hover:translate-x-1">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-[var(--color-charcoal)] via-[var(--color-charcoal-light)] to-[var(--color-charcoal-dark)] py-12 sm:py-16 text-white">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={serviceImage}
            alt="Why Choose Us"
            fill
            className="object-cover opacity-20"
          />
        </div>
        
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E1E1E]/95 via-[#2E2E2E]/90 to-[#1E1E1E]/95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(15,106,54,0.15),transparent_35%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,rgba(15,106,54,0.10),transparent_30%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_35%,rgba(255,255,255,0.08)_70%)] opacity-40" />
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        {/* Floating decorative elements */}
        <div className="absolute left-10 top-20 h-32 w-32 rounded-full bg-[var(--color-green)]/10 blur-2xl animate-[floaty_10s_ease-in-out_infinite]" />
        <div className="absolute right-10 bottom-20 h-40 w-40 rounded-full bg-[var(--color-green)]/10 blur-2xl animate-[floaty_12s_ease-in-out_infinite]" style={{ animationDelay: "2s" }} />
        
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 sm:mb-16">
            <SectionTitle
              eyebrow="Why choose us"
              title="Fast, reliable, professional, and affordable support"
              subtitle="Your trusted partner for document clearing, PRO services, and business setup needs across Dubai."
              align="center"
              variant="dark"
            />
          </div>
          
          {/* Timeline Container */}
          <div className="relative mt-10">
            {/* Vertical Timeline Line - Hidden on mobile, visible on md+ */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[var(--color-green)] via-[var(--color-green)]/80 to-[var(--color-green)] transform -translate-x-1/2 shadow-[0_0_20px_rgba(15,106,54,0.5)]" />
            
            {/* Timeline Items */}
            <div className="space-y-6 sm:space-y-8">
              {featureHighlights.map((feature, index) => {
                const Icon = featureIcons[index % featureIcons.length];
                const isEven = index % 2 === 0;
                const isFirst = index === 0;
                
                return (
                  <div
                    key={feature.title}
                    className={`relative flex flex-col md:flex-row items-center gap-4 md:gap-6 ${
                      isEven ? "md:flex-row" : "md:flex-row-reverse"
                    } animate-fade-in-up`}
                    style={{ animationDelay: `${0.2 + index * 0.15}s`, opacity: 0 }}
                  >
                    {/* Timeline Marker with glow */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className={`w-4 h-4 md:w-5 md:h-5 rounded-full transition-all duration-300 hover:scale-125 ${
                        isFirst 
                          ? "bg-[var(--color-green)] ring-3 ring-[var(--color-green)]/30 shadow-md shadow-[var(--color-green)]/40 animate-pulse" 
                          : "bg-white ring-2 ring-[var(--color-green)] border-2 border-[var(--color-green)] shadow-sm shadow-[var(--color-green)]/20"
                      }`} />
                      {/* Glow effect */}
                      <div className={`absolute inset-0 rounded-full ${
                        isFirst ? "bg-[var(--color-green)]" : "bg-white"
                      } opacity-40 blur-sm animate-pulse`} />
                    </div>

                    {/* Content Box */}
                    <div className={`flex-1 w-full md:max-w-[45%] ${
                      isEven ? "md:text-right md:pr-6" : "md:text-left md:pl-6"
                    }`}>
                      <div className="group relative rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-4 sm:p-5 shadow-xl shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-green)]/40 hover:bg-white/10 hover:shadow-[var(--color-green)]/10">
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 rounded-xl" />
                        
                        {/* Icon */}
                        <div className={`flex items-center gap-3 mb-3 ${
                          isEven ? "md:flex-row-reverse" : ""
                        }`}>
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-green)]/20 text-[var(--color-green)] ring-1 ring-[var(--color-green)]/30 shadow-md transition-transform duration-300 group-hover:scale-110">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-base sm:text-lg font-semibold text-white mb-1 drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
                              {feature.title}
                            </h3>
                            <div className="h-0.5 w-12 bg-gradient-to-r from-[var(--color-green)] to-transparent" />
                          </div>
                        </div>
                        
                        {/* Description */}
                        <p className="text-xs sm:text-sm text-slate-200 leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.3)]">
                          {feature.description}
                        </p>
                        
                        {/* Decorative corner accent */}
                        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[var(--color-green)]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>

                    {/* Spacer for mobile - ensures proper alignment */}
                    <div className="hidden md:block flex-1 md:max-w-[45%]" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/70 bg-white/90 p-6 shadow-2xl shadow-slate-200/60 sm:p-8 lg:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(251,191,36,0.12),transparent_30%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.1),transparent_35%)]" />
          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="space-y-4">
              <SectionTitle
                eyebrow="Process"
                title="How it works"
                subtitle="Clear, guided steps from enquiry to approvals and residency for every UAE PRO service, visa, and business setup."
              />
              <div className="flex flex-wrap gap-2 text-xs font-semibold text-[var(--color-charcoal)] opacity-80">
                <span className="rounded-full bg-[var(--color-green)]/20 px-3 py-1 text-[var(--color-green)]">Compliance-first</span>
                <span className="rounded-full bg-slate-900/5 px-3 py-1">Transparent milestones</span>
                <span className="rounded-full bg-slate-900/5 px-3 py-1">Dedicated consultant</span>
              </div>
            </div>
            <div className="space-y-4">
              {processSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="group relative flex gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-lg shadow-slate-200/70 transition hover:-translate-y-1 hover:shadow-2xl hover:border-[var(--color-green)]/30"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-green)] text-sm font-semibold text-white shadow-inner shadow-[0_6px_16px_rgba(15,106,54,0.35)]">
                    {index + 1}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[var(--color-charcoal)]">{step.title}</div>
                    <p className="mt-1 text-sm text-[var(--color-charcoal-light)]">{step.description}</p>
                  </div>
                  <span className="absolute inset-y-3 right-3 h-[2px] w-12 rounded-full bg-gradient-to-r from-[var(--color-green)]/80 to-[#1a8a4a]/60 opacity-0 transition group-hover:opacity-100" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-[var(--color-charcoal)] via-[var(--color-charcoal-light)] to-[var(--color-charcoal-dark)] py-12 sm:py-16 text-white">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={serviceImage}
            alt="Dubai Business Setup"
            fill
            className="object-cover opacity-20"
          />
        </div>
        
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E1E1E]/95 via-[#2E2E2E]/90 to-[#1E1E1E]/95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(15,106,54,0.15),transparent_35%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,rgba(15,106,54,0.10),transparent_30%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_35%,rgba(255,255,255,0.08)_70%)] opacity-40" />
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
            {/* Left Content */}
            <div className="space-y-6 animate-fade-in-left animate-delay-100">
              <SectionTitle
                eyebrow="Business Setup"
                title="Dubai Mainland & Freezone Business Setup"
                subtitle="Choose the right jurisdiction, secure your trade license, and plan visas with a clear roadmap. We simplify Dubai mainland company formation and UAE freezone setup so you can launch fast."
                variant="dark"
              />
              
              {/* Key Features - Simplified */}
              <div className="space-y-3">
                {[
                  "Mainland & Freezone company formation",
                  "Trade license & establishment card",
                  "Visa planning & bank account support",
                ].map((point, index) => (
                  <div 
                    key={point} 
                    className="flex items-center gap-3 text-sm text-slate-200"
                    style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                  >
                    <span className="h-2 w-2 rounded-full bg-[var(--color-green)] flex-shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link
                  href="/services/business-setup-mainland-freezone"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-green)] px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-[var(--color-green)]/50 transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--color-green-light)] hover:shadow-[var(--color-green)]/60 overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                  <span className="relative z-10">View Details</span>
                  <span className="relative z-10 text-base transition-transform group-hover:translate-x-1">↗</span>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-white/50 hover:bg-white/20"
                >
                  Get Consultation
                </Link>
              </div>
            </div>
            
            {/* Right Side - Image Card */}
            <div className="animate-fade-in-right animate-delay-200">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl shadow-black/30 group">
                <div className="relative h-80 sm:h-96 overflow-hidden">
                  <Image
                    src={serviceImage}
                    alt="Business Setup Services"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-charcoal)]/95 via-[var(--color-charcoal)]/70 to-transparent" />
                  
                  {/* Overlay Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--color-green)]/20 text-[var(--color-green)] ring-2 ring-[var(--color-green)]/30 backdrop-blur-sm">
                        <ArrowTrendingUpIcon className="h-8 w-8" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-[var(--color-green)] mb-1">Fast to market</div>
                        <div className="text-2xl font-bold text-white">Launch-ready in days</div>
                      </div>
                    </div>
                    <p className="text-sm text-slate-200 leading-relaxed">
                      Typically 5–15 working days with dedicated consultant support and transparent milestones.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-50 py-16 sm:py-20">
        {/* Decorative background elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(15,106,54,0.04),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(15,106,54,0.04),transparent_40%)]" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12 sm:mb-16 animate-fade-in-down animate-delay-100">
            <SectionTitle
              eyebrow="Testimonials"
              title="Clients trust us with their UAE journey"
              subtitle="Real stories from founders, professionals, and teams we support."
              align="center"
            />
          </div>

          {/* Testimonials Grid */}
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {testimonialItems.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="animate-fade-in-up"
                style={{ animationDelay: `${0.2 + index * 0.1}s`, opacity: 0 }}
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 sm:mt-16 pt-8 border-t border-slate-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { label: "Happy Clients", value: "500+" },
                { label: "Success Rate", value: "98%" },
                { label: "Avg. Rating", value: "4.9/5" },
                { label: "Years Experience", value: "10+" },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${0.5 + index * 0.1}s`, opacity: 0 }}
                >
                  <div className="text-2xl sm:text-3xl font-bold text-[var(--color-green)] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-[var(--color-charcoal-light)]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white to-slate-50 py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 sm:mb-12">
            <SectionTitle
              eyebrow="FAQ"
              title="Frequently Asked Questions"
              subtitle="Quick answers on PRO services, visas, timelines, and fees."
              align="center"
            />
            <p className="mt-4 text-center text-sm sm:text-base text-[var(--color-charcoal-light)] max-w-2xl mx-auto">
              Need more clarity? We share exact timelines, document checklists, and costs for your case before we start.
            </p>
          </div>
          
          <div className="relative">
            <div className="grid gap-8 lg:grid-cols-[1fr,1.2fr] lg:items-start">
              {/* Left side - Info card */}
              <div className="hidden lg:block">
                <div className="sticky top-24 rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-green)]/10 text-[var(--color-green)]">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[var(--color-charcoal)]">Have more questions?</div>
                      <div className="text-xs text-[var(--color-charcoal-light)]">We&apos;re here to help</div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--color-charcoal-light)] leading-relaxed mb-4">
                    Can&apos;t find what you&apos;re looking for? Our team is ready to answer any questions about our services.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--color-green)] px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[var(--color-green)]/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-green-light)] hover:shadow-[var(--color-green)]/40"
                  >
                    Contact Us
                    <span className="text-base">↗</span>
                  </Link>
                </div>
              </div>
              
              {/* Right side - FAQ Accordion */}
              <div>
                <FAQAccordion items={faqItems} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="relative overflow-hidden bg-gradient-to-br from-[var(--color-charcoal)] via-[var(--color-charcoal-dark)] to-[var(--color-charcoal)] py-10 text-white sm:py-12"
      >
        {/* Green Shadow Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(15,106,54,0.25),_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(15,106,54,0.2),_transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,106,54,0.15)_0%,transparent_50%,rgba(15,106,54,0.15)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(15,106,54,0.1)_0%,transparent_70%)]" />
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 sm:p-8 shadow-2xl shadow-[var(--color-green)]/30">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex-1 space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full bg-[var(--color-green)]/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-green)] ring-1 ring-[var(--color-green)]/30">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-green)] animate-pulse" />
                  Start today
                </div>
                <h3 className="balanced text-2xl font-bold sm:text-3xl leading-tight">
                  Ready to start your UAE journey?
                </h3>
                <p className="balanced text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl">
                  Tell us about your plans. We respond within one business day with next steps. Call/WhatsApp <span className="text-[var(--color-green)] font-semibold">+971 54 542 0537</span> or email <span className="text-[var(--color-green)] font-semibold">haselconsultancy@gmail.com</span>.
                </p>
                
                {/* Contact Info Cards */}
                <div className="flex flex-wrap gap-3 pt-1">
                  <a
                    href="tel:+971545420537"
                    className="group flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs sm:text-sm text-slate-200 transition-all hover:border-[var(--color-green)]/40 hover:bg-[var(--color-green)]/10 hover:shadow-lg hover:shadow-[var(--color-green)]/20"
                  >
                    <svg className="h-3.5 w-3.5 text-[var(--color-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>+971 54 542 0537</span>
                  </a>
                  <a
                    href="mailto:haselconsultancy@gmail.com"
                    className="group flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs sm:text-sm text-slate-200 transition-all hover:border-[var(--color-green)]/40 hover:bg-[var(--color-green)]/10 hover:shadow-lg hover:shadow-[var(--color-green)]/20"
                  >
                    <svg className="h-3.5 w-3.5 text-[var(--color-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>haselconsultancy@gmail.com</span>
                  </a>
                </div>
              </div>
              
              <div className="flex-shrink-0">
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-green)] px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-[var(--color-green)]/50 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-green-light)] hover:shadow-2xl hover:shadow-[var(--color-green)]/60 overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                  <span className="relative z-10">Talk to Our Team</span>
                  <span className="relative z-10 text-base transition-transform group-hover:translate-x-1">↗</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
