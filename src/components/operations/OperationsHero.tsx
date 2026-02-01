"use client";

import { motion } from "framer-motion";
import { fadeInUp, slideInLeft, slideInRight } from "@/lib/animations";

export function OperationsHero() {
  return (
    <section className="mt-16 pb-20 sm:mt-20 lg:mt-[150px] px-4 sm:px-6 lg:px-12">
      <div className="mx-auto max-w-(--del-max-screen-width)">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 sm:gap-8 lg:gap-16 mb-8 sm:mb-12 lg:mb-16">
          <motion.div
            initial="initial"
            animate="animate"
            variants={slideInLeft}
            className="lg:max-w-[539px]"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-medium leading-tight lg:leading-[72px] tracking-[-1px] lg:tracking-[-1.8px] text-white">
              DEL Energy is the
              <br />
              connector.
            </h1>
          </motion.div>

          <motion.div
            initial="initial"
            animate="animate"
            variants={slideInRight}
            className="lg:max-w-[481px] text-white text-base sm:text-lg leading-relaxed flex items-center"
          >
            <p>
              We build the decentralised infrastructure that makes energy flow
              reliably, affordably, and close to demand.
            </p>
          </motion.div>
        </div>

        {/* Hero Image */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="relative w-full h-[280px] sm:h-[400px] md:h-[500px] lg:h-[758px] rounded-xl sm:rounded-2xl overflow-hidden"
        >
          <img
            src="/images/operations-hero.jpg"
            alt="Energy infrastructure worker pointing to the horizon"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
