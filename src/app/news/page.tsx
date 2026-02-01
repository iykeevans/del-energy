"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { NewsHero } from "@/components/news/NewsHero";
import { NewsTabs, TabType } from "@/components/news/NewsTabs";
import { NewsArticleList } from "@/components/news/NewsArticleList";

// Sample data for different tabs - this would typically come from a CMS or API
const newsArticles = [
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

const pressReleases = [
  {
    id: "pr-1",
    title:
      "DEL Energy Announces Strategic Partnership with Major Utility Provider",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    slug: "del-energy-strategic-partnership",
    placeholderColor: "#1068d4",
    date: "January 12, 2026",
    category: "Press Release",
  },
  {
    id: "pr-2",
    title: "DEL Energy Secures $50M Investment for Infrastructure Development",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    slug: "del-energy-investment-infrastructure",
    placeholderColor: "#093161",
    date: "December 20, 2025",
    category: "Press Release",
  },
];

export default function NewsPage() {
  const [activeTab, setActiveTab] = useState<TabType>("news");

  const getArticlesForTab = () => {
    switch (activeTab) {
      case "news":
        return newsArticles;
      case "press-releases":
        return pressReleases;
      case "gallery":
        return []; // Gallery would have different content type
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
