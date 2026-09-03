"use client";

import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, Zap, Globe2, ShieldCheck, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeroProps {
  onOpenDemo: () => void;
  onScrollToDemo: () => void;
}

// Floating particle data
const PARTICLES = [
  { top: "15%", left: "8%", size: 3, delay: "0s", duration: "7s", opacity: 0.5 },
  { top: "25%", left: "92%", size: 2, delay: "1.2s", duration: "9s", opacity: 0.4 },
  { top: "60%", left: "5%", size: 2.5, delay: "2.5s", duration: "6s", opacity: 0.6 },
  { top: "70%", left: "95%", size: 2, delay: "0.8s", duration: "8s", opacity: 0.3 },
  { top: "40%", left: "3%", size: 1.5, delay: "3.2s", duration: "10s", opacity: 0.5 },
  { top: "80%", left: "88%", size: 3.5, delay: "1.8s", duration: "7.5s", opacity: 0.4 },
  { top: "10%", left: "75%", size: 2, delay: "0.5s", duration: "11s", opacity: 0.35 },
  { top: "88%", left: "20%", size: 1.5, delay: "4s", duration: "6.5s", opacity: 0.45 },
];

const STATS = [
  { icon: Zap, value: "< 240ms", label: "Voice Turnaround" },
  { icon: TrendingUp, value: "92%+", label: "Autonomous Resolution" },
  { icon: Globe2, value: "40+", label: "Native Languages" },
  { icon: ShieldCheck, value: "99.995%", label: "Uptime SLA" },
];

const TRUST_LABELS = [
  "Customer Support",
  "Outbound & Inbound Sales",
  "24/7 Autonomous",
  "Multilingual Native",
  "API-Integrated",
  "Enterprise-Ready",
];

export function Hero({ onOpenDemo, onScrollToDemo }: HeroProps) {
  return (
    <section className="relative pt-28 pb-8 md:pt-40 md:pb-12 lg:pt-44 lg:pb-16 overflow-hidden">
      {/* Animated radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[600px] pointer-events-none -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.07)_0%,rgba(255,255,255,0.02)_40%,transparent_70%)]" />
      </div>

      {/* Grid overlay with radial mask */}
      <div className="absolute inset-0 grid-pattern [mask-image:radial-gradient(ellipse_70%_55%_at_50%_0%,#000_60%,transparent_100%)] pointer-events-none -z-10" />

      {/* Floating particles */}
      {PARTICLES.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white pointer-events-none -z-10 float-particle"
          style={{
            top: p.top,
            left: p.left,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            "--duration": p.duration,
            "--delay": p.delay,
          } as React.CSSProperties}
        />
      ))}

      <div className="container-wide text-center">
        {/* Announcement badge */}
        <div className="inline-flex items-center gap-2 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.05] border border-white/[0.1] backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs font-mono text-zinc-200 font-medium">SonRat Engine v3.2</span>
            <span className="w-px h-3 bg-white/20" />
            <span className="text-xs font-mono text-zinc-400">Sub-240ms Global Audio Turnaround</span>
          </div>
        </div>

        {/* Hero Headline */}
        <div className="animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
          <h1 className="heading-xl text-white mb-2">
            AI Voice Agents{" "}
            <br className="hidden sm:block" />
            <span className="silver-text-gradient">That Actually Work.</span>
          </h1>
        </div>

        {/* Supporting headline */}
        <p className="mt-6 text-lg sm:text-xl md:text-2xl font-medium text-zinc-300 tracking-tight max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150">
          Talk to customers. Understand their needs.{" "}
          <span className="text-white">Take action. Resolve issues.</span>
        </p>

        {/* Supporting paragraph */}
        <p className="mt-4 text-sm sm:text-base md:text-lg text-zinc-500 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
          Deploy human-like AI voice agents that handle customer support and sales 24/7 —
          connected directly to your company&apos;s data, APIs, and workflows.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
          <Button
            onClick={onOpenDemo}
            variant="silver"
            size="lg"
            className="w-full sm:w-auto text-sm sm:text-base group px-6 sm:px-8 relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Build Your AI Agent
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Button>

          <Button
            onClick={onScrollToDemo}
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto text-sm sm:text-base group px-5 sm:px-6 text-zinc-300 hover:text-white border border-white/[0.1] hover:border-white/[0.2]"
          >
            <div className="w-7 h-7 rounded-full bg-white/[0.08] border border-white/[0.12] flex items-center justify-center mr-2 group-hover:bg-white/[0.14] transition-colors">
              <Play className="w-3 h-3 fill-current text-zinc-300 group-hover:text-white ml-0.5" />
            </div>
            See How It Works
          </Button>
        </div>

        {/* Trust labels ticker */}
        <div className="mt-10 overflow-hidden animate-in fade-in duration-700 delay-500">
          <div className="flex overflow-x-auto hide-scrollbar gap-3 justify-center flex-wrap px-2">
            {TRUST_LABELS.map((label) => (
              <span
                key={label}
                className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-widest text-zinc-500 whitespace-nowrap"
              >
                <span className="w-1 h-1 rounded-full bg-zinc-600" />
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.08] animate-in fade-in slide-in-from-bottom-4 duration-700 delay-600 max-w-3xl mx-auto">
          {STATS.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-1.5 py-5 px-3 bg-[#050507] hover:bg-white/[0.025] transition-colors"
              >
                <Icon className="w-4 h-4 text-zinc-500 mb-1" />
                <div className="text-xl sm:text-2xl font-bold text-white tracking-tight font-mono">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs font-mono text-zinc-500 uppercase tracking-wider text-center">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
