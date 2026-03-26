import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CareersHero } from "@/components/careers/CareersHero";
import { WorkingAtDel } from "@/components/careers/WorkingAtDel";
import { WhoThrives } from "@/components/careers/WhoThrives";
import { CurrentOpenings } from "@/components/careers/CurrentOpenings";
import {
  formatEmploymentType,
  formatPayloadDate,
  getOpenCareers,
} from "@/utils/payload";

export const metadata = {
  title: "Careers | DEL Energy",
  description:
    "Join DEL Energy - Explore career opportunities with a disciplined, high-performing team shaping the future of Nigeria's energy sector.",
};

export default async function CareersPage() {
  const careers = await getOpenCareers();
  const openings = careers.map((c) => ({
    id: String(c.id),
    title: c.title,
    slug: c.slug,
    location: c.location,
    employmentLabel: formatEmploymentType(c.employmentType),
    postedLabel: formatPayloadDate(c.postedDate),
  }));

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <CareersHero />
        <WorkingAtDel />
        <WhoThrives />
        <CurrentOpenings openings={openings} />
      </main>
      <Footer />
    </div>
  );
}
