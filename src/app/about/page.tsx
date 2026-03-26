import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AboutHero } from "@/components/about/AboutHero";
import { VisionMission } from "@/components/about/VisionMission";
import { OurValues } from "@/components/about/OurValues";
import { ManagementTeam } from "@/components/about/ManagementTeam";
import { Partners } from "@/components/about/Partners";
import { getTeamMembers, mapTeamDocToMember } from "@/utils/payload";

export const metadata = {
  title: "About Us | DEL Energy",
  description:
    "Learn about DEL Energy - Closing the energy gap in Nigeria through reliable, affordable energy infrastructure.",
};

export default async function AboutPage() {
  const teamDocs = await getTeamMembers();
  const cmsMembers = teamDocs.map(mapTeamDocToMember);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <AboutHero />
        <VisionMission />
        <OurValues />
        <ManagementTeam members={cmsMembers} />
        <Partners />
      </main>
      <Footer />
    </div>
  );
}
