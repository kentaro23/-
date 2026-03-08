import Link from "next/link";
import { MediformaLogo } from "@/components/mediforma-logo";

export function Footer() {
  return (
    <footer className="border-t border-brand-700/30 bg-brand-900 pb-24 text-white md:pb-0">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4">
        <div>
          <MediformaLogo inverted />
          <p className="mt-3 text-sm leading-7 text-brand-100">
            常設事務局の外部化（BPO）で、医療・学術領域の学会運営を継続的に支援します。
          </p>
        </div>

        <div>
          <p className="font-en text-sm font-semibold tracking-wide text-white">MENU</p>
          <ul className="mt-3 space-y-2 text-sm text-brand-100">
            <li><Link href="/services" className="no-underline hover:text-white">サービス詳細</Link></li>
            <li><Link href="/pricing" className="no-underline hover:text-white">料金</Link></li>
            <li><Link href="/flow" className="no-underline hover:text-white">導入の流れ</Link></li>
            <li><Link href="/faq" className="no-underline hover:text-white">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <p className="font-en text-sm font-semibold tracking-wide text-white">MEDIFORMA FAMILY</p>
          <ul className="mt-3 space-y-2 text-sm text-brand-100">
            <li><a href="https://mediforma.com" className="no-underline hover:text-white">Mediforma本体</a></li>
            <li><a href="https://mediforma.com/education" className="no-underline hover:text-white">Mediforma Education</a></li>
            <li><a href="https://mediforma.com/consulting" className="no-underline hover:text-white">Mediforma Consulting</a></li>
            <li><Link href="/security" className="no-underline hover:text-white">情報管理・セキュリティ</Link></li>
          </ul>
        </div>

        <div>
          <p className="font-en text-sm font-semibold tracking-wide text-white">CONTACT</p>
          <p className="mt-3 text-sm text-brand-100">Email: mediforma1@gmail.com</p>
          <p className="mt-1 text-sm text-brand-100">Tel: 080-9322-6024</p>
          <p className="mt-1 text-sm text-brand-100">Email(旧窓口): gakkaidaiko@gmail.com</p>
          <p className="mt-3 text-sm text-brand-100">受付時間: 平日 9:00-18:00</p>
          <p className="mt-4 text-sm">
            <Link href="/privacy" className="no-underline text-brand-100 hover:text-white">
              プライバシーポリシー
            </Link>
          </p>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-brand-200">
        © 2026 Mediforma Society. All rights reserved.
      </div>
    </footer>
  );
}
