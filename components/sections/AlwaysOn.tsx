"use client";

import React, { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { AudioWaveform } from "@/components/ui/audio-waveform";
import { Clock, PhoneIncoming, Moon, Sun, Sunrise, Sunset, Sparkles, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const TIME_PHASES = [
  { label: "Night", time: "02:13 AM", icon: Moon, desc: "Surge from international travelers & night shoppers", activeCalls: "1,240 live" },
  { label: "Morning", time: "08:45 AM", icon: Sunrise, desc: "Peak morning billing & order queries", activeCalls: "4,890 live" },
  { label: "Afternoon", time: "02:15 PM", icon: Sun, desc: "High-volume B2B sales demo bookings", activeCalls: "6,120 live" },
  { label: "Evening", time: "08:30 PM", icon: Sunset, desc: "Support requests handled with 0s queue time", activeCalls: "3,410 live" },
];

export function AlwaysOn() {
  const [phaseIdx, setPhaseIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhaseIdx((prev) => (prev + 1) % TIME_PHASES.length);
    }, 3600);
    return () => clearInterval(interval);
  }, []);

  const currentPhase = TIME_PHASES[phaseIdx];
  const Icon = currentPhase.icon;

  return (
    <section id="always-on" className="relative py-24 md:py-32 bg-black border-t border-white/[0.06] overflow-hidden">
      {/* Precision ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column (6 cols): Text & Proposition */}
          <div className="lg:col-span-6 space-y-6">
            <Badge variant="outline" className="text-xs font-mono uppercase tracking-widest text-zinc-400">
              Continuous Autonomous Readiness
            </Badge>

            {/* Headline */}
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-none">
              Always On.
            </h2>

            {/* Core Message */}
            <p className="text-xl sm:text-2xl font-medium text-zinc-200 leading-snug">
              “Your customers don&apos;t wait for business hours.”
            </p>

            {/* Supporting copy */}
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-xl">
              Handle customer conversations around the clock without increasing your support headcount. Whether it&apos;s an urgent lost-card lock at 2:00 AM or a black Friday surge of 10,000 simultaneous calls, SonRat answers in sub-240ms with zero hold times.
            </p>

            {/* 4 Time Phase Selector Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-4">
              {TIME_PHASES.map((p, idx) => {
                const PIcon = p.icon;
                const isActive = phaseIdx === idx;
                return (
                  <button
                    key={p.label}
                    onClick={() => setPhaseIdx(idx)}
                    className={cn(
                      "p-3 rounded-xl border text-left transition-all",
                      isActive
                        ? "bg-zinc-900 border-white/30 shadow-lg shadow-white/5"
                        : "bg-zinc-950/60 border-white/[0.06] hover:border-white/15"
                    )}
                  >
                    <PIcon className={cn("w-4 h-4 mb-2", isActive ? "text-white" : "text-zinc-500")} />
                    <div className="text-xs font-bold text-white font-mono">{p.time}</div>
                    <div className="text-[10px] text-zinc-400 mt-0.5">{p.label}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column (6 cols): Visual 24/7 Night/Day Dial & Live Call Arrival Mock */}
          <div className="lg:col-span-6 rounded-3xl bg-zinc-950 border border-white/15 p-6 sm:p-10 relative shadow-2xl overflow-hidden">
            {/* Top specular highlight */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

            {/* Giant Glowing 24/7 Indicator */}
            <div className="flex items-center justify-between pb-8 border-b border-white/[0.08]">
              <div>
                <div className="text-5xl sm:text-7xl font-bold font-mono tracking-tighter text-white">
                  24<span className="text-zinc-600">/</span>7
                </div>
                <div className="text-xs font-mono uppercase tracking-widest text-zinc-400 mt-1">
                  Continuous Zero-Wait Telephony
                </div>
              </div>

              {/* Dynamic Clock Indicator */}
              <div className="p-4 rounded-2xl bg-zinc-900/80 border border-white/10 flex flex-col items-center justify-center text-center">
                <Icon className="w-6 h-6 text-white mb-1 animate-pulse" />
                <span className="text-sm font-bold font-mono text-white tracking-tight">
                  {currentPhase.time}
                </span>
                <span className="text-[10px] font-mono text-zinc-500 uppercase">
                  {currentPhase.label} Phase
                </span>
              </div>
            </div>

            {/* Live Midnight Call Simulation Card */}
            <div className="my-8 p-5 rounded-2xl bg-zinc-900/90 border border-white/10 space-y-4 shadow-xl">
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                <div className="flex items-center gap-2 text-xs font-mono text-white">
                  <PhoneIncoming className="w-4 h-4 text-emerald-400 animate-bounce" />
                  <span className="font-bold">{currentPhase.time}</span>
                  <span className="text-zinc-500">• Inbound Call Detected</span>
                </div>
                <Badge variant="success" dot className="text-[10px]">
                  Hold Time: 0s
                </Badge>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold text-white">
                    AI Agent Answering...
                  </div>
                  <div className="text-xs text-zinc-400 mt-0.5">
                    Audio stream established in 184ms
                  </div>
                </div>
                <AudioWaveform isPlaying={true} barCount={12} color="bg-white" />
              </div>

              <div className="p-3 rounded-xl bg-black/40 border border-white/[0.06] text-xs text-zinc-300 font-mono">
                {currentPhase.desc}
              </div>
            </div>

            {/* System Status telemetry row */}
            <div className="grid grid-cols-2 gap-4 text-xs font-mono pt-4 border-t border-white/[0.08]">
              <div>
                <span className="text-zinc-500 block text-[10px] uppercase">Active Concurrency</span>
                <span className="text-white font-bold">{currentPhase.activeCalls}</span>
              </div>
              <div>
                <span className="text-zinc-500 block text-[10px] uppercase">Agent Readiness</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> 100% Operational
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
