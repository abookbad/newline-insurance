import React from "react";
import RealEstateCashflowHelper from "@/components/sections/RealEstateCashflowHelper";
import SolutionHero from "@/components/sections/SolutionHero";

export default function Page() {
  return (
    <>
      <SolutionHero
        title="Real estate planning"
        subtitle="Integrate property choices with cash flow, taxes, and legacy goals."
        image={{ src: "/solutions/planning/real-estate.jpeg", alt: "Real estate planning" }}
      />
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16">
        <h1 className="text-3xl font-semibold tracking-tight">Real estate planning</h1>
        <p className="mt-3 text-black/70">
          Integrate property choices with cash flow, taxes, and legacy goals.
        </p>
        <div className="mt-8">
          <RealEstateCashflowHelper />
        </div>
      </div>
    </>
  );
}

