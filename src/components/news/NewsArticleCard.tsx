"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { fadeInUp } from "@/lib/animations";

export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  image?: string;
  placeholderColor?: string;
  slug: string;
  date?: string;
  category?: string;
}

interface NewsArticleCardProps {
  article: NewsArticle;
  index?: number;
}

export function NewsArticleCard({ article, index = 0 }: NewsArticleCardProps) {
  return (
    <motion.article
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        initial: { opacity: 0, y: 30 },
        animate: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: "easeOut",
            delay: index * 0.1,
          },
        },
      }}
      className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-16 xl:gap-24"
    >
      {/* Image Container */}
      <div className="w-full lg:w-[400px] xl:w-[500px] shrink-0">
        <div
          className="relative w-full h-[250px] sm:h-[300px] lg:h-[400px] rounded-xl lg:rounded-2xl overflow-hidden"
          style={{
            backgroundColor: article.placeholderColor || "#00b050",
          }}
        >
          {article.image && (
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
            />
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center flex-1">
        <div className="space-y-4 sm:space-y-6 lg:space-y-8">
          {article.date && (
            <span className="text-sm text-white/60">{article.date}</span>
          )}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[40px] font-medium leading-tight lg:leading-[56px] tracking-[-0.4px] text-white">
            {article.title}
          </h2>
          <p className="text-base sm:text-lg text-white/80 leading-relaxed line-clamp-4">
            {article.excerpt}
          </p>
        </div>

        <Link
          href={`/news/${article.slug}`}
          className="mt-8 sm:mt-10 lg:mt-12 inline-flex items-center justify-center w-fit rounded-[18px] bg-del-secondary px-6 sm:px-8 py-3 sm:py-4 text-base font-medium text-white transition hover:bg-del-secondary/90 shadow-lg"
        >
          Read more
        </Link>
      </div>
    </motion.article>
  );
}
