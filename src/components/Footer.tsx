import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0D5392] text-white py-8 px-4 flex flex-col items-center gap-4 mt-8">
      <div className="flex items-center gap-3">
        {/* Logo placeholder */}
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#0D5392] font-bold text-lg">
          {/* Add logo here */}
          GS
        </div>
        <span className="font-semibold text-lg tracking-wide">Global Shapers Delhi Hub</span>
      </div>
      <nav className="flex flex-wrap gap-6 justify-center text-white/90 text-base">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/shapers">Our Shapers</Link>
        <Link href="/join">Join Us</Link>
        <Link href="/media">Media</Link>
        <Link href="/contact">Contact</Link>
        <a href="https://www.globalshapers.org/" target="_blank" rel="noopener noreferrer">Global Shapers Community</a>
      </nav>
      <div className="text-xs text-white/70 mt-2">© {new Date().getFullYear()} Global Shapers New Delhi Hub. All rights reserved.</div>
    </footer>
  );
} 