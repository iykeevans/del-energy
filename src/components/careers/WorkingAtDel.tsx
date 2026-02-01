"use client";

import { motion } from "framer-motion";
import {
  fadeInUp,
  slideInLeft,
  slideInRight,
  staggerContainer,
} from "@/lib/animations";
import Link from "next/link";

export function WorkingAtDel() {
  return (
    <section className="px-4 sm:px-6 py-12 sm:py-16 lg:px-12 lg:py-24">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="mx-auto max-w-(--del-max-screen-width)"
      >
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-16">
          {/* Left Title */}
          <motion.div variants={slideInLeft} className="lg:max-w-[400px]">
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-medium leading-tight lg:leading-[52px] tracking-[-0.4px] text-white">
              Working at DEL Energy
            </h2>
          </motion.div>

          {/* Right Content */}
          <motion.div variants={slideInRight} className="lg:max-w-[600px]">
            <p className="text-base sm:text-lg text-white/80 leading-relaxed">
              At DEL Energy, we&apos;re building a disciplined, well-governed
              organisation where talented professionals can grow, lead, and do
              work that truly matters. Here, we invest in our people, reward
              competence and ownership, and create long-term career paths for
              those committed to excellence.
            </p>
            <p className="mt-4 text-base sm:text-lg text-white/80 leading-relaxed">
              If you seek a workplace where your contributions have a measurable
              impact and your growth is actively supported, DEL Energy is the
              right place for you.
            </p>
            <motion.div variants={fadeInUp} className="mt-8">
              <Link
                href="#current-openings"
                className="inline-flex items-center justify-center px-6 py-3 bg-del-secondary text-white font-medium rounded-lg hover:bg-del-primary/90 transition-colors"
              >
                Job openings
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
