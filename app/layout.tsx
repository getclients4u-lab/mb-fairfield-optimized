import '@/app/globals.css'
import type { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'

const siteUrl = 'https://www.mercedesbenzoffairfield.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Mercedes-Benz of Fairfield | New & Pre-Owned Luxury Vehicles',
    template: '%s | Mercedes-Benz of Fairfield'
  },
  description: 'Visit Mercedes-Benz of Fairfield for new and certified pre-owned Mercedes-Benz vehicles, expert service, and financing in Fairfield, CA. Serving Solano County and the Bay Area.',
  keywords: [
    'Mercedes-Benz dealer Fairfield', 'Mercedes-Benz Fairfield CA',
    'new Mercedes-Benz for sale', 'certified pre-owned Mercedes',
    'Mercedes-Benz service Fairfield', 'Mercedes-Benz parts Fairfield',
    'luxury car dealer Fairfield', 'Mercedes-Benz financing',
    'Mercedes-Benz lease deals', 'Mercedes-Benz of Fairfield'
  ],
  openGraph: {
    type: 'website', locale: 'en_US', url: siteUrl,
    siteName: 'Mercedes-Benz of Fairfield',
    title: 'Mercedes-Benz of Fairfield | New & Pre-Owned Luxury Vehicles',
    description,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }]
  },
  twitter: { card: 'summary_large_image', title: 'Mercedes-Benz of Fairfield', description },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-US">
      <head>
        <link rel="canonical" href={siteUrl} />
        <meta name="geo.region" content="US-CA" />
        <meta name="geo.placename" content="Fairfield" />
        <meta name="geo.position" content="38.2494;-122.0400" />
        <meta name="ICBM" content="38.2494, -122.0400" />
      </head>
      <body>
        <JsonLd />
        {children}
      </body>
    </html>
  )
}
