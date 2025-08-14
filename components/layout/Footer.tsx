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
            Life insurance with living benefits, Medicare guidance, retirement and legacy planning.
          </div>
        </div>
        <div>
          <div className="text-sm font-medium">Links</div>
          <div className="mt-2 flex flex-col text-sm">
            <a className="text-white/90 hover:text-white" href="/products">Products</a>
            <a className="text-white/90 hover:text-white" href="/how-it-works">How It Works</a>
            <a className="text-white/90 hover:text-white" href="/faq">FAQ</a>
            <a className="text-white/90 hover:text-white" href="/contact">Contact</a>
            <div className="mt-2 text-white/60">
              <a className="hover:text-white" href="#" aria-label="Careers">Careers</a>
              <span className="px-1">/</span>
              <a className="hover:text-white" href="#" aria-label="Partners">Partners</a>
            </div>
          </div>
        </div>
        <div className="text-xs text-white/70 self-end sm:text-right space-y-1">
          <div>
            <a href="tel:+19517049422" className="text-white/90 hover:text-white">(951) 704-9422</a>
          </div>
          <div>Mon–Fri: 8am–6pm PT · Service across the U.S.</div>
          <div>© {year} Newline Financial and Insurance Solutions. All rights reserved.</div>
        </div>
      </Container>
    </footer>
  );
}

