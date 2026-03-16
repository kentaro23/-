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
    <section id={id} className={cn("py-16 md:py-24", className)}>
      <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">{children}</div>
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
    <div className={cn("mb-10 md:mb-14", align === "center" && "text-center")}>
      {eyebrow ? (
        <p className="font-en mb-2 text-xs font-semibold uppercase tracking-widest text-brand-600">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-2xl font-bold text-ink md:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-500 md:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
