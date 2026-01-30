import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#0A1C36] px-6 py-4 lg:px-12">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="h-3 w-3 rotate-45 bg-[#4ADE80]" aria-hidden />
          <span className="text-xl font-semibold uppercase tracking-wide text-white">
            DEL
          </span>
        </Link>
        <nav className="flex items-center gap-8" aria-label="Main navigation">
          <Link
            href="#about"
            className="text-sm font-medium uppercase tracking-wider text-white hover:text-white/90"
          >
            About us
          </Link>
          <Link
            href="#operations"
            className="text-sm font-medium uppercase tracking-wider text-white hover:text-white/90"
          >
            Our Operations
          </Link>
          <Link
            href="#careers"
            className="text-sm font-medium uppercase tracking-wider text-white hover:text-white/90"
          >
            Careers
          </Link>
          <Link
            href="#news"
            className="text-sm font-medium uppercase tracking-wider text-white hover:text-white/90"
          >
            News and Media
          </Link>
        </nav>
      </div>
    </header>
  );
}
