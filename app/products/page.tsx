import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
// import Container from "@/components/ui/Container";
import Link from "next/link";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Products",
  description: "Life insurance with living benefits, Medicare assistance, and retirement planning options.",
};

export default function ProductsPage() {
  return (
    <main>
      <Section title="Our Products" subtitle="Learn more about what we offer.">
        <div className="grid gap-6 sm:grid-cols-3">
          <Card className="p-6 glass-soft">
            <h3 className="text-lg font-semibold">Life Insurance w/ Living Benefits</h3>
            <p className="mt-2 text-sm text-black/70">Flexible coverage with access to benefits for chronic, critical, or terminal illness.</p>
            <Link href="#" className="mt-4 inline-block text-sm font-medium underline">Explore options</Link>
          </Card>
          <Card className="p-6 glass-soft">
            <h3 className="text-lg font-semibold">Medicare Assistance</h3>
            <p className="mt-2 text-sm text-black/70">Understand enrollment timing and compare plan types clearly.</p>
            <Link href="/contact" className="mt-4 inline-block text-sm font-medium underline">Book a guidance call</Link>
          </Card>
          <Card className="p-6 glass-soft">
            <h3 className="text-lg font-semibold">Retirement Planning</h3>
            <p className="mt-2 text-sm text-black/70">Protect savings, reduce risk, and plan tax-advantaged strategies.</p>
            <Link href="#" className="mt-4 inline-block text-sm font-medium underline">Learn more</Link>
          </Card>
        </div>
      </Section>
      <Section title="Why choose Newline">
        <div className="grid gap-6 sm:grid-cols-3">
          <Card className="p-6 glass-soft">
            <div className="text-base font-semibold">Living benefits</div>
            <p className="mt-2 text-sm text-black/70">Access a portion of your benefit for certain illnesses—support when it matters.</p>
          </Card>
          <Card className="p-6 glass-soft">
            <div className="text-base font-semibold">Flexible coverage</div>
            <p className="mt-2 text-sm text-black/70">Adjust amounts and riders as life changes—no fuss.</p>
          </Card>
          <Card className="p-6 glass-soft">
            <div className="text-base font-semibold">Lifetime support</div>
            <p className="mt-2 text-sm text-black/70">We’re here for policy changes and questions any time.</p>
          </Card>
        </div>
        <div className="mt-8">
          <Button href="/apply">Start your application</Button>
        </div>
      </Section>
    </main>
  );
}

