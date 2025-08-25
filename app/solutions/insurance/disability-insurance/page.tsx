import React from "react";
import Link from "next/link";
import DisabilityBenefitEstimator from "@/components/sections/DisabilityBenefitEstimator";
import SolutionHero from "@/components/sections/SolutionHero";

export default function Page() {
  return (
    <>
      <SolutionHero
        title="Disability Insurance"
        subtitle="Protect your paycheck if illness or injury keeps you from working."
        image={{ src: "/solutions/insurance/disability-insurance.jpeg", alt: "Disability insurance" }}
      />
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16">
        <h1 className="text-3xl font-semibold tracking-tight">Disability Insurance</h1>
        <p className="mt-3 text-black/70">
          Protect your paycheck if illness or injury keeps you from working.
        </p>

      <div className="mt-8 grid gap-6">
        <section>
          <h2 className="text-xl font-semibold">Coverage design</h2>
          <ul className="mt-3 list-disc pl-5 text-black/80">
            <li>Replace 40–60% (or more) of income depending on policy</li>
            <li>Choose elimination period and benefit length</li>
            <li>Own‑occupation and residual benefit riders</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Who benefits most</h2>
          <ul className="mt-3 list-disc pl-5 text-black/80">
            <li>Professionals whose income supports family necessities</li>
            <li>Self‑employed or high‑specialty roles with limited group DI</li>
            <li>Anyone wanting portable coverage independent of employer</li>
          </ul>
        </section>

        <div className="mt-4">
          <Link
            href="/apply"
            className="inline-flex rounded-xl bg-[var(--brand)] px-4 py-2 text-white hover:opacity-95"
          >
            Check my options
          </Link>
        </div>
        <div className="mt-8">
          <DisabilityBenefitEstimator />
        </div>
      </div>
      </div>
    </>
  );
}

