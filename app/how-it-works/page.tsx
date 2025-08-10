import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "How It Works",
  description: "From quote to activate: simple, guided, and clear.",
};

const steps = [
  { title: "Quote", text: "Estimate coverage ranges instantly and review options." },
  { title: "Customize", text: "Fine-tune term, riders, and budget with a licensed expert." },
  { title: "Activate", text: "Apply securely online—many approvals are fast with e-sign." },
];

export default function HowItWorksPage() {
  return (
    <main>
      <Section title="How It Works" subtitle="Clear steps from start to finish.">
        <div className="grid gap-6 sm:grid-cols-3">
          {steps.map((s) => (
            <Card key={s.title} className="p-6 glass-soft">
              <div className="text-lg font-semibold">{s.title}</div>
              <div className="mt-2 text-sm text-black/70">{s.text}</div>
            </Card>
          ))}
        </div>
      </Section>
      <Section title="What to expect" subtitle="No surprises, just clear guidance.">
        <div className="grid gap-6 sm:grid-cols-2">
          <Card className="p-6 glass-soft">
            <div className="text-base font-semibold">Licensed experts</div>
            <p className="mt-2 text-sm text-black/70">Talk to real people who explain options in plain language and help you choose a plan that fits.</p>
          </Card>
          <Card className="p-6 glass-soft">
            <div className="text-base font-semibold">Fast, secure application</div>
            <p className="mt-2 text-sm text-black/70">Many policies approve quickly with e-sign and simplified underwriting.</p>
          </Card>
        </div>
        <div className="mt-8">
          <Button href="/apply">Start your application</Button>
        </div>
      </Section>
    </main>
  );
}

