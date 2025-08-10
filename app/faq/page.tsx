import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "FAQ",
  description: "Answers to common questions about coverage, living benefits, and Medicare help.",
};

const faqs = [
  { q: "How long does underwriting take?", a: "Many policies decide quickly; others may take a few days depending on records." },
  { q: "Can I adjust my coverage later?", a: "Yes—updates like beneficiaries, riders, or amounts can often be made." },
  { q: "What are living benefits?", a: "Access part of your benefit for chronic, critical, or terminal illness (where available)." },
  { q: "Do you charge for Medicare help?", a: "No. We guide you on enrollment windows and plan options at no cost." },
];

export default function FAQPage() {
  return (
    <main>
      <Section title="Frequently asked questions">
        <div className="grid gap-4">
          {faqs.map((f) => (
            <Card key={f.q} className="p-4 glass-soft">
              <div className="font-medium">{f.q}</div>
              <div className="mt-1 text-sm text-black/70">{f.a}</div>
            </Card>
          ))}
        </div>
        <div className="mt-8">
          <Button href="/contact" variant="secondary">Still have questions? Contact us</Button>
        </div>
      </Section>
    </main>
  );
}

