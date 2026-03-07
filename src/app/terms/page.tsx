import type { Metadata } from "next";
import HeaderScroll from "@/components/sections/fleetcorp/HeaderScroll";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
    title: "Terms of Use - FleetCorp Global",
    description: "Terms and conditions for using our services and website.",
};

const Footer = dynamic(() => import("@/components/sections/fleetcorp/Footer"));

export default function TermsPage() {
    return (
        <div className="bg-background-dark min-h-screen flex flex-col">
            <HeaderScroll />
            <main className="flex-grow pt-32 pb-24 px-6 md:px-10 lg:px-20">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-black text-white uppercase mb-12">Условия <span className="text-primary">Использования</span></h1>

                    <div className="prose prose-invert prose-slate max-w-none space-y-8 text-slate-400">
                        <section>
                            <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4">1. Принятие Условий</h2>
                            <p>Используя данный веб-сайт, вы подтверждаете свое согласие с данными условиями использования и обязуетесь их соблюдать.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4">2. Интеллектуальная Собственность</h2>
                            <p>Весь контент, представленный на сайте, включая текст, графику, логотипы и программное обеспечение, является собственностью FleetCorp Global и защищен законами об авторском праве.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4">3. Ограничение Ответственности</h2>
                            <p>FleetCorp Global не несет ответственности за любые прямые или косвенные убытки, возникшие в результате использования или невозможности использования данного сайта или наших услуг.</p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
