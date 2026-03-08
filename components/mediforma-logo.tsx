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
    <div className={cn("flex items-center gap-3", className)}>
      <Image
        src="/assets/mediforma_logo_only.svg"
        alt="Mediforma logo"
        width={160}
        height={40}
        className={cn("h-8 w-auto object-contain md:h-9", inverted && "bg-white p-1.5")}
        priority
      />
      <div className="min-w-fit self-center">
        <p
          className={cn(
            "font-en whitespace-nowrap text-[1.15rem] font-medium leading-none",
            inverted ? "text-white" : "text-brand-800"
          )}
        >
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
