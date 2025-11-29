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
    description: 'Premium Prints • Fast Turnaround',
    backgroundType: 'gradient' // 'gradient' or 'image' or 'slider'
  }
};

// Categories and products data
export const categoriesData: Category[] = [
  {
    id: 'business-cards',
    name: 'Business Cards',
    products: [
      {
        id: 'bc-standard',
        title: 'Standard Business Cards',
        description: 'Classic 14pt cardstock with premium matte or gloss finish. Perfect for professional networking and daily business use.',
        category: 'business-cards'
      },
      {
        id: 'bc-premium',
        title: 'Premium Business Cards', 
        description: 'Luxurious 16pt thick cardstock with specialty finishes. Make a lasting impression with superior quality and feel.',
        category: 'business-cards'
      },
      {
        id: 'bc-foil',
        title: 'Foil Business Cards',
        description: 'Eye-catching metallic foil accents on premium cardstock. Add elegance and sophistication to your brand identity.',
        category: 'business-cards'
      },
      {
        id: 'bc-die-cut',
        title: 'Die-Cut Business Cards',
        description: 'Custom shapes and unique cuts that stand out from traditional rectangular cards. Perfect for creative professionals.',
        category: 'business-cards'
      }
    ]
  },
  {
    id: 'print-products',
    name: 'Print Products',
    products: [
      {
        id: 'pp-postcards',
        title: '14pt + Matte Finish',
        description: 'Our 14pt matte postcards are a customer favorite, combining a luxurious feel with professional print quality for direct mail campaigns.',
        category: 'print-products'
      },
      {
        id: 'pp-postcards-gloss',
        title: '14pt + High Gloss UV',
        description: 'These 14pt UV-coated postcards deliver a striking gloss that makes colors pop — a perfect choice for vibrant marketing materials.',
        category: 'print-products'
      },
      {
        id: 'pp-flyers',
        title: 'Premium Flyers',
        description: 'High-impact promotional flyers on quality cardstock. Ideal for events, sales announcements, and marketing campaigns.',
        category: 'print-products'
      },
      {
        id: 'pp-brochures',
        title: 'Tri-Fold Brochures',
        description: 'Professional tri-fold brochures with crisp printing and precise folding. Perfect for detailed product information and services.',
        category: 'print-products'
      },
      {
        id: 'pp-banners',
        title: 'Vinyl Banners',
        description: 'Durable outdoor vinyl banners with vibrant colors and weather-resistant materials. Great for events and storefront displays.',
        category: 'print-products'
      },
      {
        id: 'pp-posters',
        title: 'Large Format Posters',
        description: 'Eye-catching posters in various sizes with premium paper options. Perfect for presentations, events, and promotional displays.',
        category: 'print-products'
      }
    ]
  },
  {
    id: 'labels-packaging',
    name: 'Labels & Packaging',
    products: [
      {
        id: 'lp-custom-labels',
        title: 'Custom Product Labels',
        description: 'Professional product labels with waterproof and removable options. Perfect for branding your products with style.',
        category: 'labels-packaging'
      },
      {
        id: 'lp-stickers',
        title: 'Custom Stickers',
        description: 'High-quality vinyl stickers in any shape or size. Great for branding, promotions, and personal use.',
        category: 'labels-packaging'
      },
      {
        id: 'lp-packaging',
        title: 'Custom Packaging',
        description: 'Branded packaging solutions including boxes, bags, and mailers. Make your unboxing experience memorable.',
        category: 'labels-packaging'
      },
      {
        id: 'lp-hang-tags',
        title: 'Hang Tags',
        description: 'Professional hang tags for retail products with custom shapes and finishes. Add that finishing touch to your merchandise.',
        category: 'labels-packaging'
      }
    ]
  },
  {
    id: 'apparel',
    name: 'Apparel',
    products: [
      {
        id: 'app-screen-printing',
        title: 'Screen Printing',
        description: 'Classic screen printing for t-shirts, hoodies, and more. Vibrant colors and long-lasting prints for any quantity.',
        category: 'apparel'
      },
      {
        id: 'app-embroidery',
        title: 'Custom Embroidery', 
        description: 'Professional embroidery services for polo shirts, hats, and corporate apparel. Add a premium touch to your brand.',
        category: 'apparel'
      },
      {
        id: 'app-dtg',
        title: 'Direct-to-Garment',
        description: 'High-quality digital printing directly onto fabric. Perfect for detailed designs and small quantity orders.',
        category: 'apparel'
      },
      {
        id: 'app-promotional',
        title: 'Promotional Items',
        description: 'Custom branded merchandise including mugs, pens, bags, and more. Perfect for marketing and corporate gifts.',
        category: 'apparel'
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
    icon: '👩‍💼',
    title: 'Women-Led Business', 
    description: 'Proudly supporting diversity in business with personalized, customer-focused service.'
  },
  {
    icon: '🎨',
    title: 'Design Support',
    description: 'Free design consultation and file preparation to ensure your prints look perfect.'
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