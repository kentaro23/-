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
    <div className="border-l-2 border-gray-200 pl-6 py-1">
      <p className="text-sm font-semibold text-ink">{title}</p>
      <p className="mt-2 text-sm leading-relaxed text-gray-500">{body}</p>
      <p className="mt-3 text-xs text-gray-400">{by}</p>
    </div>
  );
}
