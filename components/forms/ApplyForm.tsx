"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Slider from "@/components/ui/Slider";
import Toggle from "@/components/ui/Toggle";
import SwitchGroup from "@/components/ui/SwitchGroup";

type Term = 10 | 20 | 30;

type MotionDivProps = {
  children?: React.ReactNode;
  className?: string;
  initial?: unknown;
  animate?: unknown;
  exit?: unknown;
  transition?: unknown;
};

export default function ApplyForm() {
  const prefersReduced = useReducedMotion();
  const MDiv = motion.div as unknown as React.ComponentType<MotionDivProps>;
  const searchParams = useSearchParams();

  // Follow homepage steps: Quote → Customize → Activate, then extended onboarding pages
  const [step, setStep] = React.useState<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11>(1);
  const [zip, setZip] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [birthday, setBirthday] = React.useState("");
  const [age, setAge] = React.useState<number>(30);
  const [coverage, setCoverage] = React.useState<number>(250000);
  const [term, setTerm] = React.useState<Term>(20);
  const [smoker, setSmoker] = React.useState<boolean>(false);
  const [submitted, setSubmitted] = React.useState(false);
  // Address and profile
  const [address1, setAddress1] = React.useState("");
  const [address2, setAddress2] = React.useState("");
  const [city, setCity] = React.useState("");
  const [stateCode, setStateCode] = React.useState("CA");
  const [lived3Months, setLived3Months] = React.useState<boolean | null>(null);
  const [residenceType, setResidenceType] = React.useState<string>("");
  const [hasPets, setHasPets] = React.useState<boolean | null>(null);
  const [hasCurrentPolicy, setHasCurrentPolicy] = React.useState<boolean | null>(null);
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [interests, setInterests] = React.useState<string[]>([]);

  const zipValid = /^[0-9]{5}$/.test(zip);
  const canStep2 = true; // After quote, users can continue to customize
  const canStep3 = zipValid; // Need ZIP before Activate
  const canStep4 = Boolean(firstName && lastName && birthday);
  const canStep5 = Boolean(address1 && zip && city && stateCode);
  const canStep6 = lived3Months !== null;
  const canStep7 = residenceType.length > 0;
  const canStep8 = hasPets !== null;
  const canStep9 = hasCurrentPolicy !== null;
  const emailValid = email.length > 0 && /.+@.+\..+/.test(email);
  const phoneValid = phone.length > 0 && /[0-9()\-\s+.]{7,}/.test(phone);

  // Pull prefill values from URL if coming from hero estimator
  React.useEffect(() => {
    const prefill = searchParams.get("prefill");
    if (!prefill) return;
    const getNum = (key: string, fallback: number) => {
      const v = Number(searchParams.get(key));
      return Number.isFinite(v) && v > 0 ? v : fallback;
    };
    const ageQ = getNum("age", age);
    const covQ = getNum("coverage", coverage);
    const termQ = getNum("term", term);
    const smokerQ = searchParams.get("smoker") === "1";
    const zipQ = searchParams.get("zip") ?? zip;
    setAge(ageQ);
    setCoverage(covQ);
    setTerm((termQ === 10 || termQ === 20 || termQ === 30 ? termQ : term) as Term);
    setSmoker(smokerQ);
    setZip(zipQ);
    const go = Number(searchParams.get("go"));
    if (go && go >= 1 && go <= 11) {
      setStep(go as 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <Card className="glass-soft glass-border p-6">
      {!submitted && (
        <div className="mb-4 flex items-center justify-between">
          <div className="text-sm text-black/60">Step {step} of 11</div>
          <div className="h-1 w-40 rounded-full bg-black/10">
            <div
              className="h-1 rounded-full bg-[var(--brand)] transition-all"
              style={{ width: `${(step / 11) * 100}%` }}
            />
          </div>
        </div>
      )}

      <AnimatePresence mode="wait" initial={false}>
        {/* Step 1: Quote */}
        {step === 1 && !submitted && (
          <MDiv
            key="apply-quote"
            initial={prefersReduced ? false : { opacity: 0, y: 8 }}
            animate={prefersReduced ? {} : { opacity: 1, y: 0 }}
            exit={prefersReduced ? {} : { opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="grid gap-6"
          >
            <div>
              <div className="text-lg font-semibold text-[var(--brand)]">Quote</div>
              <div className="text-sm text-black/70">Estimate your coverage in seconds.</div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-6">
                <Slider label="Age" value={age} onChange={setAge} min={18} max={85} />
                <Slider label="Coverage" value={coverage} onChange={setCoverage} min={50000} max={1000000} step={50000} unit="$" />
                <SwitchGroup
                  label="Term Length"
                  options={[{ label: "10 years", value: 10 as Term }, { label: "20 years", value: 20 as Term }, { label: "30 years", value: 30 as Term }]}
                  value={term}
                  onChange={setTerm}
                />
                <Toggle label="Smoker" checked={smoker} onChange={setSmoker} />
              </div>
              <div className="rounded-2xl border border-black/10 bg-white/70 p-4 text-sm">
                <div className="font-medium">Preview</div>
                <ul className="mt-2 space-y-1 text-black/70">
                  <li>Age: {age}</li>
                  <li>Coverage: ${coverage.toLocaleString()}</li>
                  <li>Term: {term} years</li>
                  <li>Smoker: {smoker ? "Yes" : "No"}</li>
                </ul>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button onClick={() => setStep(2)} disabled={!canStep2}>Continue</Button>
              <Button href="/" variant="secondary">Cancel</Button>
            </div>
          </MDiv>
        )}

        {/* Step 2: Customize */}
        {step === 2 && !submitted && (
          <MDiv
            key="apply-customize"
            initial={prefersReduced ? false : { opacity: 0, y: 8 }}
            animate={prefersReduced ? {} : { opacity: 1, y: 0 }}
            exit={prefersReduced ? {} : { opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="grid gap-4"
          >
            <div className="text-lg font-semibold text-[var(--brand)]">Customize</div>
            <div className="text-sm text-black/70">Enter your ZIP code to check availability. You can also tweak preferences later with a licensed expert.</div>
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={5}
              value={zip}
              onChange={(e) => setZip(e.target.value.replace(/[^0-9]/g, ""))}
              className="mt-1 w-full rounded-2xl border border-black/10 bg-white/70 px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
              placeholder="e.g., 92501"
            />
            <div className="flex items-center gap-3">
              <Button variant="secondary" onClick={() => setStep(1)}>Back</Button>
              <Button onClick={() => setStep(3)} disabled={!canStep3} className="cta-pulse">Continue</Button>
            </div>
          </MDiv>
        )}

        {/* Step 3: Activate */}
        {step === 3 && !submitted && (
          <MDiv
            key="apply-activate"
            initial={prefersReduced ? false : { opacity: 0, y: 8 }}
            animate={prefersReduced ? {} : { opacity: 1, y: 0 }}
            exit={prefersReduced ? {} : { opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="grid gap-6"
          >
            <div className="text-lg font-semibold text-[var(--brand)]">Activate</div>
            <div className="text-sm text-black/70">Welcome to Newline! Tell us about yourself.</div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm text-black/70">First name</label>
                <input
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="mt-1 w-full rounded-2xl border border-black/10 bg-white/70 px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
                  placeholder="Jane"
                />
              </div>
              <div>
                <label className="text-sm text-black/70">Last name</label>
                <input
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="mt-1 w-full rounded-2xl border border-black/10 bg-white/70 px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
                  placeholder="Doe"
                />
              </div>
              <div>
                <label className="text-sm text-black/70">Birthday</label>
                <input
                  type="date"
                  value={birthday}
                  onChange={(e) => setBirthday(e.target.value)}
                  className="mt-1 w-full rounded-2xl border border-black/10 bg-white/70 px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
                />
              </div>
            </div>
            <div className="rounded-2xl border border-black/10 bg-white/70 p-4 text-sm">
              <div className="font-medium">Review</div>
              <ul className="mt-2 space-y-1 text-black/70">
                <li>ZIP: {zip}</li>
                <li>Age: {age}</li>
                <li>Coverage: ${coverage.toLocaleString()}</li>
                <li>Term: {term} years</li>
                <li>Smoker: {smoker ? "Yes" : "No"}</li>
              </ul>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="secondary" onClick={() => setStep(2)}>Back</Button>
              <Button onClick={() => setStep(4)} disabled={!canStep4} className="cta-pulse">Continue</Button>
            </div>
          </MDiv>
        )}

        {/* Step 4: Address */}
        {step === 4 && !submitted && (
          <MDiv key="apply-address" initial={prefersReduced ? false : { opacity: 0, y: 8 }} animate={prefersReduced ? {} : { opacity: 1, y: 0 }} exit={prefersReduced ? {} : { opacity: 0, y: -8 }} transition={{ duration: 0.3 }} className="grid gap-4">
            <div className="text-lg font-semibold text-[var(--brand)]">Where do you currently live?</div>
            <input className="w-full rounded-2xl border border-black/10 bg-white/70 px-4 py-3" placeholder="Address 1" value={address1} onChange={(e) => setAddress1(e.target.value)} />
            <input className="w-full rounded-2xl border border-black/10 bg-white/70 px-4 py-3" placeholder="Address 2" value={address2} onChange={(e) => setAddress2(e.target.value)} />
            <div className="grid gap-3 sm:grid-cols-3">
              <input className="rounded-2xl border border-black/10 bg-white/70 px-4 py-3" placeholder="ZIP code" value={zip} onChange={(e) => setZip(e.target.value.replace(/[^0-9]/g, ""))} maxLength={5} />
              <input className="rounded-2xl border border-black/10 bg-white/70 px-4 py-3" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} />
              <input className="rounded-2xl border border-black/10 bg-white/70 px-4 py-3" placeholder="State (e.g., CA)" value={stateCode} onChange={(e) => setStateCode(e.target.value.toUpperCase().slice(0,2))} />
            </div>
            <div className="flex items-center gap-3">
              <Button variant="secondary" onClick={() => setStep(3)}>Back</Button>
              <Button onClick={() => setStep(5)} disabled={!canStep5} className="cta-pulse">Continue</Button>
            </div>
          </MDiv>
        )}

        {/* Step 5: Lived 3 months */}
        {step === 5 && !submitted && (
          <MDiv key="apply-lived" initial={prefersReduced ? false : { opacity: 0, y: 8 }} animate={prefersReduced ? {} : { opacity: 1, y: 0 }} exit={prefersReduced ? {} : { opacity: 0, y: -8 }} transition={{ duration: 0.3 }} className="grid gap-4">
            <div className="text-lg font-semibold text-[var(--brand)]">Have you lived here for at least 3 months?</div>
            <div className="flex gap-3">
              <Button variant={lived3Months === true ? "primary" : "secondary"} onClick={() => setLived3Months(true)}>Yes</Button>
              <Button variant={lived3Months === false ? "primary" : "secondary"} onClick={() => setLived3Months(false)}>No</Button>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="secondary" onClick={() => setStep(4)}>Back</Button>
              <Button onClick={() => setStep(6)} disabled={!canStep6} className="cta-pulse">Continue</Button>
            </div>
          </MDiv>
        )}

        {/* Step 6: Residence type */}
        {step === 6 && !submitted && (
          <MDiv key="apply-residence" initial={prefersReduced ? false : { opacity: 0, y: 8 }} animate={prefersReduced ? {} : { opacity: 1, y: 0 }} exit={prefersReduced ? {} : { opacity: 0, y: -8 }} transition={{ duration: 0.3 }} className="grid gap-4">
            <div className="text-lg font-semibold text-[var(--brand)]">Which of the following best describes where you live?</div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "I own a house",
                "I own a condo",
                "I own an apartment/co-op",
                "I own a mobile home",
                "I currently rent",
                "I live at my parent's/family home",
              ].map((opt) => (
                <button key={opt} type="button" onClick={() => setResidenceType(opt)} className={`rounded-2xl border px-4 py-3 text-left ${residenceType===opt?"border-[var(--brand)] bg-white/70":"border-black/15 bg-white/50"}`}>{opt}</button>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <Button variant="secondary" onClick={() => setStep(5)}>Back</Button>
              <Button onClick={() => setStep(7)} disabled={!canStep7} className="cta-pulse">Continue</Button>
            </div>
          </MDiv>
        )}

        {/* Step 7: Pets */}
        {step === 7 && !submitted && (
          <MDiv key="apply-pets" initial={prefersReduced ? false : { opacity: 0, y: 8 }} animate={prefersReduced ? {} : { opacity: 1, y: 0 }} exit={prefersReduced ? {} : { opacity: 0, y: -8 }} transition={{ duration: 0.3 }} className="grid gap-4">
            <div className="text-lg font-semibold text-[var(--brand)]">We’re curious, do you have a cat or dog at home?</div>
            <div className="flex gap-3">
              <Button variant={hasPets === true ? "primary" : "secondary"} onClick={() => setHasPets(true)}>Yes</Button>
              <Button variant={hasPets === false ? "primary" : "secondary"} onClick={() => setHasPets(false)}>No</Button>
            </div>
            <div className="text-xs text-black/60">You might save by bundling pet coverage with other products.</div>
            <div className="flex items-center gap-3">
              <Button variant="secondary" onClick={() => setStep(6)}>Back</Button>
              <Button onClick={() => setStep(8)} disabled={!canStep8} className="cta-pulse">Continue</Button>
            </div>
          </MDiv>
        )}

        {/* Step 8: Current policies with us */}
        {step === 8 && !submitted && (
          <MDiv key="apply-current-policy" initial={prefersReduced ? false : { opacity: 0, y: 8 }} animate={prefersReduced ? {} : { opacity: 1, y: 0 }} exit={prefersReduced ? {} : { opacity: 0, y: -8 }} transition={{ duration: 0.3 }} className="grid gap-4">
            <div className="text-lg font-semibold text-[var(--brand)]">Before we continue, do you have any current policies with us?</div>
            <div className="flex gap-3">
              <Button variant={hasCurrentPolicy === true ? "primary" : "secondary"} onClick={() => setHasCurrentPolicy(true)}>Yes</Button>
              <Button variant={hasCurrentPolicy === false ? "primary" : "secondary"} onClick={() => setHasCurrentPolicy(false)}>No</Button>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="secondary" onClick={() => setStep(7)}>Back</Button>
              <Button onClick={() => setStep(9)} disabled={!canStep9}>Continue</Button>
            </div>
          </MDiv>
        )}

        {/* Step 9: Email */}
        {step === 9 && !submitted && (
          <MDiv key="apply-email" initial={prefersReduced ? false : { opacity: 0, y: 8 }} animate={prefersReduced ? {} : { opacity: 1, y: 0 }} exit={prefersReduced ? {} : { opacity: 0, y: -8 }} transition={{ duration: 0.3 }} className="grid gap-3">
            <div className="text-lg font-semibold text-[var(--brand)]">Where should we email a copy of your quote?</div>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="you@example.com" className="rounded-2xl border border-black/10 bg-white/70 px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"/>
            {!emailValid && email.length>0 && <div className="text-xs text-red-600">Enter a valid email.</div>}
            <div className="flex items-center gap-3 pt-1">
              <Button variant="secondary" onClick={() => setStep(8)}>Back</Button>
              <Button onClick={()=> setStep(10)} disabled={!emailValid} className="cta-pulse">Continue</Button>
            </div>
          </MDiv>
        )}

        {/* Step 10: Phone */}
        {step === 10 && !submitted && (
          <MDiv key="apply-phone" initial={prefersReduced ? false : { opacity: 0, y: 8 }} animate={prefersReduced ? {} : { opacity: 1, y: 0 }} exit={prefersReduced ? {} : { opacity: 0, y: -8 }} transition={{ duration: 0.3 }} className="grid gap-3">
            <div className="text-lg font-semibold text-[var(--brand)]">What’s your phone number?</div>
            <input type="tel" value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder="(951) 704-9422" className="rounded-2xl border border-black/10 bg-white/70 px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"/>
            {!phoneValid && phone.length>0 && <div className="text-xs text-red-600">Enter a valid phone number.</div>}
            <div className="text-xs text-black/60">
              By providing your phone number and clicking continue, you agree we can call or text you at this number. Consent isn’t required to purchase a policy.
            </div>
            <div className="flex items-center gap-3 pt-1">
              <Button variant="secondary" onClick={() => setStep(9)}>Back</Button>
              <Button onClick={()=> setStep(11)} disabled={!phoneValid} className="cta-pulse">Continue</Button>
            </div>
          </MDiv>
        )}

        {/* Step 11: Interests */}
        {step === 11 && !submitted && (
          <MDiv key="apply-interests" initial={prefersReduced ? false : { opacity: 0, y: 8 }} animate={prefersReduced ? {} : { opacity: 1, y: 0 }} exit={prefersReduced ? {} : { opacity: 0, y: -8 }} transition={{ duration: 0.3 }} className="grid gap-4">
            <div className="text-lg font-semibold text-[var(--brand)]">Are you interested in other policies?</div>
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                "Life",
                "Medicare",
                "Pet",
                "Home",
                "Retirement",
              ].map((opt) => {
                const active = interests.includes(opt);
                return (
                  <button key={opt} type="button" onClick={()=> setInterests(active? interests.filter(i=>i!==opt) : [...interests, opt])} className={`rounded-2xl border px-4 py-6 text-center ${active?"border-[var(--brand)] bg-white/70":"border-black/15 bg-white/50"}`}>
                    {opt}
                  </button>
                );
              })}
            </div>
            <div className="flex items-center gap-3">
              <Button variant="secondary" onClick={() => setStep(10)}>Back</Button>
              <Button onClick={handleSubmit} className="cta-pulse">Save and continue</Button>
            </div>
          </MDiv>
        )}

        {submitted && (
          <MDiv
            key="apply-done"
            initial={prefersReduced ? false : { opacity: 0, y: 8 }}
            animate={prefersReduced ? {} : { opacity: 1, y: 0 }}
            exit={prefersReduced ? {} : { opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="grid gap-3 text-center"
          >
            <div className="text-2xl font-semibold">Thank you!</div>
            <div className="text-black/70">We received your application details. A licensed expert will follow up with next steps.</div>
            <div className="mt-2">
              <Button href="/">Back to Home</Button>
            </div>
          </MDiv>
        )}
      </AnimatePresence>
    </Card>
  );
}

