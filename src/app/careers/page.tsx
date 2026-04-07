import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CareersHero } from "@/components/careers/CareersHero";
import { WorkingAtDel } from "@/components/careers/WorkingAtDel";
import { WhoThrives } from "@/components/careers/WhoThrives";
import { CurrentOpeningsSWR } from "@/components/careers/CurrentOpeningsSWR";

export const metadata = {
  title: "Careers | DEL Energy",
  description:
    "Join DEL Energy - Explore career opportunities with a disciplined, high-performing team shaping the future of Nigeria's energy sector.",
};

export default async function CareersPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <CareersHero />
        <WorkingAtDel />
        <WhoThrives />
        <CurrentOpeningsSWR />
      </main>
      <Footer />
    </div>
  );
}
