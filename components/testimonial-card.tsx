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
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-card">
      <div className="mb-3 h-1 w-8 rounded-full bg-brand-400" />
      <p className="text-sm font-semibold text-ink">{title}</p>
      <p className="mt-2 text-sm leading-relaxed text-gray-500">{body}</p>
      <p className="mt-4 text-xs text-gray-400">{by}</p>
    </div>
  );
}
