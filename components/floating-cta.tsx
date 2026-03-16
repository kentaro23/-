import Link from "next/link";

export function FloatingCta() {
  return (
    <div className="fixed inset-x-4 bottom-4 z-40 md:inset-x-auto md:bottom-5 md:right-5">
      <Link
        href="/contact"
        className="block rounded-xl bg-brand-600 px-5 py-2.5 text-center text-sm font-medium text-white shadow-elevated no-underline transition hover:bg-brand-700 md:inline-block"
      >
        お問い合わせ
      </Link>
    </div>
  );
}
