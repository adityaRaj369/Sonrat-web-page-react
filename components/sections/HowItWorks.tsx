"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, FileSearch, Megaphone } from "lucide-react";
import { Atmosphere } from "@/components/ui/atmosphere";

export function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Train your agent",
      desc: "Company info, products, FAQs, documents, personality, languages, sales or support behavior, and safety rails.",
      icon: BookOpen,
    },
    {
      num: "02",
      title: "Connect a workflow",
      desc: "Use the same agent for phone orders, customer complaints, outbound campaigns, ticket updates, or lead follow-up.",
      icon: Megaphone,
    },
    {
      num: "03",
      title: "Review outcomes",
      desc: "Orders, support tickets, leads, transcripts, recordings, and callbacks appear in the dashboard for your team.",
      icon: FileSearch,
    },
  ];

  return (
    <section id="how-it-works" className="relative py-16 md:py-24 border-t border-slate-200/70 overflow-hidden">
      <Atmosphere />
      <div className="site-shell relative z-10">
        <div className="max-w-2xl mb-12">
          <p className="section-label mb-3">How Sonrat works</p>
          <h2 className="headline text-4xl sm:text-5xl lg:text-6xl mb-4 max-w-[14ch]">
            From company knowledge to business records.
          </h2>
          <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-medium max-w-xl">
            Configure agents in the Sonrat control plane, route calls through the right module,
            and keep every conversation auditable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="panel rounded-[20px] sm:rounded-[24px] p-5 sm:p-6 hover:-translate-y-1 transition-transform"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-11 h-11 rounded-2xl bg-[#050505] text-white flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-slate-400">{step.num}</span>
                </div>
                <h3 className="headline text-2xl mb-2 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-sm text-neutral-700 leading-relaxed font-medium">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
