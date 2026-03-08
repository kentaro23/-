import type { ReactNode } from "react";
import { Pill } from "@/components/ui";
import { HeroVisual } from "@/components/hero-visual";

export function PageHero({
  eyebrow,
  title,
  description,
  actions,
  visual
}: {
  eyebrow?: string;
  title: string;
  description: string;
  actions?: ReactNode;
  visual?:
    | "home"
    | "services"
    | "pricing"
    | "flow"
    | "faq"
    | "contact"
    | "security"
    | "samples"
    | "privacy";
}) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-brand-700 bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 p-6 md:p-10">
      <div className="hero-grid pointer-events-none absolute inset-0 bg-hero-grid opacity-40" />
      <div className="grid gap-6 lg:grid-cols-[1fr_0.92fr] lg:items-center">
        <div className="relative">
          {eyebrow ? <Pill className="border-accent-400 bg-accent-500/15 text-accent-300">{eyebrow}</Pill> : null}
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
            {title}
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-white/80 md:text-base">
            {description}
          </p>
          {actions ? <div className="mt-6 flex flex-wrap gap-3">{actions}</div> : null}
        </div>
        <div className="relative">{visual ? <HeroVisual name={visual} /> : null}</div>
      </div>
    </div>
  );
}
