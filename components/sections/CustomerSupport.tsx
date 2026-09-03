"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import {
  CheckCircle2,
  PhoneCall,
  Clock,
  TrendingUp,
  AlertCircle,
  FileCheck,
  RefreshCw,
  Search,
} from "lucide-react";
import { SUPPORT_STATS } from "@/data/metrics";
import { LIVE_SUPPORT_TICKETS } from "@/data/conversations";
import { cn } from "@/lib/utils";

const SUPPORT_CAPABILITIES = [
  { name: "Order Tracking", desc: "Live carrier telemetry, transit delays & address corrections" },
  { name: "Refund Requests", desc: "Policy-governed instant ledger credits & dispute mitigation" },
  { name: "Payment Issues", desc: "Failed webhook recoveries, card declines & invoice splits" },
  { name: "Account Problems", desc: "PIN unlocks, two-factor auth resets & password resets" },
  { name: "Appointment Management", desc: "Slot rebooking, cancellations & automated reminders" },
  { name: "Customer Verification", desc: "Voice biometrics, cryptographic OTPs & identity checks" },
  { name: "Technical Support", desc: "Diagnostic flowcharts, triage, and firmware patch advice" },
  { name: "Ticket Creation & Updates", desc: "Instant schema creation in Zendesk, Linear, and Jira" },
  { name: "Warm Escalation", desc: "Full context audio transcript transfer to human supervisors" },
  { name: "Issue Resolution", desc: "End-to-end verified completion without putting callers on hold" },
];

export function CustomerSupport() {
  const [filter, setFilter] = useState("All");

  return (
    <section id="support" className="relative py-24 md:py-32 border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <Badge variant="outline" className="mb-4 text-xs font-mono uppercase tracking-widest text-zinc-400">
            Enterprise Support Ops
          </Badge>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Turn Every Call Into a Resolution.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed">
            Eliminate customer hold queues, redundant Tier-1 tickets, and costly call center overhead. Deploy an autonomous voice tier capable of executing end-to-end support operations in seconds.
          </p>
        </div>

        {/* Live Support Operations Dashboard */}
        <div className="rounded-3xl bg-zinc-950 border border-white/10 p-6 sm:p-8 lg:p-10 shadow-2xl relative mb-16">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <div>
                <h3 className="text-sm font-semibold text-white tracking-tight uppercase font-mono">
                  Live Support Operations Dashboard
                </h3>
                <p className="text-xs text-zinc-500 font-mono">
                  Global Inbound Voice Tier • Real-Time Resolution Telemetry
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>All 6 Regions Healthy (P99: 232ms)</span>
            </div>
          </div>

          {/* 5 Animated Counter Metric Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 my-8">
            {SUPPORT_STATS.map((stat, i) => (
              <div
                key={stat.label}
                className="p-5 rounded-2xl bg-zinc-900/60 border border-white/[0.06] hover:border-white/15 transition-all"
              >
                <div className="text-xs text-zinc-400 font-mono mb-2">{stat.label}</div>
                <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-mono">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                    decimals={stat.suffix === "%" ? 1 : 0}
                  />
                </div>
                <div className="text-[11px] text-zinc-500 mt-2 flex items-center gap-1 font-mono">
                  {stat.change}
                </div>
              </div>
            ))}
          </div>

          {/* Live Incoming Call Stream Table */}
          <div className="mt-8 rounded-2xl bg-zinc-900/40 border border-white/[0.06] overflow-hidden">
            <div className="p-4 border-b border-white/[0.06] flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                Recent Autonomous Inbound Voice Resolutions
              </span>
              <span className="text-[11px] font-mono text-emerald-400">
                ● Live Streaming
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-zinc-950 text-zinc-500 border-b border-white/[0.06]">
                  <tr>
                    <th className="p-3.5">Ticket ID</th>
                    <th className="p-3.5">Customer</th>
                    <th className="p-3.5">Intent / Request</th>
                    <th className="p-3.5">API Executed</th>
                    <th className="p-3.5">Duration</th>
                    <th className="p-3.5">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.04] text-zinc-300">
                  {LIVE_SUPPORT_TICKETS.map((t) => (
                    <tr key={t.id} className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-3.5 text-white font-bold">{t.id}</td>
                      <td className="p-3.5 text-zinc-400">{t.customer}</td>
                      <td className="p-3.5 text-zinc-200">{t.intent}</td>
                      <td className="p-3.5 text-zinc-400 font-mono text-[11px]">
                        <span className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700">
                          {t.apiCalled}
                        </span>
                      </td>
                      <td className="p-3.5 text-zinc-400">{t.duration}</td>
                      <td className="p-3.5">
                        <span className="inline-flex items-center gap-1 text-emerald-400 font-bold bg-emerald-950/40 px-2 py-0.5 rounded-full border border-emerald-500/30 text-[10px]">
                          <CheckCircle2 className="w-3 h-3" />
                          {t.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* 10 Enterprise Support Capabilities Grid */}
        <div className="space-y-6">
          <div className="text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Supported Tier-1 & Tier-2 Workflows
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              Fully configurable deterministic guardrails tailored to your organization&apos;s business logic.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {SUPPORT_CAPABILITIES.map((cap, i) => (
              <div
                key={cap.name}
                className="p-4 rounded-xl bg-zinc-950/70 border border-white/[0.06] hover:border-white/20 transition-all hover:bg-zinc-900/60"
              >
                <div className="text-xs font-bold text-white mb-1.5 font-sans">
                  {cap.name}
                </div>
                <div className="text-[11px] text-zinc-400 leading-relaxed font-sans">
                  {cap.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
