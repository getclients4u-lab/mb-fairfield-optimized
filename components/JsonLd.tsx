import Script from 'next/script'
import { generateSchemas } from '../lib/schema'

export default function JsonLd() {
  const schemas = generateSchemas()
  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
    />
  )
}
