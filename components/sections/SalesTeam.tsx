"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { AudioWaveform } from "@/components/ui/audio-waveform";
import {
  Calendar,
  CheckCircle2,
  PhoneOutgoing,
  Building,
  Target,
  UserCheck,
  TrendingUp,
  FileSpreadsheet,
  ArrowRight,
} from "lucide-react";
import { SALES_CALL_SAMPLE } from "@/data/conversations";
import { SALES_BENCHMARKS } from "@/data/metrics";

export function SalesTeam() {
  const [activeStep, setActiveStep] = useState(2);

  const salesScript = [
    {
      speaker: "AI AGENT",
      text: "“Hi Sarah, this is Alex from SonRat. I noticed your team requested architecture details on sub-300ms voice agents for Acme Cloud.”",
      phase: "Introduction & Context Match",
    },
    {
      speaker: "LEAD (Sarah)",
      text: "“Yes, we’re currently evaluating infrastructure. We handle about 45k support calls monthly and need custom API tool execution.”",
      phase: "Needs Discovery & Volume Fit",
    },
    {
      speaker: "AI AGENT",
      text: "“That aligns directly with our enterprise tier. We provide custom tool calling with sub-50ms execution and full audit logs. Would a deep-dive session with our solutions architect tomorrow at 2:00 PM EST work for you?”",
      phase: "BANT Qualification & Slot Lock",
    },
    {
      speaker: "LEAD (Sarah)",
      text: "“Tomorrow at 2:00 PM EST works great. Please send the invite to my work email.”",
      phase: "Meeting Confirmed",
    },
  ];

  return (
    <section id="sales" className="relative py-24 md:py-32 bg-[#050508] border-t border-white/[0.06] overflow-hidden">
      {/* Subtle silver radial background */}
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <Badge variant="outline" className="mb-4 text-xs font-mono uppercase tracking-widest text-zinc-400">
            Outbound & Inbound Sales Velocity
          </Badge>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Your Next Sales Team <br />
            <span className="silver-text-gradient">Doesn&apos;t Sleep.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed">
            Use the exact same low-latency voice infrastructure for outbound pipeline generation. The AI agent calls qualified inbound leads within 10 seconds of signup, handles objections, books executive meetings, and syncs directly with your CRM.
          </p>
        </div>

        {/* Sales Interface Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          {/* Left Column (6 cols): Simulated Sales Call Stream */}
          <div className="lg:col-span-6 rounded-3xl bg-zinc-950 border border-white/10 p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/[0.08]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-white">
                    <PhoneOutgoing className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white tracking-tight">
                      Outbound Lead Engagement
                    </div>
                    <div className="text-xs text-zinc-500 font-mono">
                      Acme Cloud Corp • Sarah Johnson (VP Ops)
                    </div>
                  </div>
                </div>

                <Badge variant="glow" className="text-xs">
                  00:34s Active
                </Badge>
              </div>

              {/* Waveform */}
              <div className="py-6 flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-400">Autonomous Pitch & Objection Handling</span>
                <AudioWaveform isPlaying={true} barCount={16} color="bg-white" />
              </div>

              {/* Dialogue Transcript */}
              <div className="space-y-3 font-sans text-xs sm:text-sm">
                {salesScript.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`p-3.5 rounded-2xl leading-relaxed border transition-all ${
                      msg.speaker === "AI AGENT"
                        ? "bg-white/[0.06] border-white/15 text-white"
                        : "bg-zinc-900/80 border-white/[0.06] text-zinc-300"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400">
                        {msg.speaker}
                      </span>
                      <span className="text-[10px] font-mono text-zinc-500">
                        {msg.phase}
                      </span>
                    </div>
                    <div>{msg.text}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Micro summary */}
            <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-zinc-400">
              <span>BANT Evaluation: Passed (4/4)</span>
              <span className="text-emerald-400 font-bold">● High Buying Intent</span>
            </div>
          </div>

          {/* Right Column (6 cols): Real-Time Simulated CRM Record */}
          <div className="lg:col-span-6 rounded-3xl bg-zinc-950 border border-white/15 p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/[0.08]">
                <div className="flex items-center gap-2.5">
                  <FileSpreadsheet className="w-5 h-5 text-white" />
                  <span className="text-sm font-semibold text-white uppercase font-mono tracking-wider">
                    CRM Record (Salesforce / HubSpot Live Sync)
                  </span>
                </div>
                <Badge variant="success" dot className="text-xs">
                  Updated in 84ms
                </Badge>
              </div>

              {/* Lead Details Card */}
              <div className="mt-6 space-y-4 font-mono text-xs">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-zinc-900/60 border border-white/[0.06]">
                    <div className="text-zinc-500 text-[10px] uppercase">Lead Contact</div>
                    <div className="text-white text-sm font-bold mt-1 font-sans">{SALES_CALL_SAMPLE.name}</div>
                    <div className="text-zinc-400 text-[11px]">{SALES_CALL_SAMPLE.role}</div>
                  </div>

                  <div className="p-4 rounded-xl bg-zinc-900/60 border border-white/[0.06]">
                    <div className="text-zinc-500 text-[10px] uppercase">Target Company</div>
                    <div className="text-white text-sm font-bold mt-1 font-sans">{SALES_CALL_SAMPLE.company}</div>
                    <div className="text-zinc-400 text-[11px]">Series C • 250+ Employees</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-zinc-900/60 border border-white/[0.06]">
                    <div className="text-zinc-500 text-[10px] uppercase">Buying Intent Score</div>
                    <div className="text-emerald-400 text-xl font-bold mt-1">
                      {SALES_CALL_SAMPLE.intentScore}%
                    </div>
                    <div className="text-zinc-500 text-[10px] mt-1">Algorithmic Sentiment Match</div>
                  </div>

                  <div className="p-4 rounded-xl bg-zinc-900/60 border border-white/[0.06]">
                    <div className="text-zinc-500 text-[10px] uppercase">Pipeline Value</div>
                    <div className="text-white text-xl font-bold mt-1 font-mono">
                      {SALES_CALL_SAMPLE.dealSize}
                    </div>
                    <div className="text-zinc-500 text-[10px] mt-1">Tier-1 Platform Contract</div>
                  </div>
                </div>

                {/* Scheduled Action Banner */}
                <div className="p-4 rounded-xl bg-white/[0.06] border border-white/20 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400 text-[10px] uppercase">Action Executed</span>
                    <span className="text-emerald-400 font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Meeting Scheduled
                    </span>
                  </div>
                  <div className="text-white text-xs font-sans font-medium">
                    {SALES_CALL_SAMPLE.actionTaken}
                  </div>
                </div>

                {/* Synced State */}
                <div className="p-4 rounded-xl bg-zinc-900/40 border border-white/[0.06] space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-500 text-[10px] uppercase">CRM Status</span>
                    <span className="text-zinc-300 font-bold">Updated ✓</span>
                  </div>
                  <div className="text-zinc-400 text-[11px] font-sans">
                    {SALES_CALL_SAMPLE.summary}
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs text-zinc-500 font-mono">
              <span>Calendar Integration: Google Meet / Outlook Cal</span>
              <span className="text-zinc-300">Auto-Logged</span>
            </div>
          </div>
        </div>

        {/* Sales Benchmarks vs Legacy Reps */}
        <div className="rounded-2xl bg-zinc-950/60 border border-white/[0.08] p-6 sm:p-8">
          <h3 className="text-lg font-semibold text-white tracking-tight mb-6">
            Inbound Sales Performance Benchmarks
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {SALES_BENCHMARKS.map((b) => (
              <div key={b.label} className="p-4 rounded-xl bg-zinc-900/40 border border-white/[0.04]">
                <div className="text-xs text-zinc-400 font-medium mb-3">{b.label}</div>
                <div className="text-xs text-zinc-500 font-mono line-through">
                  Legacy: {b.legacy}
                </div>
                <div className="text-base font-bold text-white font-mono mt-1">
                  SonRat: {b.sonrat}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
