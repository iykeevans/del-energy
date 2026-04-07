import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AboutHero } from "@/components/about/AboutHero";
import { VisionMission } from "@/components/about/VisionMission";
import { OurValues } from "@/components/about/OurValues";
import { ManagementTeamSWR } from "@/components/about/ManagementTeamSWR";
import { Partners } from "@/components/about/Partners";

export const metadata = {
  title: "About Us | DEL Energy",
  description:
    "Learn about DEL Energy - Closing the energy gap in Nigeria through reliable, affordable energy infrastructure.",
};

export default async function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <AboutHero />
        <VisionMission />
        <OurValues />
        <ManagementTeamSWR />
        <Partners />
      </main>
      <Footer />
    </div>
  );
}
