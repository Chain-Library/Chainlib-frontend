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
        <StarknetProvider>
          <WalletProvider>{children}</WalletProvider>
        </StarknetProvider>
      </body>
    </html>
  );
}
