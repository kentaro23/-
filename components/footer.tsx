import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white pb-20 md:pb-0">
      <div className="mx-auto grid max-w-5xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-4">
        <div>
          <p className="font-en text-sm font-semibold text-ink">Mediforma Society</p>
          <p className="mt-2 text-sm leading-relaxed text-gray-500">
            常設事務局の外部化（BPO）で、医療・学術領域の学会運営を継続的に支援します。
          </p>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-gray-400">Menu</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/services" className="text-gray-600 no-underline hover:text-ink">サービス詳細</Link></li>
            <li><Link href="/pricing" className="text-gray-600 no-underline hover:text-ink">料金</Link></li>
            <li><Link href="/flow" className="text-gray-600 no-underline hover:text-ink">導入の流れ</Link></li>
            <li><Link href="/faq" className="text-gray-600 no-underline hover:text-ink">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-gray-400">Mediforma</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="https://mediforma.com" className="text-gray-600 no-underline hover:text-ink">Mediforma</a></li>
            <li><a href="https://mediforma.com/education" className="text-gray-600 no-underline hover:text-ink">Education</a></li>
            <li><a href="https://mediforma.com/consulting" className="text-gray-600 no-underline hover:text-ink">Consulting</a></li>
            <li><Link href="/security" className="text-gray-600 no-underline hover:text-ink">情報管理</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-gray-400">Contact</p>
          <p className="mt-3 text-sm text-gray-600">mediforma1@gmail.com</p>
          <p className="mt-1 text-sm text-gray-600">080-9322-6024</p>
          <p className="mt-1 text-sm text-gray-500">平日 9:00 - 18:00</p>
          <p className="mt-4 text-sm">
            <Link href="/privacy" className="text-gray-500 no-underline hover:text-ink">
              プライバシーポリシー
            </Link>
          </p>
        </div>
      </div>
      <div className="border-t border-gray-100 py-4 text-center text-xs text-gray-400">
        &copy; 2026 Mediforma Society
      </div>
    </footer>
  );
}
