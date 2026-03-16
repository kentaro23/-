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
        "inline-flex items-center justify-center whitespace-nowrap rounded-lg px-5 py-2.5 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/30 focus-visible:ring-offset-2",
        variant === "primary" &&
          "bg-brand-600 text-white shadow-subtle hover:bg-brand-700",
        variant === "secondary" &&
          "border border-gray-300 bg-white text-ink hover:border-brand-300 hover:text-brand-700",
        variant === "ghost" && "text-ink hover:bg-gray-100",
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
        "rounded-xl border border-gray-200 bg-white p-6 shadow-card",
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
        "inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700",
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
    <div className="rounded-xl border border-brand-100 bg-brand-50/50 p-5">
      <p className="text-base font-bold text-brand-800">{value}</p>
      <p className="mt-1 text-sm text-gray-500">{label}</p>
    </div>
  );
}
