import React from "react";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function MedicareCallout() {
  return (
    <Section id="medicare" title="Medicare Guidance" subtitle="Know your enrollment windows and plan choices.">
      <Card className="glass-soft glass-border">
        <div className="flex flex-col items-start justify-between gap-4 p-6 sm:flex-row sm:items-center">
          <div>
            <div className="text-lg font-semibold">Get confident about Medicare</div>
            <div className="mt-2 max-w-2xl text-sm text-black/70">
              We’ll help you understand enrollment timing, compare plans, and avoid penalties. No-cost consultations.
            </div>
          </div>
          <Button href="#contact">Book a Guidance Call</Button>
        </div>
      </Card>
    </Section>
  );
}

