import type { Metadata } from "next";
import { Inter_Tight, Playfair_Display, Manrope } from "next/font/google";
import "../globals.css";
import StructuredData from "@/components/seo/StructuredData";

const interTight = Inter_Tight({
  variable: "--font-sans",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
  preload: true,
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin", "cyrillic"],
  style: ["normal", "italic"],
  display: "swap",
  preload: true,
});

const manrope = Manrope({
  variable: "--font-display",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700", "800"],
  display: "swap",
  preload: true,
});

import TelegramFab from "@/components/ui/TelegramFab";
import ChatBotWrapper from "@/components/ui/ChatBotWrapper";

export const metadata: Metadata = {
  title: "FleetCorp - Управление корпоративным автопарком",
  description: "Полный аутсорсинг транспортной функции: контроль, эффективность, снижение затрат и прозрачность процессов.",
  metadataBase: new URL('https://resurslogistics.ru'),
  openGraph: {
    title: "FleetCorp - Управление корпоративным автопарком",
    description: "Полный аутсорсинг транспортной функции: контроль, эффективность, снижение затрат и прозрачность процессов.",
    locale: 'ru_RU',
    type: 'website',
    siteName: 'ResursLogistics',
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  return (
    <html lang={locale} className="dark" suppressHydrationWarning>
      <head>
        {/* Font Preloads for Critical Fonts */}
        <link
          rel="preload"
          href="https://fonts.gstatic.com/s/intertight/v18/NGS0v5_NC7k9P9W9k4e3.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="https://fonts.gstatic.com/s/manrope/v15/o-0NIpQlx3QUlC5A4PNb4R5V.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* Material Icons - self-hosted */}
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <StructuredData locale={locale} />
      </head>
      <body
        className={`${interTight.variable} ${playfair.variable} ${manrope.variable} font-display antialiased selection:bg-primary selection:text-white`}
      >
        {children}
        <ChatBotWrapper />
        <TelegramFab />
      </body>
    </html>
  );
}
