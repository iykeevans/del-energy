"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const STICKY_THRESHOLD = 80;

export function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY >= STICKY_THRESHOLD);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = (
    <nav className="flex items-center gap-8" aria-label="Main navigation">
      <Link href="#about" className="text-white transition hover:text-white/90">
        About us
      </Link>
      <Link
        href="#operations"
        className="text-white transition hover:text-white/90"
      >
        Our Operations
      </Link>
      <Link
        href="#careers"
        className="text-white transition hover:text-white/90"
      >
        Careers
      </Link>
      <Link href="#news" className="text-white transition hover:text-white/90">
        News and Media
      </Link>
    </nav>
  );

  const logoBlock = (
    <Link href="/" className="flex items-center gap-3">
      <Image
        src="/logo.svg"
        alt="DEL Energy - Decentralised Energy Limited"
        width={129}
        height={51}
        className="h-[51px] w-auto"
      />
    </Link>
  );

  return (
    <>
      {/* In-flow header: visible at top, scrolls away with page */}
      <header
        className="relative z-40 top-[50px] px-6 py-4 lg:px-12"
        aria-hidden={isSticky}
      >
        <div className="mx-auto flex max-w-[1338px] items-center justify-between">
          {logoBlock}
          {navLinks}
        </div>
      </header>

      {/* Sticky pill banner: appears when scrolled past header */}
      <div
        className="fixed left-0 right-0 top-4 z-50 px-4 transition-[opacity,transform] duration-300 lg:px-6"
        style={{
          opacity: isSticky ? 1 : 0,
          pointerEvents: isSticky ? "auto" : "none",
          transform: isSticky ? "translateY(0)" : "translateY(-100%)",
        }}
        aria-hidden={!isSticky}
      >
        <div className="mx-auto flex max-w-[1338px] items-center justify-between rounded-full bg-[#115293] px-8 py-4 shadow-lg">
          {logoBlock}
          {navLinks}
        </div>
      </div>
    </>
  );
}
