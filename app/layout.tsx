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
  description: "Creative strategist and social media leader specializing in digital marketing, brand development, and innovative social campaigns.",
  keywords: [
    "Stephen Beardslee",
    "Roberto Beardslee",
    "Creative Strategist",
    "Social Media Manager",
  ],
  icons: [
    { rel: 'icon', url: '/favicon.png' },
    { rel: 'apple-touch-icon', url: '/favicon.png' },
    { rel: 'shortcut icon', url: '/favicon.png' }
  ],
  openGraph: {
    title: "Stephen Beardslee - Creative Strategist & Social Media Leader",
    description: "Creative strategist and social media leader specializing in digital marketing, brand development, and innovative social campaigns.",
    url: 'https://oxytocins.me',
    siteName: 'Stephen Beardslee',
    images: [{
      url: 'https://oxytocins.me/social.png',
      width: 1200,
      height: 630,
      alt: 'Stephen Beardslee'
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Stephen Beardslee - Creative Strategist & Social Media Leader",
    description: "Creative strategist and social media leader specializing in digital marketing, brand development, and innovative social campaigns.",
    images: ['https://oxytocins.me/social.png'],
  },
  manifest: '/manifest.json'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
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