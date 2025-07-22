export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ChainLib",
    description:
      "ChainLib is a revolutionary decentralized library platform leveraging blockchain technology for transparent digital publishing. Own your stories, engage readers, and earn from your content with blockchain transparency.",
    url: "https://chainlib.com",
    logo: "https://chainlib.com/logo.png",
    foundingDate: "2024",
    sameAs: [
      "https://twitter.com/chainlib",
      "https://github.com/chainlib/chainlib-platform",
      "https://discord.gg/chainlib",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: ["English"],
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "Global",
    },
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ChainLib",
    url: "https://chainlib.com",
    description:
      "ChainLib is a revolutionary decentralized library platform leveraging blockchain technology for transparent digital publishing. Own your stories, engage readers, and earn from your content with blockchain transparency.",
    publisher: {
      "@type": "Organization",
      name: "ChainLib",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://chainlib.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  }

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "ChainLib",
    description:
      "Decentralized library platform leveraging blockchain technology for transparent digital publishing, content ownership, and reader engagement.",
    url: "https://chainlib.com",
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Web Browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "850",
    },
    featureList: [
      "Decentralized content publishing",
      "Blockchain content ownership",
      "Direct reader engagement",
      "Content monetization",
      "Transparent royalty distribution",
      "Cross-platform accessibility",
    ],
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://chainlib.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Library",
        item: "https://chainlib.com/library",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Publish",
        item: "https://chainlib.com/publish",
      },
    ],
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is ChainLib?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ChainLib is a decentralized library platform leveraging blockchain technology for transparent digital publishing. It enables content creators to own their stories, engage readers directly, and earn from their content with complete transparency.",
        },
      },
      {
        "@type": "Question",
        name: "How does ChainLib work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ChainLib works in 4 simple steps: 1) Connect your wallet, 2) Browse the library or publish content, 3) Engage with readers or discover new stories, 4) Earn from your content or support your favorite authors.",
        },
      },
      {
        "@type": "Question",
        name: "What are the fees for using ChainLib?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ChainLib offers minimal fees for publishing content and transactions. Most reading is free, with optional support mechanisms for authors.",
        },
      },
      {
        "@type": "Question",
        name: "Is ChainLib secure?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, ChainLib is built on StarkNet with blockchain security features. All content ownership is transparent and verifiable on the blockchain.",
        },
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationSchema),
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  )
}
