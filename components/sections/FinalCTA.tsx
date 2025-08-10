import React from "react";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function FinalCTA() {
  return (
    <Section id="contact">
      <Card className="glass-soft glass-border">
        <div className="p-8 text-center">
          <h3 className="text-2xl font-semibold tracking-tight">Secure your family’s future today</h3>
          <p className="mx-auto mt-2 max-w-xl text-black/70">
            Get a clear, custom plan—life insurance with living benefits, Medicare help, or retirement strategies.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Button href="/contact">Talk to an Expert</Button>
            <Button href="/products" variant="secondary">See Products</Button>
          </div>
        </div>
      </Card>
    </Section>
  );
}

