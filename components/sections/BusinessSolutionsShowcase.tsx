"use client";

import React from "react";
import Image from "next/image";
import Section from "@/components/ui/Section";

type Item = {
  title: string;
  blurb: string;
  href: string;
  image: { src: string; alt: string };
};

const ITEMS: Item[] = [
  {
    title: "Business planning",
    blurb: "Continuity, key person, and buy‑sell strategies to protect owners and operations.",
    href: "/contact?topic=business-planning",
    image: { src: "/business-solutions/business-planning.jpeg", alt: "Business partners planning together" },
  },
  {
    title: "Group Benefits",
    blurb: "Attract and retain talent with benefits designed for your budget.",
    href: "/contact?topic=group-benefits",
    image: { src: "/business-solutions/group-benefits.jpeg", alt: "Team discussing benefits options" },
  },
  {
    title: "Retirement solutions",
    blurb: "Plan design, costs, and fiduciary awareness for employer retirement plans.",
    href: "/services/retirement-planning",
    image: { src: "/business-solutions/retirement-solutions.jpeg", alt: "Retirement plan documents on a desk" },
  },
  {
    title: "Strategic Tax Planning",
    blurb: "Coordinate with tax pros to align structure, benefits, and distributions.",
    href: "/services/tax-strategy",
    image: { src: "/business-solutions/strategic-tax-planning.jpeg", alt: "Analyzing tax strategy" },
  },
];

export default function BusinessSolutionsShowcase() {
  const [active, setActive] = React.useState<number | null>(null);

  return (
    <Section id="business-solutions" title="Business Solutions" subtitle="Explore how we help employers protect and grow">
      {/* Full-bleed wrapper to span entire viewport width */}
      <div style={{ marginLeft: "calc(50% - 50vw)", marginRight: "calc(50% - 50vw)" }}>
      {/* Desktop expanding panels */}
      <div
        className="hidden md:flex gap-3 select-none px-3 md:px-4"
        onMouseLeave={() => setActive(null)}
      >
        {ITEMS.map((item, idx) => {
          const isActive = active === idx;
          return (
            <a
              key={item.title}
              href={item.href}
              className={[
                "relative overflow-hidden rounded-2xl border glass-border shadow-sm",
                "transition-[flex-grow] duration-900 ease-[cubic-bezier(0.22,1,0.36,1)]",
                isActive ? "flex-[3]" : active == null ? "flex-1" : "flex-[0.8]",
                "h-64 lg:h-80",
              ].join(" ")}
              onMouseEnter={() => setActive(idx)}
              onFocus={() => setActive(idx)}
              onBlur={() => setActive(null)}
            >
              <Image src={item.image.src} alt={item.image.alt} fill className="object-cover" />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 grid place-items-center text-center px-6">
                <div>
                  <div className="text-white text-lg font-semibold tracking-wide uppercase">
                    {item.title}
                  </div>
                  <p
                    className={[
                      "mt-2 text-white/85 max-w-md mx-auto transition-all duration-500 ease-out",
                      "hidden lg:block",
                      isActive ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1",
                    ].join(" ")}
                  >
                    {item.blurb}
                  </p>
                  <span
                    className={[
                      "inline-block mt-3 rounded-[12px] border border-white/60 text-white/95 px-3 py-1 text-sm transition-opacity duration-500",
                      isActive ? "opacity-100" : "opacity-0",
                    ].join(" ")}
                  >
                    View all
                  </span>
                </div>
              </div>
            </a>
          );
        })}
      </div>

      {/* Mobile grid */}
      <div className="grid md:hidden gap-3 grid-cols-2 px-3">
        {ITEMS.map((item) => (
          <a key={item.title} href={item.href} className="relative rounded-2xl overflow-hidden h-40 border glass-border shadow-sm">
            <Image src={item.image.src} alt={item.image.alt} fill className="object-cover" />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 grid place-items-center text-center px-3">
              <div className="text-white text-sm font-semibold uppercase">{item.title}</div>
            </div>
          </a>
        ))}
      </div>
      </div>
    </Section>
  );
}


