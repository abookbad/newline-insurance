import React from "react";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { ShieldCheck, Stethoscope, PiggyBank, Landmark, FileText, BriefcaseBusiness } from "lucide-react";
import Link from "next/link";

function ProductCard({ icon: Icon, title, bullets }: { icon: React.ElementType; title: string; bullets: string[] }) {
  return (
    <Card className="glass-soft glass-border hover-lift">
      <div className="p-6">
        <Icon className="h-6 w-6 text-black" aria-hidden />
        <h3 className="mt-3 text-lg font-semibold">{title}</h3>
        <ul className="mt-3 list-disc pl-5 text-sm text-black/70">
          {bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </div>
    </Card>
  );
}

export default function Products() {
  return (
    <Section id="services" title="Services" subtitle="Client-first guidance across life, retirement, and legacy.">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Link href="#life-insurance" className="block hover-lift">
          <ProductCard
            icon={ShieldCheck}
            title="Life Insurance w/ Living Benefits"
            bullets={["Term, Whole, IUL options", "Chronic/Critical/Terminal riders", "Flexible coverage & riders"]}
          />
        </Link>
        <Link href="#retirement" className="block hover-lift">
          <ProductCard
            icon={PiggyBank}
            title="Retirement & Wealth Planning"
            bullets={["401(k)/IRA rollovers", "Annuities & income strategies", "Risk‑aware approaches"]}
          />
        </Link>
        <Link href="#medicare" className="block hover-lift">
          <ProductCard
            icon={Stethoscope}
            title="Medicare Guidance"
            bullets={["Enrollment timing", "Plan selection support", "Annual reviews"]}
          />
        </Link>
        <Link href="#estate" className="block hover-lift">
          <ProductCard
            icon={Landmark}
            title="Estate & Legacy Planning"
            bullets={["Trusts & wills (with pros)", "Wealth transfer strategies", "Beneficiary setup"]}
          />
        </Link>
        <Link href="#tax" className="block hover-lift">
          <ProductCard
            icon={FileText}
            title="Tax Optimization"
            bullets={["Mitigation concepts", "Zero‑tax frameworks", "Coordinate with licensed pros"]}
          />
        </Link>
        <Link href="#college-business" className="block hover-lift">
          <ProductCard
            icon={BriefcaseBusiness}
            title="College & Business Planning"
            bullets={["Beyond saving", "Continuity & key person", "Benefits strategies"]}
          />
        </Link>
      </div>
    </Section>
  );
}

