import { FAQAccordion } from "@/components/faq-accordion";
import { OptionCard } from "@/components/option-card";
import { PageHero } from "@/components/page-hero";
import { Section, SectionHeading } from "@/components/section";
import { ButtonLink } from "@/components/ui";
import { optionCards } from "@/content/options";
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
    "学会事務局代行の料金目安レンジと、お見積の考え方をご案内します。"
});

export default function PricingPage() {
  return (
    <>
      <Section className="hero-gradient pb-8 pt-10">
        <PageHero
          eyebrow="Pricing"
          title="月額コア + オプションで、過不足のない運営体制へ"
          description="会員管理・会費徴収/督促を月額コアに集約し、非定常業務をオプション化して最適な見積を行います。"
          actions={<ButtonLink href="/contact">見積依頼をする</ButtonLink>}
        />
      </Section>

      <Section>
        <SectionHeading
          title="月額コアプラン（基本構成）"
          description="会員数に応じた目安レンジです。最終金額は個別見積となります。"
        />
        <div className="mb-8">
          <p className="text-sm font-medium text-ink">基本業務</p>
          <ul className="mt-3 space-y-2">
            {pricingCoreScope.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm text-gray-600 shadow-card"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {pricingTiers.map((tier, i) => (
            <div key={tier.name} className={`rounded-xl border p-6 shadow-card ${i === 1 ? "border-brand-200 bg-brand-50/50 ring-1 ring-brand-200" : "border-gray-200 bg-white"}`}>
              <p className="text-sm font-semibold text-ink">{tier.name}</p>
              <p className="mt-1 text-xs text-gray-400">{tier.members}</p>
              <p className={`font-en mt-5 text-2xl font-bold ${i === 1 ? "text-brand-700" : "text-ink"}`}>{tier.price}</p>
              <p className="mt-3 text-sm leading-relaxed text-gray-500">{tier.note}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-gray-50">
        <SectionHeading
          title="オプション"
          description="月額コアとは別枠で、必要な機能を追加できます。"
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {optionCards.map((option) => (
            <OptionCard key={option.id} option={option} />
          ))}
        </div>
        <div className="mt-8 space-y-6">
          {pricingOptionGroups.map((group) => (
            <div key={group.category} className="rounded-xl border border-gray-200 bg-white p-6 shadow-card">
              <h3 className="text-base font-semibold text-ink">{group.category}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">{group.description}</p>
              <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                {group.items.map((item) => (
                  <div
                    key={`${group.category}-${item.name}`}
                    className="rounded-lg border border-gray-100 bg-gray-50 p-4"
                  >
                    <p className="text-sm font-medium text-ink">{item.name}</p>
                    <p className="font-en mt-2 text-base font-bold text-brand-700">{item.priceRange}</p>
                    <p className="mt-1 text-xs text-gray-400">単位: {item.unit}</p>
                    <p className="mt-2 text-sm leading-relaxed text-gray-500">{item.note}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          title="見積変動要素"
          description="運用条件ごとに必要工数が変わるため、以下を基準に見積を算出します。"
        />
        <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-card">
          <table className="min-w-full text-sm">
            <thead className="border-b border-gray-200 bg-gray-50 text-left">
              <tr>
                <th className="px-5 py-3 font-medium text-ink">要素</th>
                <th className="px-5 py-3 font-medium text-ink">見積への影響</th>
              </tr>
            </thead>
            <tbody>
              {pricingFactors.map((factor) => (
                <tr key={factor} className="border-t border-gray-100">
                  <td className="px-5 py-3 text-gray-700">{factor}</td>
                  <td className="px-5 py-3 text-gray-500">対応頻度・難易度・体制規模が変動</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section className="bg-gray-50">
        <SectionHeading title="見積例" description="実際の見積イメージ（架空例）です。" />
        <div className="grid gap-4 md:grid-cols-2">
          {estimateCases.map((item) => (
            <div key={item.title} className="rounded-xl border border-gray-200 bg-white p-5 shadow-card">
              <h3 className="text-sm font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm font-medium text-brand-700">{item.result}</p>
              <p className="mt-2 text-sm text-gray-500">{item.point}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading title="料金に関するFAQ" />
        <FAQAccordion items={pricingFaqItems} />
      </Section>

      <Section className="bg-gray-50">
        <div className="dark-section rounded-2xl px-8 py-12 text-center md:py-16">
          <h2 className="text-xl font-bold text-white md:text-2xl">見積依頼・相談</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-gray-300">
            会員数や運営体制を共有いただければ、月額コアとオプションの最適な組み合わせをご提案します。
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/contact" className="bg-brand-400 text-navy-950 hover:bg-brand-300">
              見積依頼フォームへ
            </ButtonLink>
            <ButtonLink href="/services" variant="secondary" className="border-gray-500 text-gray-300 hover:bg-white/10 hover:text-white">
              対応業務を確認する
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
