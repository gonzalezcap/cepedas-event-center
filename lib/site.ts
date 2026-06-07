// SINGLE SOURCE OF TRUTH for NAP, nav, and event taxonomy.
// Update here once ZIP / IG handle / hours are confirmed.

export const SITE = {
  name: "Cepedas Event Center",
  tagline: "Tulsa's open event venue for life's biggest moments.",
  url: "https://cepedasec.com",
  phone: "918-830-3692",
  phoneHref: "tel:+19188303692",
  email: "info@cepedasec.com",
  emailHref: "mailto:info@cepedasec.com",
  // CONFIRM ZIP before launch
  address: {
    street: "1444 S 193rd E Ave",
    city: "Tulsa",
    state: "OK",
    zip: "[CONFIRM ZIP]",
    full: "1444 S 193rd E Ave, Tulsa, OK [CONFIRM ZIP]",
  },
  hours: "Hours TBD — by appointment",
  instagram: "@cepedasec", // CONFIRM once live
  instagramUrl: "https://instagram.com/cepedasec",
  serviceAreas: ["Tulsa", "Broken Arrow", "Owasso", "Catoosa"],
};

export const NAV = [
  { label: "Home", href: "/" },
  { label: "Our Spaces", href: "/spaces" },
  { label: "Events We Host", href: "/events" },
  { label: "Gallery", href: "/gallery" },
  { label: "Packages & Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export type EventType = {
  slug: string; // route path
  label: string;
  short: string;
  formValue: string;
};

// NOTE: spec routes some sub-pages at /events/* and some at root.
export const EVENT_TYPES: EventType[] = [
  { slug: "/events/weddings", label: "Weddings", short: "Weddings", formValue: "wedding" },
  { slug: "/quinceaneras", label: "Quinceañeras", short: "Quinceañeras", formValue: "quinceanera" },
  { slug: "/receptions", label: "Receptions", short: "Receptions", formValue: "reception" },
  { slug: "/corporate", label: "Corporate Events", short: "Corporate", formValue: "corporate" },
  { slug: "/banquets", label: "Banquets", short: "Banquets", formValue: "banquet" },
  { slug: "/birthdays", label: "Birthday Parties", short: "Birthdays", formValue: "birthday" },
  { slug: "/anniversaries", label: "Anniversaries", short: "Anniversaries", formValue: "anniversary" },
  { slug: "/holiday-parties", label: "Holiday Parties", short: "Holiday Parties", formValue: "holiday party" },
  { slug: "/fundraisers", label: "Fundraisers", short: "Fundraisers", formValue: "fundraiser" },
  { slug: "/baby-showers", label: "Baby Showers", short: "Baby Showers", formValue: "baby shower" },
];

export const EVENT_FORM_OPTIONS = [
  ...EVENT_TYPES.map((e) => e.formValue),
  "other",
];
