import SolutionHero from "@/components/sections/SolutionHero";
import RetirementGapChecker from "@/components/sections/RetirementGapChecker";

export default function Page() {
  return (
    <>
      <SolutionHero
        title="Retirement solutions"
        subtitle="Plan design, costs, and fiduciary awareness for employer retirement plans."
        image={{ src: "/solutions/business/retirement-solutions.jpeg", alt: "Retirement solutions" }}
      />
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16">
        <h1 className="text-3xl font-semibold tracking-tight">Retirement solutions</h1>
        <p className="mt-3 text-black/70">Plan design, costs, and fiduciary awareness for employer retirement plans.</p>
        <div className="mt-8 grid gap-8 text-black/80">
          <section>
            <h2 className="text-xl font-semibold">Plan design basics</h2>
            <ul className="mt-3 list-disc pl-5">
              <li>Safe harbor, match formulas, and profit sharing options.</li>
              <li>Eligibility, vesting, and auto‑features to drive participation.</li>
              <li>Provider selection, fees transparency, and investment menu design.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-semibold">Fiduciary awareness</h2>
            <ol className="mt-3 list-decimal pl-5">
              <li>Establish an IPS and document periodic reviews.</li>
              <li>Monitor fees, services, and benchmarks annually.</li>
              <li>Educate participants and provide clear communications.</li>
            </ol>
          </section>
        </div>
        <div className="mt-10">
          <h2 className="text-xl font-semibold">Retirement readiness check</h2>
          <p className="mt-2 text-black/70">Estimate the gap between income needs and projected sources.</p>
          <div className="mt-4">
            <RetirementGapChecker />
          </div>
        </div>
      </div>
    </>
  );
}


