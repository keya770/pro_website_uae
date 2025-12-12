"use client";

import { useState } from "react";
import {
  validateEnquiryPayload,
  type EnquiryPayload,
  type ValidationErrors,
} from "@/lib/validation";

type Props = {
  serviceName: string;
};

const ServiceEnquiryForm = ({ serviceName }: Props) => {
  const [payload, setPayload] = useState<EnquiryPayload>({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    service: serviceName,
    message: "",
    agree: false,
  });
  const [errors, setErrors] = useState<ValidationErrors<EnquiryPayload>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState<string>("");

  const handleChange = (field: keyof EnquiryPayload, value: string | boolean) => {
    setPayload((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { valid, errors: validationErrors } = validateEnquiryPayload(payload);

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
      setPayload({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        service: serviceName,
        message: "",
        agree: false,
      });
    }, 500);
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-100">
      <div className="space-y-1">
        <label className="text-sm font-semibold text-slate-800">Full Name</label>
        <input
          value={payload.fullName}
          onChange={(e) => handleChange("fullName", e.target.value)}
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm shadow-sm focus:border-[var(--color-navy)] focus:outline-none"
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
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm shadow-sm focus:border-[var(--color-navy)] focus:outline-none"
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
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm shadow-sm focus:border-[var(--color-navy)] focus:outline-none"
          placeholder="+971 50 123 4567"
          required
        />
        {errors.phone && <p className="text-xs text-red-600">{errors.phone}</p>}
      </div>

      <div className="space-y-1">
        <label className="text-sm font-semibold text-slate-800">Company / Profession (optional)</label>
        <input
          value={payload.company}
          onChange={(e) => handleChange("company", e.target.value)}
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm shadow-sm focus:border-[var(--color-navy)] focus:outline-none"
          placeholder="Your company or role"
        />
      </div>

      <div className="space-y-1">
        <label className="text-sm font-semibold text-slate-800">Service</label>
        <input
          value={payload.service}
          readOnly
          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm"
        />
        {errors.service && <p className="text-xs text-red-600">{errors.service}</p>}
      </div>

      <div className="space-y-1">
        <label className="text-sm font-semibold text-slate-800">Message / Requirements</label>
        <textarea
          value={payload.message}
          onChange={(e) => handleChange("message", e.target.value)}
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm shadow-sm focus:border-[var(--color-navy)] focus:outline-none"
          rows={4}
          placeholder="Share details, timelines, and any questions"
          required
        />
        {errors.message && <p className="text-xs text-red-600">{errors.message}</p>}
      </div>

      <label className="flex items-start gap-3 text-sm text-slate-700">
        <input
          type="checkbox"
          checked={payload.agree}
          onChange={(e) => handleChange("agree", e.target.checked)}
          className="mt-1 h-4 w-4 rounded border-slate-300 text-[var(--color-navy)] focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]"
        />
        <span>I agree to the terms and privacy policy.</span>
      </label>
      {errors.agree && <p className="text-xs text-red-600">{errors.agree}</p>}

      <button
        type="submit"
        className="cta-dark w-full rounded-full px-5 py-3 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-70"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Submitting..." : "Request this service"}
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

export default ServiceEnquiryForm;
