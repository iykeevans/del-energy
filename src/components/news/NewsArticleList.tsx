"use client";

import { NewsArticleCard, NewsArticle } from "./NewsArticleCard";

// Sample news data - this would typically come from a CMS or API
const sampleNewsArticles: NewsArticle[] = [
  {
    id: "1",
    title: "DEL Energy expands operations in Ogun State, Nigeria",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    slug: "del-energy-expands-ogun-state",
    placeholderColor: "#00b050",
    date: "January 15, 2026",
    category: "Expansion",
  },
  {
    id: "2",
    title: "DEL Energy expands operations in Ogun State, Nigeria",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    slug: "del-energy-expands-ogun-state-2",
    placeholderColor: "#89a5c2",
    date: "January 10, 2026",
    category: "Infrastructure",
  },
  {
    id: "3",
    title: "DEL Energy expands operations in Ogun State, Nigeria",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    slug: "del-energy-expands-ogun-state-3",
    placeholderColor: "#035aa6",
    date: "December 28, 2025",
    category: "Partnership",
  },
  {
    id: "4",
    title: "DEL Energy expands operations in Ogun State, Nigeria",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    slug: "del-energy-expands-ogun-state-4",
    placeholderColor: "#89a5c2",
    date: "December 15, 2025",
    category: "Innovation",
  },
];

interface NewsArticleListProps {
  articles?: NewsArticle[];
}

export function NewsArticleList({
  articles = sampleNewsArticles,
}: NewsArticleListProps) {
  if (articles.length === 0) {
    return (
      <div className="px-4 sm:px-6 lg:px-12 py-16 sm:py-20">
        <div className="mx-auto max-w-(--del-max-screen-width) text-center">
          <p className="text-white/60 text-lg">No articles found.</p>
        </div>
      </div>
    );
  }

  return (
    <section className="px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-(--del-max-screen-width)">
        <div className="space-y-12 sm:space-y-16 lg:space-y-[70px]">
          {articles.map((article, index) => (
            <NewsArticleCard key={article.id} article={article} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
