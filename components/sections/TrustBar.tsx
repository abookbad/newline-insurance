import React from "react";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";

export default function TrustBar() {
  const carriers = ["Aetna", "Mutual of Omaha", "John Hancock", "Pacific Life", "Ameritas"];
  return (
    <Section title="Licensed & Trusted in Your Area">
      <Card>
        <div className="grid grid-cols-2 items-center gap-6 p-6 sm:grid-cols-5">
          {carriers.map((c) => (
            <div key={c} className="text-center text-sm text-black/60">{c}</div>
          ))}
        </div>
      </Card>
    </Section>
  );
}

