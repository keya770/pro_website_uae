import Image from "next/image";
import type { Testimonial } from "@/lib/content";

type Props = {
  testimonial: Testimonial;
};

const TestimonialCard = ({ testimonial }: Props) => {
  // Generate initials for avatar fallback
  const initials = testimonial.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[var(--color-green)]/40">
      {/* Top accent bar */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[var(--color-green)] via-[#1a8a4a] to-[var(--color-green-dark)]" />
      
      {/* Quote icon */}
      <div className="absolute top-4 right-4 text-5xl text-[var(--color-green)]/10 font-serif">"</div>
      
      {/* Content */}
      <div className="relative">
        {/* Client Image/Avatar */}
        <div className="flex items-center gap-4 mb-4">
          <div className="relative flex-shrink-0">
            <div className="relative h-14 w-14 rounded-full overflow-hidden ring-2 ring-[var(--color-green)]/20 group-hover:ring-[var(--color-green)]/40 transition-all duration-300">
              <Image
                src="/medium-shot-smiley-business-man.jpg"
                alt={testimonial.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full bg-[var(--color-green)] border-2 border-white flex items-center justify-center">
              <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <div className="flex-1">
            <div className="text-base font-semibold text-[var(--color-charcoal)]">{testimonial.name}</div>
            <div className="text-xs text-[var(--color-charcoal-light)] flex items-center gap-1">
              <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              {testimonial.location}
            </div>
          </div>
        </div>
        
        {/* Testimonial Message */}
        <p className="balanced text-sm text-[var(--color-charcoal-light)] sm:text-base leading-relaxed pl-2 border-l-2 border-[var(--color-green)]/30">
          {testimonial.message}
        </p>
        
        {/* Rating Stars */}
        <div className="flex items-center gap-1 mt-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="h-4 w-4 text-[var(--color-green)]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>
      
      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-green)]/0 via-[var(--color-green)]/5 to-[var(--color-green)]/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-2xl" />
    </div>
  );
};

export default TestimonialCard;
