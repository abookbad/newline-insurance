import React from "react";
import RetirementGapChecker from "@/components/sections/RetirementGapChecker";
import SolutionHero from "@/components/sections/SolutionHero";

export default function Page() {
  return (
    <>
      <SolutionHero
        title="Investment planning"
        subtitle="Align portfolios to goals, timelines, and risk comfort."
        image={{ src: "/solutions/planning/investment.jpeg", alt: "Investment planning" }}
      />
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16">
        <h1 className="text-3xl font-semibold tracking-tight">Investment planning</h1>
        <p className="mt-3 text-black/70">
          Align portfolios to goals, timelines, and risk comfort.
        </p>
        <div className="mt-6 text-black/80">
          We design risk‑aware allocations, coordinate accounts, and focus on what you can control.
        </div>
        <div className="mt-8 grid gap-6 text-black/80">
          <section>
            <h2 className="text-xl font-semibold">How we invest</h2>
            <ul className="mt-3 list-disc pl-5">
              <li>Evidence‑based building blocks and diversification</li>
              <li>Risk budgeting and rebalancing policy</li>
              <li>Tax‑aware location and withdrawal sequencing</li>
            </ul>
          </section>
        </div>
        <div className="mt-8">
          <RetirementGapChecker />
        </div>
      </div>
    </>
  );
}

