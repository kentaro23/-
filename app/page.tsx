import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  CircleDot,
  MoveRight
} from "lucide-react";
import { CtaBanner } from "@/components/cta-banner";
import { FunctionMapDiagram, ResponsibilitySplitDiagram } from "@/components/diagrams";
import { Section, SectionHeading } from "@/components/section";
import { ButtonLink, Card, Pill } from "@/components/ui";
import { buildMetadata } from "@/lib/metadata";
import { challenges, flowSteps, serviceCategories, strengths } from "@/lib/site-data";

export const metadata = buildMetadata({
  title: "トップ",
  path: "/"
});

export default function HomePage() {
  return (
    <>
      <Section className="pb-8 pt-10 md:pb-14 md:pt-14">
        <div className="relative overflow-hidden rounded-3xl border border-brand-100 bg-gradient-to-b from-white via-white to-brand-50 p-6 md:p-10">
          <div className="pointer-events-none absolute inset-0 bg-hero-grid bg-hero-grid opacity-70 hero-grid" />
          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <Pill>常設事務局の外部化（BPO）</Pill>
              <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
                学会運営を、
                <br />
                もっとシンプルに。
              </h1>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
                Academic Officeは、医療・学術領域の学会事務局代行として、会員管理・会計・役員会運営・発送・問い合わせ対応を継続的に支援します。先生方が意思決定と学術活動に集中できる体制づくりを支えます。
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <ButtonLink href="/contact">資料請求</ButtonLink>
                <ButtonLink href="/contact" variant="secondary">
                  見積依頼
                </ButtonLink>
              </div>
              <div className="mt-6 flex flex-wrap gap-5 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-brand-700" />
                  段階導入にも対応
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-brand-700" />
                  医療・学術向け運用設計
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-brand-700" />
                  透明な会計報告
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft md:p-6">
              <p className="text-sm font-semibold text-slate-900">こんな状態を改善したい学会に</p>
              <ul className="mt-4 space-y-3">
                {[
                  "引継ぎのたびに運営が止まりがち",
                  "会計や支払いの状況確認に時間がかかる",
                  "委員会準備が担当者に集中している",
                  "問い合わせ窓口が分散している"
                ].map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm text-slate-700"
                  >
                    <CircleDot className="mt-0.5 h-4 w-4 shrink-0 text-brand-700" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/services"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-800 hover:text-brand-900"
              >
                提供業務の詳細を見る <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-slate-50">
        <SectionHeading
          eyebrow="課題"
          title="学会運営の負担が、学術活動の時間を圧迫していませんか"
          description="学会運営では、日常の事務作業が見えにくく、担当者依存や引継ぎ負担が起こりやすくなります。特に医療・学術領域では、本来優先したい診療・研究・教育の時間が削られがちです。"
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {challenges.map((challenge) => (
            <Card key={challenge} className="bg-white">
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

      <Section>
        <SectionHeading
          eyebrow="解決策"
          title="学会事務局代行とは、常設事務局機能を外部化するBPOです"
          description="学会側は学術的な意思決定と方針策定を担い、Academic Officeが日常運用の実務を継続的にサポートします。業務を標準化・記録化することで、属人化を減らし、運営品質を安定させます。"
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <ResponsibilitySplitDiagram />
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-base font-semibold text-slate-900">導入で目指す状態</h3>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-700" />
                <span>担当交代時も引継ぎしやすい、手順化された運営</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-700" />
                <span>会員管理・会計・会議運営の進捗が見える状態</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-700" />
                <span>先生方が学術活動と重要判断に集中できる役割分担</span>
              </li>
            </ul>
            <div className="mt-6">
              <ButtonLink href="/flow" variant="secondary">
                導入の流れを見る
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-slate-50">
        <SectionHeading
          eyebrow="図解"
          title="学会運営代行の全体像（機能マップ）"
          description="会員管理、会計、役員会運営、発送・問い合わせ、資産管理、選挙・法人運営まで、学会事務局機能をカテゴリごとに整理して委託範囲を明確化します。"
        />
        <FunctionMapDiagram />
      </Section>

      <Section>
        <SectionHeading
          eyebrow="提供業務"
          title="業務範囲を6カテゴリで整理し、必要な部分から委託可能"
          description="すべてを一括委託するだけでなく、優先度の高い業務から段階的に委託範囲を設計できます。"
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {serviceCategories.map((category) => {
            const Icon = category.icon;
            return (
              <Card key={category.title}>
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-brand-50 p-2 text-brand-800 ring-1 ring-brand-100">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-slate-900">{category.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-600">{category.summary}</p>
                <ul className="mt-3 space-y-1 text-sm text-slate-700">
                  {category.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-700" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
        <div className="mt-8">
          <ButtonLink href="/services" variant="secondary">
            サービス詳細ページへ
          </ButtonLink>
        </div>
      </Section>

      <Section className="bg-slate-50">
        <SectionHeading
          eyebrow="強み"
          title="医療・学術向けに必要な信頼性を重視した運用"
          description="運用品質、会計の見える化、情報管理、段階導入のしやすさを重視して設計しています。"
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {strengths.map((strength) => {
            const Icon = strength.icon;
            return (
              <Card key={strength.title} className="bg-white">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-white p-2 text-brand-800 ring-1 ring-slate-200">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-slate-900">{strength.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-600">{strength.text}</p>
              </Card>
            );
          })}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="導入の流れ"
          title="お問い合わせから本契約・運用開始までの流れ"
          description="初回相談からお見積り、本契約・移行、定常運用までを整理した進め方です。"
        />
        <div className="grid gap-4 lg:grid-cols-5">
          {flowSteps.map((step, index) => (
            <div key={step.step} className="relative">
              <Card className="h-full">
                <p className="text-xs font-semibold tracking-wide text-brand-800">
                  STEP {step.step}
                </p>
                <h3 className="mt-2 text-sm font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{step.text}</p>
              </Card>
              {index < flowSteps.length - 1 ? (
                <MoveRight className="absolute -right-3 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-brand-300 lg:block" />
              ) : null}
            </div>
          ))}
        </div>
        <div className="mt-8">
          <ButtonLink href="/flow" variant="secondary">
            詳細な導入フローを見る
          </ButtonLink>
        </div>
      </Section>

      <Section className="pt-2">
        <CtaBanner />
      </Section>
    </>
  );
}
