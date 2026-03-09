import type { Metadata } from "next";

interface StructuredDataProps {
  locale?: string;
}

export function generateStructuredData({ locale = 'ru' }: StructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "name": locale === 'ru' ? "ООО «РесурсЛогистика»" : "ResursLogistics LLC",
    "url": "https://resurslogistics.ru",
    "logo": "https://resurslogistics.ru/logo.png",
    "description": locale === 'ru' 
      ? "Полный аутсорсинг транспортной функции: контроль, эффективность, снижение затрат и прозрачность процессов."
      : "Enterprise-grade fleet management solutions, strategic logistics outsourcing, and AI-driven monitoring.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ул. Лесная, д. 5, стр. С",
      "addressLocality": "Москва",
      "postalCode": "125047",
      "addressCountry": "RU",
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+7-800-123-45-67",
      "contactType": "customer service",
      "availableLanguage": ["Russian", "English"],
    },
    "sameAs": [
      "https://t.me/resurslogistics",
    ],
    "areaServed": "RU",
    "industry": "Transportation and Logistics",
    "employeeRange": "1000-5000",
    "foundingDate": "2008",
  };

  return structuredData;
}

export function generateBreadcrumbData({ locale = 'ru' }: StructuredDataProps) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": locale === 'ru' ? "Главная" : "Home",
        "item": `https://resurslogistics.ru/${locale}`,
      },
    ],
  };
}

export default function StructuredData({ locale = 'ru' }: StructuredDataProps) {
  const corporationData = generateStructuredData({ locale });
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(corporationData) }}
    />
  );
}
