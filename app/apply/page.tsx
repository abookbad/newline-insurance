import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import ApplyForm from "@/components/forms/ApplyForm";
import { Suspense } from "react";

export const metadata = {
  title: "Apply",
  description: "Start your application with Newline Financial and Insurance Solutions.",
};

export default function ApplyPage() {
  return (
    <main>
      <Section title="Apply" subtitle="Start your application in a few steps.">
        <Container className="max-w-3xl">
          <Suspense>
            <ApplyForm />
          </Suspense>
        </Container>
      </Section>
    </main>
  );
}

