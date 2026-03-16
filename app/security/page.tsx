import { PageHero } from "@/components/page-hero";
import { Section, SectionHeading } from "@/components/section";
import { ButtonLink } from "@/components/ui";
import { buildMetadata } from "@/lib/metadata";
import { securityControls } from "@/lib/site-data";

export const metadata = buildMetadata({
  title: "情報管理",
  path: "/security",
  description:
    "学会事務局代行における情報管理体制をご案内します。"
});

export default function SecurityPage() {
  return (
    <>
      <Section className="hero-gradient pb-8 pt-10">
        <PageHero
          eyebrow="Security"
          title="情報管理と運用統制"
          description="医療・学術領域の事務局業務に必要な情報管理を、アクセス制御・ログ・手順書に基づいて運用します。"
          actions={<ButtonLink href="/contact">管理体制について相談する</ButtonLink>}
        />
      </Section>

      <Section>
        <SectionHeading
          title="管理項目"
          description="運用開始前に責任分界と管理ルールを明文化し、継続運用で監査可能性を確保します。"
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {securityControls.map((item) => (
            <div key={item.title} className="rounded-xl border border-gray-200 bg-white p-5 shadow-card">
              <h2 className="text-sm font-semibold text-ink">{item.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-gray-50">
        <SectionHeading title="運用ポリシー（要約）" />
        <div className="space-y-3">
          {[
            "個人情報は用途・保持期間・アクセス権を定義して管理",
            "操作ログ・更新履歴を定期レビュー",
            "定例報告でセキュリティ運用状況を共有",
            "契約終了時は返却/削除手順を実行し記録を保管"
          ].map((item) => (
            <div key={item} className="rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm text-gray-600 shadow-card">
              {item}
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
