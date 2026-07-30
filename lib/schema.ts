export interface SchemaOrg {
  '@context': string
  '@graph': Record<string, unknown>[]
}

export function generateSchemas(): SchemaOrg {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'AutoDealer',
        '@id': 'https://www.mercedesbenzoffairfield.com/#organization',
        name: 'Mercedes-Benz of Fairfield',
        url: 'https://www.mercedesbenzoffairfield.com',
        description: 'Premier Mercedes-Benz dealership in Fairfield, California offering new and certified pre-owned vehicles, expert service, and financing.',
        telephone: '+1-707-555-0100',
        email: 'info@mercedesbenzoffairfield.com',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '123 Auto Mall Drive',
          addressLocality: 'Fairfield',
          addressRegion: 'CA',
          postalCode: '94533',
          addressCountry: 'US'
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 38.2494,
          longitude: -122.04
        },
        openingHoursSpecification: [
          { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Monday', opens: '09:00', closes: '20:00' },
          { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Tuesday', opens: '09:00', closes: '20:00' },
          { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Wednesday', opens: '09:00', closes: '20:00' },
          { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Thursday', opens: '09:00', closes: '20:00' },
          { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Friday', opens: '09:00', closes: '19:00' },
          { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '10:00', closes: '18:00' },
          { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Sunday', opens: '11:00', closes: '17:00' }
        ],
        sameAs: [
          'https://www.facebook.com/MBFairfield',
          'https://www.instagram.com/mbfairfield',
          'https://www.linkedin.com/company/mercedes-benz-of-fairfield'
        ],
        priceRange: '$$$$'
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.mercedesbenzoffairfield.com/#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What service does Mercedes-Benz of Fairfield offer?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Mercedes-Benz of Fairfield offers comprehensive services including new and certified pre-owned vehicle sales, factory-trained maintenance and repair, genuine Mercedes-Benz parts, and customized financing options for customers throughout Fairfield, Vacaville, Vallejo, and the greater Solano County area.'
            }
          },
          {
            '@type': 'Question',
            name: 'Do you service Mercedes-Benz vehicles from other dealerships?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Our factory-trained technicians service any Mercedes-Benz vehicle regardless of where it was purchased. We use genuine OEM parts and follow Mercedes-Benz manufacturer specifications for all maintenance and repairs.'
            }
          },
          {
            '@type': 'Question',
            name: 'What financing options are available?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'We offer flexible financing through Mercedes-Benz Financial Services, competitive bank and credit union loans, lease options, and special manufacturer incentives. Our finance team works with all credit profiles to find the best solution.'
            }
          },
          {
            '@type': 'Question',
            name: 'How do I schedule a test drive?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'You can schedule a test drive online through our website, call us directly, or simply visit our showroom at 123 Auto Mall Drive in Fairfield, CA. We recommend scheduling in advance to ensure your preferred model is available.'
            }
          },
          {
            '@type': 'Question',
            name: 'Where is Mercedes-Benz of Fairfield located?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'We are located at 123 Auto Mall Drive, Fairfield, CA 94533, just off Highway 12 in the Auto Mall district. We are easily accessible from I-80, serving Fairfield, Vacaville, Vallejo, Napa, and the greater Bay Area.'
            }
          }
        ]
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://www.mercedesbenzoffairfield.com/#breadcrumb',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.mercedesbenzoffairfield.com/' },
          { '@type': 'ListItem', position: 2, name: 'New Vehicles', item: 'https://www.mercedesbenzoffairfield.com/new' },
          { '@type': 'ListItem', position: 3, name: 'Pre-Owned', item: 'https://www.mercedesbenzoffairfield.com/pre-owned' },
          { '@type': 'ListItem', position: 4, name: 'Service', item: 'https://www.mercedesbenzoffairfield.com/service' },
          { '@type': 'ListItem', position: 5, name: 'Financing', item: 'https://www.mercedesbenzoffairfield.com/financing' },
          { '@type': 'ListItem', position: 6, name: 'Contact', item: 'https://www.mercedesbenzoffairfield.com/contact' }
        ]
      },
      {
        '@type': 'WebSite',
        '@id': 'https://www.mercedesbenzoffairfield.com/#website',
        name: 'Mercedes-Benz of Fairfield',
        url: 'https://www.mercedesbenzoffairfield.com',
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://www.mercedesbenzoffairfield.com/search?q={search_term_string}'
          },
          'query-input': 'required name=search_term_string'
        }
      }
    ]
  }
}
