"use client";

import { motion } from "framer-motion";
import { fadeInUp, slideInLeft } from "@/lib/animations";

export function CareersHero() {
  return (
    <section className="mt-16 sm:mt-20 lg:mt-[150px] px-4 sm:px-6 lg:px-12">
      <div className="mx-auto max-w-(--del-max-screen-width)">
        {/* Header Section */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={slideInLeft}
          className="mb-8 sm:mb-12 lg:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-medium leading-tight lg:leading-[72px] tracking-[-1px] lg:tracking-[-1.8px] text-white">
            Careers at DEL Energy
          </h1>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="relative w-full h-[280px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-xl sm:rounded-2xl overflow-hidden"
        >
          <img
            src="/images/operations-hero.jpg"
            alt="DEL Energy team member at work"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
