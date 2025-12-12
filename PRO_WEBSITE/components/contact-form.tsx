"use client";

import { useState } from "react";
import { validateContactPayload, type ContactPayload } from "@/lib/validation";

const services = [
  "All PRO Services",
  "Fine Waiver Application",
  "2 Years Freelance Visa",
  "Employment Visa",
  "Business Setup (Mainland & Freezone)",
  "Other",
];

const initialState: ContactPayload = {
  fullName: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

const ContactForm = () => {
  const [payload, setPayload] = useState<ContactPayload>(initialState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState<string>("");

  const handleChange = (field: keyof ContactPayload, value: string) => {
    setPayload((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { valid, errors: validationErrors } = validateContactPayload(payload);

    if (!valid) {
      setErrors(validationErrors);
      return;
    }

    setStatus("loading");
    setFeedback("");

    // Client-side acknowledgement for static deployment; replace with real endpoint when ready.
    setTimeout(() => {
      setStatus("success");
      setFeedback("Thank you, we'll reach out shortly.");
      setPayload(initialState);
    }, 500);
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="space-y-1">
        <label className="text-sm font-semibold text-slate-800">Full Name</label>
        <input
          value={payload.fullName}
          onChange={(e) => handleChange("fullName", e.target.value)}
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm shadow-sm focus:border-[var(--color-green)] focus:outline-none focus:ring-2 focus:ring-[var(--color-green)]/20"
          placeholder="Your name"
          required
        />
        {errors.fullName && <p className="text-xs text-red-600">{errors.fullName}</p>}
      </div>

      <div className="space-y-1">
        <label className="text-sm font-semibold text-slate-800">Email</label>
        <input
          type="email"
          value={payload.email}
          onChange={(e) => handleChange("email", e.target.value)}
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm shadow-sm focus:border-[var(--color-green)] focus:outline-none focus:ring-2 focus:ring-[var(--color-green)]/20"
          placeholder="name@email.com"
          required
        />
        {errors.email && <p className="text-xs text-red-600">{errors.email}</p>}
      </div>

      <div className="space-y-1">
        <label className="text-sm font-semibold text-slate-800">Phone (with country code)</label>
        <input
          value={payload.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm shadow-sm focus:border-[var(--color-green)] focus:outline-none focus:ring-2 focus:ring-[var(--color-green)]/20"
          placeholder="+971 50 123 4567"
        />
        {errors.phone && <p className="text-xs text-red-600">{errors.phone}</p>}
      </div>

      <div className="space-y-1">
        <label className="text-sm font-semibold text-slate-800">Service of interest</label>
        <select
          value={payload.service}
          onChange={(e) => handleChange("service", e.target.value)}
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm shadow-sm focus:border-[var(--color-green)] focus:outline-none focus:ring-2 focus:ring-[var(--color-green)]/20"
          required
        >
          <option value="">Select a service</option>
          {services.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
        {errors.service && <p className="text-xs text-red-600">{errors.service}</p>}
      </div>

      <div className="space-y-1">
        <label className="text-sm font-semibold text-slate-800">Message</label>
        <textarea
          value={payload.message}
          onChange={(e) => handleChange("message", e.target.value)}
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm shadow-sm focus:border-[var(--color-green)] focus:outline-none focus:ring-2 focus:ring-[var(--color-green)]/20"
          rows={4}
          placeholder="Tell us about your requirements"
          required
        />
        {errors.message && <p className="text-xs text-red-600">{errors.message}</p>}
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-[var(--color-green)] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[var(--color-green)]/30 transition hover:bg-[var(--color-green-light)] hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Sending..." : "Submit enquiry"}
      </button>

      {feedback && (
        <div
          className={`rounded-xl px-4 py-3 text-sm ${
            status === "success"
              ? "bg-green-50 text-green-700"
              : "bg-red-50 text-red-700"
          }`}
        >
          {feedback}
        </div>
      )}
    </form>
  );
};

export default ContactForm;
