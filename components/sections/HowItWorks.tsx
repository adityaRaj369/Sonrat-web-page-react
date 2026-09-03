"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  UserPlus,
  BookOpen,
  Plug,
  Radio,
  CheckCircle2,
  ArrowRight,
  Shield,
  Phone,
  Code2,
} from "lucide-react";
import { HOW_IT_WORKS_STEPS } from "@/data/integrations";
import { cn } from "@/lib/utils";

export function HowItWorks() {
  const [activeStepIdx, setActiveStepIdx] = useState(0);

  const step = HOW_IT_WORKS_STEPS[activeStepIdx];

  return (
    <section id="how-it-works" className="relative py-24 md:py-32 bg-[#06060a] border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <Badge variant="outline" className="mb-4 text-xs font-mono uppercase tracking-widest text-zinc-400">
            Deployment Playbook
          </Badge>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            How It Works.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed">
            Go from zero to an enterprise-grade AI voice agent handling production customer traffic in four disciplined steps.
          </p>
        </div>

        {/* Interactive Split Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column (5 cols): 4 Clickable Progressive Steps */}
          <div className="lg:col-span-5 space-y-4">
            {HOW_IT_WORKS_STEPS.map((s, idx) => {
              const isSelected = activeStepIdx === idx;
              return (
                <div
                  key={s.step}
                  onClick={() => setActiveStepIdx(idx)}
                  className={cn(
                    "p-6 rounded-2xl border transition-all duration-300 cursor-pointer text-left select-none",
                    isSelected
                      ? "bg-zinc-900/90 border-white/30 shadow-xl shadow-white/5"
                      : "bg-zinc-950/60 border-white/[0.06] hover:border-white/15"
                  )}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xl font-mono font-bold text-white tracking-tight">
                      {s.step}
                    </span>
                    <span className={cn("text-xs font-mono uppercase tracking-widest", isSelected ? "text-white font-bold" : "text-zinc-500")}>
                      {s.title}
                    </span>
                  </div>

                  <p className="text-sm font-medium text-zinc-200 mb-2">
                    “{s.description}”
                  </p>

                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {s.detail}
                  </p>

                  {/* Feature check list */}
                  {isSelected && (
                    <div className="mt-4 pt-4 border-t border-white/[0.08] space-y-2 animate-in fade-in duration-300">
                      {s.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs text-zinc-300 font-mono">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column (7 cols): Synchronized UI Visualization Window */}
          <div className="lg:col-span-7 sticky top-28 rounded-3xl bg-zinc-950 border border-white/15 p-6 sm:p-8 shadow-2xl overflow-hidden min-h-[440px] flex flex-col justify-between">
            {/* Window chrome */}
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-zinc-800" />
                  <span className="w-3 h-3 rounded-full bg-zinc-800" />
                  <span className="w-3 h-3 rounded-full bg-zinc-800" />
                  <span className="text-xs font-mono text-zinc-500 ml-2">
                    SonRat Console / Step {step.step}
                  </span>
                </div>
                <Badge variant="glow" className="text-[10px] font-mono">
                  {step.title}
                </Badge>
              </div>

              {/* Dynamic Mock Visuals based on previewType */}
              <div className="mt-6">
                {step.previewType === "account" && (
                  <div className="space-y-4 font-mono text-xs animate-in fade-in duration-300">
                    <div className="p-4 rounded-xl bg-zinc-900/80 border border-white/[0.08] space-y-2">
                      <div className="text-zinc-400 text-[10px] uppercase">Organization Setup</div>
                      <div className="text-white text-sm font-bold">Acme Global Technologies Inc.</div>
                      <div className="text-zinc-500 text-[11px]">Tenant ID: org_live_89204 • Tier: Dedicated Enterprise</div>
                    </div>

                    <div className="p-4 rounded-xl bg-zinc-900/60 border border-white/[0.08] space-y-3">
                      <div className="text-zinc-400 text-[10px] uppercase">Telemetry & Voice Regions</div>
                      <div className="grid grid-cols-2 gap-2 text-[11px]">
                        <div className="p-2.5 rounded-lg bg-zinc-950 border border-white/[0.06] text-zinc-300 flex items-center justify-between">
                          <span>US-East (N. Virginia)</span>
                          <span className="text-emerald-400">● 18ms</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-zinc-950 border border-white/[0.06] text-zinc-300 flex items-center justify-between">
                          <span>EU-Central (Frankfurt)</span>
                          <span className="text-emerald-400">● 22ms</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {step.previewType === "knowledge" && (
                  <div className="space-y-4 font-mono text-xs animate-in fade-in duration-300">
                    <div className="p-4 rounded-xl bg-zinc-900/80 border border-white/[0.08] space-y-2">
                      <div className="text-zinc-400 text-[10px] uppercase">Vector Ingestion Pipeline</div>
                      <div className="flex items-center justify-between text-white text-xs font-bold">
                        <span>Returns_and_Refund_Policy_2026.pdf</span>
                        <span className="text-emerald-400">100% Synced</span>
                      </div>
                      <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                        <div className="h-full bg-white w-full" />
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-zinc-900/60 border border-white/[0.08] space-y-2">
                      <div className="text-zinc-400 text-[10px] uppercase">Strict Guardrail Boundaries</div>
                      <div className="space-y-1.5 text-zinc-300 text-[11px]">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Max autonomous refund: $250.00 without supervisor</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Zero hallucination constraint on warranty dates</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {step.previewType === "apis" && (
                  <div className="space-y-4 font-mono text-xs animate-in fade-in duration-300">
                    <div className="p-4 rounded-xl bg-zinc-900/80 border border-white/[0.08] space-y-2">
                      <div className="text-zinc-400 text-[10px] uppercase">Connected Microservices</div>
                      <div className="grid grid-cols-2 gap-2 text-[11px]">
                        <div className="p-3 rounded-lg bg-zinc-950 border border-emerald-500/30 text-zinc-200">
                          <div className="font-bold text-white">Stripe Payments</div>
                          <div className="text-[10px] text-zinc-500 mt-0.5">mTLS Authenticated</div>
                        </div>
                        <div className="p-3 rounded-lg bg-zinc-950 border border-emerald-500/30 text-zinc-200">
                          <div className="font-bold text-white">Warehouse ERP</div>
                          <div className="text-[10px] text-zinc-500 mt-0.5">REST OpenAPI 3.1</div>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-zinc-900/60 border border-white/[0.08] text-[11px] text-zinc-300">
                      <div className="text-zinc-500 text-[10px] uppercase mb-1">Defined Tool Schema</div>
                      <code className="text-zinc-400">
                        reconcile_order(order_id: string, force_sync: bool) → Result
                      </code>
                    </div>
                  </div>
                )}

                {step.previewType === "deploy" && (
                  <div className="space-y-4 font-mono text-xs animate-in fade-in duration-300">
                    <div className="p-4 rounded-xl bg-zinc-900/80 border border-white/[0.08] space-y-2">
                      <div className="text-zinc-400 text-[10px] uppercase">Telephony Numbers Assigned</div>
                      <div className="flex items-center justify-between text-white text-xs">
                        <span className="font-bold">+1 (800) 555-0199</span>
                        <span className="text-emerald-400 font-bold">● Active 24/7</span>
                      </div>
                      <div className="text-zinc-500 text-[10px]">Toll-Free US/Canada • SIP Trunk Primary</div>
                    </div>

                    <div className="p-4 rounded-xl bg-zinc-900/60 border border-white/[0.08] space-y-2">
                      <div className="text-zinc-400 text-[10px] uppercase">Web & Mobile WebRTC Embed</div>
                      <code className="text-zinc-300 text-[11px] block bg-zinc-950 p-2.5 rounded border border-white/[0.06]">
                        &lt;SonRatVoiceWidget agentId=&quot;agt_live_901&quot; /&gt;
                      </code>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom step navigation bar */}
            <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between">
              <span className="text-xs font-mono text-zinc-400">
                Step {activeStepIdx + 1} of 4: {step.title}
              </span>

              <div className="flex items-center gap-2">
                <button
                  disabled={activeStepIdx === 0}
                  onClick={() => setActiveStepIdx((prev) => Math.max(0, prev - 1))}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono bg-zinc-900 border border-white/10 text-zinc-300 hover:text-white disabled:opacity-30 disabled:pointer-events-none"
                >
                  Previous
                </button>
                <button
                  disabled={activeStepIdx === HOW_IT_WORKS_STEPS.length - 1}
                  onClick={() => setActiveStepIdx((prev) => Math.min(HOW_IT_WORKS_STEPS.length - 1, prev + 1))}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono bg-white text-black font-semibold hover:bg-zinc-200 disabled:opacity-30 disabled:pointer-events-none"
                >
                  Next Step
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
