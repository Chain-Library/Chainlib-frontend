import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/landingpage/NavBar";
import Footer from "@/components/landingpage/Footer";
import { WalletProvider } from "../components/blockchain/WalletProvider";
import { StarknetProvider } from "../components/blockchain/Providers";
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
    <html lang="en" className={inter.className}>
      <body>
        <StarknetProvider>
          <WalletProvider>{children}</WalletProvider>
        </StarknetProvider>
      </body>
    </html>
  );
}
