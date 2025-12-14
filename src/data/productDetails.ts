// Detailed product information for individual product pages

export interface ProductDetail {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  features: {
    id: number;
    title: string;
    description: string;
  }[];
  specifications?: {
    material?: string;
    sizes?: string[];
    finish?: string;
    printing?: string;
  };
  cta: {
    text: string;
    action: string;
  };
}

export const productDetailsData: ProductDetail[] = [
  // Packaging Products
  {
    id: 'pack-paper-bags',
    title: 'Paper Bags',
    subtitle: 'PACKAGING SOLUTIONS / PAPER BAGS',
    category: 'packaging',
    image: '/packaging/paper_bags.png',
    features: [
      {
        id: 1,
        title: 'Eco-friendly materials',
        description: 'made from sustainable and biodegradable paper'
      },
      {
        id: 2,
        title: 'Custom printing options',
        description: 'with vibrant colors and professional branding'
      },
      {
        id: 3,
        title: 'Various sizes available',
        description: 'suitable for retail stores and businesses'
      }
    ],
    specifications: {
      material: 'High-quality kraft paper',
      sizes: ['Small (8"x10")', 'Medium (12"x15")', 'Large (16"x20")', 'Custom sizes'],
      finish: 'Matte or Gloss finish',
      printing: 'Full Color CMYK + Spot Colors'
    },
    cta: {
      text: 'Get a Quote',
      action: 'quote'
    }
  },
  {
    id: 'pack-boxes',
    title: 'Custom Boxes',
    subtitle: 'PACKAGING SOLUTIONS / BOXES',
    category: 'packaging',
    image: '/packaging/custom_boxes.png',
    features: [
      {
        id: 1,
        title: 'Sturdy construction',
        description: 'protects products during shipping and storage'
      },
      {
        id: 2,
        title: 'Professional printing',
        description: 'showcases your brand with high-quality graphics'
      },
      {
        id: 3,
        title: 'Custom sizing',
        description: 'tailored to fit your specific products'
      }
    ],
    specifications: {
      material: 'Corrugated cardboard (Various weights)',
      sizes: ['Small (6"x6"x4")', 'Medium (12"x9"x6")', 'Large (18"x12"x8")', 'Custom sizes'],
      finish: 'Matte or Gloss lamination',
      printing: 'Offset printing with UV coating'
    },
    cta: {
      text: 'Get a Quote',
      action: 'quote'
    }
  },
  {
    id: 'pack-containers',
    title: 'Food Containers',
    subtitle: 'PACKAGING SOLUTIONS / CONTAINERS',
    category: 'packaging',
    image: '/packaging/food_containers.png',
    features: [
      {
        id: 1,
        title: 'Food-safe materials',
        description: 'meets all safety standards for food packaging'
      },
      {
        id: 2,
        title: 'Custom branding',
        description: 'professional logos and designs available'
      },
      {
        id: 3,
        title: 'Leak-resistant design',
        description: 'secure closure for liquids and solids'
      }
    ],
    cta: {
      text: 'Get a Quote',
      action: 'quote'
    }
  },
  {
    id: 'pack-labels',
    title: 'Product Labels',
    subtitle: 'PACKAGING SOLUTIONS / LABELS',
    category: 'packaging',
    image: '/packaging/product_labels.png',
    features: [
      {
        id: 1,
        title: 'Waterproof materials',
        description: 'suitable for various environmental conditions'
      },
      {
        id: 2,
        title: 'Strong adhesive',
        description: 'ensures labels stay put on different surfaces'
      },
      {
        id: 3,
        title: 'Custom shapes',
        description: 'die-cut to any shape or size you need'
      }
    ],
    cta: {
      text: 'Get a Quote',
      action: 'quote'
    }
  },
  {
    id: 'pack-takeaway-boxes',
    title: 'Takeaway Boxes',
    subtitle: 'PACKAGING SOLUTIONS / FOOD BOXES',
    category: 'packaging',
    image: '/packaging/takeaway_boxes.png',
    features: [
      {
        id: 1,
        title: 'Food-grade safety',
        description: 'compliant with food packaging regulations'
      },
      {
        id: 2,
        title: 'Heat resistant',
        description: 'suitable for hot and cold food items'
      },
      {
        id: 3,
        title: 'Custom branding',
        description: 'promote your restaurant with every order'
      }
    ],
    cta: {
      text: 'Get a Quote',
      action: 'quote'
    }
  },
  {
    id: 'pack-pamphlets',
    title: 'Company Pamphlets',
    subtitle: 'PACKAGING SOLUTIONS / MARKETING',
    category: 'packaging',
    image: '/packaging/company_pamphlets.png',
    features: [
      {
        id: 1,
        title: 'High-quality printing',
        description: 'crisp text and vibrant images'
      },
      {
        id: 2,
        title: 'Professional design',
        description: 'layout assistance available'
      },
      {
        id: 3,
        title: 'Multiple formats',
        description: 'bi-fold, tri-fold, and custom options'
      }
    ],
    cta: {
      text: 'Get a Quote',
      action: 'quote'
    }
  },
  {
    id: 'pack-tags',
    title: 'Customized Tags',
    subtitle: 'PACKAGING SOLUTIONS / TAGS',
    category: 'packaging',
    image: '/packaging/customized_tags.png',
    features: [
      {
        id: 1,
        title: 'Premium materials',
        description: 'high-quality cardstock and specialty papers'
      },
      {
        id: 2,
        title: 'Custom shapes',
        description: 'die-cut to your exact specifications'
      },
      {
        id: 3,
        title: 'Professional finishing',
        description: 'foiling, embossing, and specialty coatings'
      }
    ],
    cta: {
      text: 'Get a Quote',
      action: 'quote'
    }
  },
  // Merchandise Products
  {
    id: 'merch-desk-calendars',
    title: 'Desk Calendars',
    subtitle: 'MERCHANDISE / OFFICE SUPPLIES',
    category: 'merchandise',
    image: '/merchandise/desk_calendars.png',
    features: [
      {
        id: 1,
        title: 'Year-round visibility',
        description: 'keeps your brand visible all year long'
      },
      {
        id: 2,
        title: 'High-quality printing',
        description: 'vibrant colors and sharp images'
      },
      {
        id: 3,
        title: 'Professional binding',
        description: 'spiral or wire-o binding options'
      }
    ],
    cta: {
      text: 'Get a Quote',
      action: 'quote'
    }
  },
  {
    id: 'merch-note-pads',
    title: 'Custom Note Pads',
    subtitle: 'MERCHANDISE / OFFICE SUPPLIES',
    category: 'merchandise',
    image: '/merchandise/custom_note_pads.png',
    features: [
      {
        id: 1,
        title: 'Custom branding',
        description: 'your logo on every page'
      },
      {
        id: 2,
        title: 'Quality paper',
        description: 'smooth writing surface'
      },
      {
        id: 3,
        title: 'Professional appearance',
        description: 'perfect for client meetings'
      }
    ],
    cta: {
      text: 'Get a Quote',
      action: 'quote'
    }
  },
  {
    id: 'merch-magazine',
    title: 'Magazine Printing',
    subtitle: 'MERCHANDISE / PUBLICATIONS',
    category: 'merchandise',
    image: '/merchandise/magazine_printing.png',
    features: [
      {
        id: 1,
        title: 'Premium paper quality',
        description: 'glossy or matte finish options'
      },
      {
        id: 2,
        title: 'Professional binding',
        description: 'saddle-stitched or perfect bound'
      },
      {
        id: 3,
        title: 'Vibrant colors',
        description: 'high-quality offset printing'
      }
    ],
    cta: {
      text: 'Get a Quote',
      action: 'quote'
    }
  },
  {
    id: 'merch-pen-stands',
    title: 'Custom Pen Stands',
    subtitle: 'MERCHANDISE / OFFICE ACCESSORIES',
    category: 'merchandise',
    image: '/merchandise/custom_pen_stands.png',
    features: [
      {
        id: 1,
        title: 'Elegant design',
        description: 'professional appearance for any office'
      },
      {
        id: 2,
        title: 'Custom branding',
        description: 'laser engraving or printing options'
      },
      {
        id: 3,
        title: 'Durable materials',
        description: 'wood, acrylic, or metal construction'
      }
    ],
    cta: {
      text: 'Get a Quote',
      action: 'quote'
    }
  },
  {
    id: 'merch-paper-bags',
    title: 'Personalized Paper Bags',
    subtitle: 'MERCHANDISE / PROMOTIONAL',
    category: 'merchandise',
    image: '/merchandise/personalized_paper_bags.png',
    features: [
      {
        id: 1,
        title: 'Eco-friendly materials',
        description: 'sustainable and environmentally conscious'
      },
      {
        id: 2,
        title: 'Custom designs',
        description: 'full-color printing with your branding'
      },
      {
        id: 3,
        title: 'Various sizes',
        description: 'perfect for events and retail stores'
      }
    ],
    cta: {
      text: 'Get a Quote',
      action: 'quote'
    }
  },
  {
    id: 'merch-mugs',
    title: 'Customized Mugs',
    subtitle: 'MERCHANDISE / DRINKWARE',
    category: 'merchandise',
    image: '/merchandise/customized_mugs.png',
    features: [
      {
        id: 1,
        title: 'Premium ceramic',
        description: 'high-quality materials for daily use'
      },
      {
        id: 2,
        title: 'Vibrant printing',
        description: 'colors that won\'t fade with washing'
      },
      {
        id: 3,
        title: 'Perfect for gifts',
        description: 'ideal for corporate and promotional use'
      }
    ],
    cta: {
      text: 'Get a Quote',
      action: 'quote'
    }
  },
  {
    id: 'merch-certificates',
    title: 'Professional Certificates',
    subtitle: 'MERCHANDISE / AWARDS',
    category: 'merchandise',
    image: '/merchandise/professional_certificates.png',
    features: [
      {
        id: 1,
        title: 'Premium paper quality',
        description: 'heavyweight paper with elegant texture'
      },
      {
        id: 2,
        title: 'Professional design',
        description: 'custom layouts and typography'
      },
      {
        id: 3,
        title: 'Formal presentation',
        description: 'perfect for awards and recognition'
      }
    ],
    cta: {
      text: 'Get a Quote',
      action: 'quote'
    }
  },
  {
    id: 'merch-diaries',
    title: 'Customized Diaries',
    subtitle: 'MERCHANDISE / PLANNERS',
    category: 'merchandise',
    image: '/merchandise/customized_diaries.png',
    features: [
      {
        id: 1,
        title: 'Custom cover design',
        description: 'personalized with your logo and colors'
      },
      {
        id: 2,
        title: 'Quality binding',
        description: 'durable construction for daily use'
      },
      {
        id: 3,
        title: 'Functional layouts',
        description: 'monthly and weekly planning pages'
      }
    ],
    cta: {
      text: 'Get a Quote',
      action: 'quote'
    }
  },
  // Commercial Prints Products
  {
    id: 'comm-wedding-cards',
    title: 'Wedding Cards',
    subtitle: 'COMMERCIAL PRINTS / INVITATIONS',
    category: 'commercial-prints',
    image: '/commercial_prints/wedding_cards.png',
    features: [
      {
        id: 1,
        title: 'Premium paper quality',
        description: 'elegant textures and luxury finishes'
      },
      {
        id: 2,
        title: 'Beautiful designs',
        description: 'custom layouts for your special day'
      },
      {
        id: 3,
        title: 'Professional printing',
        description: 'crisp details and vibrant colors'
      }
    ],
    cta: {
      text: 'Get a Quote',
      action: 'quote'
    }
  },
  {
    id: 'comm-wall-calendars',
    title: 'Wall Calendars',
    subtitle: 'COMMERCIAL PRINTS / CALENDARS',
    category: 'commercial-prints',
    image: '/commercial_prints/wall_calendars.png',
    features: [
      {
        id: 1,
        title: 'Large format printing',
        description: 'high-quality graphics and images'
      },
      {
        id: 2,
        title: 'Durable materials',
        description: 'suitable for year-round use'
      },
      {
        id: 3,
        title: 'Custom layouts',
        description: 'personalized with your branding'
      }
    ],
    cta: {
      text: 'Get a Quote',
      action: 'quote'
    }
  },
  {
    id: 'comm-business-cards',
    title: 'Business Cards',
    subtitle: 'COMMERCIAL PRINTS / BUSINESS MATERIALS',
    category: 'commercial-prints',
    image: '/commercial_prints/business_cards.png',
    features: [
      {
        id: 1,
        title: 'Premium cardstock',
        description: 'professional feel and appearance'
      },
      {
        id: 2,
        title: 'Precision cutting',
        description: 'perfect edges every time'
      },
      {
        id: 3,
        title: 'Quick turnaround',
        description: 'fast delivery without compromising quality'
      }
    ],
    cta: {
      text: 'Get a Quote',
      action: 'quote'
    }
  },
  {
    id: 'comm-uv-business-cards',
    title: 'UV Business Cards',
    subtitle: 'COMMERCIAL PRINTS / PREMIUM CARDS',
    category: 'commercial-prints',
    image: '/commercial_prints/UV_business_cards.png',
    features: [
      {
        id: 1,
        title: 'UV coating finish',
        description: 'enhanced durability and protection'
      },
      {
        id: 2,
        title: 'Vibrant colors',
        description: 'glossy finish makes colors pop'
      },
      {
        id: 3,
        title: 'Professional appearance',
        description: 'makes a lasting impression'
      }
    ],
    cta: {
      text: 'Get a Quote',
      action: 'quote'
    }
  },
  {
    id: 'comm-duplex-business-cards',
    title: 'Duplex Business Cards',
    subtitle: 'COMMERCIAL PRINTS / LUXURY CARDS',
    category: 'commercial-prints',
    image: '/commercial_prints/duplex_business_cards.png',
    features: [
      {
        id: 1,
        title: 'Thick luxury feel',
        description: 'exceptional quality and weight'
      },
      {
        id: 2,
        title: 'Premium materials',
        description: 'high-end cardstock options'
      },
      {
        id: 3,
        title: 'Professional branding',
        description: 'perfect for executive use'
      }
    ],
    cta: {
      text: 'Get a Quote',
      action: 'quote'
    }
  },
  {
    id: 'comm-magazines',
    title: 'Magazines',
    subtitle: 'COMMERCIAL PRINTS / PUBLICATIONS',
    category: 'commercial-prints',
    image: '/commercial_prints/magazines.png',
    features: [
      {
        id: 1,
        title: 'Perfect binding',
        description: 'professional spine and finish'
      },
      {
        id: 2,
        title: 'High-quality paper',
        description: 'glossy or matte options available'
      },
      {
        id: 3,
        title: 'Vibrant printing',
        description: 'excellent color reproduction'
      }
    ],
    cta: {
      text: 'Get a Quote',
      action: 'quote'
    }
  },
  {
    id: 'comm-brochures',
    title: 'Brochures',
    subtitle: 'COMMERCIAL PRINTS / MARKETING',
    category: 'commercial-prints',
    image: '/commercial_prints/brochures.png',
    features: [
      {
        id: 1,
        title: 'Professional folding',
        description: 'precise tri-fold and bi-fold options'
      },
      {
        id: 2,
        title: 'Crisp printing',
        description: 'sharp text and vivid images'
      },
      {
        id: 3,
        title: 'Marketing ready',
        description: 'perfect for promotional campaigns'
      }
    ],
    cta: {
      text: 'Get a Quote',
      action: 'quote'
    }
  },
  {
    id: 'comm-periodicals',
    title: 'Monthly Periodicals',
    subtitle: 'COMMERCIAL PRINTS / PUBLICATIONS',
    category: 'commercial-prints',
    image: '/commercial_prints/monthly_periodicals.png',
    features: [
      {
        id: 1,
        title: 'Consistent quality',
        description: 'reliable monthly production'
      },
      {
        id: 2,
        title: 'Timely delivery',
        description: 'on-schedule publication dates'
      },
      {
        id: 3,
        title: 'Professional layout',
        description: 'newsletter and magazine formats'
      }
    ],
    cta: {
      text: 'Get a Quote',
      action: 'quote'
    }
  },
  {
    id: 'comm-book-work',
    title: 'Book Work',
    subtitle: 'COMMERCIAL PRINTS / BOOK PRINTING',
    category: 'commercial-prints',
    image: '/commercial_prints/book_work.png',
    features: [
      {
        id: 1,
        title: 'Complete book services',
        description: 'from novels to technical manuals'
      },
      {
        id: 2,
        title: 'Various binding options',
        description: 'perfect bound, saddle-stitched, or spiral'
      },
      {
        id: 3,
        title: 'Quality materials',
        description: 'durable covers and interior pages'
      }
    ],
    cta: {
      text: 'Get a Quote',
      action: 'quote'
    }
  },
  // Brand Identity Products
  {
    id: 'brand-standee',
    title: 'Customized Standee',
    subtitle: 'BRAND IDENTITY / DISPLAYS',
    category: 'brand-identity',
    image: '/brand_identity/customized_standee.png',
    features: [
      {
        id: 1,
        title: 'Large format printing',
        description: 'high-resolution graphics for maximum impact'
      },
      {
        id: 2,
        title: 'Durable materials',
        description: 'suitable for exhibitions and events'
      },
      {
        id: 3,
        title: 'Easy setup',
        description: 'portable and user-friendly design'
      }
    ],
    cta: {
      text: 'Get a Quote',
      action: 'quote'
    }
  },
  {
    id: 'brand-badges',
    title: 'Professional Badges',
    subtitle: 'BRAND IDENTITY / IDENTIFICATION',
    category: 'brand-identity',
    image: '/brand_identity/professional_badges.png',
    features: [
      {
        id: 1,
        title: 'Custom designs',
        description: 'personalized with logos and information'
      },
      {
        id: 2,
        title: 'Durable materials',
        description: 'long-lasting for daily use'
      },
      {
        id: 3,
        title: 'Professional appearance',
        description: 'perfect for events and conferences'
      }
    ],
    cta: {
      text: 'Get a Quote',
      action: 'quote'
    }
  },
  {
    id: 'brand-catalogs',
    title: 'Product Catalogs',
    subtitle: 'BRAND IDENTITY / MARKETING',
    category: 'brand-identity',
    image: '/brand_identity/product_catalogs.png',
    features: [
      {
        id: 1,
        title: 'Premium binding',
        description: 'professional presentation for your products'
      },
      {
        id: 2,
        title: 'High-quality paper',
        description: 'excellent color reproduction'
      },
      {
        id: 3,
        title: 'Visual appeal',
        description: 'stunning layouts to showcase products'
      }
    ],
    cta: {
      text: 'Get a Quote',
      action: 'quote'
    }
  }
];

// Helper function to get product details by ID
export const getProductDetails = (id: string): ProductDetail | undefined => {
  return productDetailsData.find(product => product.id === id);
};

// Helper function to get products by category
export const getProductsByCategory = (category: string): ProductDetail[] => {
  return productDetailsData.filter(product => product.category === category);
};