export function FamilyBanner() {
  return (
    <div className="rounded-2xl bg-navy-900 p-8 md:p-10">
      <p className="text-xs font-medium uppercase tracking-wider text-brand-400">Mediforma Family</p>
      <h3 className="mt-2 text-lg font-bold text-white md:text-xl">
        医療の&quot;困った&quot;を、まるごと。
      </h3>
      <div className="mt-6 grid gap-px overflow-hidden rounded-xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { name: "Society", desc: "学会運営" },
          { name: "DX", desc: "医療DX" },
          { name: "Education", desc: "医学教育" },
          { name: "Consulting", desc: "AI導入・コンサル" }
        ].map((item) => (
          <div key={item.name} className="bg-navy-800 px-5 py-4">
            <p className="font-en text-sm font-semibold text-brand-300">{item.name}</p>
            <p className="mt-0.5 text-sm text-gray-400">{item.desc}</p>
          </div>
        ))}
      </div>
      <a
        href="https://mediforma.com"
        className="mt-4 inline-flex text-sm text-gray-400 no-underline hover:text-brand-300"
      >
        mediforma.com &rarr;
      </a>
    </div>
  );
}
