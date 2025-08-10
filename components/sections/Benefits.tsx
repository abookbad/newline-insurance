import React from "react";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";

const items = [
  { title: "Fast approvals", text: "Many options with simplified underwriting and e-sign." },
  { title: "Flexible coverage", text: "Adjust amounts and riders as life changes." },
  { title: "Licensed experts", text: "Straightforward guidance—no jargon." },
  { title: "Lifetime support", text: "We’re here for policy changes and questions anytime." },
];

export default function Benefits() {
  return (
    <Section title="Why People Choose Newline">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((b) => (
          <Card key={b.title} className="glass-soft glass-border">
            <div className="p-6">
              <div className="text-base font-semibold">{b.title}</div>
              <div className="mt-2 text-sm text-black/70">{b.text}</div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

