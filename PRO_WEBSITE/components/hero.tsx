import Link from "next/link";
import Image from "next/image";

type CTA = { label: string; href: string; variant?: "primary" | "ghost" };

type Props = {
  title: string;
  subtitle: string;
  primaryCta: CTA;
  secondaryCta?: CTA;
  highlights?: string[];
};

const Hero = ({ title, subtitle, primaryCta, secondaryCta, highlights = [] }: Props) => {
  return (
    <section className="relative overflow-hidden text-white py-16 sm:py-20 lg:py-24 flex items-center">
      {/* Background Image with parallax effect */}
      <div className="absolute inset-0">
        <Image
          src="/standard-quality-control-collage-concept.jpg"
          alt="UAE PRO Services Background"
          fill
          className="object-cover scale-105 transition-transform duration-700 ease-out"
          priority
          quality={90}
        />
      </div>
      
      {/* Black fade overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E1E1E]/92 via-[#2E2E2E]/88 to-[#1E1E1E]/92" />
      
      {/* Animated gradient overlays for depth */}
      <div className="absolute left-10 top-0 h-64 w-64 rounded-full bg-[var(--color-green)]/20 blur-3xl sm:left-24 sm:h-80 sm:w-80 animate-pulse" />
      <div className="absolute right-[-10%] top-[-30%] h-[420px] w-[420px] rounded-full bg-[var(--color-green)]/10 blur-3xl animate-[floaty_8s_ease-in-out_infinite]" />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_24%,rgba(255,255,255,0.08)_50%,rgba(255,255,255,0)_75%)] opacity-30" />
      
      {/* Animated grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      <div className="relative mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8">
        <div className="flex-1 space-y-4">
          {/* Badge with animation */}
          <div className="inline-flex items-center gap-2 rounded-full bg-[var(--color-green)] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-lg shadow-[var(--color-green)]/30 backdrop-blur-sm animate-fade-in-down animate-delay-100">
            <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
            Dubai • UAE
          </div>
          
          {/* Title with staggered animation and enhanced shadows */}
          <h1 className="balanced max-w-3xl space-y-2">
            <span className="block text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)] animate-fade-in-up animate-delay-200">
              {title}
            </span>
            <span className="block text-xl sm:text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-[var(--color-green)] via-[#1a8a4a] to-[#2dd573] bg-clip-text text-transparent drop-shadow-[0_2px_15px_rgba(15,106,54,0.4)] animate-fade-in-up animate-delay-300">
              Premium PRO, Visa & Business Setup solutions.
            </span>
          </h1>
          
          {/* Subtitle with animation and enhanced shadows */}
          <p className="balanced max-w-2xl text-base sm:text-lg text-slate-200 leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)] animate-fade-in-up animate-delay-400">
            {subtitle}
          </p>
          
          {/* CTA Buttons with animation */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-3 animate-fade-in-up animate-delay-500">
            <Link
              href={primaryCta.href}
              className="group relative inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-[var(--color-green)] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[var(--color-green)]/40 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-green-light)] hover:shadow-[var(--color-green)]/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
              <span className="relative z-10">{primaryCta.label}</span>
              <span className="relative z-10 text-sm leading-none transition-transform group-hover:translate-x-0.5">↗</span>
            </Link>
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="group inline-flex w-full items-center justify-center gap-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/20 hover:shadow-md sm:w-auto"
              >
                {secondaryCta.label}
                <span className="text-sm leading-none transition-transform group-hover:translate-x-0.5">→</span>
              </Link>
            )}
          </div>
          
          {/* Stats with staggered animation and enhanced shadows */}
          <div className="grid grid-cols-3 gap-3 animate-fade-in-up animate-delay-600">
            {[
              { label: "SETUPS", value: "340+" },
              { label: "TIME", value: "5–15 days" },
              { label: "RATING", value: "4.9/5" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="group rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm px-3 py-2.5 text-center shadow-lg shadow-black/20 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:-translate-y-0.5 hover:shadow-xl"
                style={{ animationDelay: `${0.7 + index * 0.1}s` }}
              >
                <div className="text-[10px] uppercase tracking-[0.1em] text-slate-300 mb-1">{stat.label}</div>
                <div className="text-lg sm:text-xl font-bold text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.3)]">
                  {stat.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {highlights.length > 0 && (
          <div className="flex-1 animate-fade-in-right animate-delay-400">
            <div className="glow-card relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 shadow-2xl shadow-black/40 overflow-hidden transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:shadow-[var(--color-green)]/20">
              {/* Animated background logo */}
              <div className="absolute right-0 top-0 w-40 h-40 opacity-10 animate-[floaty_8s_ease-in-out_infinite]">
                <Image
                  src="/pro_logo.png"
                  alt=""
                  width={160}
                  height={160}
                  className="object-contain"
                />
              </div>
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] animate-[shimmer_3s_ease-in-out_infinite]" />
              
              <div className="relative flex items-center justify-between gap-3 mb-5">
                <div className="text-sm font-semibold text-[var(--color-green)] flex items-center gap-2 drop-shadow-[0_2px_8px_rgba(15,106,54,0.3)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-green)] animate-pulse" />
                  Why choose us
                </div>
                <div className="rounded-full bg-[var(--color-green)]/20 px-3 py-1.5 text-xs font-semibold text-[var(--color-green)] ring-1 ring-[var(--color-green)]/30 backdrop-blur shadow-lg">
                  24/7
                </div>
              </div>
              
              <div className="relative space-y-3">
                {highlights.map((item, index) => (
                  <div
                    key={item}
                    className="group flex items-start gap-3 rounded-xl border border-white/5 bg-white/5 backdrop-blur-sm px-4 py-3 ring-1 ring-white/5 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:border-white/10 hover:shadow-lg hover:shadow-[var(--color-green)]/10"
                    style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                  >
                    <span className="mt-0.5 h-2 w-2 rounded-full bg-[var(--color-green)] flex-shrink-0 animate-[floaty_6s_ease-in-out_infinite] shadow-[0_0_8px_rgba(15,106,54,0.5)]" style={{ animationDelay: `${index * 0.2}s` }} />
                    <span className="text-sm text-slate-100 leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.3)]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
