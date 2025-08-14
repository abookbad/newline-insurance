import React from "react";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function FinalCTA() {
  return (
    <Section id="contact">
      <Card className="glass-soft glass-border">
        <div className="p-8 text-center">
          <h3 className="text-2xl font-semibold tracking-tight">Secure Your Family’s Future Today.</h3>
          <p className="mx-auto mt-2 max-w-xl text-black/70">No pressure. Just clear options.</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Button href="/apply">Get My Free Quote</Button>
            <Button href="tel:+19517049422" variant="secondary">Call (951) 704-9422</Button>
          </div>
        </div>
      </Card>
    </Section>
  );
}

