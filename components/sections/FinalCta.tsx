"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, PhoneCall, Sparkles } from "lucide-react";

interface FinalCtaProps {
  onOpenDemo: () => void;
  onOpenContact: () => void;
}

export function FinalCta({ onOpenDemo, onOpenContact }: FinalCtaProps) {
  // Waveform bars with smooth oscillation heights
  const bars = [15, 25, 45, 75, 95, 60, 40, 80, 100, 70, 50, 85, 45, 65, 30, 20];

  return (
    <section className="relative py-28 md:py-40 bg-black border-t border-white/[0.08] overflow-hidden">
      {/* Subtle animated waveform background in pure silver/white */}
      <div className="absolute inset-0 flex items-center justify-center gap-1.5 sm:gap-2.5 opacity-[0.06] pointer-events-none -z-10 select-none overflow-hidden">
        {bars.map((height, i) => (
          <div
            key={i}
            style={{
              height: `${height * 3.5}px`,
              animationDelay: `${(i * 0.12) % 1.5}s`,
            }}
            className="w-4 sm:w-8 rounded-full bg-white animate-pulse"
          />
        ))}
      </div>

      {/* Radial soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-white/[0.03] rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <Badge variant="glow" className="mb-6 text-xs font-mono uppercase tracking-widest text-zinc-300">
          Autonomous Telephony Tier
        </Badge>

        {/* Large dramatic headline */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-[-0.04em] text-white leading-[1.05]">
          Give Your Business <br />
          <span className="silver-text-gradient">a Voice That Never Sleeps.</span>
        </h2>

        {/* Supporting text */}
        <p className="mt-6 text-base sm:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          Deploy an AI voice agent that understands your customers, connects to your systems, and takes action.
        </p>

        {/* Action CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            onClick={onOpenDemo}
            variant="silver"
            size="lg"
            className="w-full sm:w-auto text-base group px-8"
          >
            <span>Build Your AI Agent</span>
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Button>

          <Button
            onClick={onOpenContact}
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto text-base px-6 text-zinc-300 hover:text-white"
          >
            <PhoneCall className="w-4 h-4 mr-1 text-zinc-400" />
            <span>Talk to Sales</span>
          </Button>
        </div>

        {/* Bottom micro copy */}
        <div className="mt-8 text-xs font-mono text-zinc-500">
          Zero upfront hardware • Sub-240ms latency SLA • Dedicated cluster isolation
        </div>
      </div>
    </section>
  );
}
