"use client";
import React from "react";

import Section from "@/components/ui/Section";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
// Prefer static import to avoid path mismatches at runtime
// If the asset moves or is renamed, build will surface the error clearly
import kidsImage from "@/public/mainPage/valueProps/kidsUnderUmbrella.jpeg";

export default function ValueProps() {
  const prefersReduced = useReducedMotion();
  type SafeMotionDivProps = {
    className?: string;
    children?: React.ReactNode;
    initial?: unknown;
    animate?: unknown;
    whileInView?: unknown;
    viewport?: unknown;
    transition?: unknown;
  };
  const MDiv = motion.div as unknown as React.ComponentType<SafeMotionDivProps>;
  return (
    <Section className="relative py-0">
      <div className="relative min-h-[60vh] sm:min-h-[70vh]">
        {/* Full-bleed background image */}
        <div aria-hidden className="absolute left-1/2 top-0 -translate-x-1/2 w-[100vw] h-full">
          <Image
            src={kidsImage}
            alt="Family smiling outdoors"
            fill
            className="object-cover"
            sizes="100vw"
            priority={false}
          />
          {/* Dark overlay */}
          <div aria-hidden className="absolute inset-0 bg-black/60" />
        </div>
        {/* Centered text over image */}
        <div className="absolute inset-0 z-10 flex items-end justify-center pb-[16vh] md:pb-[18vh] lg:pb-[20vh]">
          <MDiv
            initial={prefersReduced ? false : { opacity: 0, y: 18 }}
            whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mx-auto max-w-3xl text-center px-4 sm:px-6 lg:px-8"
          >
            <div className="text-[11px] uppercase tracking-[0.28em] text-white/85">Time to help and support</div>
            <h2 className="mt-3 text-white text-[28px] sm:text-[34px] md:text-[40px] leading-tight font-semibold">
              Precision financial strategies: guiding your finances to new heights
            </h2>
            <p className="mt-4 text-white/90">
              Imagine a future where you’re financially secure, free from debt, and able to provide your family with everything they need and more. Picture yourself pursuing your passions, and watching your children thrive. This is not just a dream; it’s a reality that can be achieved with careful planning and dedication. By setting clear financial goals, creating a budget, and making informed decisions about saving and investing, you can build a brighter future for yourself and your loved ones.
            </p>
            <MDiv
              initial={prefersReduced ? false : { opacity: 0, y: 12 }}
              whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: prefersReduced ? 0 : 0.1, ease: "easeOut" }}
              className="mt-6 flex items-center justify-center gap-3"
            >
              <a href="/services/retirement-planning" className="inline-flex h-10 w-10 items-center justify-center rounded-[12px] border border-white/40 bg-white/10 text-white hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-white/50">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="/services/retirement-planning" className="text-white font-medium tracking-widest uppercase text-sm hover:opacity-90">Know More</a>
            </MDiv>
          </MDiv>
        </div>
      </div>
    </Section>
  );
}

