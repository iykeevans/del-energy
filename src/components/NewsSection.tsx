import Image from "next/image";
import Link from "next/link";

export function NewsSection() {
  return (
    <section id="news" className="bg-[#0A1C36] px-6 py-16 lg:px-12 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-white lg:text-4xl">
            Latest News and Updates
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Explore the latest developments, press releases, and announcements
            from DEL Energy.
          </p>
          <Link
            href="#"
            className="mt-8 inline-block w-fit rounded-lg bg-[#1E3A5F] px-8 py-4 text-base font-semibold text-white transition hover:bg-[#2a4a75]"
          >
            View All Related News and Updates
          </Link>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
          <Image
            src="https://images.unsplash.com/photo-1581092160607-ee22621ddc2f?w=800"
            alt="Team member reviewing data"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
