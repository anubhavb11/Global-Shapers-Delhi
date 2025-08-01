import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-[#0D5392]/10 py-4 px-4 flex items-center justify-between sticky top-0 z-50">
      {/* Logo placeholder */}
      <div className="font-bold text-xl text-[#0D5392] tracking-wide">
        {/* Add your logo here */}
        Delhi Shapers
      </div>
      <ul className="flex gap-6 text-[#0D5392] font-medium text-base">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/shapers">Our Shapers</Link></li>
        <li><Link href="/projects">Projects</Link></li>
        <li><Link href="/join">Join Us</Link></li>
        <li><Link href="/media">Media</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
} 