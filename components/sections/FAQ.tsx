"use client";

import React from "react";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";

const faqs = [
  {
    q: "How long does underwriting take?",
    a: "Many policies provide decisions quickly, sometimes instantly. Others may take a few days depending on health and records.",
  },
  {
    q: "Can I adjust my coverage later?",
    a: "Yes, policies often allow changes like updating beneficiaries, adding riders, or adjusting coverage with a quick review.",
  },
  {
    q: "What are living benefits?",
    a: "Riders that let you access a portion of your death benefit if you face chronic, critical, or terminal illness—subject to policy terms.",
  },
  {
    q: "What if I smoke?",
    a: "We’ll still help you find options. Premiums are typically higher for smokers, but there are competitive plans.",
  },
  {
    q: "Do you charge for Medicare help?",
    a: "No. Our guidance helps you understand enrollment windows and compare plans without fees.",
  },
  {
    q: "Can I cancel?",
    a: "Policies include a free-look period. After that, you can cancel at any time. We’ll help you understand the details.",
  },
];

export default function FAQ() {
  const [open, setOpen] = React.useState<number | null>(0);
  return (
    <Section id="faq" title="Frequently asked questions">
      <div className="grid gap-4">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <Card key={f.q} className="glass-soft glass-border">
              <button
                className="w-full p-4 text-left"
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

