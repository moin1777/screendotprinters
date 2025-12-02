// Site configuration and data structure for Screendot Printers

export interface Product {
  id: string;
  title: string;
  description: string;
  category: string;
}

export interface Category {
  id: string;
  name: string;
  products: Product[];
}

// Brand colors configuration (CMYK-inspired)
export const brandColors = {
  primary: {
    yellow: '#FFE500',
    pink: '#E91E63', 
    skyBlue: '#03A9F4',
    red: '#F44336'
  },
  neutral: {
    light: '#F8F9FA',
    dark: '#212529',
    gray: '#6C757D'
  }
};

// Site configuration
export const siteConfig = {
  company: {
    name: 'Screendot Printers',
    tagline: 'Commercial Print & Packaging',
    description: 'High-quality printing solutions crafted to make your business stand out—with speed, precision, and a personal touch.'
  },
  hero: {
    title: 'Bold, Brilliant',
    subtitle: 'printing for brands that mean business.',
    backgroundType: 'gradient' // 'gradient' or 'image' or 'slider'
  }
};

// Categories and products data
export const categoriesData: Category[] = [
  {
    id: 'merchandise',
    name: 'Merchandise',
    products: [
      {
        id: 'merch-desk-calendars',
        title: 'Desk Calendars',
        description: 'Custom desk calendars to keep your brand visible all year round. Perfect for offices and promotional giveaways with professional finishing.',
        category: 'merchandise'
      },
      {
        id: 'merch-note-pads',
        title: 'Custom Note Pads',
        description: 'Personalized notepads with your company branding. Great for meetings, client gifts, and daily office use.',
        category: 'merchandise'
      },
      {
        id: 'merch-magazine',
        title: 'Magazine',
        description: 'High-quality magazine printing with vibrant colors and professional binding. Perfect for company publications and marketing materials.',
        category: 'merchandise'
      },
      {
        id: 'merch-pen-stands',
        title: 'Pen Stands',
        description: 'Custom branded pen stands for offices and reception areas. Elegant way to display your brand while being functional.',
        category: 'merchandise'
      },
      {
        id: 'merch-paper-bags',
        title: 'Personalized Paper Bags',
        description: 'Eco-friendly custom paper bags with your brand design. Perfect for retail stores and promotional events.',
        category: 'merchandise'
      },
      {
        id: 'merch-mugs',
        title: 'Customized Mugs',
        description: 'High-quality ceramic mugs with custom printing. Great for corporate gifts, promotional items, and office branding.',
        category: 'merchandise'
      },
      {
        id: 'merch-certificates',
        title: 'Certificates',
        description: 'Professional certificates with premium paper and elegant designs. Perfect for awards, achievements, and formal recognition.',
        category: 'merchandise'
      },
      {
        id: 'merch-diaries',
        title: 'Customized Diaries',
        description: 'Personalized diaries and planners with custom covers. Excellent for corporate gifts and promotional merchandise.',
        category: 'merchandise'
      }
    ]
  },
  {
    id: 'packaging',
    name: 'Packaging',
    products: [
      {
        id: 'pack-paper-bags',
        title: 'Paper Bags',
        description: 'Professional paper bags in various sizes with custom printing. Durable and eco-friendly packaging solution for retail businesses.',
        category: 'packaging'
      },
      {
        id: 'pack-boxes',
        title: 'Boxes',
        description: 'Custom printed boxes for products and shipping. High-quality cardboard with professional printing and finishing options.',
        category: 'packaging'
      },
      {
        id: 'pack-containers',
        title: 'Containers',
        description: 'Specialized containers for food and product packaging. Food-safe materials with custom branding options available.',
        category: 'packaging'
      },
      {
        id: 'pack-labels',
        title: 'Labels',
        description: 'Professional product labels with waterproof and removable options. Perfect for branding and product identification.',
        category: 'packaging'
      },
      {
        id: 'pack-takeaway-boxes',
        title: 'Takeaway Boxes',
        description: 'Food-safe takeaway containers with custom branding. Perfect for restaurants and food delivery services.',
        category: 'packaging'
      },
      {
        id: 'pack-pamphlets',
        title: 'Company Pamphlets',
        description: 'Professional company pamphlets with high-quality printing. Ideal for marketing materials and information distribution.',
        category: 'packaging'
      },
      {
        id: 'pack-tags',
        title: 'Customized Tags',
        description: 'Custom hang tags and product tags in various shapes and sizes. Add professional finishing touches to your products.',
        category: 'packaging'
      }
    ]
  },
  {
    id: 'commercial-prints',
    name: 'Commercial Prints',
    products: [
      {
        id: 'comm-wedding-cards',
        title: 'Wedding Cards',
        description: 'Elegant wedding invitation cards with premium paper and beautiful designs. Make your special day memorable with luxury printing.',
        category: 'commercial-prints'
      },
      {
        id: 'comm-wall-calendars',
        title: 'Wall Calendars',
        description: 'Large format wall calendars with high-quality printing. Perfect for offices, homes, and promotional giveaways.',
        category: 'commercial-prints'
      },
      {
        id: 'comm-business-cards',
        title: 'Business Cards',
        description: 'Professional business cards on premium cardstock. Make a lasting first impression with high-quality printing and finishing.',
        category: 'commercial-prints'
      },
      {
        id: 'comm-uv-business-cards',
        title: 'UV Business Cards',
        description: 'Premium business cards with UV coating for enhanced durability and vibrant colors. Stand out with a professional glossy finish.',
        category: 'commercial-prints'
      },
      {
        id: 'comm-duplex-business-cards',
        title: 'Duplex Business Cards',
        description: 'Thick, luxury duplex business cards with exceptional feel and quality. Perfect for high-end professional branding.',
        category: 'commercial-prints'
      },
      {
        id: 'comm-magazines',
        title: 'Magazines',
        description: 'Professional magazine printing with perfect binding and high-quality paper. Ideal for publications and marketing materials.',
        category: 'commercial-prints'
      },
      {
        id: 'comm-brochures',
        title: 'Brochures',
        description: 'Tri-fold and bi-fold brochures with crisp printing and precise folding. Perfect for marketing and information materials.',
        category: 'commercial-prints'
      },
      {
        id: 'comm-periodicals',
        title: 'Monthly Periodicals',
        description: 'Regular publication printing with consistent quality and timely delivery. Perfect for newsletters and recurring publications.',
        category: 'commercial-prints'
      },
      {
        id: 'comm-book-work',
        title: 'Book Work',
        description: 'Complete book printing services with various binding options. From novels to manuals, we handle all book printing needs.',
        category: 'commercial-prints'
      }
    ]
  },
  {
    id: 'brand-identity',
    name: 'Brand Identity',
    products: [
      {
        id: 'brand-standee',
        title: 'Customized Standee',
        description: 'Large format standees for exhibitions and promotional events. High-quality printing on durable materials with easy setup.',
        category: 'brand-identity'
      },
      {
        id: 'brand-badges',
        title: 'Badges',
        description: 'Professional ID badges and name tags with custom designs. Perfect for events, conferences, and employee identification.',
        category: 'brand-identity'
      },
      {
        id: 'brand-catalogs',
        title: 'Catalogs',
        description: 'High-quality product catalogs with professional binding and premium paper. Showcase your products with stunning visual appeal.',
        category: 'brand-identity'
      }
    ]
  }
];

// Features for "Why Choose Us" section
export const features = [
  {
    icon: '⚡',
    title: 'Same-Day Turnaround',
    description: 'Rush orders completed within 24 hours without compromising on quality.'
  },
  {
    icon: '🎯',
    title: 'High-Quality Prints',
    description: 'State-of-the-art printing technology ensures crisp, vibrant, and professional results.'
  },
  {
    icon: '🤝',
    title: 'Eco-Friendly Materials', 
    description: 'Sustainable paper and ink options to minimize environmental impact.'
  },
  {
    icon: '🏆',
    title: '25+ Years of Expertise',
    description: 'Decades of experience delivering top-quality printing solutions tailored to your needs.'
  }
];

// Featured products for showcase
export const featuredProducts = [
  {
    id: 'featured-1',
    title: 'Premium Business Card Package',
    description: 'Complete branding package with business cards, letterhead, and envelopes.',
    image: '/placeholder-business-cards.jpg',
    price: 'Starting at $89'
  },
  {
    id: 'featured-2', 
    title: 'Event Marketing Kit',
    description: 'Flyers, banners, and promotional materials for your next big event.',
    image: '/placeholder-event-kit.jpg',
    price: 'Starting at $149'
  },
  {
    id: 'featured-3',
    title: 'Custom Apparel Collection',
    description: 'Branded t-shirts, hoodies, and accessories for your team or business.',
    image: '/placeholder-apparel.jpg', 
    price: 'Starting at $25'
  }
];