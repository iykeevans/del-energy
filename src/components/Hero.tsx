import Link from "next/link";

export function Hero() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center bg-[#0A1C36]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920')",
        }}
      />
      <div className="absolute inset-0 bg-[#0A1C36]/80" />
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
          Reliable Energy, Delivered Close to Demand
        </h1>
        <Link
          href="#solutions"
          className="mt-8 inline-block rounded-lg bg-[#4ADE80] px-8 py-4 text-base font-semibold text-[#0A1C36] transition hover:bg-[#22C55E]"
        >
          Learn more
        </Link>
      </div>
    </section>
  );
}
