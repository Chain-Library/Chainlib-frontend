import Footer from "@/components/landingpage/Footer";
import NavBar from "@/components/landingpage/NavBar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { StarknetProvider } from "../components/blockchain/Providers";
import { WalletProvider } from "../components/blockchain/WalletProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "ChainLib",
  description: "An E-Library Platform",
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
        <StarknetProvider>
          <WalletProvider>{children}</WalletProvider>
        </StarknetProvider>
        <Footer />
      </body>
    </html>
  );
}
