"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import {
  ShieldCheck,
  Lock,
  FileText,
  UserCheck,
  Eye,
  Sliders,
  CheckCircle2,
  KeyRound,
} from "lucide-react";

const TRUST_CAPABILITIES = [
  {
    icon: Lock,
    title: "Secure API Connections",
    description: "Every upstream and downstream API call is secured with mutual TLS (mTLS), asymmetric HMAC payload signatures, and ephemeral session tokens.",
  },
  {
    icon: KeyRound,
    title: "Role-Based Access Control (RBAC)",
    description: "Granular permission boundaries restrict which voice agents can invoke specific API methods, access sensitive user fields, or mutate databases.",
  },
  {
    icon: FileText,
    title: "Immutable Audit Logs",
    description: "Every spoken dialogue, intent classification score, tool call payload, and customer response is stored with cryptographic timestamps for governance.",
  },
  {
    icon: Eye,
    title: "Real-Time Telemetry & Monitoring",
    description: "Instantaneous visibility into turnaround jitter, token latency, tool execution success rates, and live speech sentiment shifts.",
  },
  {
    icon: UserCheck,
    title: "Warm Human Escalation",
    description: "Configurable deterministic trigger rules automatically route complex edge cases to human specialists with zero-loss audio transcript context.",
  },
  {
    icon: Sliders,
    title: "Configurable Guardrail Workflows",
    description: "Strict deterministic boundary rules ensure the voice agent never commits to actions, discounts, or policies outside your explicit corporate rules.",
  },
];

export function EnterpriseTrust() {
  return (
    <section id="trust" className="relative py-24 md:py-32 border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <Badge variant="outline" className="mb-4 text-xs font-mono uppercase tracking-widest text-zinc-400">
            Enterprise Governance & Security
          </Badge>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Built For Real Customer <br />
            <span className="silver-text-gradient">Conversations.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed">
            Enterprise customer operations demand deterministic safeguards, not stochastic black boxes. SonRat is engineered with rigorous access controls, cryptographic logs, and fail-safe human escalations.
          </p>
        </div>

        {/* 6 Capabilities Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRUST_CAPABILITIES.map((cap) => {
            const Icon = cap.icon;
            return (
              <div
                key={cap.title}
                className="p-6 sm:p-8 rounded-2xl bg-zinc-950/80 border border-white/[0.08] hover:border-white/20 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-white mb-6">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-white tracking-tight mb-2">
                    {cap.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {cap.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center gap-1.5 text-xs font-mono text-zinc-500">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Enforced at Edge Perimeter</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
