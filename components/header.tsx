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
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b bg-white/95 backdrop-blur transition-shadow",
        scrolled ? "border-gray-200 shadow-subtle" : "border-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="no-underline" aria-label="トップページへ戻る">
          <MediformaLogo />
        </Link>

        <nav className="hidden items-center gap-0.5 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-1.5 text-sm text-gray-600 no-underline transition hover:bg-gray-50 hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
          <ButtonLink href="/contact" className="ml-3">
            お問い合わせ
          </ButtonLink>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <ButtonLink href="/contact" className="h-8 px-3 text-xs">
            お問い合わせ
          </ButtonLink>
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="rounded-md border border-gray-200 p-1.5 text-gray-700"
            aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="fixed inset-0 z-40 bg-white px-5 pb-8 pt-20 md:hidden">
          <div className="mx-auto max-w-md space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-md px-4 py-3 text-base text-gray-700 no-underline transition hover:bg-gray-50"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4">
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="block w-full rounded-md bg-ink py-3 text-center text-sm font-medium text-white no-underline"
              >
                お問い合わせ
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
