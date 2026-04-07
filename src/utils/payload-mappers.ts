import type { NewsArticle } from "@/components/news/NewsArticleCard";
import type { TeamMember } from "@/components/about/ManagementTeam";
import type { CareerOpeningSummary } from "@/components/careers/CurrentOpenings";

export type NewsCategory = "news" | "press-release";

export interface PayloadNewsDoc {
  id: number | string;
  title: string;
  slug: string;
  excerpt: string;
  placeholderColor?: string | null;
  category: string;
  publishedDate: string;
  featuredImage?: unknown;
}

export interface PayloadGalleryDoc {
  id: number | string;
  title: string;
  image: unknown;
}

export interface GalleryItem {
  id: string;
  title: string;
  image: string;
}

export interface PayloadTeamDoc {
  id: number | string;
  name: string;
  role: string;
  linkedinUrl?: string | null;
  image: unknown;
}

export interface PayloadCareerDoc {
  id: number | string;
  title: string;
  slug: string;
  location: string;
  employmentType: string;
  postedDate: string;
}

const NEWS_CATEGORY_LABELS: Record<string, string> = {
  news: "News",
  "press-release": "Press Release",
};

const EMPLOYMENT_LABELS: Record<string, string> = {
  "full-time": "Full-time",
  "part-time": "Part-time",
  contract: "Contract",
  internship: "Internship",
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

function mediaUrlFromUnknown(media: unknown): string {
  if (!media) return "";
  if (typeof media === "string") return `/media/${media}`;

  const m = media as { url?: string; filename?: string };
  if (m.url) return m.url.startsWith("/") || m.url.startsWith("http") ? m.url : `/${m.url}`;
  if (m.filename) return `/media/${m.filename}`;
  return "";
}

export function mapNewsDocToArticle(doc: PayloadNewsDoc): NewsArticle {
  const imageUrl = mediaUrlFromUnknown(doc.featuredImage);
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

export function mapGalleryDocToItem(doc: PayloadGalleryDoc): GalleryItem | null {
  const imageUrl = mediaUrlFromUnknown(doc.image);
  if (!imageUrl) return null;
  return {
    id: String(doc.id),
    title: doc.title,
    image: imageUrl,
  };
}

export function mapTeamDocToMember(doc: PayloadTeamDoc): TeamMember {
  return {
    id: String(doc.id),
    name: doc.name,
    role: doc.role,
    image: mediaUrlFromUnknown(doc.image),
    linkedin: doc.linkedinUrl || "#",
  };
}

export function mapCareerDocToOpening(doc: PayloadCareerDoc): CareerOpeningSummary {
  return {
    id: String(doc.id),
    title: doc.title,
    slug: doc.slug,
    location: doc.location,
    employmentLabel: EMPLOYMENT_LABELS[doc.employmentType] || doc.employmentType,
    postedLabel: formatPayloadDate(doc.postedDate),
  };
}
