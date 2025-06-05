import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/landingpage/NavBar";
import { Providers } from "@/components/blockchain/Providers";
import Footer from "@/components/landingpage/Footer";
import { Inter } from "next/font/google";


export const metadata: Metadata = {
  title: "ChainLib",
  description: "An E-Libray Platform",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className} >
      <body>
        <NavBar />
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}
