import { ButtonLink } from "@/components/ui";

export function CtaBanner({
  title = "まずは現在の運営課題を整理しませんか？",
  description = "会員数・業務範囲・ご予算感に応じて、実行可能な委託プランをご提案します。"
}: {
  title?: string;
  description?: string;
}) {
  return (
    <div className="rounded-3xl border border-brand-200 bg-brand-900 p-6 text-white md:p-8">
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h3 className="text-xl font-bold md:text-2xl">{title}</h3>
          <p className="mt-2 text-sm leading-7 text-brand-100 md:text-base">
            {description}
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <ButtonLink
            href="/contact"
            variant="secondary"
            className="border-white bg-white text-brand-900 hover:bg-brand-50"
          >
            資料請求・見積依頼
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
