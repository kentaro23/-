import { ButtonLink } from "@/components/ui";

export function CtaBanner({
  title = "まずは現在の運営課題を整理しませんか？",
  description = "会員数・業務範囲・ご予算感に応じて、実行可能な委託プランをご提案します。"
}: {
  title?: string;
  description?: string;
}) {
  return (
    <div className="dark-section rounded-2xl px-8 py-12 text-center md:py-16">
      <h3 className="text-xl font-bold text-white md:text-2xl">{title}</h3>
      <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-gray-300">
        {description}
      </p>
      <div className="mt-7">
        <ButtonLink
          href="/contact"
          className="bg-brand-400 text-navy-950 shadow-elevated hover:bg-brand-300"
        >
          お問い合わせ
        </ButtonLink>
      </div>
    </div>
  );
}
