import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "プライバシーポリシー",
  path: "/privacy",
  description: "Academic Office（学会運営代行）のプライバシーポリシー雛形です。"
});

const sections = [
  {
    title: "1. 事業者情報",
    body: "Academic Office（学会運営代行）（以下「当社」といいます。）は、学会運営代行サービスの提供にあたり、個人情報の保護を重要な責務と認識し、適切に取り扱います。"
  },
  {
    title: "2. 取得する情報",
    body: "当社は、お問い合わせ時に、団体名、担当者名、メールアドレス、電話番号、会員数、相談内容等の情報を取得する場合があります。"
  },
  {
    title: "3. 利用目的",
    body: "取得した個人情報は、お問い合わせ対応、資料送付、見積作成、サービス提供に関する連絡、品質向上のための分析、法令対応のために利用します。"
  },
  {
    title: "4. 第三者提供",
    body: "当社は、法令に基づく場合を除き、本人の同意なく個人情報を第三者に提供しません。"
  },
  {
    title: "5. 委託",
    body: "利用目的達成のために外部委託を行う場合は、委託先を適切に選定し、必要かつ適切な監督を行います。"
  },
  {
    title: "6. 安全管理措置",
    body: "当社は、個人情報への不正アクセス、漏えい、滅失、き損等を防止するため、組織的・人的・物理的・技術的な安全管理措置を講じます。"
  },
  {
    title: "7. 開示・訂正・利用停止等",
    body: "本人から自己の個人情報について開示、訂正、利用停止等の請求があった場合は、本人確認のうえ、法令に従って適切に対応します。"
  },
  {
    title: "8. Cookie等について",
    body: "当サイトでは、利便性向上や利用状況把握のためにCookie等を利用する場合があります。詳細は運用時に別途定めます。"
  },
  {
    title: "9. 改定",
    body: "本ポリシーは、法令改正やサービス内容の変更に応じて改定することがあります。改定後は当サイトに掲載した時点で効力を生じます。"
  },
  {
    title: "10. お問い合わせ窓口",
    body: "個人情報の取り扱いに関するお問い合わせは、当サイトのお問い合わせフォームまたは info@example.com までご連絡ください。"
  }
];

export default function PrivacyPage() {
  return (
    <>
      <Section className="pb-8 pt-10">
        <PageHero
          eyebrow="Privacy Policy"
          title="プライバシーポリシー"
          description="以下は、Academic Office（学会運営代行）のプライバシーポリシー雛形です。実運用時には、事業者情報・安全管理措置・委託先等の実態に合わせて更新してください。"
        />
      </Section>

      <Section className="pt-0">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <div className="space-y-6">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-base font-semibold text-slate-900">{section.title}</h2>
                <p className="mt-2 text-sm leading-7 text-slate-600">{section.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
