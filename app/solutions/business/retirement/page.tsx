import SolutionHero from "@/components/sections/SolutionHero";

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
      </div>
    </>
  );
}


