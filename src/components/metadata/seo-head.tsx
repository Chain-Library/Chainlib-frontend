import Head from "next/head"

interface SEOHeadProps {
  title?: string
  description?: string
  canonical?: string
  ogImage?: string
}

export function SEOHead({
  title = "ChainLib - Decentralized Library for the Future of Digital Publishing",
  description = "ChainLib is a revolutionary decentralized library platform leveraging blockchain technology for transparent digital publishing. Own your stories, engage readers, and earn from your content with blockchain transparency.",
  canonical = "https://chainlib.com",
  ogImage = "/og-image.png",
}: SEOHeadProps) {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="decentralized library, blockchain publishing, digital publishing platform, decentralized publishing, blockchain library, content ownership, digital content platform, starknet publishing, blockchain transparency, decentralized content, digital books, content creators, blockchain books, decentralized reading, digital library, blockchain content, publishing platform, content monetization, digital rights, blockchain stories, starknet, web3 publishing, decentralized authors, blockchain readers, digital storytelling"
      />
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="author" content="ChainLib Team" />

      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="ChainLib" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonical} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      <meta property="twitter:creator" content="@chainlib" />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#1e293b" />
      <meta name="msapplication-TileColor" content="#1e293b" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    </Head>
  )
}
