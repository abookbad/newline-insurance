"use client";

import React from "react";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const quotes = [
  {
    name: "Alicia R.",
    text: "They made everything simple. I got coverage with living benefits and felt informed the whole way.",
  },
  {
    name: "Marcus T.",
    text: "Clear guidance on Medicare. I booked a call and finally understood my options.",
  },
  {
    name: "The Singh Family",
    text: "We appreciated the no-pressure approach. The estimator was spot on for our budget.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = React.useState(0);
  const prefersReduced = useReducedMotion();
  type SafeMotionFigureProps = {
    children?: React.ReactNode;
    initial?: unknown;
    animate?: unknown;
    exit?: unknown;
    transition?: unknown;
    key?: string | number;
  };
  const MFigure = motion.figure as unknown as React.ComponentType<SafeMotionFigureProps>;

  React.useEffect(() => {
    if (prefersReduced) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % quotes.length), 4000);
    return () => clearInterval(id);
  }, [prefersReduced]);

  const q = quotes[index];

  return (
    <Section title="What clients say">
      <Card className="glass-soft glass-border hover-lift">
        <div className="p-6 text-center">
          <AnimatePresence mode="wait" initial={false}>
            <MFigure
              key={index}
              initial={prefersReduced ? false : { opacity: 0, y: 8 }}
              animate={prefersReduced ? {} : { opacity: 1, y: 0 }}
              exit={prefersReduced ? {} : { opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
            >
              <blockquote className="text-lg text-black/80">“{q.text}”</blockquote>
              <figcaption className="mt-2 text-sm text-black/60">— {q.name}</figcaption>
            </MFigure>
          </AnimatePresence>
        </div>
      </Card>
    </Section>
  );
}

