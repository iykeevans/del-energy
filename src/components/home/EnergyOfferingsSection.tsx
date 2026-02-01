"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { slideInLeft, slideInRight, staggerContainer } from "@/lib/animations";

const offerings = [
  "Embedded and captive power plants",
  "CNG virtual pipeline systems",
  "Gas distribution networks",
  "Dedicated power and gas infrastructure for industrial, commercial, and residential clusters",
  "Distributed energy systems that scale.",
];

export function EnergyOfferingsSection() {
  return (
    <section
      id="operations"
      className="px-6 py-16 lg:px-12 lg:py-24 bg-white overflow-hidden"
    >
      <div className="mx-auto max-w-[var(--del-max-screen-width)] lg:grid lg:grid-cols-2 items-start gap-12 lg:gap-0">
        {/* Left column – light grey */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={slideInLeft}
          className="rounded-[15px] bg-[#F5F5F5] p-6 lg:p-[30px] flex flex-col justify-between min-h-[400px] lg:h-[576px]"
        >
          <div>
            <h2 className="text-4xl lg:text-5xl font-medium leading-tight text-del-primary-darken-1">
              Energy that flows
            </h2>

            <p className="mt-4 text-lg text-del-primary-darken-1/80">
              We design, build, finance, and operate:
            </p>
          </div>

          <div className="relative mt-10 aspect-video w-full overflow-hidden rounded-xl shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800"
              alt="Solar panels and renewable energy"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="lg:pl-[100px] mt-12 lg:mt-0"
        >
          <ul className="flex flex-col">
            {offerings.map((item, i) => (
              <motion.li
                key={i}
                variants={slideInRight}
                className="border-b border-del-primary-darken-1/10 py-5 last:border-b-0"
              >
                <span className="text-xl lg:text-2xl font-medium leading-relaxed text-del-primary-darken-1 inline-block">
                  {item}
                </span>
              </motion.li>
            ))}
          </ul>
          <motion.div variants={slideInRight}>
            <Link
              href="#news"
              className="mt-8 inline-block w-fit rounded-[18px] bg-del-secondary text-white px-8 py-4 text-base font-semibold transition hover:bg-del-secondary/90 shadow-md"
            >
              Learn more
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
