import { serviceCategories } from "@/lib/site-data";

export function FunctionMapDiagram() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h3 className="text-base font-semibold text-slate-900">
          学会運営代行の機能マップ（6カテゴリ）
        </h3>
        <span className="text-xs text-slate-500">レスポンシブ対応</span>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {serviceCategories.map((category) => {
          const Icon = category.icon;
          return (
            <div
              key={category.title}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-white p-2 text-brand-800 ring-1 ring-slate-200">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <p className="font-semibold text-slate-900">{category.title}</p>
              </div>
              <ul className="mt-3 space-y-1 text-sm text-slate-600">
                {category.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function ResponsibilitySplitDiagram() {
  const academicSide = [
    "学術方針・重要意思決定",
    "役員・委員会での承認",
    "専門的判断・対外方針",
    "最終責任の所在"
  ];
  const officeSide = [
    "日常運用の事務実務",
    "会員/会計/会議の進行管理",
    "文書発送・問い合わせ一次対応",
    "記録化・報告・可視化"
  ];

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
      <h3 className="text-base font-semibold text-slate-900">
        分担イメージ（意思決定 / 実務）
      </h3>
      <div className="mt-5 grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-stretch">
        <div className="rounded-2xl border border-brand-200 bg-brand-50 p-4">
          <p className="text-sm font-semibold text-brand-900">意思決定（学会）</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            {academicSide.map((item) => (
              <li key={item} className="rounded-lg bg-white/80 px-3 py-2">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden md:flex items-center">
          <svg width="68" height="220" viewBox="0 0 68 220" aria-hidden="true">
            <path
              d="M8 110h52M44 102l16 8-16 8"
              stroke="#1e3a8a"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M60 130H8M24 122l-16 8 16 8"
              stroke="#60a5fa"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.85"
            />
          </svg>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-sm font-semibold text-slate-900">実務（代行）</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            {officeSide.map((item) => (
              <li key={item} className="rounded-lg bg-white px-3 py-2">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
