import Image from "next/image";

const partners = [
  { name: "Synergy Capital", logo: "/images/synergy-capital.png" },
  { name: "Anergi", logo: "/images/Anergi.svg" },
  { name: "Kuramo", logo: "/images/KURAMO.svg" },
  { name: "SANGO", logo: "/images/SANGO.svg" },
  { name: "VIATHAN", logo: "/images/viathan.png" },
];

export function InvestmentSection() {
  return (
    <section className="bg-white px-6 py-16 lg:px-12 lg:py-24">
      <h2 className="mb-16 text-center text-[20px] font-medium uppercase tracking-[0.2em] text-[#003265]">
        Backed by an expert investment community
      </h2>
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-16 gap-y-12 lg:gap-x-20">
        {partners.map((partner, i) => (
          <div
            key={i}
            className="relative not-last:flex h-[80px] w-[140px] border flex-1 basis-[140px] items-center justify-center"
          >
            {partner.logo ? (
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                className="w-full h-full object-contain object-center"
              />
            ) : (
              <span className="text-center text-base font-medium text-[#003265]">
                {partner.name}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
