import { FAQAccordion } from "@/components/faq-accordion";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { ButtonLink } from "@/components/ui";
import { buildMetadata } from "@/lib/metadata";
import { faqItems } from "@/lib/site-data";

export const metadata = buildMetadata({
  title: "FAQ",
  path: "/faq",
  description:
    "学会事務局代行に関するよくある質問（個人情報、会計責任範囲、契約期間、契約までの流れ、会員数上限、発送、選挙、オンライン会議対応）をまとめています。"
});

export default function FaqPage() {
  return (
    <>
      <Section className="pb-8 pt-10">
        <PageHero
          eyebrow="FAQ"
          title="よくある質問"
          description="導入前によくいただくご質問をまとめています。個別の運営条件によって回答が変わる場合は、ヒアリング時に具体的にご説明します。"
          actions={<ButtonLink href="/contact">個別に相談する</ButtonLink>}
        />
      </Section>

      <Section>
        <FAQAccordion items={faqItems} />
      </Section>
    </>
  );
}
