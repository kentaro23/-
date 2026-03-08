import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ChevronRight,
  MoveRight
} from "lucide-react";
import { CtaBanner } from "@/components/cta-banner";
import { FamilyBanner } from "@/components/family-banner";
import { HeroVisual } from "@/components/hero-visual";
import { ResponsibilitySplitDiagram } from "@/components/diagrams";
import { OptionCard } from "@/components/option-card";
import { TestimonialCard } from "@/components/testimonial-card";
import { TrustBadges } from "@/components/trust-badges";
import { Section, SectionHeading } from "@/components/section";
import { ButtonLink, Card, Pill, StatCard } from "@/components/ui";
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
      <Section className="pb-8 pt-8 md:pb-12 md:pt-12">
        <div className="relative overflow-hidden rounded-4xl border border-brand-700 bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 p-6 md:p-10">
          <div className="pointer-events-none absolute inset-0 bg-hero-grid opacity-40 hero-grid" />
          <div className="relative grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="fade-in-up">
              <Pill className="font-en border-accent-400 bg-accent-500/15 uppercase tracking-[0.14em] text-accent-300">
                医療・学術向け / 常設事務局の外部化（BPO）
              </Pill>
              <h1 className="mt-5 text-3xl font-bold text-white md:text-5xl">
                学会事務局代行を、
                <br />
                品質で選べる状態へ。
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/80 md:text-base">
                がっかりさせない学会は、会員管理・会費徴収/督促を中心に、役員会運営を含む学会運営実務を継続支援します。先生方は意思決定と学術活動に集中し、運営負荷を平準化できます。
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <ButtonLink href="/contact">資料請求・見積依頼</ButtonLink>
                <ButtonLink href="/services" variant="secondary" className="border-white/40 bg-white/10 text-white hover:bg-white/20">
                  サービス詳細を見る
                </ButtonLink>
              </div>
              <div className="mt-5">
                <TrustBadges />
              </div>
            </div>

            <div className="fade-in-up rounded-3xl border border-slate-200 bg-white p-5 shadow-panel md:p-6">
              <HeroVisual name="home" className="mb-5" />
              <p className="text-sm font-semibold text-slate-900">3秒でわかる導入効果</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                <StatCard value="実務負荷を分散" label="担当依存を軽減" />
                <StatCard value="月次で見える化" label="会計・進捗を可視化" />
                <StatCard value="引継ぎしやすい" label="手順とログを標準化" />
              </div>
              <Link
                href="/services"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent-500 no-underline hover:text-accent-600"
              >
                提供業務の詳細を見る <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Section className="texture-dots bg-white">
        <SectionHeading
          eyebrow="課題"
          title="学会運営の実務が、診療・研究・教育の時間を圧迫していませんか"
          description="担当者依存、会計の見えづらさ、会議運営の準備負担など、日常実務の積み上がりが運営品質を下げる原因になります。"
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {challenges.map((challenge) => (
            <Card key={challenge}>
              <div className="flex gap-3">
                <div className="mt-0.5 rounded-full bg-brand-100 p-1.5 text-brand-800">
                  <ChevronRight className="h-4 w-4" />
                </div>
                <p className="text-sm leading-7 text-slate-700">{challenge}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-brand-50">
        <SectionHeading
          eyebrow="解決"
          title="意思決定は学会、実務は事務局代行で分担"
          description="役割を明確化し、日常運用の品質を維持することで、学会本来の活動時間を確保します。"
        />
        <ResponsibilitySplitDiagram />
      </Section>

      <Section className="texture-dots bg-brand-50">
        <SectionHeading
          eyebrow="提供価値"
          title="6カテゴリの実務を、必要範囲から委託"
          description="月額コアとオプションを組み合わせ、実運用に沿った過不足のない体制を設計します。"
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {serviceCategories.map((category) => {
            const Icon = category.icon;
            return (
              <Card key={category.title} className="overflow-hidden border-brand-200">
                <div className="mb-4 h-1 w-full rounded-full bg-accent-500" />
                <Image
                  src={
                    category.title === "会員管理"
                      ? "/assets/illustrations/Gemini_Generated_Image_qx18y0qx18y0qx18.png"
                      : category.title === "選挙・法人運営"
                      ? "/assets/illustrations/Gemini_Generated_Image_km7jj5km7jj5km7j.png"
                      : category.title === "役員会・委員会運営"
                        ? "/assets/illustrations/Gemini_Generated_Image_km7jj5km7jj5km7j-3.png"
                        : category.title === "資産管理・アーカイブ"
                          ? "/assets/illustrations/Gemini_Generated_Image_ibyw5fibyw5fibyw.png"
                          : category.title === "会計財務"
                            ? "/assets/illustrations/Gemini_Generated_Image_ezgs08ezgs08ezgs.png"
                            : category.title === "文書・発送・一次窓口"
                              ? "/assets/illustrations/Gemini_Generated_Image_ne1wl3ne1wl3ne1w.png"
                              : `/assets/illustrations/service-${(serviceCategories.indexOf(category) % 6) + 1}.svg`
                  }
                  alt=""
                  width={320}
                  height={180}
                  className="mb-4 h-auto w-full rounded-xl border border-brand-200"
                />
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-accent-100 p-2 text-accent-500 ring-1 ring-accent-300/40">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-slate-900">{category.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-600">{category.summary}</p>
              </Card>
            );
          })}
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {trustItems.map((item) => (
            <Pill key={item} className="border-accent-200 bg-accent-50 text-accent-800">
              {item}
            </Pill>
          ))}
        </div>
        <div className="mt-4 max-w-2xl">
          <OptionCard option={officeSetupOption} compact />
        </div>
      </Section>

      <Section className="bg-brand-50">
        <SectionHeading
          eyebrow="導入の流れ"
          title="本契約・移行までの5ステップ"
          description="段階ごとの成果物を明確にし、運用停止リスクを抑えながら移行します。"
        />
        <div className="grid gap-4 lg:grid-cols-5">
          {flowSteps.map((step, index) => (
            <div key={step.step} className="relative">
              <Card className="h-full border-brand-100/80">
                <p className="font-en inline-flex rounded-full bg-accent-100 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-accent-500">STEP {step.step}</p>
                <h3 className="mt-2 text-sm font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{step.text}</p>
              </Card>
              {index < flowSteps.length - 1 ? (
                <MoveRight className="absolute -right-3 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-accent-400 lg:block" />
              ) : null}
            </div>
          ))}
        </div>
      </Section>

      <Section className="texture-dots bg-white">
        <SectionHeading
          eyebrow="料金"
          title="月額コア + オプションで、運用実態に合わせる"
          description="会員数に応じた目安レンジを基準に、非定常業務をオプション化して見積を最適化します。"
        />
        <div className="grid gap-4 md:grid-cols-3">
          {pricingTiers.map((tier) => (
            <Card key={tier.name} className="bg-white texture-mesh border-brand-200">
              <h3 className="text-sm font-semibold text-brand-900">{tier.name}</h3>
              <p className="mt-1 text-sm text-slate-600">{tier.members}</p>
              <p className="font-en mt-3 text-2xl font-bold text-accent-500">{tier.price}</p>
            </Card>
          ))}
        </div>
        <div className="mt-5">
          <ButtonLink href="/pricing" variant="secondary">
            料金詳細を見る
          </ButtonLink>
        </div>
      </Section>

      <Section className="bg-brand-50">
        <SectionHeading
          eyebrow="FAQ"
          title="よくある質問"
          description="契約条件・責任分界・運用体制に関する代表的な質問です。"
        />
        <div className="grid gap-4 md:grid-cols-2">
          {faqItems.slice(0, 4).map((item) => (
            <Card key={item.question} className="bg-white">
              <h3 className="text-sm font-semibold text-slate-900">{item.question}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{item.answer}</p>
            </Card>
          ))}
        </div>
        <div className="mt-5">
          <ButtonLink href="/faq" variant="secondary">
            FAQをすべて見る
          </ButtonLink>
        </div>
      </Section>

      <Section className="pt-4">
        <SectionHeading
          eyebrow="Voice"
          title="お客様の声"
          description="導入後にいただいた評価の一部をご紹介します。"
        />
        <div className="grid gap-4 md:grid-cols-2">
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

      <Section className="pt-2">
        <FamilyBanner />
      </Section>

      <Section className="pt-2">
        <CtaBanner />
      </Section>
    </>
  );
}
