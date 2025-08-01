"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b border-[#0D5392]/10 py-4 px-4 flex items-center justify-between sticky top-0 z-50">
      {/* Logo */}
      <div className="font-bold text-xl text-[#0D5392] tracking-wide">
        Delhi Shapers
      </div>
      
      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-6 text-[#0D5392] font-medium text-base">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/shapers">Our Shapers</Link></li>
        <li><Link href="/projects">Projects</Link></li>
        <li><Link href="/join">Join Us</Link></li>
        <li><Link href="/media">Media</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-[#0D5392] p-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-[#0D5392]/10 md:hidden">
          <ul className="flex flex-col py-4 px-4 gap-4 text-[#0D5392] font-medium">
            <li><Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link href="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
            <li><Link href="/shapers" onClick={() => setIsMenuOpen(false)}>Our Shapers</Link></li>
            <li><Link href="/projects" onClick={() => setIsMenuOpen(false)}>Projects</Link></li>
            <li><Link href="/join" onClick={() => setIsMenuOpen(false)}>Join Us</Link></li>
            <li><Link href="/media" onClick={() => setIsMenuOpen(false)}>Media</Link></li>
            <li><Link href="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
} 