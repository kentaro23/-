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
        "inline-flex items-center justify-center whitespace-nowrap rounded-md px-5 py-2.5 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/20 focus-visible:ring-offset-2",
        variant === "primary" &&
          "bg-ink text-white hover:bg-gray-800",
        variant === "secondary" &&
          "border border-gray-300 bg-white text-ink hover:bg-gray-50",
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
        "rounded-lg border border-gray-200 bg-white p-6",
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
        "inline-flex items-center rounded bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600",
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
    <div className="border-l-2 border-accent pl-4">
      <p className="text-base font-semibold text-ink">{value}</p>
      <p className="mt-0.5 text-sm text-gray-500">{label}</p>
    </div>
  );
}
