import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LexicalHtml } from "@/components/cms/LexicalHtml";
import {
  formatEmploymentType,
  formatPayloadDate,
  getCareerBySlug,
} from "@/utils/payload";

type Props = {
  params: Promise<{ slug: string }>;
};

const richTextClass =
  "cms-rich-text max-w-3xl text-del-primary-darken-1 text-base sm:text-lg leading-relaxed [&_h1]:text-2xl [&_h1]:font-medium [&_h1]:mb-3 [&_h2]:text-xl [&_h2]:font-medium [&_h2]:mb-2 [&_h3]:text-lg [&_h3]:font-medium [&_p]:mb-4 [&_a]:text-del-secondary [&_a]:underline [&_ul]:my-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:my-4 [&_ol]:list-decimal [&_ol]:pl-6";

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const job = await getCareerBySlug(slug);
  if (!job) {
    return { title: "Careers | DEL Energy" };
  }
  return {
    title: `${job.title} | Careers | DEL Energy`,
    description: `${job.title} — ${job.location} (${formatEmploymentType(job.employmentType)})`,
  };
}

export default async function CareerDetailPage({ params }: Props) {
  const { slug } = await params;
  const job = await getCareerBySlug(slug);
  if (!job) notFound();

  const requirements =
    job.requirements?.map((r) => r.requirement).filter(Boolean) ?? [];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24 sm:pt-28 lg:pt-[120px] pb-16">
        <div className="px-4 sm:px-6 lg:px-12">
          <div className="mx-auto max-w-(--del-max-screen-width) max-w-3xl">
            <Link
              href="/careers#current-openings"
              className="inline-flex text-sm text-del-secondary hover:underline mb-8"
            >
              ← Back to careers
            </Link>

            <h1 className="text-3xl sm:text-4xl font-medium text-del-primary-darken-3 tracking-tight">
              {job.title}
            </h1>

            <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1 text-sm text-del-primary-darken-1/85">
              <span>{job.location}</span>
              <span aria-hidden>·</span>
              <span>{formatEmploymentType(job.employmentType)}</span>
              {job.postedDate ? (
                <>
                  <span aria-hidden>·</span>
                  <span>Posted {formatPayloadDate(job.postedDate)}</span>
                </>
              ) : null}
            </div>

            <div className="mt-10">
              <h2 className="text-lg font-medium text-del-primary-darken-3 mb-3">
                About this role
              </h2>
              <LexicalHtml data={job.description} className={richTextClass} />
            </div>

            {requirements.length > 0 ? (
              <div className="mt-10">
                <h2 className="text-lg font-medium text-del-primary-darken-3 mb-3">
                  Requirements
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-del-primary-darken-1">
                  {requirements.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            <div className="mt-12">
              <a
                href="https://www.linkedin.com/company/decentralisedenergy/jobs/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-[18px] bg-del-secondary px-8 py-4 text-base font-semibold text-white transition hover:bg-del-secondary/90"
              >
                Apply via LinkedIn
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
