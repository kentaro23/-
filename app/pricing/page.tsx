import { FAQAccordion } from "@/components/faq-accordion";
import { PageHero } from "@/components/page-hero";
import { Section, SectionHeading } from "@/components/section";
import { ButtonLink, Card } from "@/components/ui";
import { Coins, Layers3, Landmark } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import {
  estimateCases,
  pricingCoreScope,
  pricingFactors,
  pricingFaqItems,
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
          title="月額コア + オプションで、過不足のない運営体制へ"
          description="会員管理・会計財務・役員会/委員会運営を月額コアに集約し、非定常業務をオプション化して最適な見積を行います。"
          visual="pricing"
          actions={<ButtonLink href="/contact">見積依頼をする</ButtonLink>}
        />
      </Section>

      <Section className="texture-dots">
        <SectionHeading
          title="月額コアプラン（基本構成）"
          description="会員数に応じた目安レンジです。詳細人数・運用負荷により変動するため、最終金額は個別見積となります。"
        />
        <div className="mb-6 rounded-2xl border border-brand-100 bg-brand-50 p-5">
          <h3 className="text-sm font-semibold text-brand-900">月額プランに含める基本業務</h3>
          <ul className="mt-3 grid gap-2">
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
          {pricingTiers.map((tier, index) => (
            <Card key={tier.name} className="texture-mesh flex h-full flex-col">
              <div className="rounded-xl bg-brand-50/80 p-4">
                <p className="text-sm font-semibold text-brand-900">{tier.name}</p>
                <p className="mt-1 text-sm text-slate-700">{tier.members}</p>
              </div>
              <div className="mt-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-brand-800 ring-1 ring-brand-100">
                {index === 0 ? <Coins className="h-4 w-4" /> : null}
                {index === 1 ? <Layers3 className="h-4 w-4" /> : null}
                {index === 2 ? <Landmark className="h-4 w-4" /> : null}
              </div>
              <p className="mt-4 whitespace-nowrap text-2xl font-bold text-slate-900 sm:text-3xl">
                {tier.price}
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-600">{tier.note}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-slate-50 texture-mesh">
        <SectionHeading
          title="オプション料金（従量 / スポット / 月額追加）"
          description="学会誌、HP、選挙、総会・年次学術集会などは、実施頻度差が大きいためオプション設定です。"
        />
        <div className="space-y-6">
          {pricingOptionGroups.map((group) => (
            <Card key={group.category} className="bg-white">
              <h3 className="text-base font-semibold text-slate-900">{group.category}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{group.description}</p>
              <div className="mt-4 hidden overflow-x-auto md:block">
                <table className="min-w-full border-separate border-spacing-0 text-sm">
                  <thead>
                    <tr>
                      <th className="rounded-tl-xl border border-slate-200 bg-slate-50 px-4 py-3 text-left font-semibold text-slate-900">項目</th>
                      <th className="border border-slate-200 bg-slate-50 px-4 py-3 text-left font-semibold text-slate-900">課金単位</th>
                      <th className="border border-slate-200 bg-slate-50 px-4 py-3 text-left font-semibold text-slate-900">目安料金</th>
                      <th className="rounded-tr-xl border border-slate-200 bg-slate-50 px-4 py-3 text-left font-semibold text-slate-900">補足</th>
                    </tr>
                  </thead>
                  <tbody>
                    {group.items.map((item) => (
                      <tr key={`${group.category}-${item.name}`}>
                        <td className="border-x border-b border-slate-200 px-4 py-3 text-slate-800">{item.name}</td>
                        <td className="border-b border-slate-200 px-4 py-3 text-slate-700">{item.unit}</td>
                        <td className="border-b border-slate-200 px-4 py-3 font-medium text-brand-900">{item.priceRange}</td>
                        <td className="border-b border-slate-200 px-4 py-3 text-slate-600">{item.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 grid gap-3 md:hidden">
                {group.items.map((item) => (
                  <div
                    key={`${group.category}-${item.name}-mobile`}
                    className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <p className="text-sm font-semibold text-slate-900">{item.name}</p>
                    <dl className="mt-3 space-y-2 text-sm">
                      <div className="grid grid-cols-[80px_1fr] gap-2"><dt className="text-slate-500">課金単位</dt><dd className="text-slate-700">{item.unit}</dd></div>
                      <div className="grid grid-cols-[80px_1fr] gap-2"><dt className="text-slate-500">目安料金</dt><dd className="font-medium text-brand-900">{item.priceRange}</dd></div>
                      <div className="grid grid-cols-[80px_1fr] gap-2"><dt className="text-slate-500">補足</dt><dd className="text-slate-600">{item.note}</dd></div>
                    </dl>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="texture-dots">
        <SectionHeading
          title="見積変動要素"
          description="運用条件ごとに必要工数が変わるため、以下を基準に見積を算出します。"
        />
        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
          <table className="min-w-full text-sm">
            <thead className="bg-slate-50 text-left text-slate-900">
              <tr>
                <th className="px-4 py-3 font-semibold">要素</th>
                <th className="px-4 py-3 font-semibold">見積への影響</th>
              </tr>
            </thead>
            <tbody>
              {pricingFactors.map((factor) => (
                <tr key={factor} className="border-t border-slate-200">
                  <td className="px-4 py-3 text-slate-800">{factor}</td>
                  <td className="px-4 py-3 text-slate-600">対応頻度・難易度・体制規模が変動</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section className="bg-slate-50 texture-mesh">
        <SectionHeading title="見積例" description="実際の見積イメージ（架空例）です。" />
        <div className="grid gap-4 md:grid-cols-2">
          {estimateCases.map((item) => (
            <Card key={item.title} className="bg-white">
              <h3 className="text-sm font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm font-medium text-brand-900">{item.result}</p>
              <p className="mt-2 text-sm text-slate-600">{item.point}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading title="料金に関するFAQ" />
        <FAQAccordion items={pricingFaqItems} />
      </Section>

      <Section className="bg-slate-50">
        <div className="rounded-3xl border border-brand-200 bg-brand-900 p-6 text-white md:p-8">
          <h2 className="text-xl font-bold">見積依頼・相談</h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-brand-100">
            会員数や運営体制を共有いただければ、月額コアとオプションの最適な組み合わせをご提案します。
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <ButtonLink href="/contact" variant="secondary" className="!border-white !bg-white !text-brand-900 hover:!bg-brand-50">
              見積依頼フォームへ
            </ButtonLink>
            <ButtonLink href="/services" variant="secondary" className="border-white/40 bg-white/10 text-white hover:bg-white/20">
              対応業務を確認する
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
