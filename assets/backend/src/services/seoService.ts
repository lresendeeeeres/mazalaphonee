export interface ProductSeoData {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  condition: string;
  brand?: string;
  availability?: string;
}

export class SeoService {
  public static generateProductJsonLd(p: ProductSeoData, baseUrl: string = 'https://mazalaphone.com.br') {
    return {
      '@context': 'https://schema.org/',
      '@type': 'Product',
      name: `${p.name} - 1 Ano de Garantia | Mazala Phone`,
      image: [p.image.startsWith('http') ? p.image : `${baseUrl}/${p.image}`],
      description: p.description || `Compre seu ${p.name} com 1 ano de garantia real na Mazala Phone em Cataguases e Região.`,
      brand: {
        '@type': 'Brand',
        name: 'Apple',
      },
      offers: {
        '@type': 'Offer',
        url: `${baseUrl}/#catalogo`,
        priceCurrency: 'BRL',
        price: p.price,
        priceValidUntil: '2026-12-31',
        itemCondition: p.condition === 'Novo' ? 'https://schema.org/NewCondition' : 'https://schema.org/RefurbishedCondition',
        availability: 'https://schema.org/InStock',
        seller: {
          '@type': 'Organization',
          name: 'Mazala Phone - Especialista em Apple',
        },
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        reviewCount: '128',
      },
    };
  }

  public static generateBreadcrumbJsonLd(productName: string, baseUrl: string = 'https://mazalaphone.com.br') {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Início',
          item: baseUrl,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Catálogo Apple',
          item: `${baseUrl}/#catalogo`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: productName,
          item: `${baseUrl}/#catalogo`,
        },
      ],
    };
  }

  public static generateLocalStoreJsonLd(baseUrl: string = 'https://mazalaphone.com.br') {
    return {
      '@context': 'https://schema.org',
      '@type': 'ElectronicsStore',
      name: 'Mazala Phone - Especialista em Apple',
      image: `${baseUrl}/assets/hero-hd-backdrop.jpg`,
      telephone: '+55-32-98854-7377',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Cataguases',
        addressRegion: 'MG',
        addressCountry: 'BR',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '-21.3892',
        longitude: '-42.6967',
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '09:00',
          closes: '19:00',
        },
      ],
      priceRange: '$$$$',
    };
  }
}
