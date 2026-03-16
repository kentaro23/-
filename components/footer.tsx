import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-navy-900 pb-20 md:pb-0">
      <div className="mx-auto grid max-w-5xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-4">
        <div>
          <p className="font-en text-sm font-semibold text-white">Mediforma Society</p>
          <p className="mt-2 text-sm leading-relaxed text-gray-400">
            常設事務局の外部化（BPO）で、医療・学術領域の学会運営を継続的に支援します。
          </p>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-brand-400">Menu</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/services" className="text-gray-400 no-underline hover:text-white">サービス詳細</Link></li>
            <li><Link href="/pricing" className="text-gray-400 no-underline hover:text-white">料金</Link></li>
            <li><Link href="/flow" className="text-gray-400 no-underline hover:text-white">導入の流れ</Link></li>
            <li><Link href="/faq" className="text-gray-400 no-underline hover:text-white">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-brand-400">Mediforma</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="https://mediforma.com" className="text-gray-400 no-underline hover:text-white">Mediforma</a></li>
            <li><a href="https://mediforma.com/education" className="text-gray-400 no-underline hover:text-white">Education</a></li>
            <li><a href="https://mediforma.com/consulting" className="text-gray-400 no-underline hover:text-white">Consulting</a></li>
            <li><Link href="/security" className="text-gray-400 no-underline hover:text-white">情報管理</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-brand-400">Contact</p>
          <p className="mt-3 text-sm text-gray-400">mediforma1@gmail.com</p>
          <p className="mt-1 text-sm text-gray-400">080-9322-6024</p>
          <p className="mt-1 text-sm text-gray-500">平日 9:00 - 18:00</p>
          <p className="mt-4 text-sm">
            <Link href="/privacy" className="text-gray-500 no-underline hover:text-white">
              プライバシーポリシー
            </Link>
          </p>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-gray-500">
        &copy; 2026 Mediforma Society
      </div>
    </footer>
  );
}
