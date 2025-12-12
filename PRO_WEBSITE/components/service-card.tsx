import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import type { Service } from "@/lib/services";

type Props = {
  service: Pick<Service, "name" | "shortDescription" | "slug" | "tagline">;
  icon?: React.ReactNode;
};

const ServiceCard = ({ service, icon }: Props) => {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[var(--color-green)]/40">
      {/* Top accent bar */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[var(--color-green)] via-[#1a8a4a] to-[var(--color-green-dark)] z-10" />
      
      {/* Service image - larger and more prominent */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src="/medium-shot-smiley-business-man.jpg"
          alt={service.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent" />
        
        {/* Icon badge */}
        <div className="absolute top-4 right-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/95 backdrop-blur-md shadow-xl ring-2 ring-[var(--color-green)]/30 transition-transform duration-300 group-hover:scale-110 group-hover:ring-[var(--color-green)]/50">
          {icon ?? <span className="text-xl font-bold text-[var(--color-green)]">★</span>}
        </div>
        
        {/* Content overlay on image */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3 className="balanced text-lg font-semibold text-[var(--color-charcoal)] mb-1 drop-shadow-[0_2px_8px_rgba(255,255,255,0.8)]">
            {service.name}
          </h3>
          <p className="balanced text-xs text-[var(--color-charcoal-light)] font-medium drop-shadow-[0_1px_4px_rgba(255,255,255,0.6)]">
            {service.tagline}
          </p>
        </div>
      </div>
      
      {/* Card content */}
      <div className="flex flex-col flex-1 p-5 pt-4">
        <p className="balanced text-sm text-[var(--color-charcoal-light)] mb-4 leading-relaxed">
          {service.shortDescription}
        </p>
        
        {/* CTA Link */}
        <Link
          href={`/services/${service.slug}`}
          className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-green)] transition-all duration-300 group-hover:gap-3 group/link"
        >
          <span>Learn more</span>
          <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
        </Link>
      </div>
      
      {/* Hover effect overlay */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--color-green)]/0 via-[var(--color-green)]/5 to-[var(--color-green)]/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      
      {/* Decorative corner accent */}
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-[var(--color-green)]/5 to-transparent rounded-tl-full opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  );
};

export default ServiceCard;
