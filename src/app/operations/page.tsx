import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { OperationsHero } from "@/components/operations/OperationsHero";
import { CustomersSection } from "@/components/operations/CustomersSection";

export const metadata = {
  title: "Our Operations | DEL Energy",
  description:
    "Discover DEL Energy's operations - we build decentralised infrastructure that makes energy flow reliably, affordably, and close to demand.",
};

export default function OperationsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <OperationsHero />
        <CustomersSection />
      </main>
      <Footer />
    </div>
  );
}
