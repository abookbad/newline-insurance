"use client";

import React from "react";
import Image from "next/image";
import Section from "@/components/ui/Section";

type Item = {
  id: string;
  title: string;
  blurb: string;
  href: string;
  image: { src: string; alt: string };
};

const ITEMS: Item[] = [
  {
    id: "life",
    title: "Life insurance",
    blurb: "Term, Whole Life, and Indexed UL options—with living benefits and final expense choices.",
    href: "/products/life-insurance",
    image: { src: "/services/insurance-planning.jpeg", alt: "Family reviewing life insurance" },
  },
  {
    id: "medicare",
    title: "Medicare",
    blurb: "Part A & B, Med Supp, Medi‑Medi, and Part C Advantage plans explained in plain English.",
    href: "/products/medicare",
    image: { src: "/services/retirement-investment.jpeg", alt: "Advisor reviewing Medicare" },
  },
  {
    id: "ltc",
    title: "Long‑Term Care",
    blurb: "Compare stand‑alone LTC to life policies with LTC riders and when each can fit.",
    href: "/products/long-term-care",
    image: { src: "/services/college-planning.jpeg", alt: "Senior receiving care" },
  },
  {
    id: "disability",
    title: "Disability Insurance",
    blurb: "Occupational versus non‑occupational disability—how income protection works.",
    href: "/products/disability-insurance",
    image: { src: "/services/business-owner.jpeg", alt: "Professional at work" },
  },
];

export default function InsuranceSolutionsShowcase() {
  const [active, setActive] = React.useState<number | null>(null);

  return (
    <Section id="insurance-solutions" title="Insurance solutions" subtitle="Clear choices across life, Medicare, long‑term care, and disability">
      {/* Full-bleed wrapper to span entire viewport width */}
      <div style={{ marginLeft: "calc(50% - 50vw)", marginRight: "calc(50% - 50vw)" }}>
      <div className="px-3 md:px-4">
      {/* Expanding tiles */}
      <div className="hidden md:flex gap-3 select-none" onMouseLeave={() => setActive(null)}>
        {ITEMS.map((item, idx) => {
          const isActive = active === idx;
          return (
            <a
              key={item.id}
              href={item.href}
              aria-label={item.title}
              onMouseEnter={() => setActive(idx)}
              onFocus={() => setActive(idx)}
              className={[
                "relative overflow-hidden rounded-2xl border glass-border shadow-sm h-64 lg:h-80",
                "transition-[flex-grow] duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
                isActive ? "flex-[3]" : active == null ? "flex-1" : "flex-[0.9]",
              ].join(" ")}
            >
              <Image src={item.image.src} alt={item.image.alt} fill className="object-cover" />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 grid place-items-center text-center px-6">
                <div>
                  <div className="text-white text-lg font-semibold tracking-wide uppercase">{item.title}</div>
                  <p className={["hidden lg:block mt-2 text-white/85 max-w-md mx-auto transition-opacity duration-700", isActive ? "opacity-100" : "opacity-0"].join(" ")}>{item.blurb}</p>
                </div>
              </div>
            </a>
          );
        })}
      </div>

      {/* Mobile simple grid */}
      <div className="grid md:hidden gap-3 grid-cols-2">
        {ITEMS.map((item, idx) => (
          <a key={item.id} href={item.href} className="relative rounded-2xl overflow-hidden h-40 border glass-border shadow-sm">
            <Image src={item.image.src} alt={item.image.alt} fill className="object-cover" />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 grid place-items-center text-center px-3">
              <div className="text-white text-sm font-semibold uppercase">{item.title}</div>
            </div>
          </a>
        ))}
      </div>
      </div>
      </div>

    </Section>
  );
}


