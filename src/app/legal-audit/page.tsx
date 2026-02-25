import type { Metadata } from "next";
import LegalAuditClient from "./LegalAuditClient";

export const metadata: Metadata = {
    title: "Аудит сайта на соответствие законодательству РФ | РесурсТранс",
    description:
        "Интерактивный чек-лист самопроверки вашего сайта по 152-ФЗ, 168-ФЗ, 242-ФЗ. Штрафы за нарушения — до 6 000 000 ₽. Пройдите бесплатный экспресс-аудит.",
    alternates: {
        canonical: "/legal-audit",
    },
    openGraph: {
        title: "Ваш сайт под прицелом Роскомнадзора? Проверьте за 2 минуты",
        description:
            "С 1 марта 2026 — новые штрафы. Пройдите интерактивную самопроверку и узнайте, готов ли ваш бизнес.",
        type: "website",
    },
};

export default function Page() {
    return <LegalAuditClient />;
}
