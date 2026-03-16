import type { ReactNode } from "react";

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
    <div className="pb-10">
      {eyebrow ? (
        <p className="font-en mb-2 text-xs font-semibold uppercase tracking-widest text-brand-600">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="text-3xl font-bold text-ink md:text-4xl">
        {title}
      </h1>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-500 md:text-base">
        {description}
      </p>
      {actions ? <div className="mt-6 flex flex-wrap gap-3">{actions}</div> : null}
    </div>
  );
}
