"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { fadeInUp } from "@/lib/animations";

const offerings = [
  "Embedded and captive power plants",
  "CNG virtual pipeline systems",
  "Gas distribution networks",
  "Dedicated power and gas infrastructure for industrial, commercial, and residential clusters",
];

export function EnergyOfferingsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  // Track scroll progress through the section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Transform vertical scroll into horizontal movement
  // Adjust the output range based on content width
  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-40%"]);

  return (
    <section
      id="operations"
      ref={containerRef}
      className="py-16 lg:py-24 bg-[#F5F5F5] overflow-hidden"
    >
      <div className="mx-auto max-w-(--del-max-screen-width) px-6 md:px-0">
        {/* Header */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-12 lg:mb-16"
        >
          <h2 className="text-4xl lg:text-5xl xl:text-[56px] font-medium leading-tight text-del-primary-darken-1">
            Energy That Flows
          </h2>
          <p className="mt-4 text-lg lg:text-xl text-del-primary-darken-1/70">
            We design, build, finance, and operate:
          </p>
        </motion.div>

        {/* Horizontal Scrolling Cards - Desktop */}
        <div className="hidden lg:block relative h-[400px]">
          <motion.div
            ref={cardsRef}
            style={{ x }}
            className="flex gap-6 xl:gap-8 absolute left-0"
          >
            {offerings.map((offering, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1 }}
                className="shrink-0 w-[320px] xl:w-[380px] h-[280px] bg-white rounded-[20px] border-2 border-[#1068d4] p-8 flex items-center justify-center"
              >
                <p className="text-xl xl:text-2xl font-medium text-del-primary-darken-1 text-center leading-relaxed">
                  {offering}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile/Tablet: Horizontal Scroll Container */}
        <div className="lg:hidden overflow-x-auto scrollbar-hide -mx-6 px-6">
          <div className="flex gap-4 pb-4">
            {offerings.map((offering, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                className="shrink-0 w-[280px] sm:w-[320px] h-[240px] sm:h-[260px] bg-white rounded-[20px] border-2 border-[#1068d4] p-6 sm:p-8 flex items-center justify-center"
              >
                <p className="text-lg sm:text-xl font-medium text-del-primary-darken-1 text-center leading-relaxed">
                  {offering}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Learn More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-5"
        >
          <Link
            href="/news"
            className="inline-block rounded-[18px] bg-del-secondary text-white px-8 py-4 text-base font-semibold transition hover:bg-del-secondary/90 shadow-md"
          >
            Learn more
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
