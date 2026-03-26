import type { NewsArticle } from "@/components/news/NewsArticleCard";

const API_URL = process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000";

export interface PayloadResponse<T> {
  docs: T[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
}

export const NEWS_CATEGORY_LABELS: Record<string, string> = {
  expansion: "Expansion",
  infrastructure: "Infrastructure",
  partnership: "Partnership",
  innovation: "Innovation",
  "press-release": "Press Release",
};

export function formatPayloadDate(
  value: string | Date | null | undefined,
): string {
  if (!value) return "";
  const d = typeof value === "string" ? new Date(value) : value;
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

/**
 * Get media URL from Payload media object.
 * Prefer same-origin relative paths (`/api/media/...` or `/media/...`) so
 * `next/image` uses internal optimization (absolute localhost URLs are blocked
 * as “private IP” upstream fetches).
 */
export function getMediaURL(media: unknown): string {
  if (!media) return "";

  if (typeof media === "string") {
    return `/media/${media}`;
  }

  const m = media as { url?: string; filename?: string };
  if (m.url) {
    if (m.url.startsWith("http")) return m.url;
    return m.url.startsWith("/") ? m.url : `/${m.url}`;
  }

  if (m.filename) {
    return `/media/${m.filename}`;
  }

  return "";
}

export interface PayloadNewsDoc {
  id: number | string;
  title: string;
  slug: string;
  excerpt: string;
  content?: unknown;
  placeholderColor?: string | null;
  category: string;
  publishedDate: string;
  status: string;
  featuredImage?: unknown;
}

export function mapNewsDocToArticle(doc: PayloadNewsDoc): NewsArticle {
  const imageUrl = getMediaURL(doc.featuredImage);
  return {
    id: String(doc.id),
    title: doc.title,
    excerpt: doc.excerpt,
    slug: doc.slug,
    placeholderColor: doc.placeholderColor || undefined,
    date: formatPayloadDate(doc.publishedDate),
    category: NEWS_CATEGORY_LABELS[doc.category] || doc.category,
    image: imageUrl || undefined,
  };
}

export interface TeamMemberPublic {
  id: string;
  name: string;
  role: string;
  image: string;
  linkedin: string;
}

export interface PayloadTeamDoc {
  id: number | string;
  name: string;
  role: string;
  order: number;
  linkedinUrl?: string | null;
  image: unknown;
}

export function mapTeamDocToMember(doc: PayloadTeamDoc): TeamMemberPublic {
  const imageUrl = getMediaURL(doc.image);
  return {
    id: String(doc.id),
    name: doc.name,
    role: doc.role,
    image: imageUrl,
    linkedin: doc.linkedinUrl || "#",
  };
}

export interface PayloadCareerDoc {
  id: number | string;
  title: string;
  slug: string;
  description?: unknown;
  requirements?: { requirement: string }[] | null;
  location: string;
  employmentType: string;
  status: string;
  postedDate: string;
}

const EMPLOYMENT_LABELS: Record<string, string> = {
  "full-time": "Full-time",
  "part-time": "Part-time",
  contract: "Contract",
  internship: "Internship",
};

export function formatEmploymentType(value: string): string {
  return EMPLOYMENT_LABELS[value] || value;
}

async function fetchCollection<T>(
  path: string,
  revalidateSeconds = 60,
): Promise<T[]> {
  try {
    const response = await fetch(`${API_URL}${path}`, {
      next: { revalidate: revalidateSeconds },
    });
    if (!response.ok) {
      return [];
    }
    const data: PayloadResponse<T> = await response.json();
    return data.docs;
  } catch (e) {
    console.error("Payload fetch error:", path, e);
    return [];
  }
}

/**
 * Fetch published news articles from Payload CMS
 */
export async function getNewsArticles(
  limit: number = 50,
): Promise<PayloadNewsDoc[]> {
  return fetchCollection<PayloadNewsDoc>(
    `/api/news?where[status][equals]=published&sort=-publishedDate&limit=${limit}&depth=1`,
    60,
  );
}

export async function getNewsArticleBySlug(
  slug: string,
): Promise<PayloadNewsDoc | null> {
  const encoded = encodeURIComponent(slug);
  const docs = await fetchCollection<PayloadNewsDoc>(
    `/api/news?where[slug][equals]=${encoded}&limit=1&depth=1`,
    60,
  );
  const doc = docs[0];
  if (!doc || doc.status !== "published") return null;
  return doc;
}

/**
 * Fetch team members from Payload CMS
 */
export async function getTeamMembers(): Promise<PayloadTeamDoc[]> {
  return fetchCollection<PayloadTeamDoc>(
    `/api/team?sort=order&limit=100&depth=1`,
    3600,
  );
}

/**
 * Fetch open career positions from Payload CMS
 */
export async function getOpenCareers(): Promise<PayloadCareerDoc[]> {
  return fetchCollection<PayloadCareerDoc>(
    `/api/careers?where[status][equals]=open&sort=-postedDate&limit=100&depth=0`,
    3600,
  );
}

export async function getCareerBySlug(
  slug: string,
): Promise<PayloadCareerDoc | null> {
  const encoded = encodeURIComponent(slug);
  const docs = await fetchCollection<PayloadCareerDoc>(
    `/api/careers?where[slug][equals]=${encoded}&limit=1&depth=0`,
    300,
  );
  const doc = docs[0];
  if (!doc || doc.status !== "open") return null;
  return doc;
}

/**
 * Fetch services from Payload CMS
 */
export async function getServices() {
  return fetchCollection(`/api/services?sort=order&limit=100&depth=1`, 3600);
}
