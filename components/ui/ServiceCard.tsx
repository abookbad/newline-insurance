"use client";

import React from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export interface ServiceCardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  lead: string;
  bullets: string[];
  estimateHref?: string; // default computed prefill link
  callHref?: string; // default tel link
  analytics?: { estimate?: string; call?: string };
  disclaimerId?: string; // connect aria-describedby to shared disclaimer
}

export default function ServiceCard({
  icon: Icon,
  title,
  lead,
  bullets,
  estimateHref = "/apply?prefill=1&age=&coverage=&term=&smoker=&zip=&go=1",
  callHref = "tel:+19517049422",
  analytics,
  disclaimerId,
}: ServiceCardProps) {
  return (
    <Card className="glass-soft glass-border hover-lift">
      <div className="p-6">
        <div className="flex items-center gap-3">
          <Icon aria-hidden className="h-5 w-5 stroke-[1.5]" />
          <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
        </div>
        <p className="mt-2 text-sm text-black/70">{lead}</p>
        <ul className="mt-3 list-disc pl-5 text-sm text-black/80 space-y-1">
          {bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
        <div className="mt-5 flex flex-wrap gap-3">
          <Button
            href={estimateHref}
            aria-label={`Estimate my rate for ${title}`}
            data-analytics={analytics?.estimate ?? "cta:quote"}
            className="focus-visible:ring-2 focus-visible:ring-[var(--brand)] focus-visible:ring-offset-2"
            >
            Estimate my rate
          </Button>
          <Button
            href={callHref}
            variant="secondary"
            aria-label={`Talk to an agent about ${title}`}
            data-analytics={analytics?.call ?? "cta:call"}
            className="focus-visible:ring-2 focus-visible:ring-[var(--brand)] focus-visible:ring-offset-2"
          >
            Talk to an agent
          </Button>
        </div>
        {disclaimerId && (
          <span className="sr-only" id={disclaimerId}>
            Estimates are educational; final rates vary by underwriting.
          </span>
        )}
      </div>
    </Card>
  );
}


