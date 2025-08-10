import type { Metadata } from "next";

export const site = {
  name: "Newline Financial and Insurance Solutions",
  phone: "(951) 704-9422",
  url: "https://www.newline-financial.com",
  description:
    "Trusted life insurance with living benefits, Medicare assistance, and retirement planning. Clear guidance from licensed experts.",
};

export const baseOpenGraph = {
  type: "website",
  title: site.name,
  description: site.description,
  url: site.url,
  siteName: site.name,
};

export const buildMetadata = (): Metadata => ({
  title: {
    default: site.name,
    template: "%s · Newline Financial",
  },
  description: site.description,
  metadataBase: new URL(site.url),
  openGraph: {
    ...baseOpenGraph,
    images: [
      {
        url: "/mainPage/hero/lifeInsuranceHeroBG.jpeg",
        width: 1200,
        height: 630,
        alt: "Newline Financial and Insurance Solutions",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    images: ["/mainPage/hero/lifeInsuranceHeroBG.jpeg"],
  },
  alternates: {
    canonical: "/",
  },
});

export type { Metadata };

