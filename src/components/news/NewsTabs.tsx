"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

export type TabType = "news" | "press-releases" | "gallery";

interface NewsTabsProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

const tabs = [
  { id: "news" as TabType, label: "News" },
  { id: "press-releases" as TabType, label: "Press Releases" },
  { id: "gallery" as TabType, label: "Gallery" },
];

export function NewsTabs({ activeTab, onTabChange }: NewsTabsProps) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={fadeInUp}
      className="px-4 sm:px-6 lg:px-12 mt-8 sm:mt-10 lg:mt-12"
    >
      <div className="mx-auto max-w-(--del-max-screen-width)">
        <div className="relative">
          {/* Tabs - horizontal scroll on mobile */}
          <div className="flex items-start overflow-x-auto scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0 sm:overflow-visible">
            <div className="flex min-w-max sm:min-w-0 sm:w-full">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => onTabChange(tab.id)}
                  className={`shrink-0 sm:flex-1 text-left pb-4 sm:pb-6 pr-8 sm:pr-0 relative transition-colors cursor-pointer ${
                    activeTab === tab.id
                      ? "text-del-primary"
                      : "text-white hover:text-white/80"
                  }`}
                >
                  <span className="text-base sm:text-xl lg:text-2xl font-medium whitespace-nowrap">
                    {tab.label}
                  </span>
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 h-1 w-[calc(100%-2rem)] sm:w-32 lg:w-44 bg-del-primary"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Bottom line */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-white/20" />
        </div>
      </div>
    </motion.div>
  );
}
