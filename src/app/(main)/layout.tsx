import NavBar from "@/components/landingpage/NavBar";
import Footer from "@/components/landingpage/Footer";
import { WalletProvider } from "@/components/blockchain/WalletProvider";
import { StarknetProvider } from "@/components/blockchain/Providers";
import { Inter } from "next/font/google";


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
