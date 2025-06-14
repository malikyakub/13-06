import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "../../components/footer";
import Header from "../../components/Header";

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
    google: "Y1vA2nUZLX4-71mk5UsyQO4j62krPyy5-PX1rvK3a-E",
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
      </body>
    </html>
  );
}
