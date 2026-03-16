import Image from "next/image";
import { cn } from "@/lib/utils";

export function MediformaLogo({
  inverted = false,
  className
}: {
  inverted?: boolean;
  subLabel?: string;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <Image
        src="/assets/mediforma_logo_mark.svg"
        alt="Mediforma logo"
        width={36}
        height={36}
        className="h-8 w-8 object-contain"
        priority
      />
      <span
        className={cn(
          "font-en text-sm font-semibold tracking-tight",
          inverted ? "text-gray-300" : "text-ink"
        )}
      >
        Mediforma Society
      </span>
    </div>
  );
}
