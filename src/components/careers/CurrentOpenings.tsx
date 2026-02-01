"use client";

import { motion } from "framer-motion";
import {
  fadeInUp,
  slideInLeft,
  slideInRight,
  staggerContainer,
} from "@/lib/animations";

export function CurrentOpenings() {
  return (
    <section
      id="current-openings"
      className="bg-white px-4 sm:px-6 py-12 sm:py-16 lg:px-12"
    >
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="mx-auto max-w-(--del-max-screen-width)"
      >
        <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-24">
          {/* Left Title */}
          <motion.div variants={slideInLeft} className="lg:w-[600px] shrink-0">
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-medium leading-tight lg:leading-[52px] tracking-[-0.4px] text-del-primary-darken-3">
              Current Openings
            </h2>
          </motion.div>

          {/* Right Content */}
          <motion.div variants={slideInRight} className="flex-1">
            <p className="text-base sm:text-lg text-del-primary-darken-1 leading-relaxed">
              Explore opportunities to join a disciplined, high-performing team
              shaping the future of Nigeria&apos;s energy sector.
            </p>
            <motion.div variants={fadeInUp} className="mt-8">
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 bg-del-secondary text-white font-medium rounded-lg hover:bg-del-primary/90 transition-colors"
              >
                Job openings
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
