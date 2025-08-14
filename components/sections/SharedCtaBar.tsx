"use client";

import React from "react";
import Button from "@/components/ui/Button";

export default function SharedCtaBar() {
  return (
    <div className="mt-4 rounded-2xl border border-black/10 bg-white/70 p-4 glass-border supports-[backdrop-filter]:glass shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="text-sm text-black/60">Ready to plan your life & legacy?</div>
        <div className="flex gap-3">
          <Button href="/apply?prefill=1&age=&coverage=&term=&smoker=&zip=&go=1" data-analytics="cta:quote" aria-label="Start a free consultation">
            Start a free consultation
          </Button>
          <Button href="tel:+19517049422" variant="secondary" data-analytics="cta:call" aria-label="Talk to an agent">
            Talk to an agent
          </Button>
        </div>
      </div>
      <div className="mt-2 text-xs text-black/60">Estimates are educational; final rates vary by underwriting.</div>
    </div>
  );
}


