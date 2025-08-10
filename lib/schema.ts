type JsonLd = Record<string, unknown>;

const orgBase = {
  "@context": "https://schema.org",
  name: "Newline Financial and Insurance Solutions",
  telephone: "+1-951-704-9422",
  url: "https://www.newline-financial.com",
};

export const insuranceAgencySchema = (): JsonLd => ({
  "@type": "InsuranceAgency",
  ...orgBase,
  areaServed: "United States",
  sameAs: [
    // Add social profiles if available in the future
  ],
  makesOffer: [
    { "@type": "Offer", name: "Life Insurance with Living Benefits" },
    { "@type": "Offer", name: "Medicare Assistance" },
    { "@type": "Offer", name: "Retirement Planning" },
  ],
});

export const localBusinessSchema = (): JsonLd => ({
  "@type": "LocalBusiness",
  ...orgBase,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "08:00",
      closes: "18:00",
    },
  ],
});

export const buildJsonLd = (): JsonLd[] => [
  insuranceAgencySchema(),
  localBusinessSchema(),
];

