import { ButtonLink } from "@/components/ui";

export function CtaBanner({
  title = "まずは現在の運営課題を整理しませんか？",
  description = "会員数・業務範囲・ご予算感に応じて、実行可能な委託プランをご提案します。"
}: {
  title?: string;
  description?: string;
}) {
  return (
    <div className="rounded-lg bg-ink px-8 py-10 text-center md:py-14">
      <h3 className="text-xl font-bold text-white md:text-2xl">{title}</h3>
      <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-gray-400">
        {description}
      </p>
      <div className="mt-6">
        <ButtonLink
          href="/contact"
          className="bg-white text-ink hover:bg-gray-100"
        >
          お問い合わせ
        </ButtonLink>
      </div>
    </div>
  );
}
