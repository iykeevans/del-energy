"use client";

import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { useEffect, useRef } from "react";

// Adjust this constant to control how many numbers the counter animates through
const COUNTER_OFFSET = 1;

const stats = [
  {
    value: "6.48M",
    label: "SCM Gas delivered Annually",
    numeric: 6.48,
    suffix: "M",
  },
  { value: "6", label: "Active Sites", numeric: 6, suffix: "" },
  { value: "95.33%", label: "Average Uptime", numeric: 95.33, suffix: "%" },
  {
    value: "10,950+",
    label: "MWH Power Supplied",
    numeric: 10950,
    suffix: "+",
  },
  {
    value: "296,960",
    label: "tonnes of CO₂E avoided",
    numeric: 296960,
    suffix: "",
  },
];

function Counter({ numeric, suffix }: { numeric: number; suffix: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Start from close to the target, not from 0
  const startValue = Math.max(0, numeric - COUNTER_OFFSET);
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
    <div className="shrink-0">
      <div className="text-5xl font-medium text-white lg:text-[80px]">
        <Counter numeric={stat.numeric} suffix={stat.suffix} />
      </div>
      <div className="mt-2 text-lg text-white/80">{stat.label}</div>
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="bg-del-primary-darken-3 overflow-hidden py-16 lg:py-24">
      <div className="animate-marquee flex w-max gap-[113px] pr-[113px]">
        {[...stats, ...stats].map((stat, i) => (
          <StatItem key={i} stat={stat} />
        ))}
      </div>
    </section>
  );
}
