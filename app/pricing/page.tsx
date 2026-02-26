import { PageHero } from "@/components/page-hero";
import { Section, SectionHeading } from "@/components/section";
import { ButtonLink, Card } from "@/components/ui";
import { buildMetadata } from "@/lib/metadata";
import { pricingFactors, pricingTiers } from "@/lib/site-data";

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
          title="料金は目安レンジでご提示、最終は業務範囲に応じた個別見積"
          description="学会の規模だけでなく、会費体系、会計処理範囲、委員会運営頻度、発送量などによって必要工数は変わります。以下は一般的な目安レンジです。"
          actions={<ButtonLink href="/contact">見積依頼をする</ButtonLink>}
        />
      </Section>

      <Section>
        <SectionHeading
          title="料金目安レンジ"
          description="最終金額はヒアリング後のお見積となります。PoC（試行運用）の場合は対象業務を限定した別設計も可能です。"
        />
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
      </Section>

      <Section className="bg-slate-50">
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
          価格はあくまで目安です。学会運営の継続性と透明性を担保するため、必要な対応範囲を明確にした上で個別見積をご提示します。
        </div>
      </Section>

      <Section>
        <div className="rounded-3xl border border-brand-200 bg-brand-900 p-6 text-white md:p-8">
          <h2 className="text-xl font-bold">見積依頼・相談</h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-brand-100">
            現在の運営体制（会員数、会計運用、委員会頻度、発送物）を共有いただければ、PoCを含めた実行可能な案をご提案します。
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <ButtonLink href="/contact" className="bg-white text-brand-900 hover:bg-brand-50">
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
