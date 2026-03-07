"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HeaderScroll() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Главная" },
    { href: "/cases", label: "Кейсы" },
    { href: "/technology", label: "Услуги" },
    { href: "/about", label: "О нас" },
    { href: "/news", label: "Новости" },
    { href: "/contacts", label: "Контакты" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  className={`${isActive
                    ? "text-white border-b-2 border-primary pb-1"
                    : "text-slate-400 hover:text-white"
                    } text-sm font-bold transition-all duration-300 whitespace-nowrap`}
                  href={link.href}
                >
                  {link.label}
                </Link>
              );
            })}
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
        <div className="fixed inset-0 z-40 bg-background-dark/95 backdrop-blur-xl md:hidden flex flex-col pt-24 px-6 pb-6 overflow-y-auto">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  className={`${isActive
                    ? "text-white border-b border-primary"
                    : "text-slate-300 hover:text-white"
                    } text-xl font-bold transition-colors pb-4`}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </>
  );
}
