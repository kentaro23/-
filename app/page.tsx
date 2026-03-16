import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CtaBanner } from "@/components/cta-banner";
import { FamilyBanner } from "@/components/family-banner";
import { ResponsibilitySplitDiagram } from "@/components/diagrams";
import { OptionCard } from "@/components/option-card";
import { TestimonialCard } from "@/components/testimonial-card";
import { TrustBadges } from "@/components/trust-badges";
import { Section, SectionHeading } from "@/components/section";
import { ButtonLink, Card, StatCard } from "@/components/ui";
import { officeSetupOption } from "@/content/options";
import { buildMetadata } from "@/lib/metadata";
import {
  challenges,
  faqItems,
  flowSteps,
  pricingTiers,
  serviceCategories,
  trustItems
} from "@/lib/site-data";

export const metadata = buildMetadata({
  title: "トップ",
  path: "/"
});

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <Section className="hero-gradient pt-16 pb-14 md:pt-24 md:pb-20">
        <p className="font-en text-xs font-semibold uppercase tracking-widest text-brand-700">
          学会運営代行 / BPO
        </p>
        <h1 className="mt-3 text-3xl font-bold text-ink md:text-4xl lg:text-5xl">
          がっかりさせない学会
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg">
          会員管理・会費徴収/督促を中心に、役員会運営を含む学会運営実務を継続支援。
          先生方は意思決定と学術活動に集中できます。
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <ButtonLink href="/contact">お問い合わせ</ButtonLink>
          <ButtonLink href="/services" variant="secondary">
            サービス詳細
          </ButtonLink>
        </div>
        <div className="mt-8">
          <TrustBadges />
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <StatCard value="実務負荷を分散" label="担当依存を軽減" />
          <StatCard value="月次で見える化" label="会計・進捗を可視化" />
          <StatCard value="引継ぎしやすい" label="手順とログを標準化" />
        </div>
      </Section>

      {/* Challenges */}
      <Section>
        <SectionHeading
          eyebrow="課題"
          title="学会運営の実務が、本来の活動時間を圧迫していませんか"
          description="担当者依存、会計の見えづらさ、会議準備の負担。日常実務の積み上がりが運営品質を下げる原因になります。"
        />
        <div className="space-y-3">
          {challenges.map((challenge, i) => (
            <div key={challenge} className="flex gap-4 rounded-xl border border-gray-200 bg-white px-5 py-4 shadow-card">
              <span className="font-en mt-0.5 text-sm font-bold text-brand-500">{String(i + 1).padStart(2, "0")}</span>
              <p className="text-sm leading-relaxed text-gray-600">{challenge}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Responsibility Split */}
      <Section className="bg-gray-50">
        <SectionHeading
          eyebrow="解決"
          title="意思決定は学会、実務は事務局代行で分担"
          description="役割を明確化し、日常運用の品質を維持することで、学会本来の活動時間を確保します。"
        />
        <ResponsibilitySplitDiagram />
      </Section>

      {/* Services */}
      <Section>
        <SectionHeading
          eyebrow="サービス"
          title="6カテゴリの実務を、必要範囲から委託"
          description="月額コアとオプションを組み合わせ、過不足のない体制を設計します。"
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {serviceCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div key={category.title} className="rounded-xl border border-gray-200 bg-white p-5 shadow-card transition hover:shadow-elevated">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50">
                    <Icon className="h-4 w-4 text-brand-600" />
                  </div>
                  <h3 className="text-sm font-semibold text-ink">{category.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">{category.summary}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {trustItems.map((item) => (
            <span key={item} className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-500">
              {item}
            </span>
          ))}
        </div>
        <div className="mt-6 max-w-lg">
          <OptionCard option={officeSetupOption} compact />
        </div>
      </Section>

      {/* Flow */}
      <Section className="bg-gray-50">
        <SectionHeading
          eyebrow="導入の流れ"
          title="本契約・移行までの5ステップ"
          description="段階ごとの成果物を明確にし、運用停止リスクを抑えながら移行します。"
        />
        <div className="space-y-0 divide-y divide-gray-200 rounded-xl border border-gray-200 bg-white shadow-card">
          {flowSteps.map((step) => (
            <div key={step.step} className="flex gap-5 px-6 py-5">
              <span className="font-en mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-600 text-xs font-bold text-white">{step.step}</span>
              <div>
                <h3 className="text-sm font-semibold text-ink">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-gray-500">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Pricing */}
      <Section>
        <SectionHeading
          eyebrow="料金"
          title="月額コア + オプションで、運用実態に合わせる"
          description="会員数に応じた目安レンジを基準に、非定常業務をオプション化して見積を最適化します。"
        />
        <div className="grid gap-4 md:grid-cols-3">
          {pricingTiers.map((tier, i) => (
            <div key={tier.name} className={`rounded-xl border p-6 shadow-card ${i === 1 ? "border-brand-200 bg-brand-50/50" : "border-gray-200 bg-white"}`}>
              <p className="text-sm font-semibold text-ink">{tier.name}</p>
              <p className="mt-1 text-xs text-gray-400">{tier.members}</p>
              <p className={`font-en mt-4 text-2xl font-bold ${i === 1 ? "text-brand-700" : "text-ink"}`}>{tier.price}</p>
            </div>
          ))}
        </div>
        <div className="mt-5">
          <ButtonLink href="/pricing" variant="secondary">
            料金詳細を見る
          </ButtonLink>
        </div>
      </Section>

      {/* FAQ Preview */}
      <Section className="bg-gray-50">
        <SectionHeading
          eyebrow="FAQ"
          title="よくある質問"
          description="契約条件・責任分界・運用体制に関する代表的な質問です。"
        />
        <div className="divide-y divide-gray-200 rounded-xl border border-gray-200 bg-white shadow-card">
          {faqItems.slice(0, 4).map((item) => (
            <div key={item.question} className="px-6 py-5">
              <h3 className="text-sm font-medium text-ink">{item.question}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">{item.answer}</p>
            </div>
          ))}
        </div>
        <div className="mt-5">
          <ButtonLink href="/faq" variant="secondary">
            FAQをすべて見る
          </ButtonLink>
        </div>
      </Section>

      {/* Testimonials */}
      <Section>
        <SectionHeading
          eyebrow="Voice"
          title="お客様の声"
          description="導入後にいただいた評価の一部をご紹介します。"
        />
        <div className="grid gap-6 md:grid-cols-2">
          <TestimonialCard
            title="運営担当の引継ぎ負荷が軽くなった"
            body="会員管理と会計の進捗が月次で見えるようになり、役員会での確認時間を短縮できました。"
            by="医療系学会 事務局ご担当者（匿名）"
          />
          <TestimonialCard
            title="委員会運営の準備が前倒しで進む"
            body="案内文・出欠管理・議事録ドラフトまで一連で整うため、判断に集中できる体制になりました。"
            by="学術団体 理事（匿名）"
          />
        </div>
      </Section>

      {/* Family + CTA */}
      <Section className="bg-gray-50">
        <FamilyBanner />
      </Section>

      <Section>
        <CtaBanner />
      </Section>
    </>
  );
}
