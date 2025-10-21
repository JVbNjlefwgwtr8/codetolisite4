import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import ClientLayout from "./ClientLayout"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Codetoli Technology - Enterprise Business Software Solutions",
  description:
    "Advanced business software solutions including POS, ERP, eCommerce, Accounting, and AI-powered systems. Transform your business with Codetoli's intelligent enterprise software.",
  keywords: [
    "POS system",
    "ERP software",
    "eCommerce platform",
    "accounting software",
    "business management",
    "restaurant management",
    "inventory management",
    "AI business solutions",
    "enterprise software",
    "business automation",
  ],
  generator: "v0.app",
  applicationName: "Codetoli Technology",
  referrer: "origin-when-cross-origin",
  authors: [{ name: "Codetoli Technology" }],
  creator: "Codetoli Technology",
  publisher: "Codetoli Technology",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://codetolitech.qzz.io",
    siteName: "Codetoli Technology",
    title: "Codetoli Technology - Enterprise Business Software Solutions",
    description:
      "Advanced business software solutions including POS, ERP, eCommerce, Accounting, and AI-powered systems.",
    images: [
      {
        url: "https://codetolitech.qzz.io/og-image.png",
        width: 1200,
        height: 630,
        alt: "Codetoli Technology - Enterprise Software Solutions",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Codetoli Technology - Enterprise Business Software Solutions",
    description:
      "Advanced business software solutions including POS, ERP, eCommerce, Accounting, and AI-powered systems.",
    images: ["https://codetolitech.qzz.io/twitter-image.png"],
    creator: "@codetoli",
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
    google: "google-site-verification-code",
  },
  alternates: {
    canonical: "https://codetolitech.qzz.io",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Canonical and Favicon */}
        <link rel="canonical" href="https://codetolitech.qzz.io" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Preconnect to Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* ✅ Google Verification Code */}
        <meta name="google-site-verification" content="google-site-verification-code" />

        {/* ✅ Google Tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-K98XSZ84R9"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-K98XSZ84R9');
            `,
          }}
        />

        {/* ✅ JSON-LD: Organization Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Codetoli Technology",
              url: "https://codetolitech.qzz.io",
              logo: "https://codetolitech.qzz.io/logo.png",
              description:
                "Advanced business software solutions including POS, ERP, eCommerce, Accounting, and AI-powered systems.",
              sameAs: [
                "https://linkedin.com/company/codetoli-technology",
              
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Sales",
                email: "sales@codetolitech.qzz.io",
                telephone: "+91-XXXXXXXXXX",
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
              },
            }),
          }}
        />

        {/* ✅ JSON-LD: LocalBusiness Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Codetoli Technology",
              image: "https://codetolitech.qzz.io/logo.png",
              description:
                "Enterprise business software solutions provider specializing in POS, ERP, eCommerce, and AI systems.",
              url: "https://codetolitech.qzz.io",
              telephone: "+91-XXXXXXXXXX",
              email: "sales@codetolitech.qzz.io",
              priceRange: "₹999 - Custom",
              areaServed: "IN",
              serviceType: [
                "POS System",
                "ERP Software",
                "eCommerce Platform",
                "Accounting Software",
                "AI Solutions",
              ],
            }),
          }}
        />
      </head>

      <body className={`font-sans antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
