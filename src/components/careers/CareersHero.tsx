"use client";

import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, slideInLeft } from "@/lib/animations";
import { useState, useEffect } from "react";
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

const SLIDE_INTERVAL = 5000; // 5 seconds

export function CareersHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, SLIDE_INTERVAL);

    return () => clearInterval(interval);
  }, [isPaused]);

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
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Slideshow Images */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={heroImages[currentSlide].src}
                alt={heroImages[currentSlide].alt}
                fill
                className="object-cover"
                priority={currentSlide === 0}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1338px"
              />
            </motion.div>
          </AnimatePresence>

          {/* Dot Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className="group relative"
                aria-label={`Go to slide ${index + 1}`}
              >
                <div
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? "bg-white scale-125"
                      : "bg-white/50 hover:bg-white/75"
                  }`}
                />
                {/* Progress indicator for active slide */}
                {currentSlide === index && !isPaused && (
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-white"
                    initial={{ scale: 1, opacity: 1 }}
                    animate={{ scale: 2, opacity: 0 }}
                    transition={{
                      duration: SLIDE_INTERVAL / 1000,
                      ease: "linear",
                    }}
                  />
                )}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
