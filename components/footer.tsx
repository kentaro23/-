import Link from "next/link";
import { siteConfig } from "@/lib/metadata";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <p className="text-sm font-semibold text-slate-900">{siteConfig.name}</p>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            常設事務局の外部化（BPO）を通じて、医療・学術領域の学会運営を支援します。
          </p>
          <p className="mt-3 text-sm text-slate-600">Email: {siteConfig.email}</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-900">メニュー</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>
              <Link href="/services" className="hover:text-brand-800">
                サービス詳細
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:text-brand-800">
                料金
              </Link>
            </li>
            <li>
              <Link href="/flow" className="hover:text-brand-800">
                導入の流れ
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-brand-800">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-900">サポート</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>
              <Link href="/contact" className="hover:text-brand-800">
                お問い合わせ
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-brand-800">
                プライバシーポリシー
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Academic Office
      </div>
    </footer>
  );
}
