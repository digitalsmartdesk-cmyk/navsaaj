// Brand config — the knobs that differ between drop-model storefronts (Vasavi here;
// Aaranya's saree site follows the same pattern in its own repo).
export const brand = {
  name: 'Vasavi',
  wordmark: 'VASAVI',
  unit: 'set',
  unitPlural: 'sets',
  orderPrefix: 'VAS-',
  editStart: new Date(2026, 7, 3), // Aug 3, 2026
  editWindowDays: 60,
  basePrice: 32000,
  priceStep: 4200,

  nav: {
    editLabel: 'The Edit — 40 Sets',
    artisansLabel: 'Our Artisans',
  },

  copy: {
    heroEyebrow: 'The 2026 Bridal Edit',
    heroHeadline: ['Forty lehengas.', 'Sixty days.', 'Then, gone.'],
    heroBody:
      'Each edit is hand-embroidered across our partner ateliers in Surat, Kutch, Jaipur, Lucknow and Varanasi — forty sets, individually numbered, never remade once the collection closes.',
    heroCtaPrimary: 'View The 40 Sets',
    heroCtaSecondary: 'Our Craft Story',
    heroPlaceholder: 'Hero photo — bride in flagship zardozi lehenga, editorial lighting',

    whyOnlyTitle: 'Why only forty',
    whyCards: [
      {
        number: '01',
        title: 'Individually numbered',
        body: 'Every design is crafted in a strict run of ten sets, each carrying its own number on a silk label and certificate of authenticity.',
      },
      {
        number: '02',
        title: 'Hand-embroidered, not remade',
        body: "Once a design's ten sets are complete, the atelier moves on. No reissues, no restocks — ever.",
      },
      {
        number: '03',
        title: 'A new edit every 60 days',
        body: 'When the countdown ends, this collection retires permanently and a new edit of forty takes its place.',
      },
    ],

    fromThisEdit: 'From this edit',
    viewAllCta: 'View all 40 sets',

    collectionEyebrowPrefix: 'Bridal Edit',
    collectionTitle: 'The 40 Sets',
    collectionSubtitle: "Forty sets, each numbered 1–40. When they're gone, this edit is retired.",
    collectionCrumb: 'The 40 Sets',

    craftedInLabel: 'Crafted in',
    inclusiveOfTaxes: 'inclusive of taxes',
    lowStockSuffix: (n) => `Only ${n} of 10 sets remain in this design`,
    closesSuffix: 'not restocked after sellout',
    theMakerHeading: 'The artisan',
    moreFromPrefix: 'More from',

    bagTitle: 'Your Bag',
    bagEmpty: 'Your bag is empty.',
    browseAllCta: 'Browse the 40 sets',
    shipsWithCert: 'Each set ships with its certificate of authenticity',

    checkoutTitle: 'Checkout',
    blouseSizeLabel: 'Blouse size (for made-to-measure stitching)',
    blouseSizePlaceholder: 'e.g. S / M / L / Custom bust-waist-hip',

    confirmedBody: (orderNumber, totalLabel) =>
      `Order ${orderNumber} for ${totalLabel} is being prepared. Each set will arrive with its certificate of authenticity and edition card.`,
    continueBrowsing: 'Continue Browsing',

    artisansEyebrow: 'Our Artisans',
    artisansHeadline: ['Five ateliers.', 'One promise.'],
    artisansBody:
      'Every Vasavi edit is hand-crafted by five partner artisan collectives, each behind one of our ongoing lines. We commission by hand, pay above market rate, and never rush a design to meet a deadline.',
    artisansHeroPlaceholder: 'Photo — artisan hand-embroidering, Surat atelier',
    artisansRowSuffix: 'An ongoing line, revisited with eight new designs in every edit.',

    footerTagline: 'Crafted in India',
  },

  // Color tokens live as CSS custom properties in index.css (:root), not here —
  // components consume them via var(--accent) etc. rather than importing this object.
};
