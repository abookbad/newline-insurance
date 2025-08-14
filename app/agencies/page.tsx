import ServicesTabs from "@/components/sections/ServicesTabs";

export const metadata = {
  title: "Agencies",
  description: "Agency platform overview.",
};

export default function AgenciesPage() {
  return (
    <main>
      <ServicesTabs clientOnly={false} defaultTabId="agencies" />
    </main>
  );
}


