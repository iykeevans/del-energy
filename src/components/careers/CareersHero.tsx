"use client";

import { motion } from "framer-motion";
import { fadeInUp, slideInLeft } from "@/lib/animations";
import Image from "next/image";

const heroImages = [
  {
    src: "/images/career-hero.jpg",
    alt: "DEL Energy team member at work",
  },
  {
    src: "/images/career-hero-2.png",
    alt: "DEL Energy workplace",
  },
];

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
            Careers at DEL
          </h1>
        </motion.div>

        {/* Hero Image Slideshow */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="relative w-full h-[280px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-xl sm:rounded-2xl overflow-hidden"
        >
          <Image
            src={heroImages[1].src}
            alt={heroImages[1].alt}
            fill
            className="object-cover"
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1338px"
          />
        </motion.div>
      </div>
    </section>
  );
}
