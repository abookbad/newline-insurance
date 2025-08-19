import React from "react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Medicare</h1>
      <p className="mt-3 text-black/70">
        Compare plan types and enroll with confidence—no jargon, just clear guidance.
      </p>

      <div className="mt-8 grid gap-6">
        <section>
          <h2 className="text-xl font-semibold">How we help</h2>
          <ul className="mt-3 list-disc pl-5 text-black/80">
            <li>Timing: confirm your ideal enrollment window</li>
            <li>Compare Advantage vs. Medigap + Part D</li>
            <li>Check prescriptions and doctors against plan networks</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Next steps</h2>
          <ol className="mt-3 list-decimal pl-5 text-black/80">
            <li>Quick call to map your situation and timing</li>
            <li>Side‑by‑side plan comparisons</li>
            <li>Enroll with confidence and annual reviews</li>
          </ol>
        </section>

        <div className="mt-4">
          <Link
            href="/apply"
            className="inline-flex rounded-xl bg-[var(--brand)] px-4 py-2 text-white hover:opacity-95"
          >
            Get a Medicare guidance call
          </Link>
        </div>
      </div>
    </div>
  );
}

