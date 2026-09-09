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
  title: "Murat Kuşcu | Multidisipliner Sistem Kurucu & Mühendis",
  description: "Gerçek dünyadaki problemleri teknoloji, otomasyon ve yapay zekâ ile çözen mühendis ve sistem mimarı.",
  keywords: ["Murat Kuşcu", "Portfolio", "Full Stack Developer", "Mechanical Engineer", "AI Agents", "Next.js", "Hydraulic Systems"],
  authors: [{ name: "Murat Kuşcu" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#fbfbfd] text-[#1d1d1f] font-sans antialiased selection:bg-[#0071e3] selection:text-white">
        {children}
      </body>
    </html>
  );
}
