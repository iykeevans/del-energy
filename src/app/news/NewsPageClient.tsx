"use client";

import { useState } from "react";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { NewsHero } from "@/components/news/NewsHero";
import { NewsTabs, TabType } from "@/components/news/NewsTabs";
import { NewsArticleList } from "@/components/news/NewsArticleList";
import { useGalleryItems, useNewsArticles } from "@/hooks/use-cms";

export function NewsPageClient() {
  const [activeTab, setActiveTab] = useState<TabType>("news");
  const { data: newsArticles, isLoading: loadingNews } = useNewsArticles(80, "news");
  const { data: pressReleases, isLoading: loadingPress } = useNewsArticles(
    80,
    "press-release",
  );
  const { data: galleryItems, isLoading: loadingGallery } = useGalleryItems(120);

  const isLoading =
    (activeTab === "news" && loadingNews) ||
    (activeTab === "press-releases" && loadingPress) ||
    (activeTab === "gallery" && loadingGallery);

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
    if (isLoading) {
      return (
        <section className="px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-(--del-max-screen-width) text-center">
            <p className="text-white/70 text-lg">Loading...</p>
          </div>
        </section>
      );
    }

    if (activeTab === "gallery") {
      if (!galleryItems.length) {
        return (
          <section className="px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-(--del-max-screen-width) text-center">
              <p className="text-white/60 text-lg">
                No gallery photos published yet.
              </p>
            </div>
          </section>
        );
      }

      return (
        <section className="px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-(--del-max-screen-width)">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 auto-rows-[170px] sm:auto-rows-[220px]">
              {galleryItems.map((item, index) => {
                const tall = index % 5 === 0 || index % 7 === 0;
                return (
                  <figure
                    key={item.id}
                    className={`relative overflow-hidden rounded-xl bg-white/5 ${
                      tall ? "row-span-2" : ""
                    }`}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 400px"
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </figure>
                );
              })}
            </div>
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
