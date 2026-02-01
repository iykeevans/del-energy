"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { fadeInUp } from "@/lib/animations";

export function NewsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <section id="news" className="pt-24 px-4 lg:px-0">
      <div
        ref={containerRef}
        className="relative mx-auto max-w-[var(--del-max-screen-width)] min-h-[530px] flex flex-col lg:block"
      >
        <div className="relative h-[300px] sm:h-[400px] lg:h-[530px] w-full overflow-hidden rounded-2xl">
          <motion.div style={{ scale: imageScale }} className="w-full h-full">
            <Image
              src="/images/news-section-image.jpg"
              alt="News section image"
              fill
              className="object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-black/20 lg:hidden" />
        </div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="bg-white w-full lg:w-[480px] rounded-2xl p-8 lg:p-[40px] mt-[-60px] lg:mt-0 relative z-10 lg:absolute lg:top-1/2 lg:left-[40px] lg:translate-y-[-50%] shadow-2xl"
        >
          <h2 className="text-3xl lg:text-4xl font-medium leading-tight text-del-primary-darken-1">
            Latest News and Updates
          </h2>

          <p className="mt-6 text-lg text-zinc-600 leading-relaxed">
            Explore the latest developments, press releases, and announcements
            from DEL Energy.
          </p>

          <Link
            href="/news"
            className="mt-12 lg:mt-[96px] inline-block w-full text-center lg:w-fit rounded-[18px] bg-del-primary px-8 py-4 text-base font-semibold text-white transition hover:bg-del-primary/90 shadow-lg"
          >
            View All Related News
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
