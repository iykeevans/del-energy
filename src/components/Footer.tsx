"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

import { motion } from "framer-motion";

export function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic can be added here
  };

  return (
    <footer className="px-6 py-16 lg:px-12 lg:py-24 border-t border-white/5">
      <div className="mx-auto grid max-w-[var(--del-max-screen-width)] gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16">
        <div className="sm:col-span-2 lg:col-span-1">
          <Image src="/logo.svg" alt="DEL Energy" width={129} height={51} />
          <h3 className="mt-6 text-sm font-semibold tracking-wider text-white">
            Address
          </h3>
          <p className="mt-2 text-sm text-white/80 max-w-xs">
            180B Moshood Olugbani Street, Victoria Island, Lagos
          </p>
          <div className="mt-6 flex gap-4">
            <motion.a
              whileHover={{ scale: 1.1, borderColor: "rgba(255,255,255,0.8)" }}
              whileTap={{ scale: 0.9 }}
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-colors"
              aria-label="LinkedIn"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, borderColor: "rgba(255,255,255,0.8)" }}
              whileTap={{ scale: 0.9 }}
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-colors"
              aria-label="Twitter"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </motion.a>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold tracking-wider text-white uppercase">
            Quick Links
          </h3>
          <ul className="mt-6 space-y-4">
            <li>
              <Link
                href="#about"
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                href="#operations"
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                Our Operations
              </Link>
            </li>
            <li>
              <Link
                href="#news"
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                News and Media
              </Link>
            </li>
            <li>
              <Link
                href="#careers"
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                Careers
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold tracking-wider text-white uppercase">
            Contact us
          </h3>
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full rounded-xl border-0 bg-white/5 px-4 py-3 text-white placeholder:text-zinc-500 focus:ring-2 focus:ring-del-secondary transition-all outline-hidden"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full rounded-xl border-0 bg-white/5 px-4 py-3 text-white placeholder:text-zinc-500 focus:ring-2 focus:ring-del-secondary transition-all outline-hidden"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="w-full rounded-xl border-0 bg-white/5 px-4 py-3 text-white placeholder:text-zinc-500 focus:ring-2 focus:ring-del-secondary transition-all outline-hidden"
            />
            <textarea
              placeholder="Type your message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              rows={4}
              className="w-full resize-none rounded-xl border-0 bg-white/5 px-4 py-3 text-white placeholder:text-zinc-500 focus:ring-2 focus:ring-del-secondary transition-all outline-hidden"
              required
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full rounded-xl bg-del-primary px-6 py-4 font-semibold text-white transition hover:bg-del-primary/90 shadow-lg cursor-pointer"
            >
              Submit
            </motion.button>
          </form>
        </div>
      </div>
      <div className="mx-auto max-w-[var(--del-max-screen-width)] mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between gap-4 text-xs text-white/40">
        <p>© {new Date().getFullYear()} DEL Energy. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-white transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
