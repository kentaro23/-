import Image from "next/image";
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
      <Image
        src="/assets/mediforma_logo_only.svg"
        alt="Mediforma logo"
        width={60}
        height={60}
        className={cn("h-11 w-11 rounded-lg object-contain", inverted && "bg-white p-1.5")}
        priority
      />
      <div className="min-w-0">
        <p className={cn("font-en text-xl font-bold leading-6", inverted ? "text-white" : "text-brand-800")}>
          Mediforma Society
        </p>
        <p className={cn("text-sm leading-5", inverted ? "text-brand-100" : "text-brand-500")}>
          学会事務局代行
        </p>
      </div>
    </div>
  );
}
