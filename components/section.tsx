import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  id,
  children,
  className
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("py-14 md:py-24", className)}>
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left"
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("mb-10 md:mb-12", align === "center" && "text-center")}>
      {eyebrow ? (
        <p className="font-en mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-accent-500 md:text-sm">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-2xl font-bold text-brand-800 md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 max-w-3xl text-sm leading-7 text-brand-500 md:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
