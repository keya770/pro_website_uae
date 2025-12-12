export type ServiceSlug =
  | "all-pro-services"
  | "fine-waiver-application"
  | "2-years-freelance-visa"
  | "employment-visa"
  | "business-setup-mainland-freezone";

export type Service = {
  slug: ServiceSlug;
  name: string;
  tagline: string;
  shortDescription: string;
  description: string;
  processingTime: string;
  startingFee: string;
  idealFor: string;
  whatsIncluded: string[];
  eligibility: string[];
  documents: string[];
  steps: string[];
  metaTitle: string;
  metaDescription: string;
};

export const services: Service[] = [
  {
    slug: "all-pro-services",
    name: "All PRO Services",
    tagline: "Complete government liaison and compliance handling for UAE businesses.",
    shortDescription:
      "Dedicated PRO desk for visas, labor cards, attestations, and all government paperwork with transparent timelines.",
    description:
      "We become your on-call public relations officer, handling every touchpoint with UAE authorities so you stay compliant and focused on growth. From labor and immigration submissions to attestations and renewals, we manage the entire lifecycle with proactive updates.",
    processingTime: "Varies by request (typically 1–5 working days)",
    startingFee: "From AED 750",
    idealFor: "SMBs, established companies, founders needing ongoing compliance support",
    whatsIncluded: [
      "Labor & immigration submissions and renewals",
      "Attestations, document translations, and notarizations",
      "Company card renewals and establishment maintenance",
      "Status change, visa stamping, and medical coordination",
      "Regular compliance reminders and progress updates",
    ],
    eligibility: [
      "All UAE-registered entities and individuals",
      "Active trade license or pending incorporation",
      "Clear documentation for the requested PRO task",
    ],
    documents: [
      "Passport copy, Emirates ID (if issued)",
      "Trade license and establishment card (for companies)",
      "Signed authorization letter when required",
      "Service-specific forms provided upon engagement",
    ],
    steps: [
      "Share the required PRO task and your timeline",
      "We confirm required documents and fees",
      "You submit soft copies securely",
      "We process with the relevant authority",
      "Receive approvals, renewed documents, or visas",
    ],
    metaTitle: "All PRO Services in Dubai | Government Liaison & Compliance",
    metaDescription:
      "Trusted PRO services in Dubai handling visas, labor cards, attestations, and compliance with fast turnaround and proactive updates.",
  },
  {
    slug: "fine-waiver-application",
    name: "Fine Waiver Application",
    tagline: "Resolve fines quickly with structured waiver applications and authority follow-up.",
    shortDescription:
      "We assess eligibility, craft waiver submissions, and liaise with authorities to minimize penalties and disruptions.",
    description:
      "Avoid operational delays and reputational risk. Our team reviews your case, drafts persuasive waiver applications, and represents you with the right UAE authorities to seek reductions or waivers with clear communication along the way.",
    processingTime: "Submission within 24–48 hours of receiving documents",
    startingFee: "From AED 1,200",
    idealFor: "Companies or individuals facing immigration, labor, or license-related fines",
    whatsIncluded: [
      "Case assessment and eligibility review",
      "Drafting waiver letters and supporting arguments",
      "Coordinating authority appointments and submissions",
      "Status tracking with periodic updates",
      "Post-decision guidance on compliance steps",
    ],
    eligibility: [
      "Fine issued by UAE government authority",
      "Supporting documents available (notifications, licenses, IDs)",
      "Clear power of attorney/authorization when required",
    ],
    documents: [
      "Fine notice or reference number",
      "Passport copy / Emirates ID",
      "Trade license or company documents (if applicable)",
      "Any prior correspondence with the authority",
    ],
    steps: [
      "Share your fine details and urgency",
      "We evaluate eligibility and best approach",
      "You submit required supporting documents",
      "We draft and file the waiver application",
      "Receive decision and next-step guidance",
    ],
    metaTitle: "Fine Waiver Application UAE | Reduce Government Penalties",
    metaDescription:
      "End-to-end UAE fine waiver applications with case assessment, submissions, and authority follow-up for faster resolutions.",
  },
  {
    slug: "2-years-freelance-visa",
    name: "2 Years Freelance Visa",
    tagline: "Secure a 2-year freelance visa with compliant sponsorship and onboarding.",
    shortDescription:
      "We handle eligibility checks, entry permits, medicals, Emirates ID, and stamping so you can work flexibly in the UAE.",
    description:
      "Launch or continue your freelance career with a reliable sponsorship partner. We manage every step—from entry permit to medicals, biometrics, and Emirates ID—while keeping you informed on timelines and next steps.",
    processingTime: "Approx. 5–10 working days after document submission",
    startingFee: "From AED 7,500 (inclusive of standard gov. fees)",
    idealFor: "Freelancers, consultants, and remote professionals needing UAE residency",
    whatsIncluded: [
      "Eligibility review and activity selection",
      "Entry permit issuance and status change (if needed)",
      "Medical test and Emirates ID biometrics scheduling",
      "Visa stamping and residency issuance",
      "Optional dependents sponsorship guidance",
    ],
    eligibility: [
      "Valid passport (6+ months) and recent photo",
      "Relevant qualifications or portfolio for selected activity",
      "Clean legal and immigration history",
    ],
    documents: [
      "Passport copy and passport-style photo",
      "Updated CV or portfolio",
      "Educational certificates (attested where required)",
      "Current UAE entry stamp/visa (if in-country)",
    ],
    steps: [
      "Confirm your freelance activity and eligibility",
      "Submit documents for entry permit",
      "Complete medical test and biometrics",
      "We finalize stamping and residency issuance",
      "Receive Emirates ID and residency visa",
    ],
    metaTitle: "2 Years Freelance Visa UAE | End-to-End Processing",
    metaDescription:
      "Get a 2-year UAE freelance visa with full support for permits, medicals, biometrics, and stamping. Transparent pricing and updates.",
  },
  {
    slug: "employment-visa",
    name: "Employment Visa",
    tagline: "Onboard talent faster with compliant employment visas and status changes.",
    shortDescription:
      "Full-cycle employment visa processing: quota checks, entry permits, medicals, Emirates ID, and labor approvals with fast updates.",
    description:
      "Whether hiring locally or abroad, we manage employment visas end-to-end. We coordinate quota and offer letters, handle status changes, and schedule medicals and biometrics to keep your employees productive and compliant.",
    processingTime: "Typically 5–12 working days based on jurisdiction",
    startingFee: "From AED 4,800 (gov. fees vary by case)",
    idealFor: "Companies onboarding new hires or converting visit visas to employment",
    whatsIncluded: [
      "Work permit quota and offer letter coordination",
      "Entry permit issuance and status change",
      "Medical test, Emirates ID, and biometrics scheduling",
      "Visa stamping and labor contract formalities",
      "Ongoing renewal reminders and compliance checks",
    ],
    eligibility: [
      "Valid trade license and establishment card",
      "Approved quota for the employee role",
      "Employee passport valid 6+ months",
      "Signed job offer and required attestations",
    ],
    documents: [
      "Employee passport copy and photo",
      "Educational certificates (attested as required)",
      "Company trade license & establishment card",
      "Signed offer letter and labor approvals",
    ],
    steps: [
      "Confirm role, quota, and candidate details",
      "Issue entry permit and arrange status change",
      "Schedule medicals and biometrics",
      "Complete visa stamping and labor contract",
      "Employee receives Emirates ID and residency",
    ],
    metaTitle: "Employment Visa Services Dubai | Fast Onboarding & Processing",
    metaDescription:
      "Employment visa services in Dubai with full-cycle processing, status changes, medicals, and stamping for fast employee onboarding.",
  },
  {
    slug: "business-setup-mainland-freezone",
    name: "Business Setup (Mainland & Freezone)",
    tagline: "Launch in Dubai with tailored mainland or freezone company formation.",
    shortDescription:
      "We map the right jurisdiction, secure trade licenses, bank account guidance, and ongoing compliance for a confident launch.",
    description:
      "From choosing the best jurisdiction to securing your trade license and opening bank accounts, we coordinate every authority interaction. Get a clear, transparent roadmap, projected costs, and concierge-style support until you are operational.",
    processingTime: "Typically 5–15 working days depending on jurisdiction",
    startingFee: "From AED 9,500 (license packages vary)",
    idealFor: "Founders, SMEs, and international entrants setting up in the UAE",
    whatsIncluded: [
      "Jurisdiction and activity scoping (mainland vs freezone)",
      "Trade name reservation and initial approvals",
      "License issuance and establishment card",
      "Visa allocation planning and quota setup",
      "Bank account introduction and compliance guidance",
    ],
    eligibility: [
      "Founders with valid passports (6+ months)",
      "Clear business activity and ownership structure",
      "Capital and documentation aligned to chosen jurisdiction",
    ],
    documents: [
      "Passport copies of shareholders",
      "Proposed trade names and activities",
      "Existing visas/entry status (if in-country)",
      "Proof of address or NOC where required",
    ],
    steps: [
      "Define your activities, structure, and timeline",
      "Secure trade name and initial approvals",
      "Issue license and establishment documents",
      "Plan visa allocation and process residencies",
      "Open bank accounts and launch operations",
    ],
    metaTitle:
      "Business Setup Dubai | Mainland & Freezone Company Formation Experts",
    metaDescription:
      "Mainland and freezone business setup in Dubai with licensing, visa planning, and bank account guidance from start to launch.",
  },
];

export const coreServiceSlugs: ServiceSlug[] = services.map((service) => service.slug);

export const getServiceBySlug = (slug: string): Service | undefined =>
  services.find((service) => service.slug === slug);
