"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { NewsHero } from "@/components/news/NewsHero";
import { NewsTabs, TabType } from "@/components/news/NewsTabs";
import { NewsArticleList } from "@/components/news/NewsArticleList";
import type { NewsArticle } from "@/components/news/NewsArticleCard";

type NewsPageClientProps = {
  newsArticles: NewsArticle[];
  pressReleases: NewsArticle[];
};

export function NewsPageClient({ newsArticles, pressReleases }: NewsPageClientProps) {
  const [activeTab, setActiveTab] = useState<TabType>("news");

  const getArticlesForTab = () => {
    switch (activeTab) {
      case "news":
        return newsArticles;
      case "press-releases":
        return pressReleases;
      case "gallery":
        return [];
      default:
        return newsArticles;
    }
  };

  const renderContent = () => {
    if (activeTab === "gallery") {
      return (
        <section className="px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-(--del-max-screen-width) text-center">
            <p className="text-white/60 text-lg">Gallery coming soon.</p>
          </div>
        </section>
      );
    }
    return <NewsArticleList articles={getArticlesForTab()} />;
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <NewsHero />
        <NewsTabs activeTab={activeTab} onTabChange={setActiveTab} />
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
}
