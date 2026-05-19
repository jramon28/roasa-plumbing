"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, MessageSquare, Menu, X, Zap } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

const NAV_LINKS = [
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Service Areas", href: "/#service-areas" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-navy-900 shadow-lg shadow-black/20"
            : "bg-navy-900/95 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <div className="w-9 h-9 bg-gold-500 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-navy-900" strokeWidth={2.5} />
              </div>
              <div className="leading-tight">
                <span className="block text-white font-bold text-sm sm:text-base tracking-wide">
                  ROASA
                </span>
                <span className="block text-gold-400 text-xs font-medium tracking-wider uppercase">
                  Plumbing Inc.
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/80 hover:text-gold-400 text-sm font-medium transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Phone + Text CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={BUSINESS.textHref}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-sm px-4 py-2.5 rounded-lg transition-colors"
              >
                <MessageSquare className="w-4 h-4" strokeWidth={2.5} />
                Text Us
              </a>
              <a
                href={BUSINESS.phoneHref}
                className="flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white font-bold text-sm px-4 py-2.5 rounded-lg transition-colors"
              >
                <Phone className="w-4 h-4" strokeWidth={2.5} />
                Call Now
              </a>
            </div>

            {/* Mobile: text + phone icons + hamburger */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href={BUSINESS.textHref}
                className="flex items-center gap-1.5 bg-white/10 border border-white/20 text-white font-semibold text-sm px-3 py-2 rounded-lg"
              >
                <MessageSquare className="w-4 h-4" strokeWidth={2.5} />
                <span className="hidden sm:inline">Text</span>
              </a>
              <a
                href={BUSINESS.phoneHref}
                className="flex items-center gap-1.5 bg-gold-500 hover:bg-gold-600 text-white font-bold text-sm px-3 py-2 rounded-lg"
              >
                <Phone className="w-4 h-4" strokeWidth={2.5} />
                <span className="hidden sm:inline">Call Now</span>
              </a>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2 text-white hover:text-gold-400 transition-colors"
                aria-label="Toggle menu"
              >
                {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-navy-950 border-t border-white/10">
            <nav className="px-4 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-white/80 hover:text-gold-400 font-medium py-3 border-b border-white/5 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-3 flex gap-2">
                <a
                  href={BUSINESS.textHref}
                  className="flex-1 flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white font-semibold py-3 rounded-lg"
                >
                  <MessageSquare className="w-4 h-4" strokeWidth={2.5} />
                  Text Us
                </a>
                <a
                  href={BUSINESS.phoneHref}
                  className="flex-1 flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 text-white font-bold py-3 rounded-lg"
                >
                  <Phone className="w-4 h-4" strokeWidth={2.5} />
                  Call Now
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Sticky mobile buttons (bottom of screen) */}
      <div className="lg:hidden fixed bottom-4 right-4 z-50 flex gap-2">
        <a
          href={BUSINESS.textHref}
          className="flex items-center gap-2 bg-navy-800 hover:bg-navy-700 border border-white/20 text-white font-bold px-4 py-3.5 rounded-full shadow-lg shadow-black/30 transition-colors"
        >
          <MessageSquare className="w-5 h-5" strokeWidth={2.5} />
          Text
        </a>
        <a
          href={BUSINESS.phoneHref}
          className="flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white font-bold px-5 py-3.5 rounded-full shadow-lg shadow-black/30 transition-colors"
        >
          <Phone className="w-5 h-5" strokeWidth={2.5} />
          Call Now
        </a>
      </div>
    </>
  );
}
