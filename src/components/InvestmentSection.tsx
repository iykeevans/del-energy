export function InvestmentSection() {
  const partners = ["Synergy Capital", "Anergi", "Kuramo", "SANGO", "Fiatran"];

  return (
    <section className="bg-white px-6 py-16 lg:px-12 lg:py-24">
      <p className="mb-12 text-center text-xs font-medium uppercase tracking-[0.2em] text-zinc-400">
        Backed by an expert investment community
      </p>
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-12 lg:gap-16">
        {partners.map((name, i) => (
          <div
            key={i}
            className="flex h-12 items-center justify-center rounded border border-zinc-200 px-8 text-lg font-medium text-zinc-500"
          >
            {name}
          </div>
        ))}
      </div>
    </section>
  );
}
