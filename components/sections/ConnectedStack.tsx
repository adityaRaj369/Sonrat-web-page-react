"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { AudioWaveform } from "@/components/ui/audio-waveform";
import {
  Layers,
  Code2,
  Database,
  CreditCard,
  Package,
  Headphones,
  Calendar,
  Webhook,
  ArrowDown,
  Lock,
  Cpu,
  User,
  CheckCircle2,
} from "lucide-react";
import { CONNECTED_SYSTEMS } from "@/data/integrations";
import { cn } from "@/lib/utils";

export function ConnectedStack() {
  const [activeSystem, setActiveSystem] = useState("crm");

  const selectedSys =
    CONNECTED_SYSTEMS.find((s) => s.id === activeSystem) || CONNECTED_SYSTEMS[0];

  return (
    <section id="integrations" className="relative py-24 md:py-32 border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <Badge variant="outline" className="mb-4 text-xs font-mono uppercase tracking-widest text-zinc-400">
            System Interoperability
          </Badge>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Connect Your Stack. <br />
            <span className="silver-text-gradient">Give Your Agent Context.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed">
            An isolated voice bot only knows what it is programmed to say. SonRat connects securely into your existing infrastructure, giving the voice agent real-time context and authorization to act.
          </p>
        </div>

        {/* 4-Stage Architecture Flow: YOUR SYSTEMS -> API CONNECTION -> AI VOICE AGENT -> CUSTOMER */}
        <div className="rounded-3xl bg-zinc-950 border border-white/10 p-6 sm:p-10 shadow-2xl relative mb-16 overflow-hidden">
          {/* Top highlight */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

          {/* Stepper Pipeline Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6 relative">
            {/* Stage 1: YOUR SYSTEMS */}
            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-white/[0.08] flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-2">
                  Stage 01
                </span>
                <div className="flex items-center gap-2.5 mb-2">
                  <Database className="w-5 h-5 text-white" />
                  <h3 className="text-sm font-bold text-white uppercase font-mono">
                    Your Systems
                  </h3>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Your internal database, ERP, payments, calendar, and ticketing tools.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/[0.06] text-[11px] font-mono text-zinc-500">
                Data Locality Maintained
              </div>
            </div>

            {/* Stage 2: API CONNECTION */}
            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-white/[0.08] flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-2">
                  Stage 02
                </span>
                <div className="flex items-center gap-2.5 mb-2">
                  <Lock className="w-5 h-5 text-white" />
                  <h3 className="text-sm font-bold text-white uppercase font-mono">
                    API Connection
                  </h3>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Authenticated mTLS, encrypted REST/GraphQL endpoints, and signed webhooks.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/[0.06] text-[11px] font-mono text-zinc-500">
                Sub-40ms Tool Execution
              </div>
            </div>

            {/* Stage 3: AI VOICE AGENT */}
            <div className="p-6 rounded-2xl bg-white/[0.06] border border-white/25 flex flex-col justify-between shadow-[0_0_30px_rgba(255,255,255,0.05)]">
              <div>
                <span className="text-[10px] font-mono text-white/70 uppercase tracking-widest block mb-2">
                  Stage 03
                </span>
                <div className="flex items-center gap-2.5 mb-2">
                  <Cpu className="w-5 h-5 text-white" />
                  <h3 className="text-sm font-bold text-white uppercase font-mono">
                    AI Voice Agent
                  </h3>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Autonomous reasoning engine with speech synthesis and deterministic guardrails.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> State Machine Active
              </div>
            </div>

            {/* Stage 4: CUSTOMER */}
            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-white/[0.08] flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-2">
                  Stage 04
                </span>
                <div className="flex items-center gap-2.5 mb-2">
                  <User className="w-5 h-5 text-white" />
                  <h3 className="text-sm font-bold text-white uppercase font-mono">
                    Customer
                  </h3>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Instant human-like voice resolution over PSTN telephony, SIP, or WebRTC.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/[0.06] text-[11px] font-mono text-zinc-500">
                Sub-240ms Turnaround
              </div>
            </div>
          </div>
        </div>

        {/* Generic Systems Supported Cards Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Pluggable Enterprise Integration Connectors
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 mt-0.5">
                Standardized schema ingestion for any REST API, database, or webhook system.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {CONNECTED_SYSTEMS.map((sys) => {
              const isSelected = activeSystem === sys.id;
              return (
                <button
                  key={sys.id}
                  onClick={() => setActiveSystem(sys.id)}
                  className={cn(
                    "p-5 rounded-2xl border text-left transition-all duration-200",
                    isSelected
                      ? "bg-zinc-900 border-white/30 shadow-lg shadow-white/5"
                      : "bg-zinc-950/70 border-white/[0.06] hover:border-white/20 hover:bg-zinc-900/50"
                  )}
                >
                  <div className="text-xs font-mono font-bold text-white mb-1 uppercase">
                    {sys.name}
                  </div>
                  <div className="text-[11px] text-zinc-400 mb-2 font-mono">
                    {sys.detail}
                  </div>
                  <div className="text-[10px] text-zinc-500 font-sans">
                    {sys.role}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
