import { Metadata } from "next";
import { WalletProvider } from "../components/blockchain/WalletProvider";
import "@/app/globals.css";
import ClientProviders from "../components/blockchain/client-providers";
import { StructuredData } from "@/components/metadata/structured-data";

export const metadata: Metadata = {
  title:
    "ChainLib - Decentralized Library for the Future of Digital Publishing",
  description:
    "ChainLib is a revolutionary decentralized library platform leveraging blockchain technology for transparent digital publishing. Own your stories, engage readers, and earn from your content with blockchain transparency.",
  keywords: [
    "decentralized library",
    "blockchain publishing",
    "digital publishing platform",
    "decentralized publishing",
    "blockchain library",
    "content ownership",
    "digital content platform",
    "starknet publishing",
    "blockchain transparency",
    "decentralized content",
    "digital books",
    "content creators",
    "blockchain books",
    "decentralized reading",
    "digital library",
    "blockchain content",
    "publishing platform",
    "content monetization",
    "digital rights",
    "blockchain stories",
    "starknet",
  ],
  authors: [{ name: "ChainLib Team" }],
  creator: "ChainLib",
  publisher: "ChainLib",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://chainlib.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://chainlib.com",
    title:
      "ChainLib - Decentralized Library for the Future of Digital Publishing",
    description:
      "Revolutionary decentralized library platform with blockchain technology. Own your stories, engage readers, and earn from your content with complete transparency.",
    siteName: "ChainLib",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ChainLib - Decentralized Digital Publishing Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "ChainLib - Decentralized Library for the Future of Digital Publishing",
    description:
      "Experience the future of digital publishing with ChainLib's decentralized library platform. Own your stories, engage readers, and earn from your content with blockchain transparency.",
    images: ["/twitter-image.png"],
    creator: "@chainlib",
    site: "@chainlib",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
};
export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className="bg-[#00031B] text-[#EAEDE7]">
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
