import Link from "next/link";

export function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-center bg-[#0A1C36]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920')",
        }}
      />
      <div className="absolute inset-0 bg-[#003265]/75" aria-hidden />
      <div className="relative z-10 w-full max-w-7xl px-6 lg:px-12">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-normal leading-tight tracking-[-0.0625rem] text-white sm:text-4xl lg:text-[2.5rem] lg:leading-[3.5rem]">
            Reliable Energy, Delivered Close to Demand
          </h1>
          <Link
            href="#solutions"
            className="mt-8 inline-block rounded-lg bg-[#00B050] px-8 py-4 text-base font-medium text-white transition hover:bg-[#009244]"
          >
            Learn more
          </Link>
        </div>
      </div>
    </section>
  );
}
