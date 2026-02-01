"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

export function IntroSection() {
  return (
    <section id="about" className="px-6 py-16 lg:px-12 lg:py-32">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="mx-auto max-w-5xl"
      >
        <p className="text-3xl sm:text-4xl lg:text-[40px] leading-tight lg:leading-relaxed text-white">
          We design, build, finance, and operate decentralised power and gas
          infrastructure to deliver{" "}
          <span className="text-del-secondary">reliable</span> and{" "}
          <span className="text-del-secondary">affordable energy</span> across
          West Africa.
        </p>
      </motion.div>
    </section>
  );
}
