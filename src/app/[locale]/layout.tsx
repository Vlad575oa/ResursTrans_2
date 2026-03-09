import type { Metadata } from "next";
import { Inter_Tight, Playfair_Display, Manrope } from "next/font/google";
import "../globals.css";
import "./fonts.css";

const interTight = Inter_Tight({
  variable: "--font-sans",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "900"],
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
  weight: ["400", "500", "700", "800"],
  display: "swap",
  preload: true,
});

import TelegramFab from "@/components/ui/TelegramFab";
import ChatBot from "@/components/ui/ChatBot";

export const metadata: Metadata = {
  title: "FleetCorp - Управление корпоративным автопарком",
  description: "Полный аутсорсинг транспортной функции: контроль, эффективность, снижение затрат и прозрачность процессов.",
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
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* Self-hosted Material Icons */}
        <link
          rel="preload"
          href="/fonts/material-symbols-outlined.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${interTight.variable} ${playfair.variable} ${manrope.variable} font-display antialiased selection:bg-primary selection:text-white`}
      >
        {children}
        <ChatBot />
      </body>
    </html>
  );
}
