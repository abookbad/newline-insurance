"use client";

import Image from "next/image";
import React from "react";

type SolutionHeroProps = {
  title: string;
  subtitle?: string;
  image: { src: string; alt: string };
};

export default function SolutionHero({ title, subtitle, image }: SolutionHeroProps) {
  return (
    <section className="relative h-[44vh] min-h-[320px] w-full overflow-hidden">
      <Image src={image.src} alt={image.alt} fill priority className="object-cover" />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 h-full">
        <div className="mx-auto h-full max-w-5xl px-4 sm:px-6 flex items-end pb-10">
          <div>
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">{title}</h1>
            {subtitle ? <p className="mt-2 text-white/85 max-w-2xl">{subtitle}</p> : null}
          </div>
        </div>
      </div>
    </section>
  );
}


