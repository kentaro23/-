import { ResponsibilitySplitDiagram } from "@/components/diagrams";
import { MonthlyCycle } from "@/components/monthly-cycle";
import { PageHero } from "@/components/page-hero";
import Image from "next/image";
import { Section, SectionHeading } from "@/components/section";
import { ButtonLink, Card, Pill } from "@/components/ui";
import { buildMetadata } from "@/lib/metadata";
import {
  boundaryItems,
  extendedServiceItems,
  serviceCategories,
  serviceOutputs,
  spotServices
} from "@/lib/site-data";

const coreCategoryTitles = new Set(["会員管理", "会計財務", "役員会・委員会運営"]);

export const metadata = buildMetadata({
  title: "サービス詳細",
  path: "/services",
  description:
    "会員管理、会計財務、役員会運営、文書発送、資産管理、選挙・法人運営に加え、総会・年次学術集会開催支援やHP運用などのスポット対応もご紹介します。"
});

export default function ServicesPage() {
  return (
    <>
      <Section className="pb-8 pt-10">
        <PageHero
          eyebrow="Services"
          title="学会事務局として、日常運用を実務レベルで支援"
          description="業務内容だけでなく、毎月の成果物と運用サイクルを明確化したうえで委託範囲を設計します。"
          visual="services"
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

      <Section className="texture-dots">
        <SectionHeading
          title="提供業務一覧（6カテゴリ）"
          description="コア業務3領域を中心に、必要に応じて周辺業務を追加できる設計です。"
        />
        <div className="grid gap-5 lg:grid-cols-2">
          {serviceCategories.map((category) => {
            const Icon = category.icon;
            const output = serviceOutputs.find((item) => item.title === category.title);
            return (
              <Card key={category.title} className="overflow-hidden p-0">
                <div className="border-b border-slate-200 bg-slate-50 px-6 py-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="rounded-xl bg-white p-2 text-brand-800 ring-1 ring-slate-200">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h2 className="text-lg font-semibold text-slate-900">{category.title}</h2>
                    {coreCategoryTitles.has(category.title) ? (
                      <Pill className="ml-auto">月額コアプラン対象</Pill>
                    ) : null}
                  </div>
                </div>
                <div className="px-6 py-5">
                  <Image
                    src={`/assets/illustrations/service-${(serviceCategories.indexOf(category) % 6) + 1}.svg`}
                    alt=""
                    width={320}
                    height={180}
                    className="mb-4 h-auto w-full rounded-xl border border-brand-100/60"
                  />
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
                  {output ? (
                    <div className="mt-4 rounded-xl border border-brand-100 bg-brand-50 px-4 py-3">
                      <p className="text-xs font-semibold tracking-wide text-brand-900">成果物（アウトプット例）</p>
                      <ul className="mt-2 flex flex-wrap gap-2">
                        {output.outputs.map((item) => (
                          <li
                            key={item}
                            className="rounded-full border border-brand-200 bg-white px-3 py-1 text-xs text-slate-700"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
              </Card>
            );
          })}
        </div>
      </Section>

      <Section className="bg-slate-50 texture-mesh">
        <MonthlyCycle />
      </Section>

      <Section className="texture-dots">
        <SectionHeading
          title="単発・スポットでご相談いただける業務"
          description="総会・年次学術集会の開催や学会誌関連など、非定常業務は必要な時だけ追加できます。"
        />
        <div className="grid gap-5 lg:grid-cols-2">
          {spotServices.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.title} className="overflow-hidden bg-white p-0">
                <div className="border-b border-slate-200 bg-white px-6 py-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="rounded-xl bg-brand-50 p-2 text-brand-800 ring-1 ring-brand-100">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h2 className="text-lg font-semibold text-slate-900">{service.title}</h2>
                    <Pill className="ml-auto border-slate-200 bg-slate-100 text-slate-800">単発オプション</Pill>
                  </div>
                </div>
                <div className="px-6 py-5">
                  <p className="text-sm leading-7 text-slate-600">{service.summary}</p>
                  <ul className="mt-4 space-y-2">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700"
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

      <Section className="bg-slate-50 texture-mesh">
        <SectionHeading
          title="責任分界の基本"
          description="実務を委託しても、最終責任と意思決定は学会側に残ることを明確化して運用します。"
        />
        <div className="mb-6">
          <ResponsibilitySplitDiagram />
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          {boundaryItems.map((item) => (
            <div key={item} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700">
              {item}
            </div>
          ))}
        </div>
      </Section>

      <Section className="texture-dots">
        <SectionHeading
          title="追加対応しやすい周辺業務"
          description="競合サービスで見られる周辺領域も、必要時に段階的に追加できます。"
        />
        <div className="grid gap-4 md:grid-cols-2">
          {extendedServiceItems.map((item) => (
            <Card key={item.title} className="bg-white">
              <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
