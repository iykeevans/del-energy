import Link from "next/link";
import Image from "next/image";

export function NewsSection() {
  return (
    <section id="news" className="pt-24">
      <div className="relative mx-auto max-w-[var(--del-max-screen-width)]">
        <div className="relative h-[530px] w-full overflow-hidden rounded-xl">
          <Image
            src="/images/news-section-image.jpg"
            alt="News section image"
            fill
            className="object-cover"
          />
        </div>

        <div className="bg-white w-[480px] rounded-xl p-[30px] absolute top-1/2 left-[30px] translate-y-[-50%]">
          <h2 className="text-[40px] font-medium leading-tight text-del-primary-darken-1 lg:text-4xl">
            Latest News and Updates
          </h2>

          <p className="mt-6 text-lg text-zinc-600">
            Explore the latest developments, press releases, and announcements
            from DEL Energy.
          </p>

          <Link
            href="#"
            className="mt-[96px] inline-block w-fit rounded-[18px] bg-del-primary px-8 py-4 text-base font-semibold text-white transition hover:bg-[#2a4a75]"
          >
            View All Related News and Updates
          </Link>
        </div>
      </div>
    </section>
  );
}
