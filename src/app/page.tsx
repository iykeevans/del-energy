import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { IntroSection } from "@/components/IntroSection";
import { SolutionsSection } from "@/components/SolutionsSection";
import { StatsSection } from "@/components/StatsSection";
import { InvestmentSection } from "@/components/InvestmentSection";
import { EnergyOfferingsSection } from "@/components/EnergyOfferingsSection";
import { NewsSection } from "@/components/NewsSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
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
