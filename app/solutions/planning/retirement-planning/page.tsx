import React from "react";
import RetirementGapChecker from "@/components/sections/RetirementGapChecker";
import SolutionHero from "@/components/sections/SolutionHero";

export default function Page() {
  return (
    <>
      <SolutionHero
        title="Retirement planning"
        subtitle="Turn savings into sustainable income and invest with risk awareness."
        image={{ src: "/solutions/planning/retirement.jpeg", alt: "Retirement planning" }}
      />
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16">
        <h1 className="text-3xl font-semibold tracking-tight">Retirement planning</h1>
        <p className="mt-3 text-black/70">
          Turn savings into sustainable income and invest with risk awareness.
        </p>
        <div className="mt-8">
          <RetirementGapChecker />
        </div>
      </div>
    </>
  );
}

