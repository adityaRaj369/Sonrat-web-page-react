"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { HeroVisual } from "@/components/sections/HeroVisual";
import { TheDifference } from "@/components/sections/TheDifference";
import { AgentInAction } from "@/components/sections/AgentInAction";
import { CustomerSupport } from "@/components/sections/CustomerSupport";
import { SalesTeam } from "@/components/sections/SalesTeam";
import { Multilingual } from "@/components/sections/Multilingual";
import { AlwaysOn } from "@/components/sections/AlwaysOn";
import { ConnectedStack } from "@/components/sections/ConnectedStack";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { DeveloperApi } from "@/components/sections/DeveloperApi";
import { ControlCenter } from "@/components/sections/ControlCenter";
import { EnterpriseTrust } from "@/components/sections/EnterpriseTrust";
import { UseCasesBento } from "@/components/sections/UseCasesBento";
import { ArchitectureBench } from "@/components/sections/ArchitectureBench";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/layout/Footer";
import { AgentBuilderModal } from "@/components/interactive/AgentBuilderModal";
import { ContactSalesModal } from "@/components/interactive/ContactSalesModal";

export default function Home() {
  const [isBuilderOpen, setIsBuilderOpen] = useState(false);
  const [isSalesOpen, setIsSalesOpen] = useState(false);

  const scrollToDemo = () => {
    const el = document.getElementById("demo");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#050507] text-[#ededed] relative selection:bg-white/20 selection:text-white">
      {/* Sticky Navigation */}
      <Navbar
        onOpenAuthModal={() => setIsSalesOpen(true)}
        onOpenDemoModal={() => setIsBuilderOpen(true)}
      />

      {/* Main Content Sections */}
      <main id="main-content">
        {/* 1. Hero Section */}
        <section id="product">
          <Hero
            onOpenDemo={() => setIsBuilderOpen(true)}
            onScrollToDemo={scrollToDemo}
          />
        </section>

        {/* 2. Hero Interactive Business Nexus Visual */}
        <HeroVisual />

        {/* 3. The Big Difference: More Than A Voice Bot */}
        <TheDifference />

        {/* 4. Live Simulated Call Execution Trace */}
        <AgentInAction />

        {/* 5. Customer Support Operations & Dashboard */}
        <section id="solutions">
          <CustomerSupport />
        </section>

        {/* 6. Outbound & Inbound Sales Velocity */}
        <SalesTeam />

        {/* 7. Multilingual Speech Engine */}
        <Multilingual />

        {/* 8. 24/7 Always On */}
        <AlwaysOn />

        {/* 9. Connect Your Business Stack */}
        <ConnectedStack />

        {/* 10. How It Works Progressive Timeline */}
        <HowItWorks />

        {/* 11. Developer / API Experience */}
        <DeveloperApi />

        {/* 12. Full-Width Product Control Center */}
        <ControlCenter />

        {/* 13. Enterprise Security & Trust */}
        <EnterpriseTrust />

        {/* 14. Bento Grid Industry Use Cases */}
        <UseCasesBento />

        {/* 15. Architecture & Engineering Benchmarks */}
        <ArchitectureBench />

        {/* 16. Dramatic Final Full-Screen CTA */}
        <FinalCta
          onOpenDemo={() => setIsBuilderOpen(true)}
          onOpenContact={() => setIsSalesOpen(true)}
        />
      </main>

      {/* 17. 6-Column Enterprise Footer */}
      <Footer />

      {/* Interactive Modals */}
      <AgentBuilderModal
        isOpen={isBuilderOpen}
        onClose={() => setIsBuilderOpen(false)}
      />

      <ContactSalesModal
        isOpen={isSalesOpen}
        onClose={() => setIsSalesOpen(false)}
      />
    </div>
  );
}
