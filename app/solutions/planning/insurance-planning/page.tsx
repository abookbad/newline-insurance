import React from "react";
import Link from "next/link";
import EstimatorPanel from "@/components/sections/EstimatorPanel";

export default function Page() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Insurance planning</h1>
      <p className="mt-3 text-black/70">
        Protect income, assets, and goals with coverage tailored to your life.
      </p>

      <div className="mt-8 grid gap-6">
        <section>
          <h2 className="text-xl font-semibold">Scope</h2>
          <ul className="mt-3 list-disc pl-5 text-black/80">
            <li>Life insurance</li>
            <li>Disability insurance</li>
            <li>Long‑term care</li>
          </ul>
        </section>

        <div className="mt-4">
          <Link
            href="/apply"
            className="inline-flex rounded-xl bg-[var(--brand)] px-4 py-2 text-white hover:opacity-95"
          >
            Start a planning consult
          </Link>
        </div>
        <div className="mt-8">
          <EstimatorPanel />
        </div>
      </div>
    </div>
  );
}

