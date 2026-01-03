import Head from "next/head";

export default function SEO({
  title = "Ryan Organic Farms | Sustainable & Chemical-Free Farming",
  description = "Ryan Organic Farms offers premium organic produce, free-range eggs, and sustainable farming practices for a healthier future.",
  keywords = "organic farming, organic farms in India, free range eggs, natural eggs, chemical free farming, Ryan Organic Farms",
  image = "/seo-banner.jpg",
  url = "https://ryanorganicfarms.com",
  faqSchema = null,
}) {
  return (
    <Head>
      {/* ---------- BASIC SEO ---------- */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Ryan Organic Farms" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* ---------- FAVICON ---------- */}
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

      {/* ---------- OPEN GRAPH (FACEBOOK / WHATSAPP) ---------- */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Ryan Organic Farms" />

      {/* ---------- TWITTER ---------- */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* ---------- FAQ STRUCTURED DATA (OPTIONAL) ---------- */}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      )}
    </Head>
  );
}
