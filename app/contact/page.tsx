import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { buildMetadata, siteConfig } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "お問い合わせ",
  path: "/contact",
  description:
    "学会事務局代行に関する資料請求・見積依頼・ご相談はこちら。"
});

export default function ContactPage() {
  return (
    <>
      <Section className="pb-8 pt-10">
        <PageHero
          eyebrow="Contact"
          title="資料請求・見積依頼・ご相談"
          description="会員数、現在の運営体制、課題感、委託を検討している業務範囲（会員管理・会計・会議運営・発送など）をご記入ください。"
        />
      </Section>

      <Section className="pt-0">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <ContactForm />
          </div>
          <aside className="space-y-4">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-sm font-semibold text-slate-900">ご相談時にあるとスムーズな情報</h2>
              <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-600">
                <li>・会員数と会費体系</li>
                <li>・委員会 / 役員会の開催頻度</li>
                <li>・会計処理の現状（範囲・方法）</li>
                <li>・発送物の種類と頻度</li>
                <li>・優先して委託したい業務</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-brand-100 bg-brand-50 p-6">
              <h2 className="text-sm font-semibold text-brand-900">連絡先</h2>
              <p className="mt-2 text-sm text-slate-700">Email: {siteConfig.email}</p>
              <p className="mt-1 text-sm text-slate-700">TEL: 03-1234-5678</p>
              <p className="mt-1 text-sm text-slate-700">受付時間: 平日 9:00-18:00</p>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
