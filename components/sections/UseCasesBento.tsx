"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { USE_CASES } from "@/data/use-cases";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function UseCasesBento() {
  const [selectedIdx, setSelectedIdx] = useState(0);

  return (
    <section id="use-cases" className="relative py-24 md:py-32 bg-[#060609] border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <Badge variant="outline" className="mb-4 text-xs font-mono uppercase tracking-widest text-zinc-400">
            Industry Applications
          </Badge>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Engineered For High-Stakes <br />
            <span className="silver-text-gradient">Operations.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed">
            From instant e-commerce returns to urgent card lockouts and freight dispatching, discover how leading organizations deploy SonRat AI voice infrastructure.
          </p>
        </div>

        {/* Bento Grid (8 Verticals) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {USE_CASES.map((uc, idx) => {
            const isFeatured = idx === 0 || idx === 1;

            return (
              <div
                key={uc.category}
                className={cn(
                  "p-6 sm:p-8 rounded-3xl border transition-all duration-300 flex flex-col justify-between group",
                  isFeatured
                    ? "lg:col-span-2 bg-zinc-950 border-white/15 shadow-xl shadow-white/5"
                    : "bg-zinc-950/70 border-white/[0.08] hover:border-white/20"
                )}
              >
                <div>
                  {/* Category and Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400">
                      {uc.category}
                    </span>
                    <Badge variant="glow" className="text-[10px] font-mono">
                      {uc.badge}
                    </Badge>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug mb-3">
                    {uc.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6 font-sans">
                    {uc.description}
                  </p>

                  {/* Workflow capabilities list */}
                  <div className="space-y-2 mb-6">
                    {uc.capabilities.map((cap, cIdx) => (
                      <div key={cIdx} className="flex items-start gap-2 text-xs text-zinc-300 font-mono">
                        <CheckCircle2 className="w-3.5 h-3.5 text-zinc-400 shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Metric */}
                <div className="pt-4 border-t border-white/[0.06] flex items-baseline justify-between">
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold font-mono text-white tracking-tight">
                      {uc.metrics}
                    </div>
                    <div className="text-[10px] font-mono text-zinc-500 uppercase mt-0.5">
                      {uc.metricLabel}
                    </div>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:border-white/30 transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
