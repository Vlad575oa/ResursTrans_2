"use client";

import { useEffect, useState } from "react";

export default function HeaderScroll() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 transition-all duration-300 ${
        isScrolled
          ? "bg-background-dark/95 shadow-lg py-2"
          : "bg-background-dark/80 py-4"
      } border-b border-white/5 backdrop-blur-md z-50 flex items-center justify-between px-6 md:px-10 lg:px-20`}
    >
      <div className="flex items-center gap-4 text-white">
        <div className="flex items-center justify-center size-10 rounded bg-gradient-to-br from-primary to-blue-700 text-white shadow-[0_0_15px_rgba(37,106,244,0.3)]">
          <span className="material-symbols-outlined text-2xl">local_shipping</span>
        </div>
        <h2 className="text-white text-xl font-bold tracking-tight">FleetCorp</h2>
      </div>
      <nav className="hidden md:flex items-center gap-8">
        <a className="text-slate-300 hover:text-white text-sm font-medium transition-colors" href="/">
          Главная
        </a>
        <a className="text-slate-300 hover:text-white text-sm font-medium transition-colors" href="/guardian">
          Главная 2
        </a>
        <a className="text-slate-300 hover:text-white text-sm font-medium transition-colors" href="#services">
          Услуги
        </a>
        <a className="text-slate-300 hover:text-white text-sm font-medium transition-colors" href="#about">
          О компании
        </a>
        <a className="text-slate-300 hover:text-white text-sm font-medium transition-colors" href="#cases">
          Кейсы
        </a>
        <a className="text-slate-300 hover:text-white text-sm font-medium transition-colors" href="#contacts">
          Контакты
        </a>
      </nav>
      <div className="flex items-center gap-4">
        <button className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/10 bg-white/5 text-white text-sm font-bold hover:bg-white/10 transition-all hover:border-primary/50 group">
          <span className="material-symbols-outlined text-[20px] text-primary group-hover:text-white transition-colors">
            login
          </span>
          <span>Войти</span>
        </button>
        <button className="md:hidden text-white" aria-label="Menu">
          <span className="material-symbols-outlined text-3xl">menu</span>
        </button>
      </div>
    </div>
  );
}
