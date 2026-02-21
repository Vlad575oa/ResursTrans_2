import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-border-dark bg-white/80 dark:bg-background-dark/90 backdrop-blur-md">
      <div className="px-6 md:px-10 lg:px-40 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3 text-slate-900 dark:text-white">
          <div className="size-8 text-primary">
            <span className="material-symbols-outlined !text-[32px]">local_shipping</span>
          </div>
          <h2 className="text-xl font-bold tracking-tight">FleetTech</h2>
        </div>
        <nav className="hidden md:flex flex-1 justify-end gap-8 items-center">
          <div className="flex items-center gap-8">
            <Link className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-semibold transition-colors" href="/">
              Главная
            </Link>
            <Link className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-semibold transition-colors" href="#solutions">
              Решения
            </Link>
            <Link className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-semibold transition-colors" href="#industries">
              Отрасли
            </Link>
            <Link className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-semibold transition-colors" href="#pricing">
              Цены
            </Link>
            <Link className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-semibold transition-colors" href="#about">
              О компании
            </Link>
          </div>
          <button className="bg-primary hover:bg-primary/90 text-white text-sm font-bold h-10 px-6 rounded-lg transition-all flex items-center gap-2 shadow-lg shadow-primary/25">
            <span className="material-symbols-outlined !text-[20px]">login</span>
            <span>Вход в систему</span>
          </button>
        </nav>
        <button className="md:hidden text-slate-900 dark:text-white" aria-label="Menu">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </header>
  );
}
