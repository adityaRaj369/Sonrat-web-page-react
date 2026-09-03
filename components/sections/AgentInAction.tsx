"use client";

import React, { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AudioWaveform } from "@/components/ui/audio-waveform";
import {
  Phone,
  PhoneOff,
  Volume2,
  Mic,
  Database,
  CreditCard,
  Package,
  TicketCheck,
  CheckCircle2,
  Play,
  RotateCcw,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function AgentInAction() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [callDuration, setCallDuration] = useState(18);

  const steps = [
    {
      id: 0,
      title: "Incoming Caller Inquiry",
      time: "00:03",
      speaker: "customer",
      dialogue: "“Hi, my payment went through but my order still says pending.”",
      systemAction: "Customer identified as cust_90214 via caller ID (+1 415-***-8921)",
      apiLogs: [],
    },
    {
      id: 1,
      title: "Agent Verification Response",
      time: "00:06",
      speaker: "agent",
      dialogue: "“I can check that for you. Let me look up your order and payment status.”",
      systemAction: "Spawning concurrent API lookups across Payment and Order services",
      apiLogs: [
        { name: "Payment API", status: "Checking payment...", done: false },
        { name: "Order API", status: "Querying order queue...", done: false },
        { name: "Customer Database", status: "Reading context...", done: false },
      ],
    },
    {
      id: 2,
      title: "API Status Retrieval",
      time: "00:09",
      speaker: "system",
      dialogue: "Checking payment... ✓ Payment received ($249.00)\nChecking order... ✓ Order found (#89210)",
      systemAction: "All upstream API responses received with sub-40ms latency",
      apiLogs: [
        { name: "Payment API", status: "✓ Payment received ($249.00 captured)", done: true },
        { name: "Order API", status: "✓ Order found (#89210 in queue)", done: true },
        { name: "Customer Database", status: "✓ Context loaded (Tier-1 Member)", done: true },
      ],
    },
    {
      id: 3,
      title: "Autonomous Decision & Reasoning",
      time: "00:12",
      speaker: "reasoning",
      dialogue: "Reasoning: Payment received but order creation failed due to webhook sync timeout.",
      systemAction: "Creating high-priority support escalation and dispatching auto-resolution RPC",
      apiLogs: [
        { name: "Reasoning Engine", status: "Identified webhook delivery drop between Stripe & ERP", done: true },
        { name: "Support Ticket", status: "TICKET #48291 • Priority: High • Status: Created", done: true, highlight: true },
      ],
    },
    {
      id: 4,
      title: "API Remediation Execution",
      time: "00:15",
      speaker: "agent",
      dialogue: "“Your payment was successful, and I've fixed the order issue. Your order is now confirmed.”",
      systemAction: "Order fulfillment RPC returned 200 OK. Carrier label generated.",
      apiLogs: [
        { name: "Fulfillment API", status: "✓ Order successfully created & confirmed", done: true, highlight: true },
        { name: "SMS Notification", status: "Dispatched tracking #TRK-99214 to customer phone", done: true },
      ],
    },
    {
      id: 5,
      title: "Customer Confirmation & Resolution",
      time: "00:18",
      speaker: "customer",
      dialogue: "“Perfect, thank you.”",
      systemAction: "Call completed. Summary logged to Salesforce & Zendesk in 12ms.",
      resolved: true,
      apiLogs: [
        { name: "Resolution Engine", status: "ISSUE RESOLVED ✓ (Zero Human Rep Touch)", done: true, success: true },
      ],
    },
  ];

  // Auto-play timer
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4200);
    return () => clearInterval(interval);
  }, [isPlaying, steps.length]);

  const currentStepData = steps[activeStep];

  return (
    <section id="demo" className="relative py-24 md:py-32 bg-[#060609] border-t border-white/[0.06] overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <Badge variant="glow" className="mb-4 text-xs font-mono uppercase tracking-widest text-zinc-300">
            Real-Time Execution
          </Badge>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            See The Agent In Action.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            Witness an AI voice agent diagnose a broken payment-order state, create a support ticket, execute an API fix, and confirm resolution with the customer in 18 seconds flat.
          </p>
        </div>

        {/* The Split Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column (5 cols): Simulated Phone Call Interface */}
          <div className="lg:col-span-5 rounded-3xl bg-zinc-950 border border-white/15 p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            {/* Specular highlight line */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

            {/* Caller Status Bar */}
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/[0.08]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-white">
                    <Phone className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white tracking-tight">
                      Customer Call #8821
                    </div>
                    <div className="text-xs text-zinc-500 font-mono">
                      +1 (415) 890-2194 • Active
                    </div>
                  </div>
                </div>

                <Badge variant="success" dot className="text-xs">
                  {currentStepData.time}
                </Badge>
              </div>

              {/* Audio Waveform & State */}
              <div className="py-8 flex flex-col items-center justify-center text-center">
                <div className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 mb-3">
                  {currentStepData.speaker === "agent"
                    ? "AI Voice Synthesizing (Sub-200ms Stream)"
                    : currentStepData.speaker === "customer"
                    ? "Customer Speaking (Interruption Aware)"
                    : "Autonomous Reasoner Executing"}
                </div>
                <AudioWaveform
                  isPlaying={true}
                  barCount={24}
                  color={
                    currentStepData.speaker === "agent"
                      ? "bg-white"
                      : currentStepData.speaker === "customer"
                      ? "bg-zinc-400"
                      : "bg-emerald-400"
                  }
                  className="h-10"
                />
              </div>

              {/* Conversation Bubble Log */}
              <div className="space-y-4">
                <div className="text-xs font-mono uppercase text-zinc-500 tracking-wider">
                  Live Audio Transcript
                </div>

                <div className="space-y-3">
                  {/* Step 0 dialogue */}
                  <div
                    className={cn(
                      "p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed transition-opacity duration-300",
                      activeStep >= 0
                        ? "bg-zinc-900 border border-white/[0.08] text-zinc-200"
                        : "opacity-20"
                    )}
                  >
                    <span className="text-[10px] font-mono text-zinc-400 block mb-1 uppercase">
                      Customer [00:03]
                    </span>
                    “Hi, my payment went through but my order still says pending.”
                  </div>

                  {/* Step 1 dialogue */}
                  <div
                    className={cn(
                      "p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed transition-opacity duration-300",
                      activeStep >= 1
                        ? "bg-white/[0.08] border border-white/20 text-white shadow-sm"
                        : "opacity-20"
                    )}
                  >
                    <span className="text-[10px] font-mono text-white/70 block mb-1 uppercase">
                      AI Agent [00:06]
                    </span>
                    “I can check that for you. Let me look up your order and payment status.”
                  </div>

                  {/* Step 4 dialogue */}
                  {activeStep >= 4 && (
                    <div className="p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed bg-white/[0.08] border border-white/20 text-white shadow-sm animate-in fade-in duration-300">
                      <span className="text-[10px] font-mono text-white/70 block mb-1 uppercase">
                        AI Agent [00:15]
                      </span>
                      “Your payment was successful, and I&apos;ve fixed the order issue. Your order is now confirmed.”
                    </div>
                  )}

                  {/* Step 5 dialogue */}
                  {activeStep >= 5 && (
                    <div className="p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed bg-zinc-900 border border-white/[0.08] text-zinc-200 animate-in fade-in duration-300">
                      <span className="text-[10px] font-mono text-zinc-400 block mb-1 uppercase">
                        Customer [00:18]
                      </span>
                      “Perfect, thank you.”
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Bottom Call Hardware Controls */}
            <div className="mt-8 pt-6 border-t border-white/[0.08] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button
                  className="p-2.5 rounded-xl bg-zinc-900 border border-white/10 text-zinc-300 hover:text-white transition-colors"
                  title="Mute microphone"
                >
                  <Mic className="w-4 h-4" />
                </button>
                <button
                  className="p-2.5 rounded-xl bg-zinc-900 border border-white/10 text-zinc-300 hover:text-white transition-colors"
                  title="Speaker audio"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  onClick={() => setIsPlaying(!isPlaying)}
                  variant="outline"
                  size="sm"
                  className="text-xs"
                >
                  <Play className={cn("w-3 h-3 mr-1", isPlaying && "text-emerald-400 fill-emerald-400")} />
                  {isPlaying ? "Pause" : "Play"}
                </Button>
                <Button
                  onClick={() => setActiveStep(0)}
                  variant="ghost"
                  size="sm"
                  className="text-xs"
                >
                  <RotateCcw className="w-3 h-3" />
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column (7 cols): Real-Time Agent Operations & API Console */}
          <div className="lg:col-span-7 rounded-3xl bg-zinc-950 border border-white/15 p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative">
            <div>
              {/* Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pb-6 border-b border-white/[0.08]">
                <div>
                  <h3 className="text-base font-semibold text-white tracking-tight flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-white" />
                    Autonomous Orchestrator Console
                  </h3>
                  <p className="text-xs text-zinc-500 font-mono mt-0.5">
                    Live RPC Telemetry • Tool Invocations • Deterministic Guardrails
                  </p>
                </div>

                <div className="text-xs font-mono px-3 py-1 rounded-full bg-zinc-900 border border-white/10 text-zinc-300">
                  Cluster: us-east-core-01
                </div>
              </div>

              {/* Step Progression Visualizer */}
              <div className="grid grid-cols-6 gap-2 my-6">
                {steps.map((st, i) => (
                  <button
                    key={st.id}
                    onClick={() => setActiveStep(i)}
                    className={cn(
                      "h-1.5 rounded-full transition-all duration-300",
                      activeStep >= i ? "bg-white" : "bg-zinc-800 hover:bg-zinc-700"
                    )}
                    title={st.title}
                  />
                ))}
              </div>

              {/* Current Phase Title */}
              <div className="mb-4 flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                  Phase {activeStep + 1}: {currentStepData.title}
                </span>
                <span className="text-xs font-mono text-emerald-400 font-bold">
                  Latency: 14ms
                </span>
              </div>

              {/* Live Connected Systems Execution Matrix */}
              <div className="space-y-3 font-mono text-xs">
                {/* Payment API Card */}
                <div
                  className={cn(
                    "p-4 rounded-xl border transition-all duration-300",
                    activeStep >= 2
                      ? "bg-zinc-900/90 border-emerald-500/30 text-zinc-200"
                      : activeStep === 1
                      ? "bg-zinc-900/50 border-white/20 text-zinc-400 animate-pulse"
                      : "bg-zinc-950/40 border-white/[0.06] text-zinc-600"
                  )}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <CreditCard className="w-4 h-4 text-zinc-400" />
                      <span className="font-semibold text-zinc-300">Payment API (Stripe Gateway)</span>
                    </div>
                    <span>
                      {activeStep >= 2 ? (
                        <span className="text-emerald-400 font-bold">✓ Payment received ($249.00)</span>
                      ) : activeStep === 1 ? (
                        <span className="text-zinc-400">Checking payment...</span>
                      ) : (
                        "Idle"
                      )}
                    </span>
                  </div>
                </div>

                {/* Order API Card */}
                <div
                  className={cn(
                    "p-4 rounded-xl border transition-all duration-300",
                    activeStep >= 2
                      ? "bg-zinc-900/90 border-emerald-500/30 text-zinc-200"
                      : activeStep === 1
                      ? "bg-zinc-900/50 border-white/20 text-zinc-400 animate-pulse"
                      : "bg-zinc-950/40 border-white/[0.06] text-zinc-600"
                  )}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <Package className="w-4 h-4 text-zinc-400" />
                      <span className="font-semibold text-zinc-300">Order API (ERP Fulfillment)</span>
                    </div>
                    <span>
                      {activeStep >= 2 ? (
                        <span className="text-emerald-400 font-bold">✓ Order found (#89210)</span>
                      ) : activeStep === 1 ? (
                        <span className="text-zinc-400">Checking order...</span>
                      ) : (
                        "Idle"
                      )}
                    </span>
                  </div>
                </div>

                {/* Autonomous Reasoning Gate */}
                <div
                  className={cn(
                    "p-4 rounded-xl border transition-all duration-300",
                    activeStep >= 3
                      ? "bg-zinc-900 border-white/30 text-white shadow-[0_0_25px_rgba(255,255,255,0.05)]"
                      : "bg-zinc-950/40 border-white/[0.06] text-zinc-600"
                  )}
                >
                  <div className="flex items-center gap-2 text-[10px] uppercase text-zinc-400 mb-1">
                    <Sparkles className="w-3 h-3 text-white" />
                    Autonomous Reasoning Engine
                  </div>
                  <div className="text-xs sm:text-sm text-zinc-200">
                    {activeStep >= 3 ? (
                      <span className="text-white font-medium">
                        “Payment received but order creation failed due to webhook sync timeout.”
                      </span>
                    ) : (
                      "Awaiting multi-signal verification..."
                    )}
                  </div>
                </div>

                {/* Automated Ticket Creation */}
                <div
                  className={cn(
                    "p-4 rounded-xl border transition-all duration-300",
                    activeStep >= 3
                      ? "bg-amber-950/20 border-amber-500/30 text-amber-200"
                      : "bg-zinc-950/40 border-white/[0.06] text-zinc-600"
                  )}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <TicketCheck className="w-4 h-4 text-amber-400" />
                      <span className="font-bold">TICKET #48291</span>
                      <span className="px-1.5 py-0.5 rounded text-[10px] bg-amber-500/20 text-amber-300 border border-amber-500/30">
                        Priority: High
                      </span>
                    </div>
                    <span className="text-amber-300 font-bold">Status: Created & Auto-Reconciled</span>
                  </div>
                </div>

                {/* Action API Confirmation */}
                <div
                  className={cn(
                    "p-4 rounded-xl border transition-all duration-300",
                    activeStep >= 4
                      ? "bg-emerald-950/30 border-emerald-500/40 text-emerald-200"
                      : "bg-zinc-950/40 border-white/[0.06] text-zinc-600"
                  )}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-300">Action API Execution</span>
                    <span className={activeStep >= 4 ? "text-emerald-400 font-bold" : "text-zinc-600"}>
                      {activeStep >= 4 ? "✓ Order successfully created & confirmed" : "Pending decision"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Final Resolution Highlight Banner */}
            <div className="mt-8 pt-6 border-t border-white/[0.08]">
              {activeStep >= 5 ? (
                <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-[0_0_30px_rgba(16,185,129,0.15)] animate-in zoom-in-95 duration-300">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-300">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-base font-bold text-white tracking-tight">
                        ISSUE RESOLVED ✓
                      </div>
                      <div className="text-xs text-emerald-300 font-mono">
                        Call Duration: 18.4s • Human Escalation Deflected • Cost: $0.11
                      </div>
                    </div>
                  </div>
                  <Button
                    onClick={() => setActiveStep(0)}
                    variant="outline"
                    size="sm"
                    className="border-emerald-500/40 text-emerald-200 hover:bg-emerald-500/10 text-xs"
                  >
                    Replay Workflow
                  </Button>
                </div>
              ) : (
                <div className="p-4 rounded-2xl bg-zinc-900/50 border border-white/[0.06] flex items-center justify-between text-xs text-zinc-400 font-mono">
                  <span>Executing autonomous sequence...</span>
                  <span className="text-zinc-300">Step {activeStep + 1} of 6</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
