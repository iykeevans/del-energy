"use client";

import { ManagementTeam } from "@/components/about/ManagementTeam";
import { useTeamMembers } from "@/hooks/use-cms";

export function ManagementTeamSWR() {
  const { data: members } = useTeamMembers();
  const membersForDisplay = members.length > 0 ? members : undefined;
  return <ManagementTeam members={membersForDisplay} />;
}
