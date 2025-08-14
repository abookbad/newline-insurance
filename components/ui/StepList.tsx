"use client";

import React from "react";
import Card from "@/components/ui/Card";

export interface StepItem {
  title: string;
  text: string;
}

export interface StepListProps {
  items: StepItem[];
}

export default function StepList({ items }: StepListProps) {
  return (
    <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4" role="list">
      {items.map((s, idx) => (
        <li key={s.title} className="list-none" aria-current={idx === 0 ? "step" : undefined}>
          <Card className="p-5 glass-soft glass-border">
            <div className="text-sm font-semibold text-[var(--brand)]">Step {idx + 1}</div>
            <div className="font-semibold mt-0.5">{s.title}</div>
            <p className="mt-1 text-sm text-black/70">{s.text}</p>
          </Card>
        </li>
      ))}
    </ol>
  );
}


