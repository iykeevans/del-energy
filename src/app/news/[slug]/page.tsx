import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LexicalHtml } from "@/components/cms/LexicalHtml";
import {
  formatPayloadDate,
  getNewsArticleBySlug,
  NEWS_CATEGORY_LABELS,
  resolveMediaURL,
} from "@/utils/payload";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = await getNewsArticleBySlug(slug);
  if (!article) {
    return { title: "Article | DEL Energy" };
  }
  return {
    title: `${article.title} | DEL Energy`,
    description: article.excerpt,
  };
}

const richTextClass =
  "cms-rich-text max-w-3xl text-white/90 text-base sm:text-lg leading-relaxed [&_h1]:text-3xl [&_h1]:font-medium [&_h1]:mb-4 [&_h1]:mt-8 [&_h2]:text-2xl [&_h2]:font-medium [&_h2]:mb-3 [&_h2]:mt-6 [&_h3]:text-xl [&_h3]:font-medium [&_h3]:mb-2 [&_h3]:mt-4 [&_p]:mb-4 [&_a]:text-del-secondary [&_a]:underline [&_ul]:my-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:my-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_blockquote]:border-l-4 [&_blockquote]:border-white/30 [&_blockquote]:pl-4 [&_blockquote]:italic";

export default async function NewsArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = await getNewsArticleBySlug(slug);
  if (!article) notFound();

  const categoryLabel =
    NEWS_CATEGORY_LABELS[article.category] || article.category;
  const imageUrl = await resolveMediaURL(article.featuredImage);
  const dateLabel = formatPayloadDate(article.publishedDate);

  return (
    <div className="min-h-screen bg-del-primary-darken-3">
      <Header />
      <main className="pt-24 sm:pt-28 lg:pt-[150px] pb-16">
        <article className="px-4 sm:px-6 lg:px-12">
          <div className="mx-auto max-w-(--del-max-screen-width)">
            <Link
              href="/news"
              className="inline-flex text-sm text-del-secondary hover:underline mb-8"
            >
              ← Back to News
            </Link>

            <div className="flex flex-wrap gap-3 text-sm text-white/60 mb-4">
              {dateLabel ? <span>{dateLabel}</span> : null}
              {categoryLabel ? (
                <>
                  {dateLabel ? <span aria-hidden>·</span> : null}
                  <span>{categoryLabel}</span>
                </>
              ) : null}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-medium leading-tight text-white tracking-tight max-w-4xl">
              {article.title}
            </h1>

            <p className="mt-6 text-lg text-white/80 max-w-3xl leading-relaxed">
              {article.excerpt}
            </p>

            {imageUrl ? (
              <div className="relative w-full max-w-4xl aspect-16/10 mt-10 rounded-2xl overflow-hidden bg-black/20">
                <Image
                  src={imageUrl}
                  alt={article.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 896px"
                  priority
                />
              </div>
            ) : null}

            <div className="mt-12 max-w-3xl">
              <LexicalHtml data={article.content} className={richTextClass} />
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
