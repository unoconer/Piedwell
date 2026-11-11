/**
 * ============================================================================
 *  PIEDWELL — SITE & BUSINESS CONFIGURATION
 *  Single source of truth for the page, footer, structured data (JSON-LD),
 *  sitemap and canonical URLs.
 * ============================================================================
 *
 *  - `null` means "not provided yet". Required items show a marked placeholder
 *    on the page and are listed when you run `node build.mjs`.
 *  - `STRICT=1 node build.mjs` fails while required launch items are missing.
 *  - Nothing here is invented. Never add private data (EIN, home address).
 * ============================================================================
 */

export default {
  site: {
    url: 'https://piedwell.netlify.app', // no trailing slash
    googleSiteVerification: null, // Search Console HTML-tag "content" value
    locale: 'en_US',
    language: 'en-US',
  },

  business: {
    legalName: null, // PRIVATE — schema only, and only if different from publicName
    publicName: 'Piedwell',
    tagline: 'Solo & Self-Directed 401(k) Plan Support',
    publicNameConfirmed: false, // true once the assumed business name certificate is filed (Mecklenburg County Register of Deeds)
    owner: null, // optional
    foundingYear: null,

    phone: '(704) 666-9328',
    phoneE164: '+17046669328',
    email: null, // optional — hidden until set; visitors use the contact form

    /**
     * "office": a staffed storefront office that receives clients during the
     * posted hours (Google Business Profile "Local store"). The address shows
     * on the site, the map appears and storefront schema is output ONLY once
     * streetAddress and postalCode are real. Until then, marked placeholders.
     */
    locationType: 'office',
    address: {
      streetAddress: '10101 David Taylor Dr #101', // real, staffed office
      addressLocality: 'Charlotte',
      addressRegion: 'NC',
      postalCode: '28262',
      addressCountry: 'US',
    },
    geo: null, // real coordinates of the office only
    serviceArea: ['Charlotte, NC'],

    hours: [
      { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '17:00' },
    ],
    hoursNote: 'Office meetings by appointment.',
    timeZoneLabel: 'Eastern Time',

    sameAs: [],
  },

  /** All confirmed by the owner. */
  services: {
    education: { offered: true },
    solo401k: { offered: true },
    planSetup: { offered: true },
    filing: { offered: true },
    recordkeeping: { offered: true },
    ongoing: { offered: true },
    consultation: { offered: true },
  },

  team: [],
  about: { story: null, professionalBackground: null },
  form: { name: 'consultation' },
  analytics: { plausibleDomain: null },

  /** MEDIA — self-hosted, people-free imagery in src/assets/media/. */
  media: {
    // No verified Charlotte video on Pexels — the hero uses a slow-zoom photo instead.
    // Pexels photo 33971181 — Charlotte skyline above the tree canopy (Pexels License)
    heroVideo: { webm: null, mp4: null, poster: '/assets/media/hero.webp' },
    // Stock photos from Pexels (Pexels License), no identifiable people — sources in docs/MEDIA.md
    images: {
      sunset: { src: '/assets/media/sunset.webp', pos: '50% 40%', alt: 'Uptown Charlotte skyline glowing at sunset' },
      tower: { src: '/assets/media/tower.webp', pos: '35% 40%', alt: 'Charlotte skyscraper at sunset above the city' },
      canopy: { src: '/assets/media/canopy.webp', pos: '50% 50%', alt: 'Tree-lined road in Charlotte seen from above' },
    },
  },
};
