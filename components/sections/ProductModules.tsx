"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Headphones,
  Megaphone,
  Package,
  ShieldCheck,
  ShoppingCart,
  TicketCheck,
} from "lucide-react";
import { Atmosphere } from "@/components/ui/atmosphere";

const MODULES = [
  {
    icon: BookOpen,
    tag: "Module 01 · Agent Studio",
    title: "Visual agent builder with deep tool orchestration.",
    description:
      "Configure autonomous agent personas, custom knowledge bases, multi-language speech models, safety guardrails, and real-time tool bindings in a unified workspace.",
    image: "/dashboard-screens/02-agents.png",
    rows: [
      ["Configuration", "Identity, Brand Knowledge, Voice Engine, Multi-Language Packs"],
      ["Lifecycle", "Version-controlled draft staging and instant production deployment"],
      ["Tool Bindings", "Live API actions for customer lookup, catalog search, cart updates, and tickets"],
    ],
  },
  {
    icon: ShoppingCart,
    tag: "Module 02 · Voice Commerce",
    title: "Conversational phone ordering with instant catalog sync.",
    description:
      "Enable callers to browse menus and place orders entirely over the phone. Sonrat dynamically searches product catalogs, updates shopping carts in real time, and verbally confirms order details before final checkout.",
    image: "/dashboard-screens/06-company-agent.png",
    rows: [
      ["Customer Intent", '"I want to order two large Burrata pizzas and garlic bread"'],
      ["Agent Execution", "Searches catalog, calculates subtotal, reads order summary, awaits confirmation"],
      ["System Output", "Confirmed order record tied to call recording, audio playback, and order ID"],
    ],
  },
  {
    icon: Headphones,
    tag: "Module 03 · Customer Support",
    title: "Automated complaint resolution and instant ticket creation.",
    description:
      "Resolve common customer issues autonomously. When an issue requires investigation, Sonrat categorizes the complaint, sets urgency, and creates a trackable support ticket with call evidence and transcripts.",
    image: "/dashboard-screens/05-support.png",
    rows: [
      ["Customer Intent", '"My payment was deducted but my order never arrived, I need a refund"'],
      ["Agent Execution", "Verifies customer details, logs issue category, sets priority, generates ticket"],
      ["System Output", "Structured support ticket with synchronized audio transcript and audit trail"],
    ],
  },
  {
    icon: Megaphone,
    tag: "Module 04 · Outbound Sales",
    title: "Campaign calling with automated qualification and callbacks.",
    description:
      "Execute high-throughput outbound sales campaigns. Voice agents introduce products, answer questions, qualify leads, log carrier disposition codes, and schedule follow-up callbacks without manual agent dialing.",
    image: "/dashboard-screens/04-sales-calls.png",
    rows: [
      ["Customer Intent", '"Please send me pricing details and call me tomorrow at 10 AM"'],
      ["Agent Execution", "Records customer answers, qualifies timeline, logs lead, schedules calendar callback"],
      ["System Output", "Complete call log with carrier status, lead qualification score, and next action"],
    ],
  },
];

export function ProductModules() {
  return (
    <section id="product-modules" className="relative py-16 md:py-24 border-t border-slate-200/70 overflow-hidden">
      <Atmosphere />
      <div className="site-shell relative z-10 space-y-16 lg:space-y-24">
        <div className="max-w-3xl">
          <p className="section-label mb-3">Platform modules</p>
          <h2 className="headline text-4xl sm:text-5xl lg:text-6xl mb-4 max-w-[16ch]">
            The complete voice AI operating system.
          </h2>
          <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-medium max-w-2xl">
            Built for real-world enterprise operations. Sonrat connects voice models directly to your
            live product catalog, customer support desk, outbound dialer, and database with sub-second response times.
          </p>
        </div>

        {/* Individual Module Showcases - Each screenshot is borderless and clean, identical to topmost hero image */}
        <div className="space-y-12 sm:space-y-16 lg:space-y-24">
          {MODULES.map((module, index) => {
            const isEven = index % 2 === 1;
            const Icon = module.icon;
            return (
              <div
                key={module.title}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center"
              >
                {/* Text details column */}
                <div className={`lg:col-span-5 ${isEven ? "lg:order-2" : "lg:order-1"} space-y-3.5 sm:space-y-4`}>
                  <div className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-3 sm:px-3.5 py-1 text-xs font-semibold">
                    <Icon className="w-3.5 h-3.5" />
                    <span>{module.tag}</span>
                  </div>

                  <h3 className="headline text-2xl sm:text-3xl text-slate-900 leading-snug">
                    {module.title}
                  </h3>

                  <p className="text-sm sm:text-base text-neutral-700 font-medium leading-relaxed">
                    {module.description}
                  </p>

                  <div className="space-y-2 pt-1 sm:pt-2">
                    {module.rows.map(([label, value]) => (
                      <div
                        key={label}
                        className="grid gap-1 sm:gap-1.5 rounded-xl bg-slate-100/80 px-3 sm:px-3.5 py-2 sm:py-2.5 sm:grid-cols-[135px_1fr]"
                      >
                        <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                          {label}
                        </div>
                        <div className="text-xs sm:text-sm font-medium leading-relaxed text-slate-800">
                          {value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Screenshot column - Simple clean screenshot, no borders, exactly like hero */}
                <div className={`lg:col-span-7 ${isEven ? "lg:order-1" : "lg:order-2"} min-w-0`}>
                  <div className="overflow-hidden rounded-xl sm:rounded-2xl bg-white shadow-[0_12px_40px_-16px_rgba(15,23,42,0.2)] sm:shadow-[0_20px_60px_-20px_rgba(15,23,42,0.25)]">
                    <img
                      src={module.image}
                      alt={`${module.title} real dashboard screenshot`}
                      className="w-full object-contain"
                      loading="eager"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature summary cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
          <Feature
            icon={Package}
            title="E-Commerce Tool Integrations"
            body="Built-in function calling for catalog search, cart management, item modifications, and order checkout during live calls."
          />
          <Feature
            icon={TicketCheck}
            title="Support & Ticketing Engine"
            body="Native integrations to open dispute tickets, track refund requests, assign priority levels, and route complex escalations."
          />
          <Feature
            icon={ShieldCheck}
            title="Enterprise Governance & Security"
            body="Multi-tenant workspace isolation, role-based access control (RBAC), end-to-end call audit logs, and carrier compliance."
          />
        </div>
      </div>
    </section>
  );
}

function Feature({
  icon: Icon,
  title,
  body,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-5">
      <div className="flex items-start gap-3">
        <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0">
          <Icon className="w-4 h-4 text-slate-800" />
        </div>
        <div>
          <h3 className="headline text-xl mb-1">{title}</h3>
          <p className="text-sm text-neutral-700 leading-relaxed font-medium">{body}</p>
        </div>
      </div>
    </div>
  );
}
