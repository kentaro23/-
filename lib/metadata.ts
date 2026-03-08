import type { Metadata } from "next";

export const siteConfig = {
  name: "Mediforma Society",
  shortName: "Mediforma Society",
  description:
    "Mediforma Society（がっかりさせない学会）は、医療・学術領域に特化した学会事務局代行。常設事務局の外部化（BPO）により、先生方が学術活動と意思決定に集中できる運営体制を構築します。",
  url: "https://academic-office-site.vercel.app",
  email: "mediforma1@gmail.com"
};

export function buildMetadata(params?: {
  title?: string;
  description?: string;
  path?: string;
}): Metadata {
  const title = params?.title
    ? `${params.title} | ${siteConfig.shortName}`
    : `${siteConfig.shortName} | がっかりさせない学会 - 学会事務局代行`;
  const description = params?.description ?? siteConfig.description;
  const url = new URL(params?.path ?? "/", siteConfig.url).toString();

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `Mediforma Society | がっかりさせない学会 - 学会事務局代行`,
      description,
      url,
      siteName: siteConfig.shortName,
      type: "website",
      locale: "ja_JP"
    },
    twitter: {
      card: "summary_large_image",
      title: `Mediforma Society | がっかりさせない学会 - 学会事務局代行`,
      description
    }
  };
}
