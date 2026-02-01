import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="mt-[100px]">
      <div className="w-[var(--del-max-screen-width)] mx-auto h-[758px] rounded-2xl relative">
        <video
          src="/videos/hero-video.mp4"
          autoPlay
          muted
          loop
          className="w-full h-full object-cover rounded-2xl"
        />

        <div className="absolute bottom-[80px] left-[100px] z-10">
          <div className="max-w-3xl">
            <h1 className="text-[60px] font-medium leading-tight tracking-[-0.0625rem] text-white">
              Reliable Energy, Delivered Close to Demand
            </h1>
            <Link
              href="#solutions"
              className="mt-8 inline-block rounded-[18px] bg-[#00B050] px-8 py-4 text-base font-medium text-white transition hover:bg-[#009244]"
            >
              Learn more
            </Link>
          </div>
        </div>
        <div
          className="absolute inset-0 hero-video__linear-gradient rounded-2xl"
          aria-hidden
        />
      </div>
    </section>
  );
}
