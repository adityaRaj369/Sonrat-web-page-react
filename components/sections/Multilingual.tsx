"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { AudioWaveform } from "@/components/ui/audio-waveform";
import { Globe2, Volume2, Sparkles, Check, ArrowRight } from "lucide-react";
import { SUPPORTED_LANGUAGES } from "@/data/integrations";
import { cn } from "@/lib/utils";

export function Multilingual() {
  const [selectedLangCode, setSelectedLangCode] = useState("en");

  const selectedLang =
    SUPPORTED_LANGUAGES.find((l) => l.code === selectedLangCode) ||
    SUPPORTED_LANGUAGES[0];

  return (
    <section id="multilingual" className="relative py-24 md:py-32 border-t border-white/[0.06] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-white/[0.015] rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 text-xs font-mono uppercase tracking-widest text-zinc-400">
            Global Polyglot Engine
          </Badge>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            One Agent. <br />
            <span className="silver-text-gradient">Every Language.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed">
            Eliminate language barriers with real-time accent nuances, localized idioms, and sub-80ms automatic language detection. Customers speak in their native tongue; SonRat answers with native fluency.
          </p>
        </div>

        {/* Interactive Language Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {SUPPORTED_LANGUAGES.map((lang) => {
            const isSelected = selectedLangCode === lang.code;
            return (
              <button
                key={lang.code}
                onClick={() => setSelectedLangCode(lang.code)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium transition-all duration-200",
                  isSelected
                    ? "bg-white text-black font-semibold shadow-[0_0_20px_rgba(255,255,255,0.2)] border border-white"
                    : "bg-zinc-950/80 text-zinc-400 hover:text-white hover:bg-zinc-900 border border-white/[0.08]"
                )}
              >
                <span>{lang.name}</span>
                <span className={cn("text-[11px] font-mono", isSelected ? "text-zinc-700" : "text-zinc-500")}>
                  ({lang.nativeName})
                </span>
              </button>
            );
          })}
        </div>

        {/* Featured Interactive Conversation Card */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-zinc-950 border border-white/15 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Specular highlight */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-white">
                <Globe2 className="w-5 h-5 text-zinc-300" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white tracking-tight font-sans">
                  {selectedLang.name} Voice Cluster
                </h3>
                <p className="text-xs text-zinc-500 font-mono">
                  {selectedLang.activeCallCount} currently routing
                </p>
              </div>
            </div>

            <Badge variant="glow" className="text-xs font-mono">
              Auto Language Detection: &lt; 60ms
            </Badge>
          </div>

          {/* Dialogue display in selected language */}
          <div className="my-8 space-y-4">
            {/* Customer greeting */}
            <div className="p-4 rounded-2xl bg-zinc-900/80 border border-white/[0.08] text-sm text-zinc-200">
              <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 mb-1">
                Customer Inbound ({selectedLang.nativeName})
              </div>
              <div className="font-sans text-sm sm:text-base leading-relaxed">
                “{selectedLang.sampleGreeting}”
              </div>
            </div>

            {/* AI Agent resolution */}
            <div className="p-5 rounded-2xl bg-white/[0.06] border border-white/20 text-white shadow-[0_0_30px_rgba(255,255,255,0.04)]">
              <div className="flex items-center justify-between mb-2">
                <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-300 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-white" />
                  SonRat AI Agent (Native Accent Synthesizer)
                </div>
                <AudioWaveform isPlaying={true} barCount={12} color="bg-white" className="h-5" />
              </div>
              <div className="font-sans text-base sm:text-lg font-medium leading-relaxed">
                “{selectedLang.sampleResolution}”
              </div>
            </div>
          </div>

          {/* Bottom telemetry */}
          <div className="pt-6 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
            <div className="p-3 rounded-xl bg-zinc-900/50 border border-white/[0.04]">
              <span className="text-zinc-500 block text-[10px]">Acoustic Accent Nuance</span>
              <span className="text-white font-bold">100% Regionally Grounded</span>
            </div>
            <div className="p-3 rounded-xl bg-zinc-900/50 border border-white/[0.04]">
              <span className="text-zinc-500 block text-[10px]">Cross-Language Switching</span>
              <span className="text-emerald-400 font-bold">Zero Latency Mid-Call</span>
            </div>
            <div className="p-3 rounded-xl bg-zinc-900/50 border border-white/[0.04]">
              <span className="text-zinc-500 block text-[10px]">Data Locality</span>
              <span className="text-white font-bold">In-Region Edge Telephony</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
