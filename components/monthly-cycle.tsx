const cycleItems = [
  { week: "第1週", task: "会員情報更新・問い合わせ整理" },
  { week: "第2週", task: "会計処理・証憑整理・月次レポート下書き" },
  { week: "第3週", task: "役員会/委員会資料準備・開催案内" },
  { week: "第4週", task: "報告・改善提案・翌月計画" }
] as const;

export function MonthlyCycle() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
      <h3 className="text-base font-semibold text-slate-900">毎月の運用サイクル</h3>
      <div className="mt-4 grid gap-3 md:grid-cols-4">
        {cycleItems.map((item) => (
          <div key={item.week} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-semibold tracking-wide text-brand-800">{item.week}</p>
            <p className="mt-2 text-sm text-slate-700">{item.task}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
