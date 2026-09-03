"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Cpu, Zap, Network, ShieldCheck, Gauge, Check } from "lucide-react";

const ARCHITECTURE_SPECS = [
  {
    icon: Zap,
    metric: "< 240ms",
    label: "Global Audio Turnaround",
    description: "Full loop: Voice Activity Detection (VAD) → Speech Recognition → LLM Token Generation → Neural Voice Streaming.",
  },
  {
    icon: Network,
    metric: "10,000+",
    label: "Concurrent Streams / Cluster",
    description: "Distributed WebRTC and SIP telephony edge clusters built for massive Black Friday and product launch spikes.",
  },
  {
    icon: Gauge,
    metric: "99.99%",
    label: "Mission-Critical Telephony SLA",
    description: "Redundant tier-1 carrier peering with multi-region failover across AWS, Google Cloud, and Bare Metal.",
  },
  {
    icon: ShieldCheck,
    metric: "0s",
    label: "Caller Hold Time",
    description: "Eliminates call queue backlogs entirely by spinning up on-demand virtual voice instances in under 50 milliseconds.",
  },
];

export function ArchitectureBench() {
  return (
    <section id="architecture" className="relative py-24 md:py-32 border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 text-xs font-mono uppercase tracking-widest text-zinc-400">
            Engineered For Scale
          </Badge>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Built For Teams That <br />
            <span className="silver-text-gradient">Move Fast.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed">
            No marketing fluff. Built on real-time WebRTC audio primitives, low-latency speculative decoding, and deterministic tool verification.
          </p>
        </div>

        {/* 4 Core Architecture Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ARCHITECTURE_SPECS.map((spec) => {
            const Icon = spec.icon;
            return (
              <div
                key={spec.label}
                className="p-6 sm:p-8 rounded-3xl bg-zinc-950/80 border border-white/[0.08] hover:border-white/20 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-white mb-6">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold font-mono text-white tracking-tight mb-2">
                    {spec.metric}
                  </div>
                  <div className="text-xs font-mono uppercase tracking-wider text-zinc-300 mb-3 font-semibold">
                    {spec.label}
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                    {spec.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                  <Check className="w-3.5 h-3.5" />
                  <span>Hardware Accelerated</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
