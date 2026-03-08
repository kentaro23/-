"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ButtonLink } from "@/components/ui";
import { MediformaLogo } from "@/components/mediforma-logo";

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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsCompact(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-brand-200 bg-white/96 backdrop-blur-md transition-all",
        isCompact ? "shadow-panel" : ""
      )}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="no-underline" aria-label="トップページへ戻る">
          <MediformaLogo />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-lg px-3 py-2 text-sm no-underline",
                "text-brand-700 hover:bg-brand-100 hover:text-brand-800"
              )}
            >
              {item.label}
            </Link>
          ))}
          <ButtonLink href="/contact" className="ml-2 rounded-full px-5 py-2">
            資料請求・見積依頼
          </ButtonLink>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <ButtonLink href="/contact" className="h-9 rounded-full px-3 text-xs">
            資料請求・見積依頼
          </ButtonLink>
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className={cn(
              "rounded-lg border p-2",
              "border-brand-200 bg-white text-brand-800"
            )}
            aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="fixed inset-0 z-40 bg-brand-900 px-6 pb-8 pt-24 md:hidden">
          <div className="mx-auto max-w-md">
            <div className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-base font-medium text-white no-underline"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-5 inline-flex w-full items-center justify-center rounded-2xl bg-accent-500 px-5 py-3 text-sm font-semibold text-white no-underline"
            >
              資料請求・見積依頼
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
