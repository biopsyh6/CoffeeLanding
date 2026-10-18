import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Обжарка «Кварта» | Минск",
  description: "Свежеобжаренный кофе с доставкой по Минску. Жарим по четвергам.",
  openGraph: {
    title: "Обжарка «Кварта» | Свежий кофе в Минске",
    description: "Жарим небольшими партиями по 5 кг. Зерно попадает к вам на 1-3 день после обжарки. Бесплатная доставка от 50 BYN.",
    url: "https://kvarta-minsk.netlify.app",
    siteName: "Обжарка Кварта",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Свежеобжаренный кофе Кварта",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className={`${inter.className} bg-[url('/bg.jpg')] bg-repeat text-stone-900 min-h-screen`}>
        <div className="min-h-screen w-full backdrop-blur-sm">
          {children}
        </div>
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  );
}
