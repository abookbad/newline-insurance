"use client";

import React from "react";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function AgencyPlatformPromo() {
  return (
    <Section id="agency-platform" title="Agency Platform" subtitle="Tools, training, and support to help agents grow">
      <Card className="glass glass-border p-6 md:p-8">
        <div className="grid gap-4 md:grid-cols-2 items-center">
          <div>
            <h3 className="text-xl font-semibold tracking-tight">Partner with Newline</h3>
            <p className="mt-2 text-black/70">
              Access carrier relationships, case design help, compliant marketing, and back‑office support so you can
              focus on serving clients.
            </p>
            <div className="mt-4 flex gap-3">
              <Button href="/agencies">Explore the platform</Button>
              <Button href="/contact" variant="secondary">Talk to our team</Button>
            </div>
          </div>
          <div className="text-sm text-black/60">
            <ul className="list-disc pl-5 space-y-1">
              <li>Case design and illustrations</li>
              <li>Application and underwriting support</li>
              <li>Compliant assets and training</li>
            </ul>
          </div>
        </div>
      </Card>
    </Section>
  );
}


