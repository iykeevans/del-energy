"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const items = [
  {
    title: "Reliable Energy, Delivered Close to Demand",
    content: null,
  },
  {
    title: "Energy Solutions That Improve Industrial Performance",
    content: null,
  },
  {
    title: "Partnership at the Core",
    content: null,
  },
  {
    title: "Operational Experience Backed by Capital",
    content:
      "DEL brings more than a decade of practical experience delivering decentralised energy, strengthened by the institutional capital, and backed by an expert investment community.",
  },
];

export function SolutionsSection() {
  const [openIndex, setOpenIndex] = useState(3);

  return (
    <section id="solutions" className="px-6 py-16 lg:px-12 lg:py-24">
      <div className="mx-auto grid max-w-[var(--del-max-screen-width)] gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative overflow-hidden rounded-lg h-[584px]">
          <Image
            src="/images/solutions-section-image.png"
            alt="Industrial worker in safety gear"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        <div className="flex flex-col">
          <div className="">
            {items.map((item, i) => (
              <div
                key={i}
                className="border-b last:border-b-0 py-4 border-white/10 flex flex-col"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                  className="flex w-full items-center justify-between text-left text-white transition hover:text-white/90 cursor-pointer"
                  aria-expanded={openIndex === i}
                >
                  <span className="pr-4 font-medium text-2xl lg:w-[390px]">
                    {item.title}
                  </span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`size-6 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                    />
                  </svg>
                </button>

                {item.content && openIndex === i && (
                  <div className="pt-5 text-white/80">
                    <p className="text-lg leading-relaxed">{item.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <Link
            href="#operations"
            className="mt-8 inline-block w-fit rounded-[18px] bg-del-secondary text-white px-8 py-4 text-base font-semibold transition hover:bg-[#22C55E]"
          >
            Learn more
          </Link>
        </div>
      </div>
    </section>
  );
}
