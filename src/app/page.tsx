import { Header } from "@/components/Header";
import { Hero } from "@/components/home/Hero";
import { IntroSection } from "@/components/home/IntroSection";
import { SolutionsSection } from "@/components/home/SolutionsSection";
import { StatsSection } from "@/components/home/StatsSection";
import { InvestmentSection } from "@/components/InvestmentSection";
import { EnergyOfferingsSection } from "@/components/home/EnergyOfferingsSection";
import { NewsSection } from "@/components/home/NewsSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <IntroSection />
        <SolutionsSection />
        <StatsSection />
        <InvestmentSection />
        <EnergyOfferingsSection />
        <NewsSection />
        <Footer />
      </main>
    </div>
  );
}
