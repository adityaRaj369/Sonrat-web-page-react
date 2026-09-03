"use client";

import React, { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { AudioWaveform } from "@/components/ui/audio-waveform";
import {
  User,
  Database,
  CreditCard,
  Package,
  Headphones,
  Code2,
  TrendingUp,
  Layers,
  ArrowRight,
  Play,
  RotateCcw,
  CheckCircle2,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Scenario {
  title: string;
  steps: {
    activeNode: string;
    speaker: string;
    text: string;
    systemAction?: string;
    apiResponse?: string;
  }[];
}

const SCENARIOS: Scenario[] = [
  {
    title: "Live Order Status",
    steps: [
      {
        activeNode: "CUSTOMER",
        speaker: "CUSTOMER",
        text: "\u201cWhere is my order? I haven\u2019t received a tracking link yet.\u201d",
      },
      {
        activeNode: "AGENT",
        speaker: "AI AGENT",
        text: "\u201cChecking your order history and live carrier tracking status right now.\u201d",
        systemAction: "Querying Order API (lookup order_id: ord_89210)",
      },
      {
        activeNode: "ORDERS",
        speaker: "ORDER API",
        text: "Order #89210 found in Dallas Fulfillment Center. Carrier: FedEx Express.",
        systemAction: "Fetching live carrier telemetry...",
        apiResponse: "Status: Out for delivery \u2022 Expected by 4:30 PM",
      },
      {
        activeNode: "AGENT",
        speaker: "AI AGENT",
        text: "\u201cYour order is out for delivery with FedEx and scheduled to arrive today by 4:30 PM.\u201d",
        systemAction: "Syncing tracking update to CRM record...",
      },
      {
        activeNode: "CUSTOMER",
        speaker: "CUSTOMER",
        text: "\u201cAwesome, thank you so much!\u201d",
      },
    ],
  },
  {
    title: "Payment Reconciliation",
    steps: [
      {
        activeNode: "CUSTOMER",
        speaker: "CUSTOMER",
        text: "\u201cMy card was charged $199 but my invoice is still marked unpaid.\u201d",
      },
      {
        activeNode: "AGENT",
        speaker: "AI AGENT",
        text: "\u201cLet me verify transaction authorization and ledger status with Stripe.\u201d",
        systemAction: "Querying Payments API (charge_id: ch_923kx)",
      },
      {
        activeNode: "PAYMENTS",
        speaker: "PAYMENT GATEWAY",
        text: "Charge verified: Succeeded. Webhook delivery was delayed.",
        apiResponse: "Status: Captured ($199.00) \u2022 Auto-settled",
      },
      {
        activeNode: "SUPPORT",
        speaker: "HELPDESK API",
        text: "Invoice #INV-4029 updated to PAID. Receipt dispatched to customer email.",
        systemAction: "Closing discrepancy ticket...",
      },
      {
        activeNode: "AGENT",
        speaker: "AI AGENT",
        text: "\u201cI\u2019ve confirmed your payment and marked your invoice as paid. Receipt is in your inbox.\u201d",
      },
    ],
  },
  {
    title: "Enterprise Lead Routing",
    steps: [
      {
        activeNode: "CUSTOMER",
        speaker: "PROSPECT",
        text: "\u201cWe have 120 support reps and need sub-300ms voice agents for peak volume.\u201d",
      },
      {
        activeNode: "AGENT",
        speaker: "AI AGENT",
        text: "\u201cOur enterprise tier supports 10,000 concurrent calls at 220ms. Let\u2019s get an AE on a call.\u201d",
        systemAction: "Evaluating BANT criteria: Tier-1 Enterprise",
      },
      {
        activeNode: "SALES",
        speaker: "CRM & CALENDAR",
        text: "Checking Solutions Architect availability for tomorrow at 2:00 PM EST.",
        apiResponse: "Calendar locked \u2022 Salesforce Opportunity created ($85k ARR)",
      },
      {
        activeNode: "AGENT",
        speaker: "AI AGENT",
        text: "\u201cI\u2019ve scheduled an executive session for tomorrow at 2:00 PM and sent the calendar invite.\u201d",
      },
    ],
  },
];

const NODES = [
  { id: "CUSTOMER", label: "Customer", icon: User, angle: 180 },
  { id: "CRM", label: "CRM", icon: TrendingUp, angle: 225 },
  { id: "ORDERS", label: "Orders", icon: Package, angle: 270 },
  { id: "PAYMENTS", label: "Payments", icon: CreditCard, angle: 315 },
  { id: "SALES", label: "Sales", icon: Layers, angle: 0 },
  { id: "API", label: "API", icon: Code2, angle: 45 },
  { id: "DATABASE", label: "Database", icon: Database, angle: 90 },
  { id: "SUPPORT", label: "Support", icon: Headphones, angle: 135 },
];

export function HeroVisual() {
  const [selectedScenarioIdx, setSelectedScenarioIdx] = useState(0);
  const [currentStepIdx, setCurrentStepIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const scenario = SCENARIOS[selectedScenarioIdx];
  const currentStep = scenario.steps[currentStepIdx];

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setCurrentStepIdx((prev) => (prev + 1) % scenario.steps.length);
    }, 3800);
    return () => clearInterval(timer);
  }, [isPlaying, scenario.steps.length]);

  const handleScenarioSwitch = (idx: number) => {
    setSelectedScenarioIdx(idx);
    setCurrentStepIdx(0);
  };

  return (
    <section className="relative py-8 md:py-12 container-wide">
      <div className="rounded-2xl sm:rounded-3xl bg-[#08080d] border border-white/[0.09] shadow-2xl relative overflow-hidden">
        {/* Top specular highlight */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

        {/* Grid background */}
        <div className="absolute inset-0 dot-pattern opacity-60 pointer-events-none" />

        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-white/[0.025] rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 p-4 sm:p-6 lg:p-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 border-b border-white/[0.07]">
            <div className="flex items-center gap-3">
              <div className="relative">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 block" />
                <span className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping opacity-60" />
              </div>
              <div>
                <h2 className="text-xs sm:text-sm font-mono uppercase tracking-widest text-zinc-200 font-semibold">
                  Operating Topology
                </h2>
                <p className="text-[10px] sm:text-xs text-zinc-500 mt-0.5">
                  Autonomous multi-system orchestration • Real-time simulation
                </p>
              </div>
            </div>

            {/* Scenario tabs */}
            <div className="flex items-center gap-1 p-1 rounded-xl bg-zinc-950 border border-white/[0.08] w-full sm:w-auto overflow-x-auto">
              {SCENARIOS.map((sc, idx) => (
                <button
                  key={sc.title}
                  onClick={() => handleScenarioSwitch(idx)}
                  className={cn(
                    "px-2.5 sm:px-3 py-1.5 text-[10px] sm:text-xs font-mono rounded-lg transition-all whitespace-nowrap flex-shrink-0",
                    selectedScenarioIdx === idx
                      ? "bg-white/[0.1] text-white border border-white/[0.15]"
                      : "text-zinc-500 hover:text-zinc-200"
                  )}
                >
                  {sc.title}
                </button>
              ))}
            </div>
          </div>

          {/* Main layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center mt-6">
            {/* Network Graph */}
            <div className="lg:col-span-7 relative h-[320px] sm:h-[400px] lg:h-[450px] flex items-center justify-center">
              {/* Orbital rings */}
              <div className="absolute w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] lg:w-[300px] lg:h-[300px] rounded-full border border-white/[0.05] pointer-events-none" />
              <div className="absolute w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] lg:w-[420px] lg:h-[420px] rounded-full border border-white/[0.03] pointer-events-none" />

              {/* SVG lines */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="-200 -200 400 400"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                {NODES.map((node) => {
                  const rad = (node.angle * Math.PI) / 180;
                  const r = 155;
                  const x = Math.cos(rad) * r;
                  const y = Math.sin(rad) * r;
                  const isActive = currentStep.activeNode === node.id;

                  return (
                    <g key={node.id}>
                      <line
                        x1={0}
                        y1={0}
                        x2={x}
                        y2={y}
                        stroke={isActive ? "rgba(255,255,255,0.65)" : "rgba(255,255,255,0.07)"}
                        strokeWidth={isActive ? 1.5 : 0.8}
                        strokeDasharray={isActive ? "none" : "4,4"}
                        className="transition-all duration-500"
                        filter={isActive ? "url(#glow)" : undefined}
                      />
                      {isActive && (
                        <circle r={3} fill="white" opacity={0.9}>
                          <animateMotion
                            path={`M 0 0 L ${x} ${y}`}
                            dur="1.4s"
                            repeatCount="indefinite"
                          />
                        </circle>
                      )}
                    </g>
                  );
                })}
              </svg>

              {/* Central node */}
              <div
                className={cn(
                  "relative z-20 w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 rounded-full flex flex-col items-center justify-center text-center transition-all duration-500",
                  "bg-zinc-950 border shadow-2xl",
                  currentStep.activeNode === "AGENT"
                    ? "border-white/50 shadow-[0_0_60px_rgba(255,255,255,0.25),0_0_120px_rgba(255,255,255,0.1)]"
                    : "border-white/[0.2] shadow-[0_0_30px_rgba(255,255,255,0.08)]"
                )}
              >
                <div className="absolute inset-3 rounded-full border border-white/[0.07] pointer-events-none" />
                {currentStep.activeNode === "AGENT" && (
                  <>
                    <div className="absolute inset-0 rounded-full border border-white/20 animate-ping opacity-30" />
                  </>
                )}
                <div className="text-[8px] sm:text-[9px] font-mono tracking-widest text-zinc-500 uppercase mb-1">
                  Central Nexus
                </div>
                <div className="text-[10px] sm:text-xs font-bold text-white uppercase tracking-tight leading-tight px-2">
                  AI Voice Agent
                </div>
                <div className="mt-2">
                  <AudioWaveform
                    isPlaying={currentStep.activeNode === "AGENT"}
                    barCount={10}
                    color="bg-white"
                  />
                </div>
                <span className="mt-1.5 text-[8px] font-mono px-2 py-0.5 rounded-full bg-white/[0.07] text-zinc-400 border border-white/[0.1]">
                  Autonomous
                </span>
              </div>

              {/* Satellite nodes */}
              {NODES.map((node) => {
                const rad = (node.angle * Math.PI) / 180;
                const r = 155;
                const x = Math.cos(rad) * r;
                const y = Math.sin(rad) * r;
                const Icon = node.icon;
                const isActive = currentStep.activeNode === node.id;

                return (
                  <div
                    key={node.id}
                    style={{ transform: `translate(${x}px, ${y}px)` }}
                    className={cn(
                      "absolute z-10 flex flex-col items-center justify-center rounded-xl sm:rounded-2xl transition-all duration-400 select-none",
                      "w-12 h-12 sm:w-16 sm:h-16 lg:w-[72px] lg:h-[72px]",
                      isActive
                        ? "bg-zinc-900 border border-white/60 shadow-[0_0_25px_rgba(255,255,255,0.2)] scale-110"
                        : "bg-zinc-950/90 border border-white/[0.08] hover:border-white/20 scale-100"
                    )}
                  >
                    <Icon
                      className={cn(
                        "w-3 h-3 sm:w-4 sm:h-4 mb-0.5 sm:mb-1",
                        isActive ? "text-white" : "text-zinc-500"
                      )}
                    />
                    <span
                      className={cn(
                        "text-[7px] sm:text-[9px] font-mono font-semibold tracking-wide",
                        isActive ? "text-white" : "text-zinc-600"
                      )}
                    >
                      {node.label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Right: Conversation trace */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              {/* Main trace card */}
              <div className="rounded-xl sm:rounded-2xl bg-zinc-950/90 border border-white/[0.09] p-4 sm:p-5 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.07]">
                  <div className="flex items-center gap-2">
                    <Zap className="w-3.5 h-3.5 text-zinc-400" />
                    <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-zinc-400">
                      Live Execution Trace
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-600 bg-zinc-900 border border-white/[0.06] px-2 py-0.5 rounded-full">
                    Step {currentStepIdx + 1}/{scenario.steps.length}
                  </span>
                </div>

                {/* Speaker label */}
                <div className="flex items-center gap-2">
                  <span
                    className={cn(
                      "px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider",
                      currentStep.speaker === "CUSTOMER" || currentStep.speaker === "PROSPECT"
                        ? "bg-zinc-800 text-zinc-300 border border-zinc-700"
                        : currentStep.speaker === "AI AGENT"
                        ? "bg-white text-black"
                        : "bg-emerald-950/60 text-emerald-300 border border-emerald-500/25"
                    )}
                  >
                    {currentStep.speaker}
                  </span>
                  <span className="text-[10px] font-mono text-zinc-600">
                    {currentStep.activeNode === "AGENT" ? "Synthesizing • 18ms" : "Processing"}
                  </span>
                </div>

                {/* Dialogue */}
                <div className="p-3 sm:p-4 rounded-xl bg-zinc-900/80 border border-white/[0.07] text-xs sm:text-sm text-zinc-200 leading-relaxed">
                  {currentStep.text}
                </div>

                {/* System action */}
                {currentStep.systemAction && (
                  <div className="p-3 rounded-xl bg-zinc-900/40 border border-white/[0.05] font-mono text-[10px] sm:text-xs space-y-1.5">
                    <div className="flex items-center gap-1.5 text-zinc-500 uppercase tracking-wide">
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-500" />
                      System Action
                    </div>
                    <div className="text-zinc-300">{currentStep.systemAction}</div>
                  </div>
                )}

                {/* API response */}
                {currentStep.apiResponse && (
                  <div className="p-3 rounded-xl bg-emerald-950/25 border border-emerald-500/20 font-mono text-[10px] sm:text-xs flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-emerald-400 uppercase text-[9px] font-bold mb-0.5">
                        API Verified Result
                      </div>
                      <div className="text-zinc-200">{currentStep.apiResponse}</div>
                    </div>
                  </div>
                )}
              </div>

              {/* Controls */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-950/60 border border-white/[0.07]">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className={cn(
                      "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] sm:text-xs font-mono transition-all",
                      isPlaying
                        ? "bg-emerald-500/10 border border-emerald-500/20 text-emerald-400"
                        : "bg-white/[0.06] border border-white/[0.08] text-zinc-300 hover:text-white"
                    )}
                  >
                    <Play className={cn("w-3 h-3", isPlaying && "fill-emerald-400 text-emerald-400")} />
                    {isPlaying ? "Autoplay" : "Resume"}
                  </button>
                  <button
                    onClick={() => setCurrentStepIdx(0)}
                    className="p-1.5 rounded-lg text-zinc-500 hover:text-white hover:bg-white/[0.06] transition-colors"
                    title="Reset"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Step dots */}
                <div className="flex items-center gap-1.5">
                  {scenario.steps.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentStepIdx(idx)}
                      className={cn(
                        "rounded-full transition-all duration-300",
                        currentStepIdx === idx
                          ? "bg-white w-6 h-1.5"
                          : "bg-zinc-800 hover:bg-zinc-600 w-4 h-1.5"
                      )}
                      aria-label={`Step ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
