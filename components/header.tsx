import Link from "next/link";
import { Menu } from "lucide-react";
import { ButtonLink } from "@/components/ui";

const navItems = [
  { href: "/services", label: "サービス" },
  { href: "/pricing", label: "料金" },
  { href: "/flow", label: "導入の流れ" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "お問い合わせ" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="min-w-0">
          <div className="text-sm font-semibold text-slate-900">
            Academic Office
          </div>
          <div className="text-xs text-slate-500">学会運営代行（学会事務局代行）</div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-100"
            >
              {item.label}
            </Link>
          ))}
          <ButtonLink href="/contact" className="ml-2 px-4 py-2">
            資料請求・見積依頼
          </ButtonLink>
        </nav>

        <details className="md:hidden">
          <summary className="list-none rounded-lg border border-slate-200 p-2 text-slate-700 marker:content-none">
            <Menu className="h-5 w-5" aria-hidden="true" />
            <span className="sr-only">メニューを開く</span>
          </summary>
          <div className="absolute right-4 top-14 w-72 rounded-2xl border border-slate-200 bg-white p-3 shadow-soft">
            <div className="grid gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-100"
                >
                  {item.label}
                </Link>
              ))}
              <ButtonLink href="/contact" className="mt-2 w-full">
                資料請求・見積依頼
              </ButtonLink>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
