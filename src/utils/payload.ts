import type { NewsArticle } from "@/components/news/NewsArticleCard";
import configPromise from "@payload-config";
import { getPayload } from "payload";
import "server-only";

async function getPayloadClient() {
  return getPayload({ config: configPromise });
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

interface PayloadMediaDoc {
  id: number | string;
  url?: string | null;
  filename?: string | null;
}

function normalizeMediaURL(url: string): string {
  if (url.startsWith("http")) return url;
  return url.startsWith("/") ? url : `/${url}`;
}

/**
 * Resolve media URL from either populated media object or media document ID.
 * If the relation is an ID string/number, it fetches the media document first.
 */
export async function resolveMediaURL(media: unknown): Promise<string> {
  if (!media) return "";

  if (typeof media === "string" || typeof media === "number") {
    try {
      const payload = await getPayloadClient();
      const doc = (await payload.findByID({
        collection: "media",
        id: String(media),
        depth: 0,
      })) as unknown as PayloadMediaDoc;

      if (doc?.url) return normalizeMediaURL(doc.url);
      if (doc?.filename) return `/media/${doc.filename}`;
      return "";
    } catch (e) {
      console.error("Payload media lookup error:", e);
      return "";
    }
  }

  const m = media as { url?: string; filename?: string };
  if (m.url) return normalizeMediaURL(m.url);
  if (m.filename) return `/media/${m.filename}`;
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

export async function mapNewsDocToArticleResolved(
  doc: PayloadNewsDoc,
): Promise<NewsArticle> {
  const imageUrl = await resolveMediaURL(doc.featuredImage);
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

export async function mapTeamDocToMemberResolved(
  doc: PayloadTeamDoc,
): Promise<TeamMemberPublic> {
  const imageUrl = await resolveMediaURL(doc.image);
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
  finder: () => Promise<{ docs: unknown[] }>,
): Promise<T[]> {
  try {
    const data = await finder();
    return data.docs as T[];
  } catch (e) {
    console.error("Payload local API error:", e);
    return [];
  }
}

/**
 * Fetch published news articles from Payload CMS
 */
export async function getNewsArticles(
  limit: number = 50,
): Promise<PayloadNewsDoc[]> {
  return fetchCollection<PayloadNewsDoc>(async () => {
    const payload = await getPayloadClient();
    return payload.find({
      collection: "news",
      where: {
        status: {
          equals: "published",
        },
      },
      sort: "-publishedDate",
      limit,
      depth: 1,
    });
  });
}

export async function getNewsArticleBySlug(
  slug: string,
): Promise<PayloadNewsDoc | null> {
  const docs = await fetchCollection<PayloadNewsDoc>(async () => {
    const payload = await getPayloadClient();
    return payload.find({
      collection: "news",
      where: {
        slug: {
          equals: slug,
        },
      },
      limit: 1,
      depth: 1,
    });
  });
  const doc = docs[0];
  if (!doc || doc.status !== "published") return null;
  return doc;
}

/**
 * Fetch team members from Payload CMS
 */
export async function getTeamMembers(): Promise<PayloadTeamDoc[]> {
  return fetchCollection<PayloadTeamDoc>(async () => {
    const payload = await getPayloadClient();
    return payload.find({
      collection: "team",
      sort: "order",
      limit: 100,
      depth: 1,
    });
  });
}

/**
 * Fetch open career positions from Payload CMS
 */
export async function getOpenCareers(): Promise<PayloadCareerDoc[]> {
  return fetchCollection<PayloadCareerDoc>(async () => {
    const payload = await getPayloadClient();
    return payload.find({
      collection: "careers",
      where: {
        status: {
          equals: "open",
        },
      },
      sort: "-postedDate",
      limit: 100,
      depth: 0,
    });
  });
}

export async function getCareerBySlug(
  slug: string,
): Promise<PayloadCareerDoc | null> {
  const docs = await fetchCollection<PayloadCareerDoc>(async () => {
    const payload = await getPayloadClient();
    return payload.find({
      collection: "careers",
      where: {
        slug: {
          equals: slug,
        },
      },
      limit: 1,
      depth: 0,
    });
  });
  const doc = docs[0];
  if (!doc || doc.status !== "open") return null;
  return doc;
}

/**
 * Fetch services from Payload CMS
 */
export async function getServices() {
  return fetchCollection(async () => {
    const payload = await getPayloadClient();
    return payload.find({
      collection: "services",
      sort: "order",
      limit: 100,
      depth: 1,
    });
  });
}
