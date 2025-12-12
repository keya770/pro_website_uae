type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  variant?: "light" | "dark";
};

const SectionTitle = ({ eyebrow, title, subtitle, align = "left", variant = "light" }: Props) => {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";
  const widthClass = align === "center" ? "mx-auto" : "";
  const isDark = variant === "dark";
  
  return (
    <div className={`flex flex-col gap-4 ${alignment} max-w-3xl ${widthClass}`}>
      {eyebrow && (
        <div className="flex items-center gap-2">
          <span className="h-[2px] w-8 bg-[var(--color-green)] rounded-full" />
          <span className={`text-xs font-semibold uppercase tracking-[0.25em] ${
            isDark ? "text-[var(--color-green)]" : "text-slate-500"
          }`}>
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className={`balanced text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight ${
        isDark ? "text-white" : "text-[var(--color-charcoal)]"
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`balanced text-base sm:text-lg leading-relaxed font-normal ${
          isDark ? "text-slate-200" : "text-[var(--color-charcoal-light)]"
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
