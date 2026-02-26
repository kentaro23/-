import { PageHero } from "@/components/page-hero";
import { Section, SectionHeading } from "@/components/section";
import { ButtonLink, Card } from "@/components/ui";
import { buildMetadata } from "@/lib/metadata";
import { flowSteps } from "@/lib/site-data";

export const metadata = buildMetadata({
  title: "導入の流れ",
  path: "/flow",
  description:
    "学会事務局代行の導入フローをご案内します。ヒアリング、お見積り、本契約・移行、運用開始、定常運用まで段階的に進めます。"
});

export default function FlowPage() {
  return (
    <>
      <Section className="pb-8 pt-10">
        <PageHero
          eyebrow="Flow"
          title="お問い合わせから本契約・運用開始までの導入フロー"
          description="ヒアリング内容をもとに業務範囲と役割分担を整理し、お見積り・本契約・移行準備を経て運用を開始します。"
          actions={<ButtonLink href="/contact">まずは相談する</ButtonLink>}
        />
      </Section>

      <Section>
        <SectionHeading
          title="導入ステップ（5段階）"
          description="実務の引継ぎリスクを抑えるため、段階ごとに確認事項と成果物を明確にして進めます。"
        />
        <div className="space-y-4">
          {flowSteps.map((step) => (
            <Card key={step.step} className="grid gap-4 md:grid-cols-[120px_1fr] md:items-start">
              <div className="rounded-2xl bg-brand-50 px-4 py-3">
                <p className="text-xs font-semibold tracking-wide text-brand-800">
                  STEP {step.step}
                </p>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-slate-900">{step.title}</h2>
                <p className="mt-2 text-sm leading-7 text-slate-600">{step.text}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-slate-50">
        <SectionHeading
          title="契約前に確認するポイント"
          description="本契約後の運用開始をスムーズにするため、事前に確認しておく項目です。"
        />
        <div className="grid gap-4 md:grid-cols-2">
          {[
            "学会側との連絡窓口・承認フロー",
            "会員管理・会計・会議運営の優先順位",
            "報告形式（頻度・粒度・担当者）",
            "資料・データ移管時の管理ルール"
          ].map((point) => (
            <Card key={point} className="bg-white">
              <p className="text-sm text-slate-700">{point}</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
