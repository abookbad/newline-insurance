import Link from "next/link";

export default function BusinessSolutions() {
  const items = [
    { title: "Business planning", href: "/solutions/planning/business-planning", blurb: "Entity, continuity, and key person strategies." },
    { title: "Group Benefits", href: "/solutions/business/group-benefits", blurb: "Benefits packages to attract and retain talent." },
    { title: "Retirement solutions", href: "/solutions/business/retirement", blurb: "Employer plan design with clear costs and fiduciary awareness." },
    { title: "Strategic Tax Planning", href: "/solutions/business/strategic-tax", blurb: "Coordinate structure and benefits with tax pros." },
  ];
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Business Solutions</h1>
      <ul className="mt-6 grid gap-3">
        {items.map((i) => (
          <li key={i.href} className="rounded-2xl border border-black/10 bg-white/60 p-4">
            <div className="font-medium">
              <Link href={i.href} className="hover:underline">{i.title}</Link>
            </div>
            <p className="text-sm text-black/70">{i.blurb}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}


