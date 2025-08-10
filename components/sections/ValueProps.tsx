import React from "react";
import Section from "@/components/ui/Section";
import Image from "next/image";
// Prefer static import to avoid path mismatches at runtime
// If the asset moves or is renamed, build will surface the error clearly
import kidsImage from "@/public/mainPage/valueProps/kidsUnderUmbrella.jpeg";

export default function ValueProps() {
  return (
    <Section title="Protection you can trust" subtitle="Clear value, simple steps, real people.">
      <div className="grid items-center gap-8 sm:grid-cols-2">
        <div className="text-black/80 space-y-4">
          <p>
            At Newline, you get clear recommendations without jargon. We compare
            options across reputable carriers and explain the trade‑offs in plain
            English, so you can choose confidently.
          </p>
          <p>
            From a 60‑second estimate to a guided, secure application, the process
            is intentionally simple. Most clients finish in minutes, and many
            policies offer fast approvals with e‑sign.
          </p>
          <p>
            When questions come up, you speak to licensed advocates—not a
            chatbot. Our team has helped families for <span className="font-semibold text-[var(--brand)]">10+ years</span>
            across <span className="font-semibold text-[var(--brand)]">all 50 states</span>, and we stay with you after your policy
            is active to support changes and reviews over time.
          </p>
        </div>
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-black/10 bg-black/[0.04]">
          <Image
            src={kidsImage}
            alt="Parents and kids protected under an umbrella"
            fill
            className="object-cover"
            sizes="(min-width: 640px) 40vw, 100vw"
            priority={false}
          />
        </div>
      </div>
    </Section>
  );
}

