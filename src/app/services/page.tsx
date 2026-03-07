import { Navigation } from "@/components/ui/Navigation";
import { AiAssistant } from "@/components/ui/AiAssistant";
import { getServerTranslations } from "@/lib/server-intl";
import { ServiceList } from "@/components/sections/services/ServiceList";

export default async function ServicesPage() {
    const { t } = await getServerTranslations();

    const services = [
        {
            id: "01",
            title: t("ServicesPage.services.01.title"),
            subtitle: t("ServicesPage.services.01.subtitle"),
            description: t("ServicesPage.services.01.description"),
            colSpan: "col-span-1 md:col-span-2",
            image: "/images/services/outsourcing.webp",
            imageColor: "bg-[#4A5F3C]"
        },
        {
            id: "02",
            title: t("ServicesPage.services.02.title"),
            subtitle: t("ServicesPage.services.02.subtitle"),
            description: t("ServicesPage.services.02.description"),
            colSpan: "col-span-1",
            image: "/images/services/rental.webp",
            imageColor: "bg-[#2C2C2C]"
        },
        {
            id: "03",
            title: t("ServicesPage.services.03.title"),
            subtitle: t("ServicesPage.services.03.subtitle"),
            description: t("ServicesPage.services.03.description"),
            colSpan: "col-span-1",
            image: "/images/services/management.webp",
            imageColor: "bg-[#0F766E]"
        },
        {
            id: "04",
            title: t("ServicesPage.services.04.title"),
            subtitle: t("ServicesPage.services.04.subtitle"),
            description: t("ServicesPage.services.04.description"),
            colSpan: "col-span-1 md:col-span-2",
            image: "/images/services/consulting.webp",
            imageColor: "bg-[#1C1C1C]"
        }
    ];

    const titles = {
        catalogTitle: t("ServicesPage.catalogTitle"),
        catalogDescription: t("ServicesPage.catalogDescription"),
        edition: t("ServicesPage.edition"),
        company: t("ServicesPage.company"),
        haveTask: t("ServicesPage.haveTask"),
        letsDiscuss: t("ServicesPage.letsDiscuss"),
        contactUs: t("ServicesPage.contactUs"),
    };

    return (
        <main className="min-h-screen bg-cloud-dancer text-anthracite-core selection:bg-burnt-terra selection:text-white pt-20">
            <Navigation />
            <AiAssistant />

            <ServiceList services={services} titles={titles} />
        </main>
    );
}
