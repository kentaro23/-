"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { ButtonLink } from "@/components/ui";

const navItems = [
  { href: "/services", label: "サービス" },
  { href: "/pricing", label: "料金" },
  { href: "/flow", label: "導入の流れ" },
  { href: "/samples", label: "サンプル" },
  { href: "/security", label: "セキュリティ" },
  { href: "/faq", label: "FAQ" }
];

export function Header() {
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsCompact(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-slate-200/90 bg-white/95 backdrop-blur transition-all",
        isCompact ? "shadow-sm" : ""
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6",
          isCompact ? "h-14" : "h-16"
        )}
      >
        <Link href="/" className="min-w-0 no-underline" aria-label="トップページへ戻る">
          <div className="flex items-center gap-2">
            <span className="h-6 w-1 rounded-full bg-accent-500" aria-hidden="true" />
            <div>
              <div className="text-sm font-bold text-brand-900 md:text-base">がっかりさせない学会</div>
              <div className="text-[11px] text-slate-500">学会事務局代行</div>
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm text-slate-700 no-underline hover:bg-slate-100"
            >
              {item.label}
            </Link>
          ))}
          <ButtonLink href="/contact" className="ml-2 px-4 py-2">
            資料請求・見積依頼
          </ButtonLink>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <ButtonLink href="/contact" className="h-9 px-3 text-xs">
            資料請求・見積依頼
          </ButtonLink>
          <details>
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
                    className="rounded-lg px-3 py-2 text-sm text-slate-700 no-underline hover:bg-slate-100"
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
      </div>
    </header>
  );
}
