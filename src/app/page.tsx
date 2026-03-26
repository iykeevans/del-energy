import { Header } from "@/components/Header";
import { Hero } from "@/components/home/Hero";
import { IntroSection } from "@/components/home/IntroSection";
import { SolutionsSection } from "@/components/home/SolutionsSection";
import { StatsSection } from "@/components/home/StatsSection";
import { InvestmentSection } from "@/components/InvestmentSection";
import { EnergyOfferingsSection } from "@/components/home/EnergyOfferingsSection";
import { NewsSection } from "@/components/home/NewsSection";
import { Footer } from "@/components/Footer";
import { getNewsArticles } from "@/utils/payload";

export default async function Home() {
  const newsDocs = await getNewsArticles(3);
  const highlights = newsDocs.map((d) => ({ title: d.title, slug: d.slug }));

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
        <NewsSection highlights={highlights} />
        <Footer />
      </main>
    </div>
  );
}
