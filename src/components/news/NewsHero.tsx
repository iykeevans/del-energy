"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

export function NewsHero() {
  return (
    <section className="mt-16 sm:mt-20 lg:mt-[150px] px-4 sm:px-6 lg:px-12">
      <div className="mx-auto max-w-(--del-max-screen-width)">
        <motion.h1
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-medium leading-tight lg:leading-[72px] tracking-[-1px] lg:tracking-[-1.8px] text-white"
        >
          News and Media
        </motion.h1>
      </div>
    </section>
  );
}
