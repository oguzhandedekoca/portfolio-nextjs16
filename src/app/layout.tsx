import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oğuzhan DEDEKOCA | Senior Frontend Developer",
  description:
    "6+ yıl deneyime sahip Senior Frontend Developer Oğuzhan DEDEKOCA'nın portfolio sitesi.",
  keywords: [
    "Oğuzhan DEDEKOCA",
    "Senior Frontend Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Frontend Portfolio",
  ],
  authors: [{ name: "Oğuzhan DEDEKOCA" }],
  openGraph: {
    title: "Oğuzhan DEDEKOCA | Senior Frontend Developer",
    description:
      "Modern, hızlı ve detay odaklı frontend ürünleri geliştiren Senior Frontend Developer.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
