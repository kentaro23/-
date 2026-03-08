import type { Metadata } from "next";
import { Noto_Sans_JP, Poppins } from "next/font/google";
import "./globals.css";
import { FloatingCta } from "@/components/floating-cta";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { buildMetadata, siteConfig } from "@/lib/metadata";

const notoSansJp = Noto_Sans_JP({
  weight: ["400", "500", "700"],
  display: "swap",
  preload: false
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  preload: false,
  variable: "--font-poppins"
});

export const metadata: Metadata = {
  ...buildMetadata(),
  metadataBase: new URL(siteConfig.url)
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJp.className} ${poppins.variable} font-sans`}>
        <div className="min-h-screen bg-white">
          <Header />
          <main>{children}</main>
          <Footer />
          <FloatingCta />
        </div>
      </body>
    </html>
  );
}
