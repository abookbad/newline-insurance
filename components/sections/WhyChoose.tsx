"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import Section from "@/components/ui/Section";
import Image from "next/image";

export default function WhyChoose({ className = "" }: { className?: string }) {
  const prefersReduced = useReducedMotion();
  type SafeMotionDivProps = {
    className?: string;
    children?: React.ReactNode;
    initial?: unknown;
    whileInView?: unknown;
    viewport?: unknown;
    transition?: unknown;
  };
  const MDiv = motion.div as unknown as React.ComponentType<SafeMotionDivProps>;

  return (
    <Section id="why-choose" className={`py-16 md:py-24 ${className}`}>
      <div className="grid items-center gap-8 md:grid-cols-2">
        {/* Left image */}
        <MDiv
          initial={prefersReduced ? false : { opacity: 0, y: 16 }}
          whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, delay: prefersReduced ? 0 : 0.05, ease: "easeOut" }}
          className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-black/10 bg-white/60"
        >
          <Image
            src="/services/insurance-planning.jpeg"
            alt="Advisor helping a family with their plan"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </MDiv>

        {/* Right text */}
        <MDiv
          initial={prefersReduced ? false : { opacity: 0, y: 16 }}
          whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="text-[11px] uppercase tracking-wide text-black/60">Modern coverage, human guidance, and clear options.</div>
          <h2 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--brand)]">Why Choose Newline</h2>
          <p className="mt-4 text-black/70">
            We make protection simple: clear explanations, tailored recommendations, and support long after your policy is active.
          </p>
          <ul className="mt-4 grid gap-2 text-black/80">
            <li className="rounded-xl border border-black/10 bg-white/70 px-3 py-2">Independent advice focused on your goals.</li>
            <li className="rounded-xl border border-black/10 bg-white/70 px-3 py-2">Easy application with fast decisions for many.</li>
            <li className="rounded-xl border border-black/10 bg-white/70 px-3 py-2">Annual reviews to keep coverage aligned.</li>
          </ul>
          <div className="mt-6">
            <a href="tel:+19517049422" className="inline-flex items-center rounded-[12px] bg-black px-4 py-2 text-white text-sm hover:bg-black/90 focus-visible:ring-2 focus-visible:ring-[var(--brand)] focus-visible:ring-offset-2">
              Talk to a licensed expert
            </a>
          </div>
        </MDiv>
      </div>
    </Section>
  );
}


