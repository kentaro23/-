const items = ["月次報告", "監査ログ", "最小権限", "承認フロー"] as const;

export function TrustBadges() {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="inline-flex items-center rounded bg-gray-100 px-2.5 py-1 text-xs text-gray-600"
        >
          {item}
        </span>
      ))}
    </div>
  );
}
