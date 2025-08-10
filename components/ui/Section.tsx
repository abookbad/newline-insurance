"use client";

import { motion, useReducedMotion } from "framer-motion";
import React from "react";
import Container from "./Container";
import { cn } from "./lib";

type SectionProps = React.PropsWithChildren<{
  id?: string;
  className?: string;
  title?: string;
  subtitle?: string;
}>;

type SafeMotionDivProps = {
  className?: string;
  children?: React.ReactNode;
  initial?: unknown;
  animate?: unknown;
  whileInView?: unknown;
  viewport?: unknown;
  transition?: unknown;
};

export default function Section({ id, className, title, subtitle, children }: SectionProps) {
  const prefersReduced = useReducedMotion();
  const MDiv = motion.div as unknown as React.ComponentType<SafeMotionDivProps>;
  return (
    <section id={id} className={cn("py-16 sm:py-24", className)} aria-label={title ?? undefined}>
      <Container>
        {(title || subtitle) && (
          <div className="mb-10 max-w-2xl">
            {subtitle && (
              <p className="text-xs uppercase tracking-wider text-black/60">{subtitle}</p>
            )}
            {title && (
              <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight">
                {title}
              </h2>
            )}
          </div>
        )}
        <MDiv
          initial={false}
          whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {children}
        </MDiv>
      </Container>
    </section>
  );
}

