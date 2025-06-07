import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/landingpage/NavBar";
import Footer from "@/components/landingpage/Footer";
import { WalletProvider } from "../components/blockchain/WalletProvider";
import { StarknetProvider } from "../components/blockchain/Providers";

export const metadata: Metadata = {
  title: "ChainLib",
  description: "An E-Libray Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
