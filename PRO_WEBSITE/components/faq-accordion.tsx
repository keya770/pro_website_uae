"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import type { FAQItem } from "@/lib/content";

type Props = {
  items: FAQItem[];
};

const FAQAccordion = ({ items }: Props) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.question}
            className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 ${
              isOpen
                ? "border-[var(--color-green)]/40 bg-white shadow-xl shadow-[var(--color-green)]/10"
                : "border-slate-200 bg-white shadow-sm hover:border-[var(--color-green)]/30 hover:shadow-lg"
            }`}
          >
            {/* Top accent bar when open */}
            {isOpen && (
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[var(--color-green)] via-[#1a8a4a] to-[var(--color-green-dark)]" />
            )}
            
            {/* Question Number Badge */}
            <div className="absolute left-3 top-3 flex h-7 w-7 items-center justify-center rounded-lg bg-[var(--color-green)]/10 text-xs font-bold text-[var(--color-green)] ring-1 ring-[var(--color-green)]/20">
              {index + 1}
            </div>
            
            <button
              className="flex w-full items-start justify-between gap-4 p-4 pl-12 text-left transition-colors hover:bg-slate-50/50"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
            >
              <span className={`balanced flex-1 text-sm font-semibold leading-relaxed transition-colors ${
                isOpen ? "text-[var(--color-charcoal)]" : "text-[var(--color-charcoal-light)]"
              } sm:text-base`}>
                {item.question}
              </span>
              <div className={`flex-shrink-0 rounded-full p-1.5 transition-all duration-300 ${
                isOpen 
                  ? "bg-[var(--color-green)]/10 rotate-180" 
                  : "bg-slate-100 group-hover:bg-[var(--color-green)]/10"
              }`}>
                <ChevronDownIcon
                  className={`h-4 w-4 transition-colors ${
                    isOpen ? "text-[var(--color-green)]" : "text-slate-600"
                  }`}
                />
              </div>
            </button>
            
            {/* Answer with smooth animation */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-4 pb-4 pl-12">
                <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-3" />
                <p className="balanced text-xs sm:text-sm text-[var(--color-charcoal-light)] leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
            
            {/* Decorative corner accent when open */}
            {isOpen && (
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-[var(--color-green)]/5 to-transparent rounded-tl-full" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FAQAccordion;
