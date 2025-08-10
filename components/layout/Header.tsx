"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-gradient-to-r from-[var(--brand-start)] to-[var(--brand-end)] text-white brand-ui">
      <Container className="flex h-16 sm:h-20 items-center justify-between">
        <Link href="/" aria-label="Newline Financial and Insurance Solutions home" className="inline-flex items-center">
          <Image
            src="/mainPage/hero/heroLogoExtended.png"
            alt="Newline Financial and Insurance Solutions"
            width={320}
            height={64}
            priority
            className="h-8 w-auto sm:h-10"
          />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/products" className="text-white/90 hover:text-white text-base sm:text-lg font-medium">Products</Link>
          <Link href="/how-it-works" className="text-white/90 hover:text-white text-base sm:text-lg font-medium">How It Works</Link>
          <Link href="/faq" className="text-white/90 hover:text-white text-base sm:text-lg font-medium">FAQ</Link>
          <Link href="/contact" className="text-white/90 hover:text-white text-base sm:text-lg font-medium">Contact</Link>
        </nav>
        <div className="flex items-center gap-2">
          <Button href="tel:+19517049422" variant="secondary" className="text-base sm:text-lg">Call (951) 704-9422</Button>
        </div>
      </Container>
    </header>
  );
}

