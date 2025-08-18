"use client";

import React from "react";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { Shield, PieChart, ScrollText, Calculator, BriefcaseBusiness, PiggyBank, Activity } from "lucide-react";

type Item = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  text: string;
  href: string;
};

const ITEMS: Item[] = [
  { icon: Shield, title: "Insurance planning", text: "Term, whole, indexed options—fit to your goals and budget.", href: "/services/insurance-planning" },
  { icon: PieChart, title: "Retirement planning", text: "Income design, rollovers, and risk‑aware investing.", href: "/services/retirement-planning" },
  { icon: ScrollText, title: "Estate & Legacy Planning", text: "Coordinate documents, titling, and beneficiary strategy.", href: "/services/estate-legacy-planning" },
  { icon: Calculator, title: "Strategic Tax Planning", text: "Coordinate with tax pros to improve after‑tax outcomes.", href: "/services/tax-strategy" },
  { icon: Activity, title: "Investment Planning", text: "Goal‑based portfolios with guardrails and tax awareness.", href: "/services/investment-planning" },
  { icon: BriefcaseBusiness, title: "Real Estate Planning", text: "Integrate properties with cash flow, taxes, and legacy.", href: "/services/real-estate-planning" },
  { icon: PiggyBank, title: "Business planning", text: "Entity, benefits, and continuity strategies.", href: "/contact?topic=business-planning" },
];

export default function PlanningServices() {
  return (
    <Section id="planning-services" title="Planning Services" subtitle="Clarity across insurance, retirement, taxes, and legacy">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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


