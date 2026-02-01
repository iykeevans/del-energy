"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STICKY_THRESHOLD = 80;

export function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY >= STICKY_THRESHOLD);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = (
    <nav
      className="hidden lg:flex items-center gap-8"
      aria-label="Main navigation"
    >
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

  const mobileMenu = (
    <AnimatePresence>
      {isMobileMenuOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed bottom-0 right-0 top-0 z-50 w-[280px] bg-del-primary-darken-1 p-8 lg:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-8 mt-12">
              <Link
                href="#about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl font-medium text-white transition hover:text-del-secondary"
              >
                About us
              </Link>
              <Link
                href="#operations"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl font-medium text-white transition hover:text-del-secondary"
              >
                Our Operations
              </Link>
              <Link
                href="#careers"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl font-medium text-white transition hover:text-del-secondary"
              >
                Careers
              </Link>
              <Link
                href="#news"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl font-medium text-white transition hover:text-del-secondary"
              >
                News and Media
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  const hamburgerButton = (
    <button
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
      aria-label="Toggle menu"
    >
      <motion.span
        animate={{
          rotate: isMobileMenuOpen ? 45 : 0,
          y: isMobileMenuOpen ? 8 : 0,
        }}
        className="h-0.5 w-6 rounded-full bg-white transition-colors"
      />
      <motion.span
        animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
        className="h-0.5 w-6 rounded-full bg-white transition-colors"
      />
      <motion.span
        animate={{
          rotate: isMobileMenuOpen ? -45 : 0,
          y: isMobileMenuOpen ? -8 : 0,
        }}
        className="h-0.5 w-6 rounded-full bg-white transition-colors"
      />
    </button>
  );

  const logoBlock = (
    <Link href="/" className="flex items-center gap-3">
      <Image
        src="/logo.svg"
        alt="DEL Energy - Decentralised Energy Limited"
        width={129}
        height={51}
        className="h-[40px] w-auto lg:h-[51px]"
      />
    </Link>
  );

  return (
    <>
      {/* In-flow header: visible at top, scrolls away with page */}
      <header
        className="relative z-40 top-8 px-6 py-4 lg:top-[50px] lg:px-12"
        aria-hidden={isSticky}
      >
        <div className="mx-auto flex max-w-[1338px] items-center justify-between">
          {logoBlock}
          {navLinks}
          {hamburgerButton}
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
        <div className="mx-auto flex max-w-[1338px] items-center justify-between rounded-full bg-[#115293] px-6 py-3 lg:px-8 lg:py-4 shadow-lg">
          {logoBlock}
          {navLinks}
          {hamburgerButton}
        </div>
      </div>

      {mobileMenu}
    </>
  );
}
