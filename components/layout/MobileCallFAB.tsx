"use client";

import React from "react";
import { Phone } from "lucide-react";

export default function MobileCallFAB() {
  return (
    <a
      href="tel:+19517049422"
      aria-label="Call Newline Financial"
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-black text-white shadow-lg ring-1 ring-black/10 transition-colors hover:bg-black/90 md:hidden"
    >
      <Phone className="h-5 w-5" aria-hidden="true" />
    </a>
  );
}

