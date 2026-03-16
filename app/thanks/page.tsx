import { CheckCircle2 } from "lucide-react";
import { Section } from "@/components/section";
import { ButtonLink } from "@/components/ui";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "送信完了",
  path: "/thanks",
  description: "お問い合わせを受け付けました。"
});

export default function ThanksPage() {
  return (
    <Section className="pt-16 md:pt-24">
      <div className="mx-auto max-w-2xl text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-100">
          <CheckCircle2 className="h-7 w-7 text-brand-600" aria-hidden="true" />
        </div>
        <h1 className="mt-5 text-2xl font-bold text-ink">お問い合わせを受け付けました</h1>
        <p className="mt-4 text-sm leading-relaxed text-gray-500">
          内容を確認のうえ、担当よりご連絡いたします。お急ぎの場合は、フォームに記載いただいた内容に補足して再度ご連絡ください。
        </p>
        <p className="mt-3 text-sm text-gray-500">
          受付確認メールを担当者メールアドレス宛に自動送信しています。届かない場合は、迷惑メールフォルダもあわせてご確認ください。
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <ButtonLink href="/">トップへ戻る</ButtonLink>
          <ButtonLink href="/services" variant="secondary">
            サービス詳細を見る
          </ButtonLink>
          <ButtonLink href="/samples" variant="secondary">
            サンプル資料を見る
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
}
