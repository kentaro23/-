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
        src="/assets/mediforma_logo_mark.svg"
        alt="Mediforma logo"
        width={54}
        height={54}
        className={cn("h-11 w-11 object-contain md:h-12 md:w-12", inverted && "bg-white p-1.5")}
        priority
      />
      <div className="min-w-fit self-center">
        <p
          className={cn(
            "font-en whitespace-nowrap text-[1.65rem] font-medium leading-none tracking-[-0.01em]",
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
