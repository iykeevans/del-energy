"use client";

import { NewsArticleCard, NewsArticle } from "./NewsArticleCard";

interface NewsArticleListProps {
  articles: NewsArticle[];
}

export function NewsArticleList({ articles }: NewsArticleListProps) {
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
