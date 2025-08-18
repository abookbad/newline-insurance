"use client";

import React from "react";
import Image from "next/image";
import Section from "@/components/ui/Section";

type Item = {
  title: string;
  href: string;
  image: { src: string; alt: string };
};

const TOP_ROW: Item[] = [
  { title: "Insurance planning", href: "/solutions/planning/insurance-planning", image: { src: "/solutions/planning/insurance.jpeg", alt: "Insurance planning" } },
  { title: "Retirement planning", href: "/solutions/planning/retirement-planning", image: { src: "/solutions/planning/retirement.jpeg", alt: "Retirement planning" } },
  { title: "College planning", href: "/solutions/planning/college-planning", image: { src: "/solutions/planning/college.jpeg", alt: "College planning" } },
  { title: "Estate & Legacy Planning", href: "/solutions/planning/estate-legacy-planning", image: { src: "/solutions/planning/estate-and-legacy.jpeg", alt: "Estate & legacy planning" } },
];

const BOTTOM_ROW: Item[] = [
  { title: "Strategic Tax Planning", href: "/solutions/planning/tax-strategy", image: { src: "/solutions/planning/strategic-tax.jpeg", alt: "Tax strategy" } },
  { title: "Business planning", href: "/solutions/planning/business-planning", image: { src: "/solutions/planning/business.jpeg", alt: "Business planning" } },
  { title: "Investment Planning", href: "/solutions/planning/investment-planning", image: { src: "/solutions/planning/investment.jpeg", alt: "Investment planning" } },
  { title: "Real Estate Planning", href: "/solutions/planning/real-estate-planning", image: { src: "/solutions/planning/real-estate.jpeg", alt: "Real estate planning" } },
];

function Row({ items }: { items: Item[] }) {
  const [active, setActive] = React.useState<number | null>(null);
  return (
    <div className="flex gap-3 select-none" onMouseLeave={() => setActive(null)}>
      {items.map((item, idx) => {
        const isActive = active === idx;
        return (
          <a
            key={item.title}
            href={item.href}
            aria-label={item.title}
            onMouseEnter={() => setActive(idx)}
            onFocus={() => setActive(idx)}
            className={[
              "relative overflow-hidden rounded-2xl border glass-border shadow-sm h-48 md:h-60 lg:h-72",
              "transition-[flex-grow] duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
              isActive ? "flex-[3]" : active == null ? "flex-1" : "flex-[0.9]",
            ].join(" ")}
          >
            <Image src={item.image.src} alt={item.image.alt} fill className="object-cover" />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 grid place-items-center text-center px-4">
              <div className="text-white text-base md:text-lg font-semibold uppercase tracking-wide">
                {item.title}
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
}

export default function PlanningServicesShowcase() {
  return (
    <Section id="planning-services" title="Planning Services" subtitle="Explore our planning services by focus area">
      {/* Full-bleed container */}
      <div style={{ marginLeft: "calc(50% - 50vw)", marginRight: "calc(50% - 50vw)" }}>
        <div className="px-3 md:px-4 space-y-3">
          <Row items={TOP_ROW} />
          <Row items={BOTTOM_ROW} />
        </div>
      </div>
    </Section>
  );
}


