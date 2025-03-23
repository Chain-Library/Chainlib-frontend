import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/blockchain/Providers";



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
      <body
      >
        <Providers>{children}</Providers>
        
      </body>
    </html>
  );
}
