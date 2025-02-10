import "./globals.css"
import { Space_Grotesk } from "next/font/google"
import type React from "react"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })

export const metadata = {
  title: "Stephen Beardslee - Strategic Social Media Leader",
  description: "Digital Marketing & Social Media Professional based in Houston",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>{children}</body>
    </html>
  )
}

