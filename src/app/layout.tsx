import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "../../components/footer";
import Header from "../../components/Header";
import { Analytics } from '@vercel/analytics/react';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "malik yakub",
  description: "A personal space by malik yakub",
  icons: {
    icon: "/favicon.ico",
  },
  verification: {
    google: "yZtX2si_03bf0MGn98GYcigS2ivvzqHY7HY_V6p1dlM",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full flex flex-col overflow-hidden`}
      >
        <Header />
        <main className="flex-1 overflow-hidden relative">
          <div className="h-full flex flex-col justify-center items-center">
            {children}
          </div>
        </main>
        <div className="relative z-50">
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
