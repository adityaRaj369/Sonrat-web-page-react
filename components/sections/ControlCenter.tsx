"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import {
  Activity,
  Phone,
  CheckCircle2,
  Globe,
  Ticket,
  TrendingUp,
  Search,
  Filter,
  ArrowUpRight,
  Sparkles,
  SlidersHorizontal,
} from "lucide-react";
import { cn } from "@/lib/utils";

const DASHBOARD_METRICS = [
  { label: "Agent Status", value: "Online", isBadge: true, detail: "Cluster: us-east-1 (P99: 218ms)" },
  { label: "Calls Today", value: 1284, isNumber: true, change: "+18.4% vs yesterday" },
  { label: "Resolved", value: 91, suffix: "%", isNumber: true, change: "First-call autonomous" },
  { label: "Languages", value: 12, isNumber: true, detail: "Active polyglot clusters" },
  { label: "Tickets Created", value: 284, isNumber: true, change: "Auto-synced to Zendesk" },
  { label: "Sales Leads", value: 173, isNumber: true, change: "Qualified & booked" },
];

const ACTIVE_PANELS = [
  { id: "live", label: "Live Calls (4)" },
  { id: "actions", label: "Actions Taken (1,168)" },
  { id: "tickets", label: "Tickets & Syncs (284)" },
  { id: "analytics", label: "Latency & Jitter (218ms)" },
];

export function ControlCenter() {
  const [activePanel, setActivePanel] = useState("live");

  return (
    <section id="control-center" className="relative py-24 md:py-32 bg-[#050508] border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <Badge variant="outline" className="mb-4 text-xs font-mono uppercase tracking-widest text-zinc-400">
            Enterprise Product Console
          </Badge>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Agent Control Center.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed">
            Full operational observability over every live conversation, tool execution, ticket dispatch, and latency SLA from a centralized enterprise console.
          </p>
        </div>

        {/* Full-Width Mock Product Dashboard */}
        <div className="rounded-3xl bg-[#09090e] border border-white/15 p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
          {/* Top highlight specular border */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

          {/* Top Console Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
              <div>
                <h3 className="text-base font-bold text-white tracking-tight font-sans">
                  SonRat Enterprise Workspace • Production Tier
                </h3>
                <p className="text-xs text-zinc-500 font-mono">
                  Organization ID: org_acme_corp_global
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-lg text-xs font-mono bg-zinc-900 border border-white/10 text-zinc-300">
                Environment: Production
              </span>
              <span className="px-3 py-1 rounded-lg text-xs font-mono bg-white/[0.08] border border-white/20 text-white font-semibold">
                ● Telephony Inbound & Outbound Active
              </span>
            </div>
          </div>

          {/* 6 Key Metric Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 my-8">
            {DASHBOARD_METRICS.map((m, i) => (
              <div
                key={m.label}
                className="p-4 rounded-2xl bg-zinc-900/60 border border-white/[0.06] hover:border-white/15 transition-colors"
              >
                <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-2">
                  {m.label}
                </div>
                {m.isBadge ? (
                  <div className="flex items-center gap-1.5 text-base font-bold text-emerald-400 font-mono">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    Online
                  </div>
                ) : (
                  <div className="text-2xl sm:text-3xl font-bold text-white font-mono tracking-tight">
                    <AnimatedCounter value={m.value as number} suffix={m.suffix} />
                  </div>
                )}
                <div className="text-[10px] font-mono text-zinc-500 mt-2 truncate">
                  {m.change || m.detail}
                </div>
              </div>
            ))}
          </div>

          {/* Panel Tabs (Live Calls, Actions Taken, Tickets, Analytics) */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-zinc-950 border border-white/10 overflow-x-auto mb-6">
            {ACTIVE_PANELS.map((p) => (
              <button
                key={p.id}
                onClick={() => setActivePanel(p.id)}
                className={cn(
                  "px-4 py-2 text-xs font-mono font-medium rounded-lg transition-all whitespace-nowrap",
                  activePanel === p.id
                    ? "bg-white text-black font-bold shadow-sm"
                    : "text-zinc-400 hover:text-white hover:bg-white/[0.04]"
                )}
              >
                {p.label}
              </button>
            ))}
          </div>

          {/* Panel Content Display */}
          <div className="rounded-2xl bg-zinc-950 border border-white/[0.08] p-5 sm:p-6 font-mono text-xs overflow-x-auto">
            {activePanel === "live" && (
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] text-zinc-500 text-[11px] uppercase">
                  <span>Caller Identity</span>
                  <span>Detected Intent</span>
                  <span>Active Duration</span>
                  <span>Turnaround Jitter</span>
                  <span>State / Action</span>
                </div>

                <div className="space-y-2 text-zinc-300">
                  <div className="p-3 rounded-xl bg-zinc-900/60 border border-white/[0.04] flex items-center justify-between hover:bg-zinc-900/90 transition-colors">
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="font-bold text-white">+1 (415) 890-2194</span>
                    </div>
                    <span className="text-zinc-300">Payment vs Order Reconciliation</span>
                    <span className="text-zinc-400">00:18s</span>
                    <span className="text-emerald-400">212ms</span>
                    <span className="text-emerald-300 font-bold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30 text-[10px]">
                      Remediating Order
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-zinc-900/60 border border-white/[0.04] flex items-center justify-between hover:bg-zinc-900/90 transition-colors">
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="font-bold text-white">+44 20 7946 0912</span>
                    </div>
                    <span className="text-zinc-300">Lost Baggage Tracking (Heathrow)</span>
                    <span className="text-zinc-400">00:42s</span>
                    <span className="text-emerald-400">198ms</span>
                    <span className="text-blue-300 font-bold bg-blue-950/60 px-2 py-0.5 rounded border border-blue-500/30 text-[10px]">
                      Querying GDS API
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-zinc-900/60 border border-white/[0.04] flex items-center justify-between hover:bg-zinc-900/90 transition-colors">
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="font-bold text-white">+1 (212) 555-0182</span>
                    </div>
                    <span className="text-zinc-300">Enterprise Trial Demo Inbound</span>
                    <span className="text-zinc-400">01:14s</span>
                    <span className="text-emerald-400">224ms</span>
                    <span className="text-purple-300 font-bold bg-purple-950/60 px-2 py-0.5 rounded border border-purple-500/30 text-[10px]">
                      Booking Calendar
                    </span>
                  </div>
                </div>
              </div>
            )}

            {activePanel === "actions" && (
              <div className="space-y-2">
                <div className="text-[11px] uppercase text-zinc-500 mb-2">
                  Autonomous Tool Invocations in Last 60 Minutes
                </div>
                <div className="space-y-2">
                  <div className="p-2.5 rounded-lg bg-zinc-900/40 border border-white/[0.04] flex items-center justify-between">
                    <span className="text-white">StripeBillingAPI.reconcilePayment()</span>
                    <span className="text-zinc-400">Status: 200 OK • 38ms</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-zinc-900/40 border border-white/[0.04] flex items-center justify-between">
                    <span className="text-white">WarehouseERP.createDispatchLabel()</span>
                    <span className="text-zinc-400">Status: 200 OK • 54ms</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-zinc-900/40 border border-white/[0.04] flex items-center justify-between">
                    <span className="text-white">GoogleCalendar.reserveSlot()</span>
                    <span className="text-zinc-400">Status: 200 OK • 42ms</span>
                  </div>
                </div>
              </div>
            )}

            {activePanel === "tickets" && (
              <div className="space-y-2">
                <div className="text-[11px] uppercase text-zinc-500 mb-2">
                  Auto-Synchronized Ticket Records
                </div>
                <div className="space-y-2">
                  <div className="p-2.5 rounded-lg bg-zinc-900/40 border border-white/[0.04] flex items-center justify-between">
                    <span className="text-white">TICKET #48291 • Payment-Order Reconciliation</span>
                    <span className="text-emerald-400">Auto-Resolved</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-zinc-900/40 border border-white/[0.04] flex items-center justify-between">
                    <span className="text-white">TICKET #48292 • Expedited Address Modification</span>
                    <span className="text-emerald-400">Auto-Resolved</span>
                  </div>
                </div>
              </div>
            )}

            {activePanel === "analytics" && (
              <div className="space-y-4">
                <div className="text-[11px] uppercase text-zinc-500">
                  Global Audio Pipeline P99 Latency Breakdown
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-zinc-900/60 border border-white/[0.04]">
                    <div className="text-zinc-500 text-[10px]">VAD Interruption Gate</div>
                    <div className="text-white text-lg font-bold mt-1">18ms</div>
                  </div>
                  <div className="p-3 rounded-xl bg-zinc-900/60 border border-white/[0.04]">
                    <div className="text-zinc-500 text-[10px]">Speech-to-Context (STT)</div>
                    <div className="text-white text-lg font-bold mt-1">68ms</div>
                  </div>
                  <div className="p-3 rounded-xl bg-zinc-900/60 border border-white/[0.04]">
                    <div className="text-zinc-500 text-[10px]">LLM First-Chunk Time</div>
                    <div className="text-white text-lg font-bold mt-1">72ms</div>
                  </div>
                  <div className="p-3 rounded-xl bg-zinc-900/60 border border-white/[0.04]">
                    <div className="text-zinc-500 text-[10px]">Neural Voice Audio Render</div>
                    <div className="text-emerald-400 text-lg font-bold mt-1">54ms</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
