const SITE_URL = 'https://www.mercedesbenzoffairfield.com'

export default function sitemap() {
  const routes = ['/', '/admin'].map(route => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '/' ? 1.0 : 0.3,
  }))

  return routes
}
