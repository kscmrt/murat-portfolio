import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Murat | Full-Stack & Autonomous AI Systems Engineer",
  description: "Portfolyo ve CV — Full-Stack Web Geliştirme, Otonom AI Ajanları, Medya Otomasyonu ve Sistem Mimarisi.",
  keywords: ["Murat", "Portfolio", "Full Stack Developer", "AI Agent Engineer", "Next.js", "TypeScript", "Python", "Autonomous Systems"],
  authors: [{ name: "Murat" }],
  openGraph: {
    title: "Murat | Full-Stack & Autonomous AI Systems Engineer",
    description: "Portfolyo ve CV — Full-Stack Web, AI Ajanları ve Sistem Mimarisi.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-indigo-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
