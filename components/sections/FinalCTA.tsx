"use client";
import React from "react";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Image from "next/image";

export default function FinalCTA() {
  return (
    <Section id="contact">
      <Card className="relative overflow-hidden">
        {/* Background image */}
        <div aria-hidden className="absolute inset-0">
          <Image
            src="/mainPage/cta/cta.jpeg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority={false}
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        {/* Content */}
        <div className="relative p-8 text-center text-white">
          <h3 className="text-2xl font-semibold tracking-tight">Secure Your Family’s Future Today.</h3>
          <p className="mx-auto mt-2 max-w-xl text-white/90">No pressure. Just clear options.</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Button href="/apply">Get My Free Quote</Button>
            <Button href="tel:+19517049422" variant="secondary">Call (951) 704-9422</Button>
          </div>
        </div>
      </Card>
    </Section>
  );
}

