import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CareersHero } from "@/components/careers/CareersHero";
import { WorkingAtDel } from "@/components/careers/WorkingAtDel";
import { WhoThrives } from "@/components/careers/WhoThrives";
import { CurrentOpenings } from "@/components/careers/CurrentOpenings";

export const metadata = {
  title: "Careers | DEL Energy",
  description:
    "Join DEL Energy - Explore career opportunities with a disciplined, high-performing team shaping the future of Nigeria's energy sector.",
};

export default function CareersPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <CareersHero />
        <WorkingAtDel />
        <WhoThrives />
        <CurrentOpenings />
      </main>
      <Footer />
    </div>
  );
}
