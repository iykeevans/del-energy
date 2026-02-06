"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer, slideInLeft } from "@/lib/animations";
import Image from "next/image";

interface ValueItem {
  title: string;
  description: string;
  imageUrl: string;
}

const values: ValueItem[] = [
  {
    imageUrl: "/images/discipline.svg",
    title: "Discipline",
    description:
      "Maintaining rigorous standards in planning, execution, and operations to ensure consistent delivery of quality energy solutions.",
  },
  {
    imageUrl: "/images/delivery.svg",
    title: "Delivery",
    description:
      "Committed to executing projects on time and within budget, consistently meeting and exceeding stakeholder expectations.",
  },
  {
    imageUrl: "/images/safety.svg",
    title: "Safety",
    description:
      "Prioritizing the wellbeing of our people, communities, and environment in every decision and operation we undertake.",
  },
  {
    imageUrl: "/images/partnership.svg",
    title: "Partnership",
    description:
      "Collaborating with regulators, utilities, developers, and customers to accelerate energy delivery.",
  },
];

const ChevronIcon = ({ isOpen }: { isOpen: boolean }) => (
  <motion.svg
    animate={{ rotate: isOpen ? 180 : 0 }}
    transition={{ duration: 0.3 }}
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    className="shrink-0"
  >
    <path
      d="M2 5L7 10L12 5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </motion.svg>
);

export function OurValues() {
  const [openIndex, setOpenIndex] = useState<number>(3); // Partnership is open by default

  const toggleValue = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="px-4 sm:px-6 py-12 sm:py-16 lg:px-12 lg:py-24">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="mx-auto max-w-(--del-max-screen-width) flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-24"
      >
        {/* Left Column - Title and Description */}
        <motion.div variants={slideInLeft} className="lg:w-1/2 shrink-0">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-medium leading-tight lg:leading-[56px] tracking-[-0.4px] text-[#f3f3f3]">
            Our Values
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-[#f3f3f3] leading-relaxed">
            The DEL model is built around four principles that shape how we
            plan, build, and operate. These principles are the framework we use
            across every project and partnership:
          </p>
        </motion.div>

        {/* Right Column - Accordion */}
        <motion.div variants={fadeInUp} className="flex-1">
          <div className="space-y-0">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="border-b border-[#f3f3f3]/20 last:border-b-0"
              >
                <button
                  onClick={() => toggleValue(index)}
                  className="w-full flex items-center justify-between py-4 sm:py-5 text-left text-[#f3f3f3] cursor-pointer hover:text-del-secondary"
                >
                  <div className="flex items-center gap-x-5">
                    <Image
                      src={value.imageUrl}
                      alt={value.title}
                      width={20}
                      height={35}
                    />
                    <span className="text-lg sm:text-xl lg:text-2xl font-medium">
                      {value.title}
                    </span>
                  </div>

                  <ChevronIcon isOpen={openIndex === index} />
                </button>
                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 sm:pb-6 text-sm sm:text-base lg:text-lg text-[#f3f3f3] leading-relaxed">
                        {value.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
