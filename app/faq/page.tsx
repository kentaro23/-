import { FAQAccordion } from "@/components/faq-accordion";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { ButtonLink } from "@/components/ui";
import { buildMetadata } from "@/lib/metadata";
import { faqItems } from "@/lib/site-data";

export const metadata = buildMetadata({
  title: "FAQ",
  path: "/faq",
  description: "学会事務局代行に関するよくある質問と回答をまとめています。"
});

export default function FAQPage() {
  return (
    <>
      <Section className="hero-gradient pb-8 pt-10">
        <PageHero
          eyebrow="FAQ"
          title="よくある質問"
          description="学会事務局代行に関して、契約条件・責任分界・運用体制など代表的な質問をまとめています。"
          actions={<ButtonLink href="/contact">個別に相談する</ButtonLink>}
        />
      </Section>

      <Section>
        <FAQAccordion items={faqItems} />
      </Section>
    </>
  );
}
