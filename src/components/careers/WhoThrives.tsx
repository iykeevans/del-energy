"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const values = [
  "Values clarity, structure, and professionalism",
  "Takes ownership and delivers with discipline",
  "Wants technically challenging, meaningful work",
  "Believes in safety and responsibility",
  "Cares about contributing to Nigeria's economic progress",
];

export function WhoThrives() {
  return (
    <section className="px-4 sm:px-6 py-12 sm:py-16 lg:px-12 lg:py-24 bg-white">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="mx-auto max-w-(--del-max-screen-width)"
      >
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-24">
          {/* Left Side - White Card with Title and Image */}
          <motion.div variants={fadeInUp} className="lg:w-[600px] shrink-0">
            <div className="bg-[#F3F3F3] rounded-2xl p-6 sm:p-8 lg:p-10">
              <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-medium leading-tight lg:leading-[52px] tracking-[-0.4px] text-[#001530]">
                Who thrives at DEL?
              </h2>
              <p className="mt-2 text-base text-[#001530]/70">
                You&apos;ll fit right in if you&apos;re someone who:
              </p>
              <div className="mt-6 relative w-full h-[180px] sm:h-[220px] lg:h-[260px] rounded-xl overflow-hidden">
                <img
                  src="/images/solutions-section-image.png"
                  alt="Solar panels installation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Side - Values List */}
          <motion.div
            variants={staggerContainer}
            className="flex-1 flex flex-col justify-center"
          >
            <ul className="space-y-0">
              {values.map((value, index) => (
                <motion.li
                  key={index}
                  variants={fadeInUp}
                  className="py-5 sm:py-6 border-b border-[#89A5C2] last:border-b-0"
                >
                  <span className="text-base sm:text-lg lg:text-xl text-[#003265] font-medium leading-relaxed">
                    {value}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
