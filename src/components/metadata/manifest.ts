import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ChainLib - Decentralized Library Platform",
    short_name: "ChainLib",
    description:
      "ChainLib is a revolutionary decentralized library platform leveraging blockchain technology for transparent digital publishing. Own your stories, engage readers, and earn from your content with blockchain transparency.",
    start_url: "/",
    display: "standalone",
    background_color: "#1e293b",
    theme_color: "#3b82f6",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}