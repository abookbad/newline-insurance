import CollegeSavingsEstimator from "@/components/sections/CollegeSavingsEstimator";
import SolutionHero from "@/components/sections/SolutionHero";

export default function Page() {
  return (
    <>
      <SolutionHero
        title="College planning"
        subtitle="Coordinate savings timelines and strategies within a full financial plan."
        image={{ src: "/solutions/planning/college.jpeg", alt: "College planning" }}
      />
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16">
        <h1 className="text-3xl font-semibold tracking-tight">College planning</h1>
        <p className="mt-3 text-black/70">Coordinate savings timelines, school lists, and funding strategies within your broader financial plan.</p>
        <div className="mt-8 grid gap-6 text-black/80">
          <section>
            <h2 className="text-xl font-semibold">What we cover</h2>
            <ul className="mt-3 list-disc pl-5">
              <li>529s vs. alternatives, ownership, and financial‑aid impact</li>
              <li>Target savings amounts and contribution plans</li>
              <li>Integrating college with retirement priorities</li>
            </ul>
          </section>
        </div>
        <div className="mt-8">
          <CollegeSavingsEstimator />
        </div>
      </div>
    </>
  );
}


