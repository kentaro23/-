import { ResponsibilitySplitDiagram } from "@/components/diagrams";
import { PageHero } from "@/components/page-hero";
import { Section, SectionHeading } from "@/components/section";
import { ButtonLink, Card } from "@/components/ui";
import { buildMetadata } from "@/lib/metadata";
import { serviceCategories } from "@/lib/site-data";

export const metadata = buildMetadata({
  title: "サービス詳細",
  path: "/services",
  description:
    "会員管理、会計財務、役員会運営、文書発送、資産管理、選挙・法人運営まで、学会事務局代行の対応範囲をカテゴリ別にご紹介します。"
});

export default function ServicesPage() {
  return (
    <>
      <Section className="pb-8 pt-10">
        <PageHero
          eyebrow="Services"
          title="学会事務局として、日常運用を円滑にサポート"
          description="学会運営に必要な実務をカテゴリ別に整理し、学会ごとの運営体制に合わせて委託範囲を設計します。すべてを一括ではなく、必要な機能から段階的に導入することも可能です。"
          actions={
            <>
              <ButtonLink href="/contact">資料請求</ButtonLink>
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
          description="ご提示いただいた学会事務局業務を、運用しやすいカテゴリに整理して掲載しています。"
        />
        <div className="grid gap-5 lg:grid-cols-2">
          {serviceCategories.map((category) => {
            const Icon = category.icon;
            return (
              <Card key={category.title} className="p-0 overflow-hidden">
                <div className="border-b border-slate-200 bg-slate-50 px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-white p-2 text-brand-800 ring-1 ring-slate-200">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h2 className="text-lg font-semibold text-slate-900">{category.title}</h2>
                  </div>
                </div>
                <div className="px-6 py-5">
                  <p className="text-sm leading-7 text-slate-600">{category.summary}</p>
                  <ul className="mt-4 space-y-2">
                    {category.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            );
          })}
        </div>
      </Section>

      <Section className="bg-slate-50">
        <SectionHeading
          title="役割分担を明確にして、運営の質を保つ"
          description="学会側の意思決定と、事務局代行が担う日常実務の境界をあらかじめ整理することで、連携ミスや手戻りを減らします。"
        />
        <ResponsibilitySplitDiagram />
      </Section>

      <Section>
        <div className="rounded-3xl border border-brand-100 bg-brand-50 p-6 md:p-8">
          <h2 className="text-xl font-bold text-slate-900">業務範囲は見積前に明確化します</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            学会ごとに、会員数、会費体系、会計範囲、委員会頻度、発送量は異なります。ヒアリング時に現状フローを整理し、対応範囲・連携方法・報告形式を明示したうえでお見積を提示します。
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <ButtonLink href="/contact">相談する</ButtonLink>
            <ButtonLink href="/flow" variant="secondary">
              導入の流れを見る
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
