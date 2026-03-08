import Image from "next/image";
import { cn } from "@/lib/utils";

export function MediformaLogo({
  inverted = false,
  subLabel,
  className
}: {
  inverted?: boolean;
  subLabel?: string;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      <Image
        src="/assets/mediforma_logo_only.svg"
        alt="Mediforma logo"
        width={80}
        height={80}
        className={cn("h-14 w-14 rounded-lg object-contain md:h-16 md:w-16", inverted && "bg-white p-1.5")}
        priority
      />
      <div className="min-w-0 self-center">
        <p className={cn("font-en text-3xl font-bold leading-none md:text-4xl", inverted ? "text-white" : "text-brand-800")}>
          Mediforma Society
        </p>
        {subLabel ? (
          <p className={cn("mt-1 text-sm leading-5", inverted ? "text-brand-100" : "text-brand-500")}>
            {subLabel}
          </p>
        ) : null}
      </div>
    </div>
  );
}
