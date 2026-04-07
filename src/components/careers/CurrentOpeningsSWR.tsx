"use client";

import { CurrentOpenings } from "@/components/careers/CurrentOpenings";
import { useOpenCareers } from "@/hooks/use-cms";

export function CurrentOpeningsSWR() {
  const { data: openings } = useOpenCareers();
  return <CurrentOpenings openings={openings} />;
}
