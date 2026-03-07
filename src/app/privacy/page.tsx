import type { Metadata } from "next";
import HeaderScroll from "@/components/sections/fleetcorp/HeaderScroll";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
    title: "Privacy Policy - FleetCorp Global",
    description: "Our commitment to protecting your privacy and managing your data securely.",
};

const Footer = dynamic(() => import("@/components/sections/fleetcorp/Footer"));

export default function PrivacyPage() {
    return (
        <div className="bg-background-dark min-h-screen flex flex-col">
            <HeaderScroll />
            <main className="flex-grow pt-32 pb-24 px-6 md:px-10 lg:px-20">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-black text-white uppercase mb-12">Политика <span className="text-primary">Конфиденциальности</span></h1>

                    <div className="prose prose-invert prose-slate max-w-none space-y-8 text-slate-400">
                        <section>
                            <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4">1. Сбор Информации</h2>
                            <p>Мы собираем информацию, когда вы посещаете наш сайт, регистрируетесь, запрашиваете аудит или подписываетесь на наши новости. Сбор данных включает ваше имя, адрес электронной почты, номер телефона и данные о компании.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4">2. Использование Данных</h2>
                            <p>Любая собранная нами информация может быть использована для персонализации вашего опыта, улучшения нашего сайта, повышения качества обслуживания клиентов и отправки периодических электронных писем.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4">3. Защита Информации</h2>
                            <p>Мы внедряем разнообразные меры безопасности для сохранения безопасности вашей личной информации. Мы используем передовое шифрование для защиты конфиденциальных данных, передаваемых в режиме онлайн.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4">4. Раскрытие Информации Третьим Лицам</h2>
                            <p>Мы не продаем, не обмениваем и не передаем вашу личную информацию сторонним компаниям. Это не относится к доверенным лицам, которые помогают нам в работе сайта и ведении бизнеса, при условии, что они согласны сохранять конфиденциальность информации.</p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
