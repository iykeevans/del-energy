import { NewsPageClient } from "./NewsPageClient";

export const metadata = {
  title: "News and Media | DEL Energy",
  description: "News, press releases, and updates from DEL Energy.",
};

export default async function NewsPage() {
  return <NewsPageClient />;
}
