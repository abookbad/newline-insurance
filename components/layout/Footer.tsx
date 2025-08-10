import React from "react";
import Container from "@/components/ui/Container";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-20 border-t border-white/10 bg-[var(--brand)] text-white brand-ui">
      <Container className="grid gap-6 py-10 sm:grid-cols-3">
        <div>
          <div className="text-base font-semibold">Newline Financial</div>
          <div className="mt-2 text-sm text-white/80">
            Life insurance with living benefits, Medicare assistance, and retirement planning.
          </div>
        </div>
        <div>
          <div className="text-sm font-medium">Links</div>
          <div className="mt-2 flex flex-col text-sm">
            <a className="text-white/90 hover:text-white" href="/products">Products</a>
            <a className="text-white/90 hover:text-white" href="/how-it-works">How It Works</a>
            <a className="text-white/90 hover:text-white" href="/faq">FAQ</a>
            <a className="text-white/90 hover:text-white" href="/contact">Contact</a>
          </div>
        </div>
        <div className="text-xs text-white/70 self-end sm:text-right">
          © {year} Newline Financial and Insurance Solutions. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}

