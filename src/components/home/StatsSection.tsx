"use client";

import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";

// Adjust this constant to control how many numbers the counter animates through
const COUNTER_OFFSET = 1;

const stats = [
  {
    value: "6.48M",
    label: "SCM Gas delivered Annually",
    numeric: 6.48,
    suffix: "M",
    imageUrl: "/images/gas-icon.svg",
    offset: 0.1,
  },
  {
    value: "6",
    label: "Active Sites",
    numeric: 6,
    suffix: "",
    imageUrl: "/images/sites-icon.svg",
    offset: 1,
  },
  {
    value: "95.33%",
    label: "Average Uptime",
    numeric: 95.33,
    suffix: "%",
    imageUrl: "/images/uptime-icon.svg",
    offset: 0.1,
  },
  {
    value: "10,950+",
    label: "MWH Power Supplied",
    numeric: 10950,
    suffix: "+",
    imageUrl: "/images/bulb-icon.svg",
    offset: 1,
  },
  {
    value: "296,960",
    label: "tonnes of CO₂E avoided",
    numeric: 296960,
    suffix: "",
    imageUrl: "/images/uptime-icon.svg",
    offset: 1,
  },
];

function Counter({
  numeric,
  suffix,
  offset,
}: {
  numeric: number;
  suffix: string;
  offset: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Start from close to the target, not from 0
  const startValue = Math.max(0, numeric - offset);
  const motionValue = useMotionValue(startValue);

  const displayValue = useTransform(motionValue, (latest) => {
    if (numeric >= 1000) {
      return Math.floor(latest).toLocaleString() + suffix;
    }
    return latest.toFixed(numeric % 1 === 0 ? 0 : 2) + suffix;
  });

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, numeric, {
        duration: 1.5,
        ease: "easeOut",
      });
      return () => controls.stop();
    }
  }, [isInView, motionValue, numeric]);

  return <motion.span ref={ref}>{displayValue}</motion.span>;
}

function StatItem({ stat }: { stat: (typeof stats)[0] }) {
  return (
    <div>
      <div className="flex items-center gap-4">
        <Image src={stat.imageUrl} alt={stat.label} width={20} height={35} />

        <div className="text-5xl font-medium text-white lg:text-[80px]">
          <Counter
            numeric={stat.numeric}
            suffix={stat.suffix}
            offset={stat?.offset ?? COUNTER_OFFSET}
          />
        </div>
      </div>

      <div className="mt-2 text-lg text-white/80 ml-8">{stat.label}</div>
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="bg-del-primary-darken-3 overflow-hidden py-14 lg:pt-16 lg:pb-20">
      <h2 className="text-[#F3F3F3] text-[40px] font-medium mb-20 ml-[51px]">
        DEL at a Glance
      </h2>
      <div className="animate-marquee flex w-max gap-[113px] pr-[113px]">
        {[...stats, ...stats].map((stat, i) => (
          <StatItem key={i} stat={stat} />
        ))}
      </div>
    </section>
  );
}
