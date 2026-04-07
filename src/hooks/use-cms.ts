"use client";

import useSWR from "swr";
import { fetchJSON, type PayloadListResponse } from "@/lib/payload-rest";
import {
  mapCareerDocToOpening,
  mapGalleryDocToItem,
  mapNewsDocToArticle,
  mapTeamDocToMember,
  type NewsCategory,
  type PayloadCareerDoc,
  type PayloadGalleryDoc,
  type PayloadNewsDoc,
  type PayloadTeamDoc,
} from "@/utils/payload-mappers";

function buildNewsURL(limit: number, category?: NewsCategory): string {
  const params = new URLSearchParams({
    "where[status][equals]": "published",
    sort: "-publishedDate",
    limit: String(limit),
    depth: "1",
  });
  if (category) params.set("where[category][equals]", category);
  return `/api/news?${params.toString()}`;
}

export function useNewsArticles(limit = 80, category?: NewsCategory) {
  const key = buildNewsURL(limit, category);
  const { data, error, isLoading } = useSWR<PayloadListResponse<PayloadNewsDoc>>(key, fetchJSON);
  return {
    data: (data?.docs ?? []).map(mapNewsDocToArticle),
    error,
    isLoading,
  };
}

export function useGalleryItems(limit = 120) {
  const params = new URLSearchParams({
    "where[status][equals]": "published",
    sort: "-publishedDate",
    limit: String(limit),
    depth: "1",
  });
  const key = `/api/gallery?${params.toString()}`;
  const { data, error, isLoading } = useSWR<PayloadListResponse<PayloadGalleryDoc>>(key, fetchJSON);
  return {
    data: (data?.docs ?? []).map(mapGalleryDocToItem).filter((item) => item !== null),
    error,
    isLoading,
  };
}

export function useTeamMembers() {
  const key = "/api/team?sort=order&limit=100&depth=1";
  const { data, error, isLoading } = useSWR<PayloadListResponse<PayloadTeamDoc>>(key, fetchJSON);
  return {
    data: (data?.docs ?? []).map(mapTeamDocToMember),
    error,
    isLoading,
  };
}

export function useOpenCareers() {
  const key =
    "/api/careers?where[status][equals]=open&sort=-postedDate&limit=100&depth=0";
  const { data, error, isLoading } = useSWR<PayloadListResponse<PayloadCareerDoc>>(key, fetchJSON);
  return {
    data: (data?.docs ?? []).map(mapCareerDocToOpening),
    error,
    isLoading,
  };
}
