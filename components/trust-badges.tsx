import { FileCheck2, KeyRound, ShieldCheck, ShieldEllipsis } from "lucide-react";

const items = [
  { icon: FileCheck2, text: "月次報告" },
  { icon: ShieldEllipsis, text: "監査ログ" },
  { icon: KeyRound, text: "最小権限" },
  { icon: ShieldCheck, text: "承認フロー" }
] as const;

export function TrustBadges() {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <span
            key={item.text}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium text-white"
          >
            <Icon className="h-3.5 w-3.5 text-accent-300" aria-hidden="true" />
            {item.text}
          </span>
        );
      })}
    </div>
  );
}
