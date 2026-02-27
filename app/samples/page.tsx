import { PageHero } from "@/components/page-hero";
import { Section, SectionHeading } from "@/components/section";
import { ButtonLink, Card } from "@/components/ui";
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
      <Section className="pb-8 pt-10">
        <PageHero
          eyebrow="Samples"
          title="成果物サンプル"
          description="導入後にどのような形で情報が見えるかを、代表的な成果物サンプルで確認いただけます。"
          visual="samples"
          actions={<ButtonLink href="/contact">実際の運用イメージを相談する</ButtonLink>}
        />
      </Section>

      <Section className="texture-dots">
        <SectionHeading
          title="代表サンプル"
          description="以下はダミーのイメージです。学会ごとの運用に合わせて形式を調整します。"
        />
        <div className="space-y-5">
          {sampleArtifacts.map((artifact) => (
            <Card key={artifact.title} className="bg-white">
              <h2 className="text-base font-semibold text-slate-900">{artifact.title}</h2>
              <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200">
                <table className="min-w-full text-sm">
                  <thead className="bg-slate-50 text-left text-slate-900">
                    <tr>
                      {artifact.columns.map((column) => (
                        <th key={column} className="px-4 py-3 font-semibold">
                          {column}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {artifact.rows.map((row) => (
                      <tr key={row.join("-")} className="border-t border-slate-200">
                        {row.map((cell) => (
                          <td key={cell} className="px-4 py-3 text-slate-700">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
