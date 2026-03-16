const cycleItems = [
  { week: "第1週", task: "会員情報更新・問い合わせ整理" },
  { week: "第2週", task: "年会費徴収・督促・入金確認/消込" },
  { week: "第3週", task: "役員会/委員会資料準備・開催案内" },
  { week: "第4週", task: "報告・改善提案・翌月計画" }
] as const;

export function MonthlyCycle() {
  return (
    <div>
      <h3 className="text-base font-semibold text-ink">毎月の運用サイクル</h3>
      <div className="mt-5 grid gap-4 md:grid-cols-4">
        {cycleItems.map((item, i) => (
          <div key={item.week} className="rounded-xl border border-gray-200 bg-white p-5 shadow-card">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-700">{i + 1}</span>
              <p className="text-xs font-semibold text-brand-600">{item.week}</p>
            </div>
            <p className="mt-3 text-sm text-gray-600">{item.task}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
