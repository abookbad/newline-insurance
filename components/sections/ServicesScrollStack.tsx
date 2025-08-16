"use client";

import React from "react";
import Image from "next/image";
import Section from "@/components/ui/Section";

type Item = {
  id: string;
  number: string;
  title: string;
  blurb: string;
  ctaHref: string;
  image: { src: string; alt: string };
};

const ITEMS: Item[] = [
  {
    id: "debt",
    number: "01",
    title: "Debt Reset Plan",
    blurb:
      "A clear payoff strategy to tackle high‑interest balances and free up cash flow for savings and protection.",
    ctaHref: "/resources",
    image: { src: "/services/tax-strategy.jpeg", alt: "Arrow dropping on a red chart" },
  },
  {
    id: "byob",
    number: "02",
    title: "Smart Liquidity",
    blurb:
      "Use policy designs and cash values strategically for access to funds and flexibility when life happens.",
    ctaHref: "/services/estate-legacy-planning",
    image: { src: "/services/insurance-planning.jpeg", alt: "People reviewing finances together" },
  },
  {
    id: "taxfree",
    number: "03",
    title: "Tax‑Savvy Retirement",
    blurb:
      "Build retirement income with tax awareness—balancing accounts and insurance to keep more of what you earn.",
    ctaHref: "/services/retirement-planning",
    image: { src: "/services/retirement-investment.jpeg", alt: "Smiling couple reviewing retirement plan" },
  },
  {
    id: "guides",
    number: "04",
    title: "Quick Guides Library",
    blurb:
      "Straight‑to‑the‑point explainers on life insurance, retirement, taxes, debt strategies, and credit basics.",
    ctaHref: "/resources",
    image: { src: "/services/business-owner.jpeg", alt: "Person budgeting at a desk" },
  },
];

export default function ServicesScrollStack() {
  const STACK_GAP_PX = 120; // vertical offset between stacked cards
  const CARD_SAFETY_PX = 560; // extra height so last sticky card fully clears before next section
  const wrapperStyle: React.CSSProperties = {
    height: `calc(100vh + ${(ITEMS.length - 1) * STACK_GAP_PX + CARD_SAFETY_PX}px)`,
  };
  return (
    <Section id="services-stack" className="py-8 sm:py-12">
      <div className="relative" style={wrapperStyle}>
        {ITEMS.map((it, index) => (
          <article
            key={it.id}
            className="sticky mx-auto grid w-full max-w-6xl gap-6 md:grid-cols-2 items-center rounded-2xl border border-black/10 bg-white p-4 md:p-5 shadow-md"
            style={{ top: `${index * STACK_GAP_PX}px`, zIndex: index + 1 }}
          >
            {
              index % 2 === 1 ? (
                <>
                  <div className="px-1 relative z-10 order-2 md:order-1">
                    <div className="text-[11px] tracking-[0.3em] uppercase text-black/60">{it.number}</div>
                    <h3 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight text-[var(--brand)]">{it.title}</h3>
                    <p className="mt-3 text-black/70">{it.blurb}</p>
                    <div className="mt-5 flex items-center gap-3">
                      <a
                        href={it.ctaHref}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-[12px] border border-black/20 bg-black/10 text-[var(--brand)] hover:bg-black/15 focus-visible:ring-2 focus-visible:ring-[var(--brand)] focus-visible:ring-offset-2"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                          <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>
                      <a href={it.ctaHref} className="uppercase tracking-widest text-sm text-[var(--brand)] hover:opacity-80">
                        Learn More
                      </a>
                    </div>
                  </div>
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl order-1 md:order-2">
                    <Image src={it.image.src} alt={it.image.alt} fill className="object-cover" />
                  </div>
                </>
              ) : (
                <>
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
                    <Image src={it.image.src} alt={it.image.alt} fill className="object-cover" />
                  </div>
                  <div className="px-1 relative z-10">
                    <div className="text-[11px] tracking-[0.3em] uppercase text-black/60">{it.number}</div>
                    <h3 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight text-[var(--brand)]">{it.title}</h3>
                    <p className="mt-3 text-black/70">{it.blurb}</p>
                    <div className="mt-5 flex items-center gap-3">
                      <a
                        href={it.ctaHref}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-[12px] border border-black/20 bg-black/10 text-[var(--brand)] hover:bg-black/15 focus-visible:ring-2 focus-visible:ring-[var(--brand)] focus-visible:ring-offset-2"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                          <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>
                      <a href={it.ctaHref} className="uppercase tracking-widest text-sm text-[var(--brand)] hover:opacity-80">
                        Learn More
                      </a>
                    </div>
                  </div>
                </>
              )
            }
          </article>
        ))}
      </div>
    </Section>
  );
}


