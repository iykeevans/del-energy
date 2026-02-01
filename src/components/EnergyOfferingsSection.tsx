import Image from "next/image";
import Link from "next/link";

const offerings = [
  "Embedded and captive power plants",
  "CNG virtual pipeline systems",
  "Gas distribution networks",
  "Dedicated power and gas infrastructure for industrial, commercial, and residential clusters",
  "Distributed energy systems that scale.",
];

export function EnergyOfferingsSection() {
  return (
    <section id="operations" className="px-6 py-16 lg:px-12 lg:py-24 bg-white">
      <div className="mx-auto max-w-[var(--del-max-screen-width)] lg:grid lg:grid-cols-2 items-start">
        {/* Left column – light grey */}
        <div className="rounded-[15px] bg-[#F5F5F5] p-[30px] flex flex-col justify-between h-[576px]">
          <div>
            <h2 className="text-[40px] font-medium leading-tight text-[#0A1C36] lg:text-5xl lg:leading-tight">
              Energy that flows
            </h2>

            <p className="mt-[10px] text-lg text-del-primary-darken-1">
              We design, build, finance, and operate:
            </p>
          </div>

          <div className="relative mt-10 aspect-video w-full overflow-hidden rounded-xl">
            <Image
              src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800"
              alt="Solar panels and renewable energy"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="lg:pl-[100px]">
          <ul className="flex flex-col">
            {offerings.map((item, i) => (
              <li
                key={i}
                className="border-b border-[#89A5C2] py-5 last:border-b-0"
              >
                <span className="text-2xl font-medium leading-relaxed text-del-primary-darken-1 inline-block w-[498px]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
          <Link
            href="#news"
            className="mt-8 inline-block w-fit rounded-[18px] bg-del-secondary text-white px-8 py-4 text-base font-semibold  transition hover:opacity-90"
          >
            Learn more
          </Link>
        </div>
      </div>
    </section>
  );
}
