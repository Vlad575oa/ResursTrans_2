import Link from "next/link";

const projects = [
  {
    name: "FleetCorp",
    description: "Корпоративное управление автопарком с аналитикой и оптимизацией",
    href: "/fleetcorp",
    features: ["Hero с видеофоном", "Stats Bar", "Clients Carousel", "Industries Grid", "Challenges & Solutions", "Management Model", "Numbers Scale"],
  },
  {
    name: "FleetTech",
    description: "Интеллектуальная система управления с dashboard и телематикой",
    href: "/fleettech",
    features: ["Dashboard Mockup", "GPS Мониторинг", "Контроль Топлива", "Case Studies", "AI Маршрутизация"],
  },
  {
    name: "FleetCorp Enterprise",
    description: "Корпоративное решение для крупного бизнеса с SLA гарантиями",
    href: "/enterprise",
    features: ["Enterprise Advantages", "Workflow Timeline", "Personal Manager", "Security", "Transparency"],
  },
];

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-dark text-slate-100 overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 left-0 right-0 z-50 border-b border-border-dark bg-background-dark/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 text-primary">
              <span className="material-symbols-outlined text-4xl">local_shipping</span>
            </div>
            <h2 className="text-white text-xl font-bold tracking-tight">Resurs Projects</h2>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
              Проекты <span className="text-primary">Fleet Management</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Коллекция решений для управления корпоративным автопарком
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link
                key={project.name}
                href={project.href}
                className="group relative bg-surface-dark border border-border-dark rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-3xl">local_shipping</span>
                </div>

                {/* Name */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {project.name}
                </h3>

                {/* Description */}
                <p className="text-slate-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-slate-500">
                      <span className="material-symbols-outlined text-base text-primary">check_circle</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Arrow */}
                <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider">
                  Открыть проект
                  <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border-dark py-8 px-6">
        <div className="max-w-7xl mx-auto text-center text-slate-500 text-sm">
          © 2024 Resurs Projects. Все права защищены.
        </div>
      </footer>
    </div>
  );
}
