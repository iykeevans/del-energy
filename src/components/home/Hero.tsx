"use client";

import Link from "next/link";
import Image from "next/image";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { fadeInUp } from "@/lib/animations";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="mt-20 lg:mt-[100px] px-4 lg:px-0 overflow-hidden"
    >
      <div className="w-full lg:w-[var(--del-max-screen-width)] mx-auto h-[500px] lg:h-[758px] rounded-2xl relative overflow-hidden">
        <motion.div
          style={{ y: videoY }}
          className="absolute inset-0 w-full h-full"
        >
          <video
            src="/videos/hero-video.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          style={{ opacity }}
          className="absolute bottom-12 left-6 right-6 lg:bottom-[80px] lg:left-[100px] z-10"
        >
          <div className="max-w-3xl">
            <motion.h1
              initial="initial"
              animate="animate"
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-[60px] font-medium leading-tight tracking-tight text-white"
            >
              Reliable Energy, Delivered Close to Demand
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Link
                href="#solutions"
                className="mt-8 inline-block rounded-[18px] bg-del-secondary px-8 py-4 text-base font-medium text-white transition hover:bg-del-secondary/90 shadow-lg"
              >
                Learn more
              </Link>
            </motion.div>
          </div>
        </motion.div>
        <div
          className="absolute inset-0 hero-video__linear-gradient rounded-2xl"
          aria-hidden
        />
      </div>
    </section>
  );
}
