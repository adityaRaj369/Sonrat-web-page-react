"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Sparkles, Workflow, ArrowRight, CheckCircle, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const DIFFERENCE_CARDS = [
  {
    step: "01",
    phase: "UNDERSTAND",
    icon: Brain,
    headline: "Understands natural conversations, context, intent, and customer history.",
    detail: "Bypasses rigid IVR number trees. Comprehends human interruptions, shifts in topic, emotional valence, and historical CRM touchpoints with acoustic clarity.",
    subFeatures: [
      "Zero-latency human interruption handling (VAD)",
      "Multi-turn context retention across sessions",
      "Nuanced intent classification with confidence scores",
    ],
    mockPreview: {
      tag: "Context Ingestion",
      content: "Customer says: 'Wait, actually send it to my office instead.'\n→ Agent detects topic switch and updates destination address parameter dynamically.",
    },
  },
  {
    step: "02",
    phase: "DECIDE",
    icon: Sparkles,
    headline: "Dynamically determines what information it needs and what action should happen next.",
    detail: "Evaluates business logic trees, compliance constraints, refund boundaries, and authorization gates before taking action. It reasons through incomplete requests rather than giving up.",
    subFeatures: [
      "Deterministic policy enforcement & guardrails",
      "Dynamic missing parameter elicitation",
      "Human supervisor warm-escalation triage",
    ],
    mockPreview: {
      tag: "Autonomous Reasoning",
      content: "Evaluating state: Order marked 'delayed' + Payment confirmed.\nPolicy check: Customer tier = Enterprise → Priority override authorized.",
    },
  },
  {
    step: "03",
    phase: "ACT",
    icon: Workflow,
    headline: "Uses APIs and connected systems to retrieve data, create tickets, update records, and resolve issues.",
    detail: "Executes real multi-step API transactions in sub-second response times. Modifies records, dispatches webhooks, reserves calendar slots, and delivers genuine customer resolution on the call.",
    subFeatures: [
      "Direct REST / GraphQL / gRPC tool calling",
      "Instant CRM & ticketing state synchronization",
      "Verifiable confirmation with tracking IDs",
    ],
    mockPreview: {
      tag: "Execution RPC",
      content: "RPC dispatch: POST /orders/v2/reconcile\nResponse: 200 OK • Tracking #TRK-99214 created • SMS confirmation dispatched.",
    },
  },
];

export const COMPARISON_DATA = {
  traditional: [
    "Rigid phone trees: 'Press 1 for Sales, 2 for Support'",
    "Static FAQ lookups; cannot verify live account state",
    "Breaks on human interruptions or natural phrasing",
    "Leaves customer waiting on hold to speak with a human",
    "Generates text; cannot execute actions or modify databases",
  ],
  sonrat: [
    "Natural conversational flow with sub-240ms voice latency",
    "Connects directly to your live database, orders, and APIs",
    "Intelligently listens and handles real-time interruptions",
    "Resolves 92%+ of calls autonomously with zero hold time",
    "Executes transactions, updates CRM, and generates receipts",
  ],
};

export function TheDifference() {
  const [activeCard, setActiveCard] = useState(0);

  return (
    <section id="difference" className="relative py-24 md:py-32 border-t border-white/[0.06] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <Badge variant="outline" className="mb-4 text-xs font-mono uppercase tracking-widest text-zinc-400">
            Architectural Paradigm
          </Badge>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            More Than A Voice Bot.
          </h2>
          <p className="mt-4 text-xl sm:text-2xl font-medium text-zinc-300">
            Your AI agent doesn&apos;t just answer. <br className="hidden sm:inline" />
            <span className="silver-text-gradient">It thinks through the problem.</span>
          </p>
          <p className="mt-3 text-sm sm:text-base text-zinc-400 leading-relaxed">
            Legacy bots repeat scripted answers from knowledge articles. SonRat AI operates as an autonomous operational node that diagnoses situations and executes remediation workflows in real time.
          </p>
        </div>

        {/* 3 Large Interactive Cards (01 Understand, 02 Decide, 03 Act) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {DIFFERENCE_CARDS.map((card, idx) => {
            const Icon = card.icon;
            const isSelected = activeCard === idx;

            return (
              <Card
                key={card.step}
                onClick={() => setActiveCard(idx)}
                className={cn(
                  "cursor-pointer transition-all duration-300 flex flex-col justify-between p-6 sm:p-8",
                  isSelected
                    ? "border-white/30 bg-zinc-900/90 shadow-[0_0_40px_rgba(255,255,255,0.06)]"
                    : "border-white/[0.08] hover:border-white/20 bg-zinc-950/80"
                )}
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.08]">
                    <span className="text-2xl sm:text-3xl font-mono font-bold text-white tracking-tight">
                      {card.step}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono tracking-widest uppercase text-zinc-400">
                        {card.phase}
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-white/[0.06] border border-white/10 flex items-center justify-center text-white">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Headline */}
                  <h3 className="text-lg sm:text-xl font-semibold text-white tracking-tight leading-snug mb-3">
                    “{card.headline}”
                  </h3>

                  {/* Detail */}
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                    {card.detail}
                  </p>

                  {/* Subfeatures list */}
                  <ul className="space-y-2 mb-6 text-xs text-zinc-300 font-sans">
                    {card.subFeatures.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/70 mt-1.5 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Mock Engine Terminal Preview */}
                <div className="p-3.5 rounded-xl bg-zinc-950 border border-white/[0.08] font-mono text-[11px] text-zinc-300 space-y-1.5">
                  <div className="text-[10px] text-zinc-500 uppercase tracking-wider flex items-center justify-between">
                    <span>{card.mockPreview.tag}</span>
                    <span className="text-emerald-400">● Active</span>
                  </div>
                  <pre className="text-zinc-300 whitespace-pre-wrap font-mono text-[11px] leading-relaxed">
                    {card.mockPreview.content}
                  </pre>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Contrast Comparison Matrix: Traditional Bots vs SonRat Voice Agent */}
        <div className="mt-16 sm:mt-20 rounded-3xl bg-zinc-950/90 border border-white/[0.1] p-6 sm:p-10">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <Badge variant="outline" className="mb-2 text-xs font-mono uppercase tracking-widest text-zinc-400">
              The Fundamental Contrast
            </Badge>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Traditional Voice Bots vs. SonRat AI
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 mt-2">
              Why scripted IVR bots frustrate callers, while autonomous agents deliver instant resolutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Column 1: Traditional Voice Bots */}
            <div className="p-6 rounded-2xl bg-zinc-900/40 border border-red-500/10 space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-white/[0.06]">
                <XCircle className="w-5 h-5 text-red-400/80" />
                <h4 className="text-sm font-semibold text-zinc-300 uppercase tracking-wider font-mono">
                  Legacy Voice Bots & IVR
                </h4>
              </div>
              <ul className="space-y-3">
                {COMPARISON_DATA.traditional.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    <span className="text-red-400/70 shrink-0 mt-0.5">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: SonRat AI Autonomous Agents */}
            <div className="p-6 rounded-2xl bg-zinc-900/80 border border-white/20 space-y-4 shadow-[0_0_40px_rgba(255,255,255,0.04)]">
              <div className="flex items-center gap-2 pb-3 border-b border-white/[0.1]">
                <CheckCircle className="w-5 h-5 text-white" />
                <h4 className="text-sm font-semibold text-white uppercase tracking-wider font-mono">
                  SonRat Autonomous Voice Agent
                </h4>
              </div>
              <ul className="space-y-3">
                {COMPARISON_DATA.sonrat.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-200 leading-relaxed">
                    <span className="text-emerald-400 font-bold shrink-0 mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
