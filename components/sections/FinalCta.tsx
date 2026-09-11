"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface FinalCtaProps {
  onOpenDemo?: () => void;
  onOpenContact?: () => void;
}

export function FinalCta({ onOpenDemo, onOpenContact }: FinalCtaProps) {
  return (
    <section id="pricing" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="site-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl bg-zinc-950 border border-zinc-800 p-8 sm:p-12 lg:p-14 overflow-hidden"
        >
          <div className="absolute inset-x-0 -bottom-24 h-56 rounded-[100%] bg-emerald-500/10 blur-2xl pointer-events-none" />
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-400 mb-3">
                Get started
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight mb-4">
                Ready to put AI on your sales and support lines?
              </h2>
              <p className="text-sm text-zinc-400 leading-relaxed max-w-lg">
                Train a Sonrat agent on your company knowledge, launch campaigns or inbound numbers,
                and review every call outcome in one dashboard.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={onOpenDemo}
                className="group inline-flex items-center gap-2 bg-white hover:bg-zinc-100 text-slate-950 font-medium text-sm px-6 py-3.5 rounded-full"
              >
                Book a demo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 text-white/80 hover:text-white font-medium text-sm px-5 py-3.5 rounded-full hover:bg-white/5"
              >
                Talk to sales
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
