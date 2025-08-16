"use client";

import Image from "next/image";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import Button from "@/components/ui/Button";
import { ChevronRight } from "lucide-react";
 

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
    <section className="relative overflow-hidden h-[100svh] min-h-screen pt-16 w-screen bg-black">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden bg-black">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-[115vw] -mx-[2vw]">
          <video
            className="absolute inset-0 h-full w-full object-cover max-w-none"
            src="/mainPage/hero/heroVideo-muted.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/20" />
          <div
            aria-hidden
            className="absolute inset-0 opacity-70 mix-blend-multiply bg-[radial-gradient(120%_90%_at_50%_85%,rgba(0,0,0,0.6),transparent)]"
          />
        </div>
        {!prefersReduced && (
          <div className="absolute inset-0">
            <div className="absolute -top-20 left-1/4 h-72 w-72 rounded-full bg-black/5 blur-3xl" />
            <div className="absolute top-40 right-1/4 h-72 w-72 rounded-full bg-black/5 blur-3xl" />
          </div>
        )}
      </div>

      <div className="relative z-10 h-full py-24 sm:py-32">
        <MDiv
          initial={prefersReduced ? false : { opacity: 0, y: 16 }}
          animate={prefersReduced ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="h-full flex items-end justify-center pb-[12vh] md:pb-[14vh] lg:pb-[16vh]"
        >
          <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 text-center text-white">
            <div className="text-xs tracking-[0.25em] uppercase text-white/80">Finance Solutions</div>
            <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">Protect Your Family. Grow Your Wealth. Plan Your Legacy.</h1>
            <p className="mt-4 text-lg text-white/85">Modern insurance and financial strategies tailored to you—life insurance with living benefits, Medicare guidance, retirement planning, and more.</p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <a href="/apply" className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/40 bg-white/10 text-white hover:bg-white/20">
                <ChevronRight className="h-5 w-5" aria-hidden />
              </a>
              <a href="/apply" className="text-white/90 text-sm tracking-widest uppercase hover:text-white">Free Consultation</a>
            </div>
            <div className="mt-3 text-white/75">
              <a href="tel:+19517049422" className="hover:text-white">Or call (951) 704-9422</a>
            </div>
          </div>
        </MDiv>
      </div>
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
          className="pointer-events-auto inline-flex items-center gap-2 rounded-md px-2 py-1 text-sm sm:text-base font-medium tracking-wide text-white/80 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 cursor-pointer select-none animate-bounce-slow bg-transparent"
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

