import Link, { type LinkProps } from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = LinkProps & {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
};

export function ButtonLink({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      {...props}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-2xl px-5 py-3 text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2",
        variant === "primary" &&
          "bg-brand-800 text-white hover:-translate-y-0.5 hover:bg-brand-900 shadow-panel",
        variant === "secondary" &&
          "border border-brand-200 bg-white text-brand-900 hover:-translate-y-0.5 hover:bg-brand-100",
        variant === "ghost" && "text-brand-800 hover:bg-brand-100 hover:text-brand-900",
        className
      )}
    >
      {children}
    </Link>
  );
}

export function Card({
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      {...props}
      className={cn(
        "rounded-2xl border border-slate-200/90 bg-white p-6 shadow-panel transition duration-200 hover:-translate-y-0.5",
        className
      )}
    />
  );
}

export function Pill({
  className,
  ...props
}: ComponentPropsWithoutRef<"span">) {
  return (
    <span
      {...props}
      className={cn(
        "inline-flex items-center rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-medium text-brand-900",
        className
      )}
    />
  );
}

export function StatCard({
  value,
  label
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-brand-100 bg-white px-4 py-4 shadow-sm">
      <p className="text-xl font-bold text-brand-900 md:text-2xl">{value}</p>
      <p className="mt-1 text-xs text-slate-600 md:text-sm">{label}</p>
    </div>
  );
}
