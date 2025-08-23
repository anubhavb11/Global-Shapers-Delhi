"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b border-[#0D5392]/10 py-6 px-4 flex items-center justify-between sticky top-0 z-50">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image 
          src="/images/logo.png" 
          alt="Delhi Shapers Logo" 
          width={240} 
          height={80} 
          className="h-16 w-auto"
        />
      </Link>
      
      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-6 text-black font-medium text-base absolute left-1/2 transform -translate-x-1/2">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/shapers">Our Shapers</Link></li>
        <li><Link href="/projects">Projects</Link></li>
        <li><Link href="/media">Media</Link></li>
      </ul>

      {/* Join Us Button and Mobile Menu */}
      <div className="flex items-center gap-4">
        <Link 
          href="/join" 
          className="hidden md:block bg-[#0D5392] text-white px-4 py-2 rounded-md font-medium hover:bg-[#0D5392]/90 transition-colors"
        >
          Join Us
        </Link>
        <button 
          className="md:hidden text-black p-2"
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
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-[#0D5392]/10 md:hidden">
          <ul className="flex flex-col py-4 px-4 gap-4 text-black font-medium">
            <li><Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link href="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
            <li><Link href="/shapers" onClick={() => setIsMenuOpen(false)}>Our Shapers</Link></li>
            <li><Link href="/projects" onClick={() => setIsMenuOpen(false)}>Projects</Link></li>
            <li><Link href="/media" onClick={() => setIsMenuOpen(false)}>Media</Link></li>
            <li>
              <Link 
                href="/join" 
                onClick={() => setIsMenuOpen(false)}
                className="bg-[#0D5392] text-white px-4 py-2 rounded-md font-medium hover:bg-[#0D5392]/90 transition-colors inline-block"
              >
                Join Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
} 