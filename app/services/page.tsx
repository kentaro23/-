import { ResponsibilitySplitDiagram } from "@/components/diagrams";
import { MonthlyCycle } from "@/components/monthly-cycle";
import { OptionCard } from "@/components/option-card";
import { PageHero } from "@/components/page-hero";
import { Section, SectionHeading } from "@/components/section";
import { ButtonLink } from "@/components/ui";
import { optionCards } from "@/content/options";
import { buildMetadata } from "@/lib/metadata";
import {
  boundaryItems,
  extendedServiceItems,
  serviceCategories,
  serviceOutputs,
  spotServices
} from "@/lib/site-data";

const coreCategoryTitles = new Set(["会員管理", "会計財務"]);

export const metadata = buildMetadata({
  title: "サービス詳細",
  path: "/services",
  description:
    "会員管理、会計財務、役員会運営、文書発送、資産管理、選挙・法人運営に加え、総会・年次学術集会開催支援やHP運用などのスポット対応もご紹介します。"
});

export default function ServicesPage() {
  return (
    <>
      <Section className="hero-gradient pb-8 pt-10">
        <PageHero
          eyebrow="Services"
          title="学会事務局として、日常運用を実務レベルで支援"
          description="業務内容だけでなく、毎月の成果物と運用サイクルを明確化したうえで委託範囲を設計します。"
          actions={
            <>
              <ButtonLink href="/contact">お問い合わせ</ButtonLink>
              <ButtonLink href="/pricing" variant="secondary">
                料金の目安を見る
              </ButtonLink>
            </>
          }
        />
      </Section>

      <Section>
        <SectionHeading
          title="提供業務一覧（6カテゴリ）"
          description="コア業務2領域を中心に、必要に応じて周辺業務を追加できる設計です。"
        />
        <div className="grid gap-5 lg:grid-cols-2">
          {serviceCategories.map((category) => {
            const Icon = category.icon;
            const output = serviceOutputs.find((item) => item.title === category.title);
            return (
              <div key={category.title} className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-card">
                <div className="flex items-center gap-3 border-b border-gray-100 px-6 py-4">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-50">
                    <Icon className="h-3.5 w-3.5 text-brand-600" />
                  </div>
                  <h2 className="text-base font-semibold text-ink">{category.title}</h2>
                  {coreCategoryTitles.has(category.title) ? (
                    <span className="ml-auto rounded-full bg-brand-100 px-2.5 py-0.5 text-xs font-medium text-brand-700">コア</span>
                  ) : null}
                </div>
                <div className="px-6 py-5">
                  <p className="text-sm leading-relaxed text-gray-500">{category.summary}</p>
                  <ul className="mt-4 space-y-1.5">
                    {category.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <span className="h-1 w-1 shrink-0 rounded-full bg-brand-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  {output ? (
                    <div className="mt-4 border-t border-gray-100 pt-4">
                      <p className="text-xs font-medium text-gray-400">成果物</p>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {output.outputs.map((item) => (
                          <span
                            key={item}
                            className="rounded-full bg-brand-50 px-2.5 py-0.5 text-xs text-brand-700"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      <Section className="bg-gray-50">
        <MonthlyCycle />
      </Section>

      <Section>
        <SectionHeading
          title="単発・スポットでご相談いただける業務"
          description="総会・年次学術集会の開催や学会誌関連など、非定常業務は必要な時だけ追加できます。"
        />
        <div className="grid gap-5 lg:grid-cols-2">
          {spotServices.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-card">
                <div className="flex items-center gap-3 border-b border-gray-100 px-6 py-4">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gray-100">
                    <Icon className="h-3.5 w-3.5 text-gray-500" />
                  </div>
                  <h2 className="text-base font-semibold text-ink">{service.title}</h2>
                  <span className="ml-auto rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-gray-500">スポット</span>
                </div>
                <div className="px-6 py-5">
                  <p className="text-sm leading-relaxed text-gray-500">{service.summary}</p>
                  <ul className="mt-4 space-y-1.5">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <span className="h-1 w-1 shrink-0 rounded-full bg-gray-300" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      <Section className="bg-gray-50">
        <SectionHeading
          title="責任分界の基本"
          description="実務を委託しても、最終責任と意思決定は学会側に残ることを明確化して運用します。"
        />
        <ResponsibilitySplitDiagram />
        <div className="mt-6 space-y-2">
          {boundaryItems.map((item) => (
            <p key={item} className="text-sm text-gray-500">
              &mdash; {item}
            </p>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          title="追加対応しやすい周辺業務"
          description="競合サービスで見られる周辺領域も、必要時に段階的に追加できます。"
        />
        <div className="grid gap-4 md:grid-cols-2">
          {extendedServiceItems.map((item) => (
            <div key={item.title} className="rounded-xl border border-gray-200 bg-white p-5 shadow-card">
              <h3 className="text-sm font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-gray-50">
        <SectionHeading
          title="オプション対応"
          description="事務局機能の拡張が必要な場合は、個別に追加できます。"
        />
        <div className="grid gap-4 md:grid-cols-2">
          {optionCards.map((option) => (
            <OptionCard key={option.id} option={option} />
          ))}
        </div>
      </Section>
    </>
  );
}
