"use client";

import React from "react";
import Section from "@/components/ui/Section";
import { content } from "@/lib/content";
import TestimonialCarousel from "@/components/ui/TestimonialCarousel";

export default function Testimonials() {
  return (
    <Section title="What clients say">
      <div className="max-w-5xl mx-auto">
        <TestimonialCarousel items={content.testimonials} autoPlay autoPlayMs={6000} />
      </div>
    </Section>
  );
}

