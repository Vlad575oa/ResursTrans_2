import type { Metadata } from "next";
import HeaderScroll from "@/components/sections/fleetcorp/HeaderScroll";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
    title: "Cookies Policy - FleetCorp Global",
    description: "Information about how we use cookies to improve your experience.",
};

const Footer = dynamic(() => import("@/components/sections/fleetcorp/Footer"));

export default function CookiesPage() {
    return (
        <div className="bg-background-dark min-h-screen flex flex-col">
            <HeaderScroll />
            <main className="flex-grow pt-32 pb-24 px-6 md:px-10 lg:px-20">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-black text-white uppercase mb-12">Использование <span className="text-primary">Cookies</span></h1>

                    <div className="prose prose-invert prose-slate max-w-none space-y-8 text-slate-400">
                        <section>
                            <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4">Что такое Cookies?</h2>
                            <p>Cookies — это небольшие текстовые файлы, которые сохраняются в вашем браузере при посещении сайта. Они помогают нам сделать ваше взаимодействие с сайтом более удобным и эффективным.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4">Как мы используем Cookies?</h2>
                            <p>Мы используем cookies для анализа трафика, запоминания ваших предпочтений и оптимизации работы сайта. Мы также можем использовать сторонние сервисы, такие как Google Analytics, которые также используют cookies.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4">Удаление Cookies</h2>
                            <p>Вы можете в любой момент изменить настройки своего браузера, чтобы заблокировать или удалить файлы cookies. Однако это может привести к некорректной работе некоторых функций сайта.</p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
