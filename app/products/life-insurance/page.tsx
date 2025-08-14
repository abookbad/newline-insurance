"use client";

import Image from "next/image";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { servicePages } from "@/lib/content";
import { Shield, PiggyBank, Activity, Users } from "lucide-react";
import LifePlanHelper from "@/components/sections/LifePlanHelper";

const ICONS: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  Shield,
  PiggyBank,
  Activity,
  Users,
};

export default function LifeInsurancePage() {
  const data = servicePages.find((p) => p.id === "life-insurance")!;
  const prefersReduced = useReducedMotion();
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image src={data.hero.image.src} alt={data.hero.image.alt} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/90" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-20">
          <Card className="glass glass-border p-6 md:p-8">
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">{data.hero.title}</h1>
            <p className="mt-3 text-lg text-black/70">{data.hero.tagline}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/apply" className="rounded-full">Get a Quote</Button>
              <Button href="tel:+19517049422" variant="secondary" className="rounded-full">Call Us</Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Overview */}
      <Section title="Overview">
        <div className="grid gap-4 max-w-3xl">
          {data.overview.map((p) => (
            <p key={p} className="text-black/80">{p}</p>
          ))}
        </div>
      </Section>

      {/* At‑a‑glance chips */}
      <Section title="Who it’s for">
        <div className="flex flex-wrap gap-2">
          {[
            "Budget‑friendly protection",
            "Keeps options open",
            "Living benefits available",
            "Convertible options",
            "Family income replacement",
          ].map((c) => (
            <span key={c} className="rounded-full border border-black/10 bg-white/70 px-3 py-1 text-sm">{c}</span>
          ))}
        </div>
      </Section>

      {/* Benefits */}
      <Section title="Key benefits">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.benefits.map((b) => {
            const Icon = ICONS[b.icon] ?? Shield;
            return (
              <Card key={b.title} className="p-5 glass-soft glass-border hover-lift">
                <div className="flex items-start gap-3">
                  <Icon className="h-5 w-5" aria-hidden />
                  <div>
                    <div className="font-semibold">{b.title}</div>
                    <p className="mt-1 text-sm text-black/70">{b.text}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* How it works */}
      <Section title="How it works">
        <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {data.steps.map((s) => (
            <li key={s.title} className="list-none">
              <Card className="p-5 glass-soft glass-border">
                <div className="font-semibold">{s.title}</div>
                <p className="mt-1 text-sm text-black/70">{s.text}</p>
              </Card>
            </li>
          ))}
        </ol>
      </Section>

      {/* Interactive Module */}
      <Section title="Plan & Premium Helper">
        <LifePlanHelper />
      </Section>

      {/* FAQs */}
      <Section title="Frequently asked questions">
        <div className="grid gap-3 max-w-3xl">
          {data.faqs.map((f) => (
            <details key={f.q} className="rounded-2xl glass-border bg-white/70 supports-[backdrop-filter]:bg-white/60 backdrop-blur p-4">
              <summary className="cursor-pointer font-medium">{f.q}</summary>
              <p className="mt-2 text-sm text-black/70">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <Section>
        <Card className="p-6 md:p-8 glass glass-border text-center">
          <h2 className="text-2xl font-semibold tracking-tight">Talk to a licensed expert today</h2>
          <p className="mt-2 text-black/70">Get options in minutes—no pressure, no jargon.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button href="/apply" className="rounded-full">Get a Quote</Button>
            <Button href="tel:+19517049422" variant="secondary" className="rounded-full">Call Us</Button>
          </div>
        </Card>
      </Section>
    </div>
  );
}


