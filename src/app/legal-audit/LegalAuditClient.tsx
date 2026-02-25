"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
    AlertTriangle,
    ArrowLeft,
    Building2,
    CheckCircle2,
    Menu,
    X,
    XCircle,
    ShieldCheck,
    Scale,
    FileWarning,
    Bot,
    Megaphone,
    Copy,
    ChevronDown,
    ClipboardCheck,
    Phone,
    Send,
} from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────

type CheckItem = { id: string; label: string };
type Section = { id: string; title: string; icon: React.ElementType; items: CheckItem[] };

const CHECKLIST: Section[] = [
    {
        id: "pdpc",
        title: "Документация и ПДн (152-ФЗ, 242-ФЗ)",
        icon: Scale,
        items: [
            { id: "privacy", label: "Политика конфиденциальности актуальна на 2026 год, ссылка в футере на каждой странице." },
            { id: "checkbox", label: "Под каждой формой (заявка, расчёт, звонок) есть активная ссылка на согласие с чекбоксом." },
            { id: "local", label: "Серверы и базы данных находятся на территории РФ (локализация)." },
            { id: "cookies", label: "Всплывающее cookie-уведомление с кнопкой «Принять» и ссылкой на правила." },
        ],
    },
    {
        id: "lang",
        title: "Закон о языке (168-ФЗ) — с 1 марта 2026!",
        icon: FileWarning,
        items: [
            { id: "noeng", label: 'Кнопки "Order", "Calculate", "Send" продублированы на русском тем же шрифтом и размером.' },
            { id: "tooltips", label: "Всплывающие подсказки и системные сообщения переведены на русский язык." },
            { id: "trademark", label: 'Иностранные надписи оставлены только для зарегистрированных торговых знаков (Роспатент).' },
        ],
    },
    {
        id: "ai",
        title: "Мессенджеры и ИИ (149-ФЗ)",
        icon: Bot,
        items: [
            { id: "messenger", label: "При переходе в Telegram/WhatsApp есть предупреждение о передаче данных в сторонний сервис." },
            { id: "aichat", label: "Если используется ИИ-чат: пользователь уведомлён и дал согласие на обработку данных алгоритмами." },
        ],
    },
    {
        id: "ads",
        title: "Реклама и контакты (38-ФЗ)",
        icon: Megaphone,
        items: [
            { id: "promo", label: 'Маркетинговые рассылки: есть отдельная незаполненная галочка «Хочу получать акции».' },
            { id: "legal", label: "В футере указаны ИНН, ОГРН и полное наименование юридического лица." },
        ],
    },
    {
        id: "data",
        title: "Утечка данных",
        icon: ShieldCheck,
        items: [
            { id: "no-google-leak", label: "Отсутствие передачи данных в Google и другие иностранные сервисы." },
            { id: "no-meta-links", label: "Нет ссылок на сайт и соцсети Meta в коде." },
            { id: "yandex-metrics", label: "Если используются Яндекс‑метрики – есть cookie‑политика и возможность отказа от их использования." },
        ],
    },
];

const TOTAL_ITEMS = CHECKLIST.reduce((s, sec) => s + sec.items.length, 0);

const FINES = [
    { law: "Отсутствие политики конфиденциальности", article: "ст. 13.11 КоАП РФ", fine: "до 100 000 ₽" },
    { law: "Хранение данных на серверах вне РФ", article: "242-ФЗ", fine: "до 6 000 000 ₽" },
    { law: "Нарушения по русскому языку (с 01.03.2026)", article: "168-ФЗ", fine: "до 50 000 ₽ + предписание" },
    { law: "Спам-рассылка без явного согласия", article: '38-ФЗ «О рекламе»', fine: "до 500 000 ₽" },
];

const AUDIT_EXAMPLE = [
    { label: "Элемент", value: 'Форма заказа «Расчёт перевозки»' },
    { label: "Соответствие", value: "❌ Не соответствует", danger: true },
    { label: "Нарушение", value: "Отсутствует уведомление о передаче данных в ИИ-модуль." },
    { label: "Риск", value: "Штраф по 152-ФЗ (до 150 000 руб.).", danger: true },
    { label: "Решение", value: "Внедрение скрипта прозрачного согласия и обновление текста политики." },
];

const TEMPLATES = [
    {
        title: "Для Cookie-баннера",
        text: "Мы используем cookies для корректной работы сайта. Оставаясь с нами, вы соглашаетесь с Политикой конфиденциальности. [Кнопка: Согласен]",
    },
    {
        title: "Для мессенджеров",
        text: "Переходя в Telegram, вы подтверждаете согласие на передачу вашего номера телефона и истории переписки. Подробнее — в Политике конфиденциальности.",
    },
];

// ─── Risk Meter ───────────────────────────────────────────────────────────────

function RiskMeter({ checked, total }: { checked: number; total: number }) {
    const pct = total > 0 ? (checked / total) * 100 : 0;
    const unchecked = total - checked;

    const { label, color, bg, textColor } = useMemo(() => {
        if (pct >= 85) return { label: "Низкий риск", color: "bg-emerald-500", bg: "bg-emerald-950/40", textColor: "text-emerald-400" };
        if (pct >= 55) return { label: "Умеренный риск", color: "bg-amber-500", bg: "bg-amber-950/40", textColor: "text-amber-400" };
        if (pct >= 25) return { label: "Высокий риск", color: "bg-orange-500", bg: "bg-orange-950/40", textColor: "text-orange-400" };
        return { label: "Критический риск!", color: "bg-red-600", bg: "bg-red-950/40", textColor: "text-red-400" };
    }, [pct]);

    return (
        <div className={`sticky top-20 z-30 w-full rounded-2xl border border-white/10 p-4 md:p-6 ${bg} backdrop-blur-md transition-colors duration-700`}>
            <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-bold text-slate-300 uppercase tracking-widest">Уровень риска</span>
                <span className={`text-sm font-black uppercase tracking-widest ${textColor} transition-colors duration-700`}>{label}</span>
            </div>
            <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden mb-3">
                <motion.div
                    className={`h-full ${color} rounded-full transition-colors duration-700`}
                    animate={{ width: `${pct}%` }}
                    transition={{ type: "spring", bounce: 0.2 }}
                />
            </div>
            <div className="flex justify-between text-xs text-slate-500">
                <span>✅ Выполнено: <strong className="text-slate-300">{checked}</strong></span>
                <span>⚠️ Не выполнено: <strong className="text-red-400">{unchecked}</strong></span>
            </div>
        </div>
    );
}

// ─── Checklist Section ────────────────────────────────────────────────────────

function ChecklistSection({
    section,
    checked,
    onToggle,
}: {
    section: Section;
    checked: Set<string>;
    onToggle: (id: string) => void;
}) {
    const [open, setOpen] = useState(true);
    const Icon = section.icon;
    const doneCount = section.items.filter((i) => checked.has(i.id)).length;

    return (
        <div className="border border-white/10 rounded-2xl overflow-hidden bg-slate-900/60">
            <button
                onClick={() => setOpen((o) => !o)}
                className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left hover:bg-white/5 transition-colors"
            >
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-900/40 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                        <div className="font-bold text-white text-sm md:text-base">{section.title}</div>
                        <div className="text-xs text-slate-500 mt-0.5">{doneCount} / {section.items.length} выполнено</div>
                    </div>
                </div>
                <ChevronDown className={`w-5 h-5 text-slate-500 flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="px-5 md:px-6 pb-5 space-y-3 border-t border-white/5">
                            {section.items.map((item) => {
                                const isChecked = checked.has(item.id);
                                return (
                                    <button
                                        key={item.id}
                                        onClick={() => onToggle(item.id)}
                                        className={`w-full text-left flex items-start gap-3 p-4 rounded-xl border transition-all duration-200 mt-3 group ${isChecked
                                            ? "border-emerald-800/60 bg-emerald-950/30"
                                            : "border-slate-800 bg-slate-900/40 hover:border-slate-700 hover:bg-slate-800/40"
                                            }`}
                                    >
                                        <div className={`flex-shrink-0 mt-0.5 w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${isChecked ? "border-emerald-500 bg-emerald-500" : "border-slate-600 group-hover:border-slate-400"
                                            }`}>
                                            {isChecked && <CheckCircle2 className="w-4 h-4 text-white" />}
                                        </div>
                                        <span className={`text-sm leading-relaxed transition-colors ${isChecked ? "text-emerald-200 line-through opacity-60" : "text-slate-300"}`}>
                                            {item.label}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

// ─── Copy Button ──────────────────────────────────────────────────────────────

function CopyButton({ text }: { text: string }) {
    const [copied, setCopied] = useState(false);
    const handle = () => {
        navigator.clipboard.writeText(text).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };
    return (
        <button
            onClick={handle}
            className="mt-3 flex items-center gap-2 text-xs text-slate-500 hover:text-white transition-colors border border-slate-700 hover:border-slate-500 px-3 py-1.5 rounded-lg"
        >
            {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            {copied ? "Скопировано!" : "Скопировать текст"}
        </button>
    );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function LegalAuditPage() {
    const [checked, setChecked] = useState<Set<string>>(new Set());
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggle = (id: string) => {
        setChecked((prev) => {
            const next = new Set(prev);
            if (next.has(id)) next.delete(id);
            else next.add(id);
            return next;
        });
    };

    return (
        <div className="min-h-screen bg-[#080c14] text-slate-100 selection:bg-blue-500/30">
            {/* Google Font */}
            <style>{`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap'); body { font-family: 'Inter', sans-serif; }`}</style>

            {/* ── Sticky Header ───────────────────────────────────────────── */}
            <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#080c14]/80 backdrop-blur-lg">
                <div className="max-w-7xl mx-auto px-4 md:px-10 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-12">
                        <Link href="/" className="text-2xl font-black tracking-tighter text-white">
                            RESURS<span className="text-blue-500 italic">TRANS</span>
                        </Link>
                        <nav className="hidden md:flex items-center gap-8">
                            <Link className="text-sm font-medium hover:text-blue-500 transition-colors text-slate-400" href="/">Сайт 1</Link>
                            <Link className="text-sm font-medium hover:text-blue-500 transition-colors text-slate-400" href="/guardian">Сайт 2</Link>
                            <Link className="text-sm font-medium hover:text-blue-500 transition-colors text-slate-400" href="/enterprise">Калькулятор</Link>
                            <Link className="text-sm font-medium hover:text-blue-500 transition-colors text-slate-400" href="/showcase">Выбор стиля</Link>
                            <Link className="text-sm font-medium hover:text-blue-500 transition-colors text-slate-400" href="/interactive">Интерактив</Link>
                            <Link className="text-orange-500 border-b-2 border-orange-500 pb-1 transition-colors relative group" href="/legal-audit" title="Законодательство">
                                <span className="material-symbols-outlined !text-[20px]">gavel</span>
                                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Законодательство</span>
                            </Link>
                        </nav>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="hidden lg:flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-orange-400 bg-orange-950/40 border border-orange-900/50 px-3 py-1.5 rounded-full">
                            <AlertTriangle className="w-3 h-3" />
                            С 1 марта 2026 — новые штрафы
                        </div>
                        <a
                            href="#cta"
                            className="hidden md:flex text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 px-5 py-2.5 rounded-full transition-all shadow-lg shadow-blue-600/20"
                        >
                            Аудит сайта
                        </a>

                        <button
                            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Drawer */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="fixed inset-x-0 top-20 z-40 bg-[#080c14]/95 backdrop-blur-xl md:hidden overflow-hidden border-b border-white/10"
                        >
                            <nav className="flex flex-col p-6 gap-4">
                                <Link
                                    className="text-slate-300 hover:text-blue-400 py-3 text-lg font-bold border-b border-white/5 transition-colors"
                                    href="/"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Сайт 1
                                </Link>
                                <Link
                                    className="text-slate-300 hover:text-blue-400 py-3 text-lg font-bold border-b border-white/5 transition-colors"
                                    href="/guardian"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Сайт 2
                                </Link>
                                <Link
                                    className="text-slate-300 hover:text-blue-400 py-3 text-lg font-bold border-b border-white/5 transition-colors"
                                    href="/enterprise"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Калькулятор
                                </Link>
                                <Link
                                    className="text-slate-300 hover:text-blue-400 py-3 text-lg font-bold border-b border-white/5 transition-colors"
                                    href="/showcase"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Выбор стиля
                                </Link>
                                <Link
                                    className="text-slate-300 hover:text-blue-400 py-3 text-lg font-bold border-b border-white/5 transition-colors"
                                    href="/interactive"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Интерактив
                                </Link>
                                <Link
                                    className="text-orange-400 hover:text-orange-300 py-3 text-lg font-bold border-b border-white/5 transition-colors flex items-center gap-2"
                                    href="/legal-audit"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <span className="material-symbols-outlined !text-[20px]">gavel</span>
                                    Законодательство
                                </Link>
                                <Link
                                    className="text-slate-300 hover:text-blue-400 py-3 text-lg font-bold transition-colors flex items-center gap-2"
                                    href="#ui-standards"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <span className="material-symbols-outlined !text-[20px]">design_services</span>
                                    Стандарты UI
                                </Link>
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>

            <main className="max-w-6xl mx-auto px-4 md:px-8 pb-24">
                {/* ── Hero ────────────────────────────────────────────────────── */}
                <section className="py-16 md:py-24 text-center relative">
                    {/* BG Glow */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-[600px] h-[400px] bg-blue-900/20 rounded-full blur-[100px]" />
                        <div className="absolute w-[300px] h-[300px] bg-orange-900/15 rounded-full blur-[80px] translate-x-48" />
                    </div>

                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 border border-orange-500/50 bg-orange-950/30 text-orange-400 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-8">
                            <AlertTriangle className="w-3.5 h-3.5 animate-pulse" />
                            168-ФЗ вступил в силу 1 марта 2026
                        </div>

                        <h1 className="text-3xl md:text-5xl lg:text-7xl font-black text-white leading-tight mb-8 tracking-tighter">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-slate-100">
                                Правовой Комплаенс
                            </span>
                            <br />
                            для Вашего Сайта
                        </h1>

                        <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-12">
                            Анализ соответствия веб-ресурсов законодательству РФ.
                            С 1 марта 2026 года вступили новые требования (168-ФЗ), затрагивающие язык интерфейса, обработку ПДн и использование иностранных сервисов.
                            <strong className="text-white"> Профессиональный аудит и готовые решения для бизнеса.</strong>
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="#checklist"
                                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-[0_10px_30px_rgba(37,99,235,0.3)] hover:shadow-[0_15px_40px_rgba(37,99,235,0.4)] text-sm md:text-base"
                            >
                                <ClipboardCheck className="w-5 h-5" />
                                Начать проверку
                            </a>
                            <a
                                href="#fines"
                                className="inline-flex items-center gap-2 border border-slate-700 hover:border-orange-500/50 text-slate-300 hover:text-orange-300 font-bold px-8 py-4 rounded-xl transition-all text-sm md:text-base"
                            >
                                <AlertTriangle className="w-5 h-5" />
                                Таблица штрафов
                            </a>
                        </div>
                    </div>
                </section>

                {/* ── Block 1: Checklist ───────────────────────────────────────── */}
                <section id="checklist" className="scroll-mt-24 mb-20">
                    <div className="mb-8">
                        <div className="text-xs font-bold tracking-widest uppercase text-blue-400 mb-3">Блок 1</div>
                        <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
                            Интерактивный чек-лист «Анти-Штраф»
                        </h2>
                        <p className="text-slate-400 max-w-2xl">
                            Отметьте пункты, которые <strong className="text-slate-300">реально реализованы</strong> на вашем сайте прямо сейчас.
                            Индикатор риска будет меняться в режиме реального времени.
                        </p>
                    </div>

                    <div className="mb-6">
                        <RiskMeter checked={checked.size} total={TOTAL_ITEMS} />
                    </div>

                    <div className="space-y-4">
                        {CHECKLIST.map((section) => (
                            <ChecklistSection key={section.id} section={section} checked={checked} onToggle={toggle} />
                        ))}
                    </div>
                </section>

                {/* ── Block 2: Fines Table ─────────────────────────────────────── */}
                <section id="fines" className="scroll-mt-24 mb-20">
                    <div className="mb-8">
                        <div className="text-xs font-bold tracking-widest uppercase text-orange-400 mb-3">Блок 2</div>
                        <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
                            Математика рисков
                        </h2>
                        <blockquote className="border-l-4 border-orange-500 pl-6 py-2 bg-orange-950/20 rounded-r-xl mb-4">
                            <p className="text-orange-200 italic text-lg font-medium">
                                «Я просто скачал политику из интернета» — фраза, которая стоит от <strong>700 000 рублей</strong>.
                            </p>
                        </blockquote>
                    </div>

                    {/* Desktop table */}
                    <div className="hidden md:block overflow-hidden rounded-2xl border border-white/10">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="bg-slate-800/60">
                                    <th className="text-left p-4 text-slate-400 font-bold uppercase text-xs tracking-wider">Нарушение</th>
                                    <th className="text-left p-4 text-slate-400 font-bold uppercase text-xs tracking-wider">Статья / Закон</th>
                                    <th className="text-right p-4 text-orange-400 font-bold uppercase text-xs tracking-wider">Штраф (для ЮЛ)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {FINES.map((row, i) => (
                                    <tr key={i} className="border-t border-white/5 hover:bg-slate-800/30 transition-colors">
                                        <td className="p-4 text-slate-200">{row.law}</td>
                                        <td className="p-4 text-blue-300 font-mono text-xs">{row.article}</td>
                                        <td className="p-4 text-right font-black text-orange-400 text-base">{row.fine}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Mobile stacked */}
                    <div className="md:hidden space-y-4">
                        {FINES.map((row, i) => (
                            <div key={i} className="border border-white/10 rounded-xl p-5 bg-slate-900/60">
                                <div className="text-slate-200 font-medium mb-3">{row.law}</div>
                                <div className="flex items-center justify-between">
                                    <span className="text-blue-300 font-mono text-xs">{row.article}</span>
                                    <span className="font-black text-orange-400">{row.fine}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── Block 3: Why devs are not lawyers ────────────────────────── */}
                <section className="mb-20">
                    <div className="mb-8">
                        <div className="text-xs font-bold tracking-widest uppercase text-blue-400 mb-3">Блок 3</div>
                        <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
                            Почему ваш разработчик — не юрист?
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 mb-8">
                        {[
                            { icon: "💻", who: "Разработчик", desc: "Следит за кодом, скоростью и тем, чтобы кнопка нажималась." },
                            { icon: "📈", who: "Маркетолог", desc: "Следит за конверсией и лидами." },
                            { icon: "⚖️", who: "МЫ", desc: "Следим за тем, чтобы за каждую нажатую кнопку вам не пришёл штраф.", highlight: true },
                        ].map((card) => (
                            <div
                                key={card.who}
                                className={`p-6 rounded-2xl border transition-all ${card.highlight
                                    ? "border-blue-600 bg-blue-950/30 shadow-[0_0_30px_rgba(37,99,235,0.15)]"
                                    : "border-slate-800 bg-slate-900/40"
                                    }`}
                            >
                                <div className="text-4xl mb-4">{card.icon}</div>
                                <div className={`font-black text-lg mb-2 ${card.highlight ? "text-blue-300" : "text-white"}`}>{card.who}</div>
                                <p className="text-slate-400 text-sm leading-relaxed">{card.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-slate-800/40 border border-slate-700 rounded-2xl p-6 md:p-8">
                        <p className="text-slate-300 leading-relaxed">
                            Законы меняются каждые 3–6 месяцев. Вы уверены, что ваш фрилансер{" "}
                            <strong className="text-orange-300">бесплатно обновит</strong> текст вашей политики после очередной поправки в Госдуме?{" "}
                            <strong className="text-white">Мы делаем это в рамках сопровождения.</strong>
                        </p>
                    </div>
                </section>

                {/* ── Block 4: Audit Report Example ────────────────────────────── */}
                <section className="mb-20">
                    <div className="mb-8">
                        <div className="text-xs font-bold tracking-widest uppercase text-blue-400 mb-3">Блок 4</div>
                        <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
                            Пример нашего «Отчёта о соответствии»
                        </h2>
                        <p className="text-slate-400">Закажите профессиональный аудит. Мы составим отчёт по каждой странице вашего сайта.</p>
                    </div>

                    <div className="rounded-2xl border border-white/10 overflow-hidden">
                        <div className="bg-slate-800/60 px-6 py-3 flex items-center gap-2 border-b border-white/5">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-emerald-500" />
                            <span className="text-xs text-slate-500 ml-2 font-mono">audit_report_2026.md</span>
                        </div>
                        <div className="divide-y divide-white/5">
                            {AUDIT_EXAMPLE.map((row) => (
                                <div key={row.label} className="flex flex-col md:flex-row md:items-start gap-2 p-5">
                                    <span className="text-slate-500 font-bold text-xs uppercase tracking-wider md:w-36 flex-shrink-0">{row.label}</span>
                                    <span className={`text-sm ${row.danger ? "text-red-400 font-bold" : "text-slate-200"}`}>{row.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── Block 5: Templates ───────────────────────────────────────── */}
                <section className="mb-20">
                    <div className="mb-8">
                        <div className="text-xs font-bold tracking-widest uppercase text-emerald-400 mb-3">Блок 5 — Бесплатно</div>
                        <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
                            Готовые тексты для вашего сайта
                        </h2>
                        <p className="text-slate-400">Копируйте и используйте прямо сейчас. Это юридически корректные формулировки.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {TEMPLATES.map((t) => (
                            <div key={t.title} className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
                                <div className="flex items-center gap-2 mb-4">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                                    <span className="font-bold text-white">{t.title}</span>
                                </div>
                                <p className="text-slate-300 text-sm leading-relaxed bg-slate-800/60 rounded-xl p-4 font-mono">
                                    {t.text}
                                </p>
                                <CopyButton text={t.text} />
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── Block 6: Compliance UI Standards ──────────────────────────── */}
                <section id="ui-standards" className="scroll-mt-24 mb-20">
                    <div className="mb-12">
                        <div className="text-xs font-bold tracking-widest uppercase text-blue-400 mb-3">Блок 6 — Стандарты UI</div>
                        <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
                            Как это должно выглядеть?
                        </h2>
                        <p className="text-slate-400 max-w-2xl">
                            Мы подготовили эталонные образцы элементов интерфейса, которые полностью соответствуют требованиям 152-ФЗ и 168-ФЗ.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Example 1: Compliant Form */}
                        <div className="bg-slate-900/40 border border-white/5 rounded-3xl p-6 md:p-8">
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                <ClipboardCheck className="w-5 h-5 text-emerald-400" />
                                Обязательная форма
                            </h3>
                            <div className="space-y-4 bg-slate-800/20 p-6 rounded-2xl border border-white/5">
                                <input
                                    type="text"
                                    placeholder="Ваше имя"
                                    className="w-full bg-slate-900/60 border border-slate-700 rounded-lg px-4 py-3 text-sm focus:border-blue-500 outline-none transition-all"
                                    disabled
                                />
                                <input
                                    type="tel"
                                    placeholder="+7 (___) ___-__-__"
                                    className="w-full bg-slate-900/60 border border-slate-700 rounded-lg px-4 py-3 text-sm focus:border-blue-500 outline-none transition-all"
                                    disabled
                                />
                                <div className="space-y-3">
                                    <label className="flex items-start gap-3 cursor-pointer group">
                                        <div className="w-5 h-5 rounded border-2 border-emerald-500 bg-emerald-500 flex items-center justify-center mt-0.5">
                                            <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                                        </div>
                                        <span className="text-[11px] text-slate-400 leading-tight">
                                            Я согласен на <Link href="#" className="underline hover:text-white">обработку персональных данных</Link> и ознакомлен с <Link href="#" className="underline hover:text-white">политикой конфиденциальности</Link>.
                                        </span>
                                    </label>
                                    <label className="flex items-start gap-3 cursor-pointer">
                                        <div className="w-5 h-5 rounded border-2 border-slate-600 flex items-center justify-center mt-0.5">
                                            {/* Empty for consent */}
                                        </div>
                                        <span className="text-[11px] text-slate-400 leading-tight">
                                            Я хочу получать информацию о скидках и акциях (маркетинговое согласие).
                                        </span>
                                    </label>
                                </div>
                                <button className="w-full bg-emerald-600 font-bold py-3 rounded-lg text-sm mt-2 opacity-80 cursor-not-allowed">
                                    Отправить заявку
                                </button>
                            </div>
                            <div className="mt-6 p-4 bg-blue-900/10 border border-blue-900/20 rounded-xl">
                                <p className="text-xs text-blue-300 leading-relaxed italic">
                                    <strong>Анализ:</strong> Чекбокс на ПДн может быть предзаполнен или обязателен, но маркетинговый чекбокс — всегда пустой (38-ФЗ). Имена кнопок должны быть на русском (168-ФЗ).
                                </p>
                            </div>
                        </div>

                        {/* Example 2: Social Icons & Data Warning */}
                        <div className="bg-slate-900/40 border border-white/5 rounded-3xl p-6 md:p-8">
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                <Send className="w-5 h-5 text-blue-400" />
                                Мессенджеры и ТГ
                            </h3>
                            <div className="space-y-6">
                                <div className="flex flex-wrap gap-4 items-center p-6 bg-slate-800/20 rounded-2xl border border-white/5">
                                    <div className="relative group">
                                        <button className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/20 hover:scale-110 transition-transform">
                                            <Send className="w-6 h-6 text-white" />
                                        </button>
                                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-48 p-3 bg-slate-900 border border-blue-500/30 rounded-xl text-[10px] leading-relaxed text-slate-300 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
                                            <AlertTriangle className="w-3 h-3 text-orange-400 mb-1" />
                                            Внимание: при переходе в Telegram вы подтверждаете согласие на передачу данных стороннему сервису.
                                        </div>
                                    </div>
                                    <div className="text-sm font-medium text-slate-300">
                                        Telegram-консультант
                                    </div>
                                </div>

                                <div className="p-4 bg-orange-950/20 border border-orange-900/20 rounded-xl">
                                    <p className="text-xs text-orange-300 leading-relaxed italic">
                                        <strong>Анализ:</strong> Согласно 149-ФЗ, если вы используете иностранные мессенджеры для сбора данных, пользователь должен быть уведомлен о рисках передачи данных через зарубежные серверы.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Example 3: Compliant Footer */}
                        <div className="bg-slate-900/40 border border-white/5 rounded-3xl p-6 md:p-8 lg:col-span-2">
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                <Building2 className="w-5 h-5 text-slate-400" />
                                Юридически верный футер
                            </h3>
                            <div className="bg-slate-950 rounded-2xl border border-white/5 overflow-hidden">
                                <div className="p-8 border-b border-white/5 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
                                    <div className="space-y-3">
                                        <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Правовая информация</div>
                                        <div className="flex flex-col gap-2">
                                            <Link href="#" className="text-slate-400 hover:text-white transition-colors">Политика обработки ПДн</Link>
                                            <Link href="#" className="text-slate-400 hover:text-white transition-colors">Согласие на рассылку</Link>
                                            <Link href="#" className="text-slate-400 hover:text-white transition-colors">Пользовательское соглашение</Link>
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Реквизиты</div>
                                        <div className="text-slate-400 font-mono text-xs leading-relaxed">
                                            ООО «РЕСУРСТРАНС-ЛОДЖИСТИК»<br />
                                            ИНН: 7712345678 / КПП: 770101001<br />
                                            ОГРН: 1027700123456
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Языковая версия</div>
                                        <div className="flex items-center gap-2">
                                            <span className="px-2 py-1 bg-blue-600 text-[10px] font-bold rounded text-white">RU (Основная)</span>
                                            <span className="text-xs text-slate-500 italic">Соблюден 168-ФЗ</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 bg-slate-900/50 text-[10px] text-slate-600 text-center uppercase tracking-[0.2em]">
                                    © 2026 ResursTrans. Весь контент защищен авторским правом.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── CTA ─────────────────────────────────────────────────────── */}
                <section id="cta" className="scroll-mt-24">
                    <div className="relative overflow-hidden rounded-3xl border border-blue-900/50 bg-gradient-to-br from-blue-950/60 to-slate-900/80 p-8 md:p-16 text-center shadow-[0_0_80px_rgba(37,99,235,0.15)]">
                        {/* BG decoration */}
                        <div className="absolute inset-0 pointer-events-none">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/5 rounded-full blur-[80px]" />
                        </div>

                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-blue-900/60 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-blue-700/50">
                                <ShieldCheck className="w-8 h-8 text-blue-400" />
                            </div>

                            <h2 className="text-2xl md:text-4xl font-black text-white mb-4 leading-tight">
                                Не ждите письма
                                <br />
                                от Роскомнадзора.
                            </h2>

                            <p className="text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed text-base md:text-lg">
                                Запишитесь на <strong className="text-white">бесплатный экспресс-аудит</strong> вашего сайта прямо сейчас.
                                Мы проверим интерфейс на соответствие новым требованиям русского языка (168-ФЗ) и защитим ваши данные.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="tel:+74951234567"
                                    className="inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-black px-8 py-5 rounded-2xl transition-all shadow-[0_15px_40px_rgba(37,99,235,0.35)] hover:shadow-[0_20px_50px_rgba(37,99,235,0.5)] text-base hover:-translate-y-0.5 group"
                                >
                                    <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                    Проверить мой сайт на риски
                                </a>
                                <a
                                    href="#checklist"
                                    className="inline-flex items-center justify-center gap-3 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-bold px-8 py-5 rounded-2xl transition-all text-base"
                                >
                                    <XCircle className="w-5 h-5 text-red-400" />
                                    Пройти самопроверку
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* ── Footer ──────────────────────────────────────────────────────── */}
            <footer className="border-t border-white/5 bg-slate-900/40 py-8">
                <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-600">
                    <span>ООО «РесурсТранс» · ИНН: XXXX · ОГРН: XXXX</span>
                    <Link href="/" className="hover:text-slate-400 transition-colors">На главную</Link>
                </div>
            </footer>
        </div>
    );
}
