"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const items = [
  {
    title: "Reliable Energy, Delivered Close to Demand",
    content:
      "We focus on delivering energy directly to the source of demand, reducing transmission losses and improving reliability for our partners.",
  },
  {
    title: "Energy Solutions That Improve Industrial Performance",
    content:
      "Our decentralised energy systems are designed to power industries efficiently, ensuring uninterrupted operations and cost savings.",
  },
  {
    title: "Partnership at the Core",
    content:
      "We work closely with our clients to understand their energy needs and provide tailored solutions that drive growth.",
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
      className="px-6 py-16 lg:px-12 lg:py-24 overflow-hidden"
    >
      <div className="mx-auto grid max-w-[var(--del-max-screen-width)] gap-12 lg:grid-cols-2 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-2xl h-[400px] lg:h-[584px] shadow-2xl"
        >
          <Image
            src="/images/solutions-section-image.png"
            alt="Industrial worker in safety gear"
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="flex flex-col"
        >
          <div className="space-y-2">
            {items.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="border-b last:border-b-0 py-4 border-white/10 flex flex-col"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                  className="flex w-full items-center justify-between text-left text-white transition-colors hover:text-del-secondary cursor-pointer group"
                  aria-expanded={openIndex === i}
                >
                  <span className="pr-4 font-medium text-xl lg:text-2xl transition-colors group-hover:text-del-secondary">
                    {item.title}
                  </span>

                  <motion.div
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 text-white/70">
                        <p className="text-lg leading-relaxed">
                          {item.content}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeInUp}>
            <Link
              href="#operations"
              className="mt-10 inline-block w-fit rounded-[18px] bg-del-secondary text-white px-8 py-4 text-base font-semibold transition hover:bg-del-secondary/90 shadow-lg"
            >
              Learn more
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
