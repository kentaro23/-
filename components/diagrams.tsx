import { serviceCategories } from "@/lib/site-data";

export function FunctionMapDiagram() {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6">
      <h3 className="text-base font-semibold text-ink">
        学会運営代行の機能マップ（6カテゴリ）
      </h3>
      <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {serviceCategories.map((category) => {
          const Icon = category.icon;
          return (
            <div
              key={category.title}
              className="rounded-lg border border-gray-100 bg-surface p-4"
            >
              <div className="flex items-center gap-2.5">
                <Icon className="h-4 w-4 text-gray-400" aria-hidden="true" />
                <p className="text-sm font-semibold text-ink">{category.title}</p>
              </div>
              <ul className="mt-3 space-y-1 text-sm text-gray-500">
                {category.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gray-300" />
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
    <div className="rounded-lg border border-gray-200 bg-white p-6">
      <h3 className="text-base font-semibold text-ink">
        分担イメージ（意思決定 / 実務）
      </h3>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <div className="rounded-lg bg-ink p-5">
          <p className="text-sm font-semibold text-white">意思決定（学会）</p>
          <ul className="mt-3 space-y-2">
            {academicSide.map((item) => (
              <li key={item} className="rounded bg-white/10 px-3 py-2 text-sm text-gray-300">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-lg border-2 border-accent bg-accent/5 p-5">
          <p className="text-sm font-semibold text-ink">実務（代行）</p>
          <ul className="mt-3 space-y-2">
            {officeSide.map((item) => (
              <li key={item} className="rounded bg-white px-3 py-2 text-sm text-gray-600">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
