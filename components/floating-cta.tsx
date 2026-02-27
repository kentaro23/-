import { ButtonLink } from "@/components/ui";

export function FloatingCta() {
  return (
    <div className="fixed inset-x-3 bottom-3 z-40 md:inset-x-auto md:bottom-5 md:right-5">
      <div className="rounded-2xl border border-brand-200 bg-white/95 p-2 shadow-panel backdrop-blur">
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          <ButtonLink href="/contact" className="h-10 px-4 text-xs sm:text-sm">
            資料請求
          </ButtonLink>
          <ButtonLink href="/contact" variant="secondary" className="h-10 px-4 text-xs sm:text-sm">
            見積依頼
          </ButtonLink>
          <ButtonLink href="/contact" variant="ghost" className="h-10 px-4 text-xs sm:text-sm">
            30分相談
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
