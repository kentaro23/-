const items = ["月次報告", "監査ログ", "最小権限", "承認フロー"] as const;

export function TrustBadges() {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="inline-flex items-center rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700"
        >
          {item}
        </span>
      ))}
    </div>
  );
}
