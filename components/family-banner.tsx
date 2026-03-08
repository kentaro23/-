export function FamilyBanner() {
  return (
    <div className="rounded-3xl border border-brand-200 bg-white p-6 shadow-panel md:p-8">
      <p className="font-en text-sm font-semibold tracking-wide text-accent-500">MEDIFORMA FAMILY</p>
      <h3 className="mt-2 text-xl font-bold text-brand-800 md:text-2xl">
        Mediforma ─ 医療の&quot;困った&quot;を、まるごと。
      </h3>
      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl border border-brand-200 bg-brand-50 p-4">
          <p className="font-en text-sm font-semibold text-brand-800">Society</p>
          <p className="mt-1 text-sm text-brand-600">学会運営</p>
        </div>
        <div className="rounded-2xl border border-brand-200 bg-brand-50 p-4">
          <p className="font-en text-sm font-semibold text-brand-800">DX</p>
          <p className="mt-1 text-sm text-brand-600">医療DX</p>
        </div>
        <div className="rounded-2xl border border-brand-200 bg-brand-50 p-4">
          <p className="font-en text-sm font-semibold text-brand-800">Education</p>
          <p className="mt-1 text-sm text-brand-600">医学教育</p>
        </div>
        <div className="rounded-2xl border border-brand-200 bg-brand-50 p-4">
          <p className="font-en text-sm font-semibold text-brand-800">Consulting</p>
          <p className="mt-1 text-sm text-brand-600">AI導入・コンサル</p>
        </div>
      </div>
      <a href="https://mediforma.com" className="mt-5 inline-flex text-sm font-semibold text-accent-500 no-underline hover:text-accent-600">
        → Mediforma.com で詳しく見る
      </a>
    </div>
  );
}
