import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/contact-form";
import SectionTitle from "@/components/section-title";

export const metadata: Metadata = {
  title: "Contact HCT Services | UAE PRO, Visa & Dubai Business Setup Consultation",
  description:
    "Call +971 54 542 0537 or email haselconsultancy@gmail.com for UAE PRO services, freelance visa UAE, employment visa Dubai, fine waiver help, and business setup support.",
  alternates: { canonical: "https://example.ae/contact" },
  openGraph: {
    title: "Contact HCT Services | UAE PRO, Visa & Dubai Business Setup Consultation",
    description:
      "Reach AL HASEL Consultancy (HCT Services) for UAE PRO services, Dubai business setup, freelance visa UAE, and employment visa Dubai guidance.",
    url: "https://example.ae/contact",
    type: "website",
    siteName: "HCT Services | AL HASEL Consultancy Services LLC",
    images: [{ url: "https://example.ae/og-image.jpg", width: 1200, height: 630, alt: "Contact HCT Services Dubai" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact HCT Services | UAE PRO, Visa & Dubai Business Setup Consultation",
    description:
      "Talk to HCT Services for UAE PRO services, freelance visa UAE, employment visa Dubai, fine waiver help, and business setup support.",
    images: ["https://example.ae/og-image.jpg"],
  },
};

const ContactPage = () => {
  return (
    <div className="bg-white">
      <h1 className="sr-only">Contact HCT Services for UAE PRO services, visas, and Dubai business setup</h1>
      <section className="border-b border-slate-100 bg-gradient-to-br from-[var(--color-light)] via-white to-[#eef2ff] py-12 sm:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Contact"
            title="Let's Talk"
            subtitle="We usually respond within 24 hours. Share your plans and we will map the fastest route to approvals."
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-100 sm:p-8">
            <div className="text-sm font-semibold text-[var(--color-charcoal)]">Contact details</div>
            <p className="balanced mt-2 text-sm text-[var(--color-charcoal-light)]">
              Reach us via WhatsApp, phone, or email. We will align on timelines, costs, and required documents before any submission. Need a quick overview? See our <Link href="/services" className="text-[var(--color-green)] underline-offset-4 hover:underline">UAE PRO & visa services</Link> or jump straight to the <Link href="/services/2-years-freelance-visa" className="text-[var(--color-green)] underline-offset-4 hover:underline">2-year freelance visa UAE</Link> offer.
            </p>
            <div className="mt-6 space-y-3 text-sm text-[var(--color-charcoal)]">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-green)]">Phone</div>
                <div className="text-[var(--color-charcoal)]">+971 54 542 0537</div>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-green)]">WhatsApp</div>
                <div className="text-[var(--color-charcoal)]">+971 54 542 0537</div>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-green)]">Email</div>
                <div className="text-[var(--color-charcoal)]">haselconsultancy@gmail.com</div>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-green)]">Office</div>
                <div className="text-[var(--color-charcoal)]">
                  P.O Box: 32935, Office 313, Emgate Building, Near Business Bay Metro Station (Sea Side), Dubai, UAE
                </div>
              </div>
            </div>
            <div className="mt-6 rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-4 text-xs text-slate-500">
              Map placeholder — embed Google Maps here for local SEO when ready.
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-100 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
