import React from "react";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { ShieldCheck, Stethoscope, PiggyBank } from "lucide-react";
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
    <Section id="products" title="Products" subtitle="Clear options that fit your life.">
      <div className="grid gap-6 sm:grid-cols-3">
        <Link href="/products" className="block hover-lift">
          <ProductCard
            icon={ShieldCheck}
            title="Life Insurance w/ Living Benefits"
            bullets={["Access benefits for chronic/critical illness", "Flexible coverage and riders", "Work with licensed experts"]}
          />
        </Link>
        <Link href="/products#medicare" className="block hover-lift">
          <ProductCard
            icon={Stethoscope}
            title="Medicare Assistance"
            bullets={["Enrollment timing & plan guidance", "Compare plan options clearly", "No-cost consultations"]}
          />
        </Link>
        <Link href="/products#retirement" className="block hover-lift">
          <ProductCard
            icon={PiggyBank}
            title="Retirement Planning"
            bullets={["Protect savings from market swings", "Tax-advantaged strategies", "Simple, secure options"]}
          />
        </Link>
      </div>
    </Section>
  );
}

