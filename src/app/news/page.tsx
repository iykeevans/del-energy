import { getNewsArticles, mapNewsDocToArticle } from "@/utils/payload";
import { NewsPageClient } from "./NewsPageClient";

export const metadata = {
  title: "News and Media | DEL Energy",
  description: "News, press releases, and updates from DEL Energy.",
};

export default async function NewsPage() {
  const docs = await getNewsArticles(80);
  const newsArticles = docs
    .filter((d) => d.category !== "press-release")
    .map(mapNewsDocToArticle);
  const pressReleases = docs
    .filter((d) => d.category === "press-release")
    .map(mapNewsDocToArticle);

  return (
    <NewsPageClient newsArticles={newsArticles} pressReleases={pressReleases} />
  );
}
