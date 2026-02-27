import { PageHero } from "@/components/page-hero";
import { Section, SectionHeading } from "@/components/section";
import { ButtonLink, Card } from "@/components/ui";
import { buildMetadata } from "@/lib/metadata";
import {
  pricingCoreScope,
  pricingFactors,
  pricingOptionGroups,
  pricingTiers
} from "@/lib/site-data";

export const metadata = buildMetadata({
  title: "料金",
  path: "/pricing",
  description:
    "学会事務局代行の料金目安レンジと、お見積の考え方をご案内します。会員数や会計範囲、委員会頻度、発送量などにより個別見積となります。"
});

export default function PricingPage() {
  return (
    <>
      <Section className="pb-8 pt-10">
        <PageHero
          eyebrow="Pricing"
          title="料金は「月額コアプラン + オプション」で設計"
          description="通常運用で発生しやすい会員管理・会計財務・役員会/委員会運営は月額プラン化し、学会誌発行、選挙、HP制作、学術集会対応などの非定常業務はオプションとして切り分けることで、運営実態に合った見積を行います。"
          actions={<ButtonLink href="/contact">見積依頼をする</ButtonLink>}
        />
      </Section>

      <Section>
        <SectionHeading
          title="月額コアプラン（基本構成）"
          description="以下は、会員管理・会計財務・役員会/委員会運営を基本にした月額の目安レンジです。最終金額はヒアリング後のお見積となります。"
        />
        <div className="mb-6 rounded-2xl border border-brand-100 bg-brand-50 p-5">
          <h3 className="text-sm font-semibold text-brand-900">月額プランに含める基本業務（標準例）</h3>
          <ul className="mt-3 grid gap-2 md:grid-cols-1">
            {pricingCoreScope.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-brand-100 bg-white px-4 py-3 text-sm text-slate-700"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {pricingTiers.map((tier) => (
            <Card key={tier.name} className="flex h-full flex-col">
              <div className="rounded-xl bg-brand-50 p-4">
                <p className="text-sm font-semibold text-brand-900">{tier.name}</p>
                <p className="mt-1 text-sm text-slate-700">{tier.members}</p>
              </div>
              <p className="mt-4 text-2xl font-bold text-slate-900">{tier.price}</p>
              <p className="mt-3 text-sm leading-7 text-slate-600">{tier.note}</p>
            </Card>
          ))}
        </div>
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm leading-7 text-slate-700">
          会員数の詳細（例: 120名 / 280名 / 650名 など）や、会費体系、委員会開催頻度、会計処理範囲によって金額は変動します。詳細なお見積は一度お問い合わせください。
        </div>
      </Section>

      <Section className="bg-slate-50">
        <SectionHeading
          title="オプション料金（従量 / スポット / 月額追加）"
          description="学会誌発行、HP制作・運用、役員選挙、学術集会関連などは、実施頻度や件数差が大きいためオプションで設定します。"
        />
        <div className="space-y-6">
          {pricingOptionGroups.map((group) => (
            <Card key={group.category} className="bg-white">
              <h3 className="text-base font-semibold text-slate-900">{group.category}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{group.description}</p>
              <div className="mt-4 overflow-x-auto">
                <table className="min-w-full border-separate border-spacing-0 text-sm">
                  <thead>
                    <tr>
                      <th className="rounded-tl-xl border border-slate-200 bg-slate-50 px-4 py-3 text-left font-semibold text-slate-900">
                        項目
                      </th>
                      <th className="border border-slate-200 bg-slate-50 px-4 py-3 text-left font-semibold text-slate-900">
                        課金単位
                      </th>
                      <th className="border border-slate-200 bg-slate-50 px-4 py-3 text-left font-semibold text-slate-900">
                        目安料金
                      </th>
                      <th className="rounded-tr-xl border border-slate-200 bg-slate-50 px-4 py-3 text-left font-semibold text-slate-900">
                        補足
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {group.items.map((item) => (
                      <tr key={`${group.category}-${item.name}`}>
                        <td className="border-x border-b border-slate-200 px-4 py-3 text-slate-800">
                          {item.name}
                        </td>
                        <td className="border-b border-slate-200 px-4 py-3 text-slate-700">
                          {item.unit}
                        </td>
                        <td className="border-b border-slate-200 px-4 py-3 font-medium text-brand-900">
                          {item.priceRange}
                        </td>
                        <td className="border-b border-slate-200 px-4 py-3 text-slate-600">
                          {item.note}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          title="見積変動要素"
          description="以下の条件をもとに、体制・運用フロー・対応工数を算出してお見積を提示します。"
        />
        <div className="grid gap-3 md:grid-cols-2">
          {pricingFactors.map((factor) => (
            <div
              key={factor}
              className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700"
            >
              {factor}
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-7 text-amber-900">
          価格はあくまで目安です。月額コアプラン + オプションの組み合わせで、学会運営の継続性と透明性を担保しつつ、過不足のない個別見積をご提示します。
        </div>
      </Section>

      <Section className="bg-slate-50">
        <div className="rounded-3xl border border-brand-200 bg-brand-900 p-6 text-white md:p-8">
          <h2 className="text-xl font-bold">見積依頼・相談</h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-brand-100">
            現在の運営体制（会員数、会計運用、委員会頻度、発送物）を共有いただければ、実行可能な運営委託プランをご提案します。
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <ButtonLink
              href="/contact"
              variant="secondary"
              className="border-white bg-white text-brand-900 hover:bg-brand-50"
            >
              見積依頼フォームへ
            </ButtonLink>
            <ButtonLink
              href="/services"
              variant="secondary"
              className="border-white/40 bg-white/10 text-white hover:bg-white/20"
            >
              対応業務を確認する
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
