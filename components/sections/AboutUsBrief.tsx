"use client";

import React from "react";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";

export default function AboutUsBrief() {
  return (
    <Section id="about" title="About Us" subtitle="Independent. Client‑first. Local to the Inland Empire.">
      <Card className="glass-soft glass-border p-6 md:p-8">
        <p className="text-black/80">
          Newline Financial & Insurance Solutions helps families protect income, plan retirement, and coordinate
          legacy—without jargon or pressure. We compare carriers and strategies so you can choose with clarity.
        </p>
      </Card>
    </Section>
  );
}


