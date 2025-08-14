import ServicesTabs from "@/components/sections/ServicesTabs";

export const metadata = {
  title: "Agents",
  description: "Agent platform overview.",
};

export default function AgentsPage() {
  return (
    <main>
      <ServicesTabs clientOnly={false} defaultTabId="agents" />
    </main>
  );
}


