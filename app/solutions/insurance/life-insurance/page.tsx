import React from "react";
import Link from "next/link";
import Estimator from "@/components/sections/Estimator";
import SolutionHero from "@/components/sections/SolutionHero";

export default function Page() {
  return (
    <>
      <SolutionHero
        title="Life Insurance"
        subtitle="Protect income and family goals with term or permanent options."
        image={{ src: "/solutions/insurance/life-insurance.jpeg", alt: "Life insurance" }}
      />
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16">
        <h1 className="text-3xl font-semibold tracking-tight">Life Insurance</h1>
        <p className="mt-3 text-black/70">
          Protect income and family goals with term or permanent options.
        </p>

      <div className="mt-8 grid gap-6">
        <section>
          <h2 className="text-xl font-semibold">Popular options</h2>
          <ul className="mt-3 list-disc pl-5 text-black/80">
            <li>Term (10/20/30 years), including return‑of‑premium choices</li>
            <li>Whole life with guaranteed premiums and cash value</li>
            <li>Indexed universal life with living benefits</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">How we work</h2>
          <ol className="mt-3 list-decimal pl-5 text-black/80">
            <li>Quick consult to size coverage to your goals and budget</li>
            <li>Compare multiple carriers and outline trade‑offs</li>
            <li>Apply and place coverage with updates throughout</li>
          </ol>
        </section>

        <div className="mt-4">
          <Link
            href="/apply"
            className="inline-flex rounded-xl bg-[var(--brand)] px-4 py-2 text-white hover:opacity-95"
          >
            Get a life insurance quote
          </Link>
        </div>
        <div className="mt-8">
          <Estimator />
        </div>
      </div>
      </div>
    </>
  );
}

