import { cn } from "@/lib/utils";

export function MediformaLogo({
  inverted = false,
  className
}: {
  inverted?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <svg viewBox="0 0 48 48" className={cn("h-10 w-10", inverted ? "text-white" : "text-brand-800")} aria-hidden="true">
        <rect x="2" y="2" width="44" height="44" rx="12" fill={inverted ? "rgba(255,255,255,0.12)" : "rgba(31,153,147,0.14)"} />
        <path
          d="M9 31V16h4.5l5.5 7.8 5.5-7.8H29v15h-3.8V22l-6.2 8.7L12.8 22v9H9Z"
          fill="currentColor"
        />
        <path
          d="M30 24h3.5l1.8-3.4 2.2 6.4 1.6-3H43"
          stroke="#1F9993"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div className="min-w-0">
        <p className={cn("font-en text-sm font-semibold leading-5", inverted ? "text-white" : "text-brand-800")}>
          Mediforma Society
        </p>
        <p className={cn("text-[11px] leading-4", inverted ? "text-brand-100" : "text-brand-500")}>
          がっかりさせない学会
        </p>
      </div>
    </div>
  );
}
