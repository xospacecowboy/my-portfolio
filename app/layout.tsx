import "./globals.css"
import "../styles/grid-pattern.css"
import { Space_Grotesk, DotGothic16 } from "next/font/google"
import type React from "react"
import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Script from 'next/script'

const AnalyticsWrapper = dynamic(() => import('../components/AnalyticsWrapper'), {
  ssr: false
})

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })
const dotGothic16 = DotGothic16({ 
  weight: "400", 
  subsets: ["latin"],
  variable: '--font-dotgothic16'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://oxytocins.me'),
  title: {
    default: "Stephen Beardslee - Creative Strategist & Social Media Leader",
    template: "%s | Stephen Beardslee"
  },
  description: "Creative strategist and social media leader specializing in digital marketing, brand development, and innovative social campaigns. Known as Roberto Beardslee.",
  keywords: [
    "Stephen Beardslee",
    "Roberto Beardslee",
    "Creative Strategist",
    "Social Media Manager",
    "Digital Marketing",
    "Graphic Designer",
    "Artist",
    "Brand Development",
    "Creative Direction",
    "Social Media Strategy",
    "Content Creation",
    "Houston",
    "Digital Marketing Professional"
  ],
  creator: "Stephen Beardslee",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://oxytocins.me",
    title: "Stephen Beardslee - Creative Strategist & Social Media Leader",
    description: "Creative strategist and social media leader specializing in digital marketing, brand development, and innovative social campaigns.",
    siteName: "Stephen Beardslee Portfolio",
    images: [
      {
        url: "https://oxytocins.me/oxytocinslogo.png",
        width: 1200,
        height: 630,
        alt: "Stephen Beardslee Logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Stephen Beardslee - Creative Strategist & Social Media Leader",
    description: "Creative strategist and social media leader specializing in digital marketing, brand development, and innovative social campaigns.",
    images: ["https://oxytocins.me/oxytocinslogo.png"],
    creator: "@oxytocins"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "bb273e4956707383",
  },
  alternates: {
    canonical: "https://oxytocins.me",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/oxytocinslogo.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/oxytocinslogo.png" type="image/png" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={`${spaceGrotesk.className} ${dotGothic16.className}`}>
        <AnalyticsWrapper>
          {children}
        </AnalyticsWrapper>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-ZH28TT3LE0`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZH28TT3LE0');
          `}
        </Script>
      </body>
    </html>
  )
}