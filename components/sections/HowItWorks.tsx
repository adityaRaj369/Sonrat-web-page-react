"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Megaphone, FileSearch } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Train your agent",
      desc: "Add company info, products, FAQs, and documents. Set personality, languages, sales or support behavior, and safety rails.",
      icon: BookOpen,
    },
    {
      num: "02",
      title: "Launch calls",
      desc: "Run outbound dialer campaigns with contact import, calling hours, and retries — or bind a number so AI answers inbound support.",
      icon: Megaphone,
    },
    {
      num: "03",
      title: "Review outcomes",
      desc: "Every call leaves a transcript, recording, structured outcome, lead or callback — ready for your team to act.",
      icon: FileSearch,
    },
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white border-t border-zinc-100">
      <div className="site-shell">
        <div className="max-w-2xl mb-12">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-400 mb-3">
            How Sonrat works
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-950 tracking-tight mb-3">
            From knowledge to live phone calls.
          </h2>
          <p className="text-sm sm:text-base text-zinc-500 leading-relaxed">
            Configure agents in the Sonrat control plane, dial or answer through telephony,
            and keep every conversation auditable — the same loop as the production dashboard.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="rounded-2xl border border-zinc-200 bg-zinc-50/60 p-6 hover:bg-white hover:shadow-sm transition-all"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-900">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-zinc-400">{step.num}</span>
                </div>
                <h3 className="text-lg font-semibold text-zinc-950 mb-2 tracking-tight">{step.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{step.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
