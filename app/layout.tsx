import "./globals.css"
import "../styles/grid-pattern.css"
import { Space_Grotesk, DotGothic16 } from "next/font/google"
import type React from "react"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })
const dotGothic16 = DotGothic16({ weight: "400", subsets: ["latin"] })

export const metadata = {
  title: "Stephen Beardslee - Strategic Social Media Leader",
  description: "Digital Marketing & Social Media Professional based in Houston",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className} ${dotGothic16.variable}`}>{children}</body>
    </html>
  )
}



import './globals.css'