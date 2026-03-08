import { getServerTranslations } from "@/lib/server-intl";
import { notFound } from "next/navigation";
import Link from "next/link";

interface Props {
    params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
    return [
        { slug: "mining" },
        { slug: "retail" },
        { slug: "oil_gas" },
        { slug: "construction" },
        { slug: "agriculture" },
        { slug: "passenger" },
    ];
}

export async function generateMetadata({ params }: Props) {
    const { locale, slug } = await params;
    const { messages } = await getServerTranslations(locale);

    const cases = (messages.CasesPage as any).items;
    const caseItem = cases[slug as keyof typeof cases];

    if (!caseItem) return {};

    return {
        title: `${caseItem.title} | Case Study | ResursLogistics`,
        description: caseItem.desc,
        alternates: {
            canonical: `/${locale}/cases/${slug}`,
        },
    };
}

export default async function CaseDetailPage({ params }: Props) {
    const { locale, slug } = await params;
    const { messages } = await getServerTranslations(locale);

    const cases = (messages.CasesPage as any).items;
    const caseItem = cases[slug as keyof typeof cases];

    if (!caseItem) notFound();

    return (
        <main className="min-h-screen bg-[#0b0d10] pt-32 pb-20 px-6 md:px-10 lg:px-40">
            <div className="max-w-4xl mx-auto text-white">
                <Link
                    href={`/${locale}/cases`}
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-12 transition-colors font-bold uppercase tracking-widest text-xs"
                >
                    <span className="material-symbols-outlined text-sm">arrow_back</span>
                    {locale === 'ru' ? 'Назад к кейсам' : 'Back to Cases'}
                </Link>

                <div className="space-y-12">
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest">
                                {caseItem.subtitle}
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase italic leading-none">
                            {caseItem.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-400 font-medium max-w-2xl leading-relaxed">
                            {caseItem.desc}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-y border-white/10">
                        <div className="space-y-2">
                            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">{locale === 'ru' ? 'Экономия' : 'Savings'}</p>
                            <p className="text-3xl font-black text-primary">25% — 40%</p>
                        </div>
                        <div className="space-y-2">
                            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">{locale === 'ru' ? 'Срок окупаемости' : 'ROI Period'}</p>
                            <p className="text-3xl font-black text-white">3 мес.</p>
                        </div>
                        <div className="space-y-2">
                            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">{locale === 'ru' ? 'Статус' : 'Status'}</p>
                            <p className="text-3xl font-black text-white uppercase italic">Active</p>
                        </div>
                    </div>

                    <div className="prose prose-invert max-w-none space-y-16">
                        <section className="space-y-6">
                            <h2 className="text-3xl font-black text-white uppercase tracking-tight">
                                {locale === 'ru' ? 'О проекте' : 'About the Project'}
                            </h2>
                            <p className="text-slate-300 text-lg leading-relaxed">
                                {locale === 'ru'
                                    ? 'Масштабная цифровая трансформация транспортной функции предприятия. Реализация комплексного подхода к управлению активами и персоналом.'
                                    : 'Large-scale digital transformation of the enterprise transport function. Implementation of a comprehensive approach to asset and personnel management.'}
                            </p>
                        </section>

                        <section className="bg-primary/5 border border-primary/20 p-10 rounded-3xl space-y-6 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
                            <div className="relative z-10">
                                <h3 className="text-2xl font-black text-white uppercase tracking-tight">
                                    {locale === 'ru' ? 'Хотите такой же результат?' : 'Want similar results?'}
                                </h3>
                                <p className="text-slate-400 text-lg mb-8 max-w-md leading-relaxed">
                                    {locale === 'ru'
                                        ? 'Закажите бесплатный аудит вашего автопарка прямо сейчас.'
                                        : 'Request a free audit of your fleet right now.'}
                                </p>
                                <Link
                                    href={`/${locale}/contacts`}
                                    className="inline-block bg-primary hover:bg-blue-600 text-white font-bold py-4 px-10 rounded-xl transition-all shadow-glow uppercase text-sm tracking-widest"
                                >
                                    {locale === 'ru' ? 'Заказать аудит' : 'Request Audit'}
                                </Link>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
}
