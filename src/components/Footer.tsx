import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0D5392] text-white py-8 sm:py-12 px-4 sm:px-6 flex flex-col items-center gap-4 sm:gap-6 mt-8">
      <div className="flex items-center gap-3">
        {/* Logo placeholder */}
        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center text-[#0D5392] font-bold text-sm sm:text-lg">
          GS
        </div>
        <span className="font-semibold text-base sm:text-lg tracking-wide text-center">Global Shapers Delhi Hub</span>
      </div>
      <nav className="flex flex-wrap gap-4 sm:gap-6 justify-center text-white/90 text-sm sm:text-base">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/shapers">Our Shapers</Link>
        <Link href="/join">Join Us</Link>
        <Link href="/media">Media</Link>
        <Link href="/contact">Contact</Link>
        <a href="https://www.globalshapers.org/" target="_blank" rel="noopener noreferrer">Global Shapers Community</a>
      </nav>
      <div className="text-xs text-white/70 mt-2 text-center">
        © {new Date().getFullYear()} Global Shapers New Delhi Hub. All rights reserved.
      </div>
    </footer>
  );
} 