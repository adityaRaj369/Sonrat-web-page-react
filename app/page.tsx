"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { ProductModules } from "@/components/sections/ProductModules";
import { LiveDemo } from "@/components/sections/LiveDemo";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/layout/Footer";
import { ContactSalesModal } from "@/components/interactive/ContactSalesModal";

export default function Home() {
  const [isSalesOpen, setIsSalesOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-zinc-950 relative selection:bg-black selection:text-white font-sans">
      <Navbar
        onOpenAuthModal={() => setIsSalesOpen(true)}
        onOpenDemoModal={() => setIsSalesOpen(true)}
      />

      <main id="main-content">
        <section id="product">
          <Hero
            onOpenDemo={() => setIsSalesOpen(true)}
            onOpenSales={() => setIsSalesOpen(true)}
          />
        </section>

        <HowItWorks />
        <ProductModules />
        <LiveDemo />
        <FinalCta
          onOpenDemo={() => setIsSalesOpen(true)}
          onOpenContact={() => setIsSalesOpen(true)}
        />
      </main>

      <Footer />

      <ContactSalesModal
        isOpen={isSalesOpen}
        onClose={() => setIsSalesOpen(false)}
      />
    </div>
  );
}
