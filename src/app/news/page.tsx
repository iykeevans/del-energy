import { getNewsArticles, mapNewsDocToArticleResolved } from "@/utils/payload";
import { NewsPageClient } from "./NewsPageClient";

export const metadata = {
  title: "News and Media | DEL Energy",
  description: "News, press releases, and updates from DEL Energy.",
};

export default async function NewsPage() {
  const docs = await getNewsArticles(80);
  const newsArticles = await Promise.all(
    docs
      .filter((d) => d.category !== "press-release")
      .map(mapNewsDocToArticleResolved),
  );
  const pressReleases = await Promise.all(
    docs
      .filter((d) => d.category === "press-release")
      .map(mapNewsDocToArticleResolved),
  );

  return (
    <NewsPageClient newsArticles={newsArticles} pressReleases={pressReleases} />
  );
}
