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
    <section id={id} className={cn("py-12 md:py-20", className)}>
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
    <div className={cn("mb-8 md:mb-10", align === "center" && "text-center")}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold tracking-wide text-brand-800">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 md:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
