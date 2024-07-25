import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { siteMetadata } from '@/lib/sitemetadata'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    template: `%s | ${siteMetadata.title}`,
    default: siteMetadata.title,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    images: [siteMetadata.socialBanner],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <script defer src="https://unpkg.com/@tinybirdco/flock.js" data-host="https://api.tinybird.co" data-token="p.eyJ1IjogImNjZmE0MDk1LTE2NTAtNGFmOC05MGVlLWQ3MmJkZGNmN2M2ZiIsICJpZCI6ICIyMTM0ODc0NC1lZDg2LTQyMDQtOTgwYS0yNTk3ZTQxZmEwMzgiLCAiaG9zdCI6ICJldV9zaGFyZWQifQ.D5w14v6G179gMgXTGu_nxBAh2jJHVbWDpWt_zgCVvRQ"></script>
      </body>
    </html>
  )
}
