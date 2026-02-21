const caseStudies = [
  {
    category: "Логистика",
    categoryColor: "text-orange-500",
    iconBg: "bg-orange-500/10",
    icon: "local_shipping",
    title: "Крупный ритейлер",
    description: "Оптимизация маршрутов доставки для парка из 500+ грузовых автомобилей по всей стране.",
    value: "-27%",
    label: "Расходы",
    improvement: "Снижение затрат на ГСМ",
    improvementIcon: "trending_down",
  },
  {
    category: "Строительство",
    categoryColor: "text-blue-500",
    iconBg: "bg-blue-500/10",
    icon: "construction",
    title: "СтройМехТранс",
    description: "Внедрение датчиков работы механизмов и контроль простоя спецтехники на объектах.",
    value: "-35%",
    label: "Простои",
    improvement: "Сокращение холостого хода",
    improvementIcon: "timer_off",
  },
  {
    category: "Дистрибьюция",
    categoryColor: "text-purple-500",
    iconBg: "bg-purple-500/10",
    icon: "inventory_2",
    title: "FMCG Партнер",
    description: "Автоматизация планирования маршрутов и контроль своевременности доставки товара.",
    value: "100%",
    label: "Соблюдение",
    improvement: "Точность графика доставки",
    improvementIcon: "verified",
  },
];

export default function CaseStudies() {
  return (
    <section className="py-24 px-6 md:px-10 lg:px-40 bg-white dark:bg-[#0c1017] border-t border-slate-200 dark:border-border-dark">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-4">
              Результаты внедрения
            </h2>
            <p className="text-slate-400 max-w-2xl text-lg">
              Реальные показатели эффективности наших клиентов после интеграции
              системы FleetTech.
            </p>
          </div>
          <button className="group flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider hover:text-blue-400 transition-colors">
            Смотреть все кейсы
            <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
              arrow_right_alt
            </span>
          </button>
        </div>

        {/* Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((study) => (
            <div
              key={study.title}
              className="group relative bg-slate-50 dark:bg-surface-dark border border-slate-200 dark:border-border-dark rounded-xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 flex flex-col justify-between h-full"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 rounded-full ${study.iconBg} flex items-center justify-center ${study.categoryColor}`}>
                    <span className="material-symbols-outlined">{study.icon}</span>
                  </div>
                  <span className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                    {study.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {study.title}
                </h3>
                <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                  {study.description}
                </p>
              </div>
              <div className="pt-6 border-t border-slate-200 dark:border-border-dark">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-black text-white tracking-tighter">
                    {study.value}
                  </span>
                  <span className="text-sm font-bold text-slate-500 uppercase">
                    {study.label}
                  </span>
                </div>
                <p className="text-sm text-green-600 dark:text-green-400 mt-2 font-medium flex items-center gap-1">
                  <span className="material-symbols-outlined text-base">
                    {study.improvementIcon}
                  </span>
                  {study.improvement}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 bg-surface-dark rounded-2xl p-8 md:p-12 relative overflow-hidden border border-border-dark flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Decorative BG */}
          <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-primary/10 to-transparent pointer-events-none"></div>
          
          <div className="relative z-10 max-w-xl">
            <h3 className="text-2xl font-bold text-white mb-2">
              Готовы оптимизировать свой бизнес?
            </h3>
            <p className="text-slate-400">
              Получите персональный расчет окупаемости системы для вашего автопарка
              уже сегодня.
            </p>
          </div>
          <div className="relative z-10 flex gap-4 w-full md:w-auto">
            <button className="flex-1 md:flex-none bg-white text-[#111318] hover:bg-slate-200 text-sm font-bold h-12 px-6 rounded-lg transition-colors flex items-center justify-center gap-2">
              Рассчитать экономию
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
