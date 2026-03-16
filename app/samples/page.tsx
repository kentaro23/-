import { PageHero } from "@/components/page-hero";
import { Section, SectionHeading } from "@/components/section";
import { ButtonLink } from "@/components/ui";
import { buildMetadata } from "@/lib/metadata";
import { sampleArtifacts } from "@/lib/site-data";

export const metadata = buildMetadata({
  title: "成果物サンプル",
  path: "/samples",
  description:
    "月次報告、会員台帳、発送CSVなど、学会事務局代行で提供する成果物イメージをサンプルでご案内します。"
});

export default function SamplesPage() {
  return (
    <>
      <Section className="hero-gradient pb-8 pt-10">
        <PageHero
          eyebrow="Samples"
          title="成果物サンプル"
          description="導入後にどのような形で情報が見えるかを、代表的な成果物サンプルで確認いただけます。"
          actions={<ButtonLink href="/contact">実際の運用イメージを相談する</ButtonLink>}
        />
      </Section>

      <Section>
        <SectionHeading
          title="代表サンプル"
          description="以下は成果物イメージです。学会ごとの運用に合わせて形式を調整します。"
        />
        <div className="space-y-6">
          {sampleArtifacts.map((artifact) => (
            <div key={artifact.title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-card">
              <h2 className="text-sm font-semibold text-ink">{artifact.title}</h2>
              <div className="mt-4 overflow-x-auto rounded-lg border border-gray-200">
                <table className="min-w-full text-sm">
                  <thead className="border-b border-gray-200 bg-gray-50 text-left">
                    <tr>
                      {artifact.columns.map((column) => (
                        <th key={column} className="px-4 py-3 font-medium text-ink">
                          {column}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {artifact.rows.map((row) => (
                      <tr key={row.join("-")} className="border-t border-gray-100">
                        {row.map((cell) => (
                          <td key={cell} className="px-4 py-3 text-gray-600">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
