import type { ReactNode } from "react";
import { Pill } from "@/components/ui";

export function PageHero({
  eyebrow,
  title,
  description,
  actions
}: {
  eyebrow?: string;
  title: string;
  description: string;
  actions?: ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-brand-100 bg-gradient-to-b from-white to-brand-50/70 p-6 md:p-10">
      {eyebrow ? <Pill>{eyebrow}</Pill> : null}
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
        {title}
      </h1>
      <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 md:text-base">
        {description}
      </p>
      {actions ? <div className="mt-6 flex flex-wrap gap-3">{actions}</div> : null}
    </div>
  );
}
