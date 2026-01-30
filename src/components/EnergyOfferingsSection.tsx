import Image from "next/image";
import Link from "next/link";

const offerings = [
  "Embedded and captive power plants",
  "CNG virtual pipeline systems",
  "Gas distribution networks",
  "Dedicated power and gas infrastructure for industrial, commercial, and residential clusters",
  "Distributed energy systems that scale",
];

export function EnergyOfferingsSection() {
  return (
    <section id="operations" className="bg-white px-6 py-16 lg:px-12 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="text-3xl font-bold text-zinc-900 lg:text-4xl">
            Energy that flows
          </h2>
          <p className="mt-2 text-zinc-600">
            We design, build, finance, and operate
          </p>
          <div className="relative mt-8 aspect-video overflow-hidden rounded-lg">
            <Image
              src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800"
              alt="Solar panels and renewable energy"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <ul className="space-y-3 text-zinc-700">
            {offerings.map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4ADE80]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Link
            href="#news"
            className="mt-8 inline-block w-fit rounded-lg bg-[#4ADE80] px-8 py-4 text-base font-semibold text-[#0A1C36] transition hover:bg-[#22C55E]"
          >
            Learn more
          </Link>
        </div>
      </div>
    </section>
  );
}
