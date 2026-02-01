"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const partners = [
  { name: "Synergy Capital", logo: "/images/synergy-capital.png" },
  { name: "Anergi", logo: "/images/Anergi.svg" },
  { name: "Kuramo", logo: "/images/KURAMO.svg" },
  { name: "SANGO", logo: "/images/SANGO.svg" },
  { name: "VIATHAN", logo: "/images/viathan.png" },
];

export function InvestmentSection() {
  return (
    <section className="bg-white px-6 py-16 lg:px-12 lg:py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center text-sm lg:text-[16px] font-medium uppercase tracking-[0.2em] text-[#003265] opacity-60"
      >
        Backed by an expert investment community
      </motion.h2>
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-12 gap-y-12 lg:gap-x-20"
      >
        {partners.map((partner, i) => (
          <motion.div
            key={i}
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            className="relative h-[60px] lg:h-[80px] w-[120px] lg:w-[140px] flex items-center justify-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
          >
            {partner.logo ? (
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                className="w-full h-full object-contain object-center"
              />
            ) : (
              <span className="text-center text-sm lg:text-base font-medium text-[#003265]">
                {partner.name}
              </span>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
