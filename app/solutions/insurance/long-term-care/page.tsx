import React from "react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Long‑Term Care</h1>
      <p className="mt-3 text-black/70">
        Plan for care costs and protect family from financial strain.
      </p>

      <div className="mt-8 grid gap-6">
        <section>
          <h2 className="text-xl font-semibold">What to consider</h2>
          <ul className="mt-3 list-disc pl-5 text-black/80">
            <li>Home and facility care coverage</li>
            <li>Inflation protection and benefit periods</li>
            <li>Traditional vs. hybrid policies</li>
          </ul>
        </section>

        <div className="mt-4">
          <Link
            href="/apply"
            className="inline-flex rounded-xl bg-[var(--brand)] px-4 py-2 text-white hover:opacity-95"
          >
            Discuss LTC options
          </Link>
        </div>
      </div>
    </div>
  );
}

