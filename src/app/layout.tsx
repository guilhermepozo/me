import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Guilherme Pozo - Tech Lead & SRE",
  description: "Technical Leader specializing in cloud engineering, AI automation, and DevOps excellence. Currently at Johnson & Johnson leading Digital & Full Stack LATAM.",
  keywords: [
    "Software Engineer",
    "Site Reliability Engineer",
    "Tech Lead",
    "Cloud Engineering",
    "DevOps",
    "AI Automation",
    "Infrastructure as Code",
    "Kubernetes",
    "AWS",
    "Azure",
    "Terraform",
    "Johnson & Johnson",
    "Brazil",
    "São José dos Campos"
  ],
  authors: [{ name: "Guilherme Pozo" }],
  creator: "Guilherme Pozo",
  publisher: "Guilherme Pozo",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://guilhermepozo.com",
    title: "Guilherme Pozo - Tech Lead & SRE",
    description: "Technical Leader specializing in cloud engineering, AI automation, and DevOps excellence.",
    siteName: "Guilherme Pozo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Guilherme Pozo - Tech Lead & SRE",
    description: "Technical Leader specializing in cloud engineering, AI automation, and DevOps excellence.",
    creator: "@guilhermepozo",
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
    google: "your-google-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
