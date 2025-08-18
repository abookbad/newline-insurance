"use client";

import React from "react";
import Image from "next/image";
import Section from "@/components/ui/Section";

export default function AgencyPlatformShowcase() {
  return (
    <Section id="agency-platform" title="Agency Platform" subtitle="Recruitment, onboarding, and resources for partners">
      <div className="grid gap-4 md:gap-6 md:grid-cols-2">
        {/* Agent Partners card - dark CTA style */}
        <a href="/solutions/agency/agent-partners" className="group relative overflow-hidden rounded-2xl border border-black/10 bg-[#102444] text-white shadow-md hover:shadow-lg transition-shadow">
          <div className="absolute inset-0 opacity-25">
            <Image src="/solutions/planning/insurance.jpeg" alt="Agent partners" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-black/30 to-transparent" />
          </div>
          <div className="relative p-6 md:p-8">
            <div className="text-sm uppercase tracking-widest text-white/80">For Agents</div>
            <h3 className="mt-1 text-2xl font-semibold tracking-tight">Our Agent Partners</h3>
            <p className="mt-2 text-white/85 max-w-prose">Training, tools, and support to help you grow with confidence.</p>
            <ul className="mt-4 grid gap-2 text-sm text-white/85">
              <li>Carrier access and product support</li>
              <li>Warm lead programs and marketing assets</li>
              <li>Mentorship and compliant onboarding</li>
            </ul>
            <div className="mt-5 inline-flex items-center rounded-[12px] bg-white text-[#102444] px-4 py-2 text-sm font-medium group-hover:translate-y-[-1px] transition-transform">Become an agent</div>
          </div>
        </a>

        {/* Agency Owner Partners card - light split layout */}
        <a href="/solutions/agency/agency-owner-partners" className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white/80 supports-[backdrop-filter]:bg-white/60 backdrop-blur shadow-md hover:shadow-lg transition-shadow">
          <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden md:block">
            <Image src="/solutions/business/business-planning.jpeg" alt="Agency owner partners" fill className="object-cover -scale-x-100" />
            {/* Light veil over the image for readability */}
            <div className="absolute inset-0 bg-white/55" />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
          </div>
          <div className="relative p-6 md:p-8">
            <div className="text-sm uppercase tracking-widest text-black/60">For Agency Owners</div>
            <h3 className="mt-1 text-2xl font-semibold tracking-tight text-[var(--brand)]">Our Agency Owner Partners</h3>
            <p className="mt-2 text-black/70 max-w-prose">Platform, resources, and recruiting to help you scale your agency.</p>
            <div className="mt-4 grid gap-2 text-sm text-black/75">
              <div className="inline-flex items-center gap-2"><span className="inline-block rounded-full bg-black/10 px-2 py-0.5 text-xs">Platform</span> Contracting, commissions, and case support</div>
              <div className="inline-flex items-center gap-2"><span className="inline-block rounded-full bg-black/10 px-2 py-0.5 text-xs">Growth</span> Recruiting and onboarding resources</div>
              <div className="inline-flex items-center gap-2"><span className="inline-block rounded-full bg-black/10 px-2 py-0.5 text-xs">Compliance</span> Marketing assets and training</div>
            </div>
            <div className="mt-5 inline-flex items-center rounded-[12px] border border-[var(--brand)] text-[var(--brand)] px-4 py-2 text-sm font-medium group-hover:translate-y-[-1px] transition-transform">Start an agency</div>
          </div>
        </a>
      </div>
    </Section>
  );
}


