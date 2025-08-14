"use client";

import React from "react";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";

const faqs = [
  { q: "What are living benefits?", a: "On many policies, riders may let you access part of the benefit for chronic, critical, or terminal illness (subject to policy terms)." },
  { q: "How long does underwriting take?", a: "Some decisions are quick; others take a few days depending on health history and records." },
  { q: "Can I change coverage later?", a: "Often yes. You can review amounts, riders, and beneficiaries as life changes." },
  { q: "Do you work in my state?", a: "We serve clients across the U.S. Availability of options varies by state and carrier." },
  { q: "How do Medicare reviews work?", a: "We help you understand enrollment timing, compare plan types, and review annually." },
  { q: "What if I already have a policy?", a: "We can review what you have, discuss gaps or goals, and suggest adjustments if needed." },
  { q: "Do you charge for guidance?", a: "No. There’s no fee for consultations. We coordinate with licensed professionals when needed (tax/legal)." },
  { q: "Is the estimator a quote?", a: "It’s educational. Final rates depend on underwriting and policy terms." },
];

export default function FAQ() {
  const [open, setOpen] = React.useState<number | null>(0);
  return (
    <Section id="faq" title="Frequently asked questions">
      <div className="grid gap-4">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
                <Card key={f.q} className="glass-soft glass-border hover-lift cursor-pointer">
              <button
                className="w-full p-4 text-left rounded-md cursor-pointer hover:bg-white/70 focus-visible:ring-2 focus-visible:ring-[var(--brand)] focus-visible:ring-offset-2"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-medium">{f.q}</span>
                  <span className="text-xl" aria-hidden>
                    {isOpen ? "−" : "+"}
                  </span>
                </div>
                {isOpen && (
                  <div className="mt-2 text-sm text-black/70">{f.a}</div>
                )}
              </button>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}

