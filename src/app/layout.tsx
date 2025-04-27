import { Providers } from "@/components/blockchain/Providers";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Import Inter font with weights and subsets you want to use
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "ChainLib",
  description: "An E-Library Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="relative bg-background font-sans w-screen text-neutral-900">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
