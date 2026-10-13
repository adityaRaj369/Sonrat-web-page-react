"use client";

import React from "react";
import { Atmosphere } from "@/components/ui/atmosphere";
import {
  PhoneCall,
  Brain,
  Wrench,
  CheckCircle2,
  ArrowRight,
  Zap,
  ShieldCheck,
  FileSpreadsheet,
} from "lucide-react";

const PIPELINE_STAGES = [
  {
    step: "01",
    tag: "Telephony Stream",
    title: "Caller Voice",
    icon: PhoneCall,
    description: "Inbound and outbound telephone calls streamed with sub-200ms audio latency over enterprise carrier trunks.",
    features: ["Asia/Kolkata 24/7 lines", "Zero hold queue", "Crystal-clear audio"],
  },
  {
    step: "02",
    tag: "Speech & Reasoning",
    title: "Voice Intelligence",
    icon: Brain,
    description: "Real-time speech recognition (ASR) coupled with multi-language understanding and conversational guardrails.",
    features: ["English, Hindi, Tamil, Telugu, Kannada", "Interruption handling", "Custom company persona"],
  },
  {
    step: "03",
    tag: "Tool Execution",
    title: "Autonomous Actions",
    icon: Wrench,
    description: "Direct function calling during the call to search products, calculate cart totals, and dispatch dispute tickets.",
    features: ["Product catalog search", "Real-time cart checkout", "Dispute ticket triage"],
  },
  {
    step: "04",
    tag: "System of Record",
    title: "Business Outcomes",
    icon: CheckCircle2,
    description: "Every call generates verified business records linked to verbatim audio recordings and transcripts.",
    features: ["Confirmed orders with ID", "Dispatched support tickets", "Auditable call recording"],
  },
];

export function Architecture() {
  return (
    <section id="architecture" className="relative py-16 md:py-24 overflow-hidden border-t border-slate-200/70">
      <Atmosphere />
      <div className="site-shell relative z-10 space-y-12 sm:space-y-16">
        <div className="max-w-3xl">
          <p className="section-label mb-3">Voice Architecture</p>
          <h2 className="headline text-3xl sm:text-5xl lg:text-6xl mb-4 max-w-[16ch]">
            How phone calls turn into real business actions.
          </h2>
          <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-medium max-w-2xl">
            Sonrat connects live phone calls directly into autonomous reasoning, catalog search,
            and operational workflows — processing speech, executing tools, and recording confirmed outcomes in real time.
          </p>
        </div>

        {/* 4-Stage Connected Pipeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 relative">
          {PIPELINE_STAGES.map((stage, index) => {
            const Icon = stage.icon;
            const isLast = index === PIPELINE_STAGES.length - 1;
            return (
              <div
                key={stage.step}
                className="panel rounded-[22px] sm:rounded-[26px] p-5 sm:p-6 flex flex-col justify-between relative group hover:border-slate-300 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400">
                      STAGE {stage.step}
                    </span>
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1 block">
                    {stage.tag}
                  </span>
                  <h3 className="headline text-xl sm:text-2xl text-slate-900 mb-2.5">
                    {stage.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-medium mb-4">
                    {stage.description}
                  </p>
                </div>

                <div className="space-y-1.5 pt-3 border-t border-slate-100">
                  {stage.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {!isLast && (
                  <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full bg-white border border-slate-200 shadow-sm items-center justify-center text-slate-400">
                    <ArrowRight className="w-3 h-3" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* 3 Core Architecture Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5">
            <div className="flex items-center gap-3 mb-2.5">
              <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-800 shrink-0">
                <Zap className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-slate-900">Sub-300ms Latency</h4>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              Ultra-low latency audio processing with instant voice interruption handling, ensuring calls feel fluid and natural.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5">
            <div className="flex items-center gap-3 mb-2.5">
              <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-800 shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-slate-900">Deterministic Tool Actions</h4>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              Voice models query real inventory and confirm order details verbally with customers before dispatching mutations.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5">
            <div className="flex items-center gap-3 mb-2.5">
              <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-800 shrink-0">
                <FileSpreadsheet className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-slate-900">Auditable Records</h4>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              Orders, dispute tickets, and leads are saved with time-coded audio playback, synchronized transcripts, and caller metadata.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
