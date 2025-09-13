import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "BIN-AMEEN CONSULTING - Education, Research & Business Solutions",
  description:
    "Professional consulting services in education, research, business development, and teacher training programmes. TRCN registered with proven expertise in Nigeria.",
  keywords: "consulting, education, research, business, teacher training, TRCN, Nigeria, Ethication",
  authors: [{ name: "BIN-AMEEN CONSULTING" }],
  openGraph: {
    title: "BIN-AMEEN CONSULTING - Education, Research & Business Solutions",
    description:
      "Professional consulting services in education, research, business development, and teacher training programmes.",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable} ${jetbrainsMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  )
}
