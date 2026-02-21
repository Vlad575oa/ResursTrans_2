import type { Metadata } from "next";
import { Inter_Tight, Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-sans",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "900"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin", "cyrillic"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  variable: "--font-display",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "700", "800"],
});

export const metadata: Metadata = {
  title: "FleetCorp - Управление корпоративным автопарком",
  description: "Полный аутсорсинг транспортной функции: контроль, эффективность, снижение затрат и прозрачность процессов.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="dark" suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${interTight.variable} ${playfair.variable} ${manrope.variable} font-display antialiased selection:bg-primary selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
