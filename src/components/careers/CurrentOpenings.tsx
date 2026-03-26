"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  fadeInUp,
  slideInLeft,
  slideInRight,
  staggerContainer,
} from "@/lib/animations";

export type CareerOpeningSummary = {
  id: string;
  title: string;
  slug: string;
  location: string;
  employmentLabel: string;
  postedLabel: string;
};

type CurrentOpeningsProps = {
  openings: CareerOpeningSummary[];
};

export function CurrentOpenings({ openings }: CurrentOpeningsProps) {
  return (
    <section
      id="current-openings"
      className="bg-white px-4 sm:px-6 py-12 sm:py-16 lg:px-12"
    >
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="mx-auto max-w-(--del-max-screen-width)"
      >
        <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-24">
          <motion.div variants={slideInLeft} className="lg:w-[600px] shrink-0">
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-medium leading-tight lg:leading-[52px] tracking-[-0.4px] text-del-primary-darken-3">
              Current Openings
            </h2>
          </motion.div>

          <motion.div variants={slideInRight} className="flex-1 space-y-8">
            <p className="text-base sm:text-lg text-del-primary-darken-1 leading-relaxed">
              Explore opportunities to join a high-performing team shaping the
              future of Nigeria&apos;s energy sector.
            </p>

            {openings.length > 0 ? (
              <ul className="space-y-4">
                {openings.map((job, index) => (
                  <motion.li key={job.id} variants={fadeInUp} custom={index}>
                    <Link
                      href={`/careers/${job.slug}`}
                      className="block rounded-xl border border-del-primary/15 bg-[#fafafa] px-5 py-4 transition hover:border-del-primary/40 hover:bg-white"
                    >
                      <span className="text-lg font-medium text-del-primary-darken-3">
                        {job.title}
                      </span>
                      <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-sm text-del-primary-darken-1/80">
                        <span>{job.location}</span>
                        <span aria-hidden>·</span>
                        <span>{job.employmentLabel}</span>
                        {job.postedLabel ? (
                          <>
                            <span aria-hidden>·</span>
                            <span>Posted {job.postedLabel}</span>
                          </>
                        ) : null}
                      </div>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            ) : (
              <p className="text-del-primary-darken-1/70">
                No openings are listed at the moment. Follow us on LinkedIn for
                future roles.
              </p>
            )}

            <motion.div variants={fadeInUp}>
              <a
                href="https://www.linkedin.com/company/decentralisedenergy/jobs/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-del-secondary text-white font-medium rounded-lg hover:bg-del-primary/90 transition-colors"
              >
                Job openings on LinkedIn
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
