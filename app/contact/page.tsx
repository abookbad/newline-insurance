import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Contact",
  description: "Reach a licensed expert for guidance on life insurance, Medicare, and retirement planning.",
};

export default function ContactPage() {
  return (
    <main>
      <Section title="Talk to a licensed expert" subtitle="No pressure, just answers.">
        <Card className="p-6 glass-soft">
          <div className="text-sm text-black/70">Prefer to call?</div>
          <a href="tel:+19517049422" className="mt-2 inline-block text-lg font-semibold">(951) 704-9422</a>
          <div className="mt-6 text-sm text-black/70">Or start with a quick estimate and we’ll follow up with options:</div>
          <Button href="/apply" className="mt-3">Start a Quote</Button>
        </Card>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <Card className="p-6 glass-soft">
            <div className="text-base font-semibold">Service area</div>
            <p className="mt-2 text-sm text-black/70">We help individuals and families across the U.S. with life insurance, Medicare assistance, and retirement planning.</p>
          </Card>
          <Card className="p-6 glass-soft">
            <div className="text-base font-semibold">Hours</div>
            <p className="mt-2 text-sm text-black/70">Mon–Fri: 8am–6pm PT. Book a time that works for you and we’ll call you.</p>
          </Card>
        </div>
      </Section>
    </main>
  );
}

