import ServicesTabs from "@/components/sections/ServicesTabs";

export const metadata = {
  title: "Resources",
  description: "Financial literacy and community overview.",
};

export default function ResourcesPage() {
  return (
    <main>
      <ServicesTabs clientOnly={false} defaultTabId="resources" />
    </main>
  );
}


