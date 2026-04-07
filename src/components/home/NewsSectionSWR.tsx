"use client";

import { NewsSection } from "@/components/home/NewsSection";
import { useNewsArticles } from "@/hooks/use-cms";

export function NewsSectionSWR() {
  const { data: newsArticles } = useNewsArticles(3, "news");
  const highlights = newsArticles.map((d) => ({ title: d.title, slug: d.slug }));
  return <NewsSection highlights={highlights} />;
}
