"use client";

import React from "react";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { BriefcaseBusiness, Users, PieChart, Calculator } from "lucide-react";

const ITEMS = [
  {
    icon: BriefcaseBusiness,
    title: "Business planning",
    text: "Continuity, key person coverage, and buy‑sell funding to protect operations and owners.",
    href: "/contact?topic=business-planning",
  },
  {
    icon: Users,
    title: "Group Benefits",
    text: "Benefits packages that help attract and retain talent—built to fit your budget.",
    href: "/contact?topic=group-benefits",
  },
  {
    icon: PieChart,
    title: "Retirement solutions",
    text: "Design or review employer retirement plans with clear costs and fiduciary awareness.",
    href: "/services/retirement-planning",
  },
  {
    icon: Calculator,
    title: "Strategic Tax Planning",
    text: "Coordinate with tax professionals to align entity structure, benefits, and distributions.",
    href: "/services/tax-strategy",
  },
];

export default function BusinessSolutions() {
  return (
    <Section id="business-solutions" title="Business Solutions" subtitle="Protect, optimize, and grow your business">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {ITEMS.map((item) => (
          <a key={item.title} href={item.href} className="block hover-lift">
            <Card className="p-5 h-full">
              <div className="flex items-start gap-3">
                <item.icon className="h-6 w-6" aria-hidden />
                <div>
                  <div className="font-semibold">{item.title}</div>
                  <p className="mt-1 text-sm text-black/70">{item.text}</p>
                </div>
              </div>
            </Card>
          </a>
        ))}
      </div>
    </Section>
  );
}


