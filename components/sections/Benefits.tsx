import React from "react";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";

const items = [
  { title: "Living benefits on many policies", note: "Access benefits for qualifying illnesses." },
  { title: "Fast, friendly guidance", note: "Talk to licensed experts in plain English." },
  { title: "Transparent options, no jargon", note: "Understand trade‑offs before you decide." },
  { title: "Plans for ages 0–85", note: "Flexible term, whole, and indexed universal life." },
  { title: "Coordinated retirement & estate planning", note: "Align coverage with income and legacy goals." },
  { title: "Licensed experts, trusted carriers", note: "Independent access to multiple carriers." },
];

export default function Benefits() {
  return (
    <Section title="Why Choose Newline">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((b) => (
          <Card key={b.title} className="glass-soft glass-border">
            <div className="p-6">
              <div className="text-base font-semibold">{b.title}</div>
              <div className="mt-2 text-sm text-black/70">{b.note}</div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

