import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { ButtonLink } from "@/components/ui";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "送信完了",
  path: "/thanks",
  description: "お問い合わせを受け付けました。担当より確認のうえご連絡します。"
});

export default function ThanksPage() {
  return (
    <Section className="pt-10">
      <div className="mx-auto max-w-3xl">
        <PageHero
          eyebrow="Thanks"
          title="お問い合わせを受け付けました"
          description="内容を確認のうえ、担当よりご連絡いたします。お急ぎの場合は、フォームに記載いただいた内容に補足して再度ご連絡ください。"
        />
        <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600" aria-hidden="true" />
            <p className="text-sm leading-7 text-slate-700">
              受付確認メールを担当者メールアドレス宛に自動送信しています。届かない場合は、迷惑メールフォルダもあわせてご確認ください。
            </p>
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <ButtonLink href="/samples" variant="secondary">
              サンプル資料を見る
            </ButtonLink>
            <ButtonLink href="/">トップへ戻る</ButtonLink>
            <ButtonLink href="/services" variant="secondary">
              サービス詳細を見る
            </ButtonLink>
          </div>
        </div>
      </div>
    </Section>
  );
}
