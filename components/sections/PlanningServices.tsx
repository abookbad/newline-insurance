"use client";

import React from "react";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { Shield, PieChart, ScrollText, Calculator, BriefcaseBusiness, PiggyBank, Activity, GraduationCap } from "lucide-react";

type Item = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  text: string;
  href: string;
};

// Ordered into two rows of four (top then second row)
const ITEMS: Item[] = [
  // Top row
  { icon: Shield, title: "Insurance planning", text: "Term, whole, indexed options—fit to your goals and budget.", href: "/services/insurance-planning" },
  { icon: PieChart, title: "Retirement planning", text: "Income design, rollovers, and risk‑aware investing.", href: "/services/retirement-planning" },
  { icon: GraduationCap, title: "College planning", text: "Funding strategies and timelines coordinated with your plan.", href: "/services/retirement-planning#college-planning" },
  { icon: ScrollText, title: "Estate & Legacy Planning", text: "Coordinate documents, titling, and beneficiary strategy.", href: "/services/estate-legacy-planning" },
  // Second row
  { icon: Calculator, title: "Strategic Tax Planning", text: "Coordinate with tax pros to improve after‑tax outcomes.", href: "/services/tax-strategy" },
  { icon: PiggyBank, title: "Business planning", text: "Entity, benefits, and continuity strategies.", href: "/contact?topic=business-planning" },
  { icon: Activity, title: "Investment Planning", text: "Goal‑based portfolios with guardrails and tax awareness.", href: "/services/investment-planning" },
  { icon: BriefcaseBusiness, title: "Real Estate Planning", text: "Integrate properties with cash flow, taxes, and legacy.", href: "/services/real-estate-planning" },
];

export default function PlanningServices() {
  return (
    <Section id="planning-services" title="Planning Services" subtitle="Clarity across insurance, retirement, taxes, and legacy">
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {ITEMS.map((item) => (
          <a key={item.title} href={item.href} className="block hover-lift">
            <div className="p-5 h-full rounded-2xl border !border-white/20 bg-[#102444] text-white shadow-md hover:shadow-lg hover:bg-[#16345e] transition-colors">
              <div className="flex items-start gap-3">
                <item.icon className="h-6 w-6 text-white" aria-hidden />
                <div>
                  <div className="font-semibold text-white">{item.title}</div>
                  <p className="mt-1 text-sm text-white/80">{item.text}</p>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}


