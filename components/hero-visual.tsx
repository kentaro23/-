import Image from "next/image";

export function HeroVisual({
  name,
  className
}: {
  name:
    | "home"
    | "services"
    | "pricing"
    | "flow"
    | "faq"
    | "contact"
    | "security"
    | "samples"
    | "privacy";
  className?: string;
}) {
  return (
    <div className={className} aria-hidden="true">
      <Image
        src={`/assets/hero/${name}.svg`}
        alt=""
        width={640}
        height={420}
        className="h-auto w-full rounded-2xl border border-brand-100/70"
        priority={name === "home"}
      />
    </div>
  );
}
