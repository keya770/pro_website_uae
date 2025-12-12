import type { Metadata } from "next";
import Link from "next/link";
import SectionTitle from "@/components/section-title";
import { ShieldCheckIcon, BoltIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { withBaseUrl } from "@/lib/withBasePath";

const aboutUrl = withBaseUrl("/about");
const aboutOgImage = withBaseUrl("/standard-quality-control-collage-concept.jpg");

export const metadata: Metadata = {
  title: "About HCT Services | UAE PRO, Visa & Dubai Business Setup Specialists",
  description:
    "Meet AL HASEL Consultancy (HCT Services) — experts in UAE PRO services, Dubai business setup, freelance visa UAE, and employment visa Dubai support.",
  alternates: { canonical: aboutUrl },
  openGraph: {
    title: "About HCT Services | UAE PRO, Visa & Dubai Business Setup Specialists",
    description:
      "HCT Services delivers fast, reliable UAE PRO services, freelance visas, employment visas, and Dubai business setup with concierge-style support.",
    url: aboutUrl,
    type: "profile",
    siteName: "HCT Services | AL HASEL Consultancy Services LLC",
    images: [{ url: aboutOgImage, width: 1200, height: 630, alt: "About HCT Services team in Dubai" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About HCT Services | UAE PRO, Visa & Dubai Business Setup Specialists",
    description:
      "Dubai-based PRO services, freelance visa UAE, employment visa Dubai, and business setup experts at AL HASEL Consultancy (HCT Services).",
    images: [aboutOgImage],
  },
};

const values = [
  {
    title: "Integrity",
    description: "We protect your time, documents, and compliance with transparent steps and honest advice.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Speed",
    description: "Fast submissions, proactive follow-up, and clear timelines keep you moving.",
    icon: BoltIcon,
  },
  {
    title: "Clarity",
    description: "We break down every step, cost, and requirement so there are no surprises.",
    icon: SparklesIcon,
  },
];

const AboutPage = () => {
  return (
    <div className="bg-white">
      <h1 className="sr-only">About HCT Services – UAE PRO, visa, and Dubai business setup specialists</h1>
      <section className="border-b border-slate-100 bg-gradient-to-br from-[var(--color-light)] via-white to-[#eef2ff] py-12 sm:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="About"
            title="Our vision for UAE entrepreneurs & professionals"
            subtitle="We are a team of PRO and business setup specialists obsessed with making UAE compliance effortless."
          />
          <p className="balanced mt-6 max-w-3xl text-sm text-slate-700 sm:text-base">
            We built AL HASEL Consultancy Services LLC (HCT Services) to bridge the gap between fast-growing businesses and complex government processes. Our consultants have guided hundreds of founders, HR teams, and freelancers through visas, fine waivers, and company formation with clarity and confidence. Explore our <Link href="/services" className="text-[var(--color-navy)] underline-offset-4 hover:underline">UAE PRO services</Link> or <Link href="/contact" className="text-[var(--color-navy)] underline-offset-4 hover:underline">book a consultation</Link> to get started.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <div className="space-y-4">
            <h3 className="balanced text-2xl font-semibold text-[var(--color-navy)]">Our story</h3>
            <p className="balanced text-sm text-slate-700 sm:text-base">
              We saw how teams lost time juggling government portals, document requirements, and ever-changing rules. Today, we run a concierge-style desk that handles every submission, status update, and follow-up for you—whether you are setting up a company, onboarding staff, or securing your own residency.
            </p>
            <p className="balanced text-sm text-slate-700 sm:text-base">
              With bilingual specialists, government relationships, and structured checklists, we give you predictable timelines and the peace of mind that every detail is covered.
            </p>
            <Link
              href="/contact"
              className="cta-dark inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold bg-[var(--color-green)] hover:bg-[var(--color-green-light)]"
            >
              <span>Speak with our team</span>
              <span className="text-base leading-none">↗</span>
            </Link>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-100 sm:p-7">
            <div className="text-sm font-semibold text-[var(--color-navy)]">Our services today</div>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              <li>• PRO desk for labor, immigration, attestations, and renewals</li>
              <li>• Visas: freelance (2 years), employment, dependents, and status changes</li>
              <li>• Fine waiver applications with authority follow-up</li>
              <li>• Business setup across Dubai mainland and leading freezones</li>
              <li>• Banking introductions and compliance support</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Values"
            title="How we operate"
            subtitle="The principles that shape every client engagement."
            align="center"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-1 md:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="flex h-full flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-lg shadow-slate-100"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-green)]/10 text-[var(--color-green)]">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="text-base font-semibold text-[var(--color-charcoal)]">{value.title}</h3>
                <p className="text-sm text-[var(--color-charcoal-light)]">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-charcoal)] via-[var(--color-charcoal-light)] to-[var(--color-charcoal-dark)] py-12 text-white sm:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div className="space-y-3">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-green)]">
                Our team
              </div>
              <h3 className="balanced text-2xl font-semibold">Specialists across PRO, visas, and setup</h3>
              <p className="balanced text-sm text-slate-200">
                Your case is handled by dedicated consultants who coordinate every authority interaction and keep you updated across WhatsApp and email.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {["Lead Consultant", "Compliance Officer", "Visa Specialist", "Client Success"].map(
                (role) => (
                  <div key={role} className="rounded-2xl bg-white/10 p-4 text-center backdrop-blur">
                      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-green)]/20 text-[var(--color-green)]">
                      {role.split(" ").map((word) => word[0]).join("")}
                    </div>
                    <div className="mt-3 text-sm font-semibold text-white">{role}</div>
                    <div className="text-xs text-slate-200">Dubai, UAE</div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-10 sm:py-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <div>
            <h3 className="balanced text-xl font-semibold text-[var(--color-navy)]">Ready to move forward?</h3>
            <p className="balanced text-sm text-slate-600">Book a consultation and get a tailored roadmap for your case.</p>
          </div>
          <Link
            href="/contact"
            className="cta-dark inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold bg-[var(--color-green)] hover:bg-[var(--color-green-light)]"
          >
            <span>Contact us</span>
            <span className="text-base leading-none">↗</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
