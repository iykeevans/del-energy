"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import Image from "next/image";

const partners = [
  { name: "Anergi", logo: "/images/Anergi.svg" },
  { name: "Kuramo", logo: "/images/KURAMO.svg" },
  { name: "Sango", logo: "/images/SANGO.svg" },
  { name: "Viathan", logo: "/images/viathan.png" },
];

export function Partners() {
  return (
    <section className="bg-[#f3f3f3] px-4 sm:px-6 py-12 sm:py-16 lg:px-12 lg:py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-8 sm:mb-12 lg:mb-16 text-center text-xs sm:text-sm lg:text-base font-medium uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#003265] opacity-60"
      >
        Our Partners
      </motion.h2>
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-6 sm:gap-x-10 lg:gap-x-16 gap-y-6 sm:gap-y-10 lg:gap-y-12"
      >
        {partners.map((partner, i) => (
          <motion.div
            key={i}
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            className="relative h-[40px] sm:h-[55px] lg:h-[70px] w-[80px] sm:w-[110px] lg:w-[130px] flex items-center justify-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
          >
            {partner.logo ? (
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                className="w-full h-full object-contain object-center"
              />
            ) : (
              <span className="text-center text-xs sm:text-sm lg:text-base font-medium text-[#003265]">
                {partner.name}
              </span>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
