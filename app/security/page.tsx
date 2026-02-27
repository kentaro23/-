import { PageHero } from "@/components/page-hero";
import { Section, SectionHeading } from "@/components/section";
import { ButtonLink, Card } from "@/components/ui";
import { buildMetadata } from "@/lib/metadata";
import { securityControls } from "@/lib/site-data";

export const metadata = buildMetadata({
  title: "情報管理",
  path: "/security",
  description:
    "学会事務局代行における情報管理体制、権限管理、監査ログ、バックアップ、委託先管理、削除ポリシーをご案内します。"
});

export default function SecurityPage() {
  return (
    <>
      <Section className="pb-8 pt-10">
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
            <Card key={item.title}>
              <h2 className="text-base font-semibold text-slate-900">{item.title}</h2>
              <p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-slate-50">
        <SectionHeading title="運用ポリシー（要約）" />
        <div className="grid gap-3 md:grid-cols-2">
          {[
            "個人情報は用途・保持期間・アクセス権を定義して管理",
            "操作ログ・更新履歴を定期レビュー",
            "定例報告でセキュリティ運用状況を共有",
            "契約終了時は返却/削除手順を実行し記録を保管"
          ].map((item) => (
            <div key={item} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700">
              {item}
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
