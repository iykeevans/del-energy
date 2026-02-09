"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { fadeInUp } from "@/lib/animations";
import Image from "next/image";

const offerings = [
  {
    text: "Embedded and captive power plants",
    image: "/images/services/embedded.png",
  },
  {
    text: "CNG virtual pipeline systems",
    image: "/images/services/cng.jpg",
  },
  {
    text: "Gas distribution networks",
    image: "/images/services/gas.png",
  },
  {
    text: "Dedicated power and gas infrastructure for industrial, commercial, and residential clusters",
    image: "/images/services/dedicated-power-and-gas-infrastructure.png",
  },
  {
    text: "Distributed energy systems that scale",
    image: "/images/services/distributed.jpg",
  },
];

function FlipCard({
  offering,
  index,
}: {
  offering: (typeof offerings)[0];
  index: number;
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: index * 0.1 }}
      className="shrink-0 w-[300px] h-[260px] perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {/* Front Side - Text */}
        <div
          className="absolute inset-0 rounded-[20px] border border-del-primary p-[30px]"
          style={{ backfaceVisibility: "hidden" }}
        >
          <p className="text-[22px] font-medium text-del-primary-darken-3 leading-7">
            {offering.text}
          </p>
        </div>

        {/* Back Side - Image */}
        <div
          className="absolute inset-0 rounded-[20px] border border-del-primary overflow-hidden bg-white"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <Image
            src={offering.image}
            alt={offering.text}
            fill
            className="object-cover"
            sizes="300px"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export function EnergyOfferingsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  // Track scroll progress through the section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Transform vertical scroll into horizontal movement
  // Adjust the output range based on content width
  const x = useTransform(scrollYProgress, [0, 1], ["80%", "-80%"]);

  return (
    <section
      id="operations"
      ref={containerRef}
      className="py-16 lg:py-24 bg-white"
    >
      <div className="mx-auto max-w-(--del-max-screen-width) bg-[#F3F3F3] overflow-hidden pt-[44px] pb-[49px] rounded-[15px] pl-[30px]">
        <div className="px-6 md:px-0">
          {/* Header */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="mb-12 lg:mb-16"
          >
            <h2 className="text-4xl lg:text-[40px] font-medium leading-tight text-del-primary-darken-1">
              Energy That Flows
            </h2>

            <p className="mt-[10px] text-del-primary-darken-1">
              We design, build, finance, and operate:
            </p>
          </motion.div>

          {/* Horizontal Scrolling Cards - Desktop */}
          <div className="hidden lg:block relative h-[300px]">
            <motion.div
              ref={cardsRef}
              style={{ x }}
              className="flex gap-6 xl:gap-8 absolute left-0"
            >
              {offerings.map((offering, index) => (
                <FlipCard key={index} offering={offering} index={index} />
              ))}
            </motion.div>
          </div>

          {/* Mobile/Tablet: Horizontal Scroll Container */}
          <div className="lg:hidden overflow-x-auto scrollbar-hide -mx-6 px-6">
            <div className="flex gap-4 pb-4">
              {offerings.map((offering, index) => (
                <FlipCard key={index} offering={offering} index={index} />
              ))}
            </div>
          </div>

          {/* Learn More Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link
              href="/operations"
              className="inline-block rounded-[18px] bg-del-secondary text-white px-8 py-4 text-base font-semibold transition hover:bg-del-secondary/90 shadow-md"
            >
              Learn more
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
