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
  icons: {
    icon: [
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: ["/favicon-32.ico"],
    apple: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://guilhermepozo.com",
    title: "Guilherme Pozo - Tech Lead & SRE",
    description: "Technical Leader specializing in cloud engineering, AI automation, and DevOps excellence.",
    siteName: "Guilherme Pozo",
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
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center bg-background">
            <div className="flex flex-col items-center gap-6">
              <div className="relative w-20 h-20">
                {/* Spinning gradient circle */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-pink via-purple to-cyan animate-spin opacity-75" style={{ animationDuration: '1.5s' }}></div>
                <div className="absolute inset-2 rounded-full bg-background"></div>
              </div>

              {/* Animated text */}
              <div className="flex items-center gap-2">
                <span className="text-lg font-medium gradient-text animate-pulse">Loading</span>
                <span className="flex gap-1">
                  <span className="w-1.5 h-1.5 bg-pink rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                  <span className="w-1.5 h-1.5 bg-purple rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                  <span className="w-1.5 h-1.5 bg-cyan rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                </span>
              </div>
            </div>
          </div>
        }>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
