"use client";

import React from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/components/ui/lib";

export interface TestimonialCarouselProps {
  items: import("@/lib/content").Testimonial[];
  autoPlay?: boolean;
  autoPlayMs?: number;
  className?: string;
}

type CarouselCardVariant = "center" | "side";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const DURATION = 0.45;

export default function TestimonialCarousel({
  items,
  autoPlay = false,
  autoPlayMs = 6000,
  className,
}: TestimonialCarouselProps) {
  const prefersReduced = useReducedMotion();
  type SafeMotionDivProps = {
    className?: string;
    children?: React.ReactNode;
    drag?: unknown;
    dragConstraints?: unknown;
    dragElastic?: unknown;
    onDragEnd?: unknown;
    transition?: unknown;
    role?: string;
    "aria-roledescription"?: string;
    "aria-label"?: string;
    tabIndex?: number;
  };
  const MDiv = motion.div as unknown as React.ComponentType<SafeMotionDivProps>;
  const [activeIndex, setActiveIndex] = React.useState(0);
  const itemCount = items.length;
  const prevIndex = (activeIndex - 1 + itemCount) % itemCount;
  const nextIndex = (activeIndex + 1) % itemCount;
  const regionRef = React.useRef<HTMLDivElement | null>(null);
  const hoverOrFocusRef = React.useRef(false);
  const autoRef = React.useRef<number | null>(null);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setIsMobile(!mq.matches);
    update();
    if (typeof mq.addEventListener === "function") {
      mq.addEventListener("change", update);
      return () => mq.removeEventListener("change", update);
    } else {
      // Safari
      mq.addListener(update);
      return () => mq.removeListener(update);
    }
  }, []);

  const goTo = React.useCallback((index: number) => {
    setActiveIndex((index + itemCount) % itemCount);
  }, [itemCount]);

  const next = React.useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const prev = React.useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  React.useEffect(() => {
    if (!autoPlay || prefersReduced) return;
    if (hoverOrFocusRef.current) return;
    if (autoRef.current) window.clearInterval(autoRef.current);
    autoRef.current = window.setInterval(() => {
      setActiveIndex((i) => (i + 1) % itemCount);
    }, Math.max(2000, autoPlayMs));
    return () => {
      if (autoRef.current) window.clearInterval(autoRef.current);
    };
  }, [autoPlay, autoPlayMs, itemCount, prefersReduced, activeIndex]);

  const pause = () => {
    hoverOrFocusRef.current = true;
    if (autoRef.current) window.clearInterval(autoRef.current);
    autoRef.current = null;
  };
  const resume = () => {
    hoverOrFocusRef.current = false;
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") { e.preventDefault(); next(); }
    else if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
    else if (e.key === "Home") { e.preventDefault(); goTo(0); }
    else if (e.key === "End") { e.preventDefault(); goTo(itemCount - 1); }
  };

  const announce = `${items[activeIndex]?.quote} — ${items[activeIndex]?.author}${items[activeIndex]?.location ? ", " + items[activeIndex]?.location : ""}`;

  return (
    <div
      ref={regionRef}
      role="region"
      aria-roledescription="carousel"
      aria-label="Client testimonials"
      aria-live="polite"
      className={cn("relative", className)}
      onKeyDown={onKeyDown}
      onMouseEnter={pause}
      onMouseLeave={resume}
      onFocusCapture={pause}
      onBlurCapture={resume}
      tabIndex={0}
    >
      {/* Offscreen announcement for SRs when slide changes */}
      <span className="sr-only" aria-live="polite">{announce}</span>

      {/* Controls - exactly one set rendered depending on viewport */}
      {isMobile ? (
        <div className="mb-3 flex items-center justify-center gap-3">
          <ArrowButton direction="prev" onClick={prev} />
          <ArrowButton direction="next" onClick={next} />
        </div>
      ) : (
        <>
          <ArrowButton direction="prev" onClick={prev} className="md:inline-flex md:absolute md:-left-10 md:top-1/2 md:-translate-y-1/2" />
          <ArrowButton direction="next" onClick={next} className="md:inline-flex md:absolute md:-right-10 md:top-1/2 md:-translate-y-1/2" />
        </>
      )}

      {/* Track */}
      <MDiv
        className="flex items-stretch gap-3 md:gap-6 overflow-hidden select-none"
        drag={prefersReduced ? false : "x"}
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.2}
        onDragEnd={(e: unknown, info: { offset: { x: number } }) => {
          const threshold = 80;
          if (info.offset.x < -threshold) next();
          else if (info.offset.x > threshold) prev();
        }}
        transition={{ duration: DURATION, ease: EASE }}
      >
        <CarouselCard variant="center" item={items[activeIndex]} />
      </MDiv>

      {/* Dots (desktop only) */}
      {!isMobile && (
        <div className="mt-4 md:mt-6 flex justify-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === activeIndex}
              onClick={() => goTo(i)}
              className={cn(
                "h-2.5 w-2.5 rounded-full border glass-border cursor-pointer transition-transform focus-visible:ring-2 ring-[--brand] ring-offset-2",
                i === activeIndex ? "bg-black/70 border-black/20" : "bg-black/20 hover:bg-black/30 hover:scale-110 border-black/20"
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function ArrowButton({ direction, onClick, className }: { direction: "prev" | "next"; onClick: () => void; className?: string; }) {
  const Icon = direction === "prev" ? ChevronLeft : ChevronRight;
  const label = direction === "prev" ? "Previous testimonial" : "Next testimonial";
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl border glass-border bg-white/70 supports-[backdrop-filter]:bg-white/60 backdrop-blur px-3 py-2 shadow-sm hover-lift-sm cursor-pointer focus-visible:ring-2 ring-[--brand] ring-offset-2 hover:bg-white/80",
        className
      )}
    >
      <Icon className="h-5 w-5" aria-hidden="true" />
      <span className="md:sr-only text-sm">{direction === "prev" ? "Prev" : "Next"}</span>
    </button>
  );
}

function CarouselCard({ item, variant }: { item: import("@/lib/content").Testimonial; variant: CarouselCardVariant; }) {
  const prefersReduced = useReducedMotion();
  type SafeMotionArticleProps = {
    className?: string;
    children?: React.ReactNode;
    layout?: unknown;
    "aria-current"?: string | undefined;
    style?: React.CSSProperties;
    initial?: unknown;
    animate?: unknown;
    transition?: unknown;
  };
  const MArticle = motion.article as unknown as React.ComponentType<SafeMotionArticleProps>;
  return (
    <MArticle
      layout
      className={cn(
        "flex-1 basis-[85%] sm:basis-1/2 md:basis-1/3 mx-auto rounded-2xl glass-soft glass-border shadow-sm p-5 md:p-6 hover-lift-sm",
        variant === "center" ? "md:shadow-md -translate-y-0.5" : "opacity-80 md:opacity-90 backdrop-blur-[2px]"
      )}
      aria-current={variant === "center" ? "true" : undefined}
      style={{ filter: variant === "side" ? "saturate(0.95)" : undefined }}
      initial={false}
      animate={prefersReduced ? { opacity: 1 } : {
        scale: variant === "center" ? 1 : 0.95,
        opacity: variant === "center" ? 1 : 0.8,
      }}
      transition={{ duration: DURATION, ease: EASE }}
    >
      <blockquote className="text-base md:text-lg text-black/80 leading-relaxed">“{item.quote}”</blockquote>
      <p className="mt-3 text-sm text-black/60">— {item.author}{item.location ? `, ${item.location}` : ""}</p>
    </MArticle>
  );
}


