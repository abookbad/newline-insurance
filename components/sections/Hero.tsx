"use client";

import Image from "next/image";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import EstimatorPanel from "@/components/sections/EstimatorPanel";

type SafeMotionDivProps = {
  className?: string;
  children?: React.ReactNode;
  initial?: unknown;
  animate?: unknown;
  transition?: unknown;
};

export default function Hero() {
  const prefersReduced = useReducedMotion();
  const MDiv = motion.div as unknown as React.ComponentType<SafeMotionDivProps>;
  return (
    <section className="relative overflow-hidden min-h-[80vh]">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Image
          src="/mainPage/hero/lifeInsuranceHeroBG.jpeg"
          alt="Family protected by life insurance"
          fill
          priority
          className="object-cover object-[50%_70%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-white" />
        {!prefersReduced && (
          <div className="absolute inset-0">
            <div className="absolute -top-20 left-1/4 h-72 w-72 rounded-full bg-black/5 blur-3xl" />
            <div className="absolute top-40 right-1/4 h-72 w-72 rounded-full bg-black/5 blur-3xl" />
          </div>
        )}
      </div>

      <Container className="relative z-10 py-24 sm:py-32 max-w-[90rem]">
        <MDiv
          initial={prefersReduced ? false : { opacity: 0, y: 16 }}
          animate={prefersReduced ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-none min-h-[70vh] flex items-center"
        >
          {/* Header now shows the logo; remove in-hero logo */}

          <div className="w-full">
            <Card className="w-full max-w-7xl mx-auto p-6 md:p-8 glass glass-border min-h-[560px]">
              <div className="grid min-h-[560px] items-center gap-8 lg:grid-cols-2">
              <div>
                <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                  Protect what matters most, with guidance you can trust
                </h1>
                <p className="mt-4 text-lg text-black/70">
                  Newline Financial and Insurance Solutions helps you find flexible life insurance with living benefits, Medicare assistance, and retirement options—clear, human, and built around you.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Button href="/apply" className="cta-pulse">Get Your Free Quote</Button>
                  <Button href="tel:+19517049422" variant="secondary">
                    Speak to an Agent
                  </Button>
                </div>
                <div className="mt-4 text-sm text-black/60">
                  Or call (951) 704-9422 — no pressure, just answers.
                </div>
              </div>
              <div className="lg:pl-8 lg:border-l lg:border-black/10">
                 <div className="mb-4">
                  <div className="text-xs uppercase tracking-wider text-[var(--brand)]/80">Get a quick monthly estimate—no email required.</div>
                  <div className="mt-1 text-lg font-semibold text-[var(--brand)]">Instant Coverage Estimator</div>
                </div>
                <EstimatorPanel />
              </div>
            </div>
            </Card>
          </div>
        </MDiv>
      </Container>
      {/* Scroll cue */}
      <div className="pointer-events-none absolute inset-x-0 bottom-4 flex justify-center">
        <button
          type="button"
          onClick={() => {
            const next = document.getElementById("estimator") || document.querySelector("main section, section");
            if (next && "scrollIntoView" in next) {
              (next as HTMLElement).scrollIntoView({ behavior: "smooth", block: "start" });
            }
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              const next = document.getElementById("estimator") || document.querySelector("main section, section");
              if (next && "scrollIntoView" in next) {
                (next as HTMLElement).scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }
          }}
          aria-label="Scroll to next section"
          className="pointer-events-auto inline-flex items-center gap-2 rounded-md px-2 py-1 text-sm sm:text-base font-medium tracking-wide text-black/70 hover:text-black/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 cursor-pointer select-none animate-bounce-slow bg-transparent"
        >
          <span>Scroll</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </section>
  );
}

