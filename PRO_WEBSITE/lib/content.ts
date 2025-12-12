export type FAQItem = {
  question: string;
  answer: string;
};

export type Testimonial = {
  name: string;
  location: string;
  message: string;
};

export type FeatureHighlight = {
  title: string;
  description: string;
};

export const faqItems: FAQItem[] = [
  {
    question: "What are PRO services and how do they help my business?",
    answer:
      "PRO services cover all government paperwork for your company—labor and immigration submissions, attestations, renewals, and compliance updates—so you save time and avoid penalties.",
  },
  {
    question: "How long do UAE visa processes usually take?",
    answer:
      "Timelines vary by jurisdiction. Freelance and employment visas typically take 5–12 working days after documents and medicals are completed. We share a clear timeline before starting.",
  },
  {
    question: "What documents are required for a freelance or employment visa?",
    answer:
      "You'll need a passport copy, passport-style photo, attested educational certificates for certain roles, and any current visa/entry details. We provide a tailored document checklist for your case.",
  },
  {
    question: "Can you help with both mainland and freezone company setup?",
    answer:
      "Yes. We map the right jurisdiction, secure trade name approvals, issue your license, and guide you through establishment cards, visas, and bank account introductions.",
  },
  {
    question: "How do you price services?",
    answer:
      "We provide transparent quotes with government fees separated from service fees. No hidden extras—everything is documented before we begin.",
  },
  {
    question: "Do you handle urgent cases or fines?",
    answer:
      "Yes. We prioritize urgent cases, fine waiver applications, and time-sensitive submissions with fast coordination and frequent status updates.",
  },
];

export const testimonialItems: Testimonial[] = [
  {
    name: "Aisha M.",
    location: "Dubai, UAE",
    message:
      "They handled my freelance visa flawlessly. Clear updates, zero stress, and the Emirates ID arrived exactly when promised.",
  },
  {
    name: "David R.",
    location: "London → Dubai",
    message:
      "Business setup was mapped out step-by-step. Transparent fees and a dedicated consultant made the move seamless.",
  },
  {
    name: "Sara P.",
    location: "Abu Dhabi, UAE",
    message:
      "Our employment visas and fine waiver were sorted quickly. The team is proactive, responsive, and genuinely helpful.",
  },
];

export const featureHighlights: FeatureHighlight[] = [
  {
    title: "Fast & Reliable",
    description:
      "Swift submissions and clear timelines so you get your approvals without delays.",
  },
  {
    title: "Professional Handling",
    description:
      "Concierge-style support for all PRO and visa services—labor, immigration, attestations, and renewals.",
  },
  {
    title: "Affordable Solutions",
    description:
      "Investment pricing for 2-year freelance visas and competitive rates for all services.",
  },
  {
    title: "Trusted Partner",
    description:
      "Your go-to team for document clearing, fine waiver applications, and business setup (Mainland & Freezone).",
  },
];

export const processSteps = [
  { title: "Share your requirements", description: "Tell us what you need and your timeline." },
  { title: "Get a tailored solution & quote", description: "Receive a clear plan and transparent pricing." },
  { title: "Submit documents securely", description: "Upload soft copies; we verify and prepare submissions." },
  { title: "We process with authorities", description: "We coordinate with the right UAE authorities." },
  { title: "You receive approvals & visas", description: "Collect approvals, IDs, and licenses on time." },
];
