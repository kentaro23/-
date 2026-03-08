import { Quote } from "lucide-react";
import { Card } from "@/components/ui";

export function TestimonialCard({
  title,
  body,
  by
}: {
  title: string;
  body: string;
  by: string;
}) {
  return (
    <Card className="bg-white">
      <Quote className="h-7 w-7 text-accent-500" aria-hidden="true" />
      <h3 className="mt-3 text-sm font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-7 text-slate-600">{body}</p>
      <p className="mt-3 text-xs font-medium text-slate-500">{by}</p>
    </Card>
  );
}
