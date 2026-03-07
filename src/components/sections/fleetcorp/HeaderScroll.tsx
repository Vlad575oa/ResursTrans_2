"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function HeaderScroll() {
  const [isScrolled, setIsScrolled] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when route changes or resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 transition-all duration-300 ${isScrolled || isMenuOpen
          ? "bg-background-dark/95 shadow-lg py-2"
          : "bg-background-dark/80 py-4"
          } border-b border-white/5 backdrop-blur-md z-50 px-4 md:px-10 lg:px-20`}
      >
        <div className="relative flex items-center justify-between md:justify-center h-12">
          {/* Logo */}
          <div className="md:absolute md:left-0 flex items-center gap-3 text-white">
            <div className="flex items-center justify-center size-9 rounded bg-gradient-to-br from-primary to-blue-700 text-white shadow-[0_0_15px_rgba(37,106,244,0.3)]">
              <span className="material-symbols-outlined text-xl">local_shipping</span>
            </div>
            <h2 className="text-white text-lg font-bold tracking-tight">Fleet Corp</h2>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link className="text-white text-sm font-bold transition-colors border-b-2 border-primary pb-1" href="/">
              Главная
            </Link>
            <Link className="text-slate-400 hover:text-white text-sm font-bold transition-colors" href="/cases">
              Кейсы
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden flex items-center justify-center text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {isMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background-dark/95 backdrop-blur-xl md:hidden flex flex-col pt-24 px-6 pb-6">
          <nav className="flex flex-col gap-6">
            <Link
              className="text-white text-xl font-bold transition-colors border-b border-white/10 pb-4"
              href="/"
              onClick={() => setIsMenuOpen(false)}
            >
              Главная
            </Link>
            <Link
              className="text-white text-xl font-bold transition-colors border-b border-white/10 pb-4"
              href="/cases"
              onClick={() => setIsMenuOpen(false)}
            >
              Кейсы
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
