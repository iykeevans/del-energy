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
    <section
      id="solutions"
      className="bg-[#0A1C36] px-6 py-16 lg:px-12 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative aspect-square overflow-hidden rounded-lg lg:aspect-[4/5]">
          <Image
            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800"
            alt="Industrial worker in safety gear"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="space-y-2">
            {items.map((item, i) => (
              <div key={i} className="border-b border-white/10 last:border-0">
                <button
                  type="button"
                  onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                  className="flex w-full items-center justify-between py-4 text-left text-white transition hover:text-white/90"
                  aria-expanded={openIndex === i}
                >
                  <span className="pr-4 font-medium">{item.title}</span>
                  <span
                    className="text-xl text-white/80 transition-transform"
                    aria-hidden
                  >
                    {openIndex === i ? "−" : "+"}
                  </span>
                </button>
                {item.content && openIndex === i && (
                  <div className="pb-4 text-white/80">
                    <p className="text-sm leading-relaxed">{item.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <Link
            href="#operations"
            className="mt-8 inline-block w-fit rounded-lg bg-[#4ADE80] px-8 py-4 text-base font-semibold text-[#0A1C36] transition hover:bg-[#22C55E]"
          >
            Learn more
          </Link>
        </div>
      </div>
    </section>
  );
}
