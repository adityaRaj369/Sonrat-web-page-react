"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Bot, Megaphone, PhoneCall, Users } from "lucide-react";
import { DashboardFrame, StatusBadge } from "@/components/product/DashboardFrame";

interface HeroProps {
  onOpenDemo: () => void;
  onOpenSales?: () => void;
}

export function Hero({ onOpenDemo, onOpenSales }: HeroProps) {
  return (
    <section className="relative pt-28 pb-14 md:pt-36 md:pb-20 overflow-hidden bg-white">
      <div className="absolute top-16 right-[10%] w-[26rem] h-[26rem] bg-slate-100 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="site-shell">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500 mb-5 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Voice control plane
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="text-4xl sm:text-5xl lg:text-[52px] font-bold text-slate-950 tracking-[-0.035em] leading-[1.05] mb-5"
            >
              Train once.
              <br />
              Call thousands.
              <br />
              <span className="text-slate-500">Support every inbound.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-base sm:text-lg text-slate-500 max-w-md leading-relaxed mb-8"
            >
              Sonrat is the multi-tenant dashboard and voice runtime for AI sales and support calls.
              Publish company-trained agents, run outbound campaigns, answer inbound lines, and audit
              every transcript, recording, and lead.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="flex flex-wrap items-center gap-3 mb-8"
            >
              <button
                onClick={onOpenDemo}
                className="group inline-flex items-center gap-2 bg-[#163a78] hover:bg-[#122f61] text-white font-medium text-sm px-6 py-3.5 rounded-full transition-colors"
              >
                Book a demo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <button
                onClick={onOpenSales}
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 font-medium text-sm px-6 py-3.5 rounded-full"
              >
                Talk to sales
              </button>
            </motion.div>

            <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-slate-500">
              <span className="inline-flex items-center gap-1.5"><BookOpen className="w-3.5 h-3.5" /> Agents · knowledge · versions</span>
              <span className="inline-flex items-center gap-1.5"><PhoneCall className="w-3.5 h-3.5" /> Campaigns + inbound</span>
              <span className="inline-flex items-center gap-1.5"><Users className="w-3.5 h-3.5" /> Leads · callbacks · outcomes</span>
            </div>
          </div>

          <div className="lg:col-span-7">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }}>
              <DashboardFrame
                activeNav="Dashboard"
                title="Dashboard"
                description="Overview of agents, campaigns, and call activity"
              >
                <div className="grid gap-2.5 grid-cols-2 xl:grid-cols-4 mb-4">
                  {[
                    { label: "Total calls", value: "1,284", icon: PhoneCall },
                    { label: "Connected", value: "892", icon: PhoneCall },
                    { label: "Leads", value: "146", icon: Users },
                    { label: "Conversions", value: "38", icon: Megaphone },
                  ].map((kpi) => (
                    <div key={kpi.label} className="rounded-lg border border-[#e2e8f0] bg-white p-3">
                      <div className="flex items-center justify-between text-[11px] font-medium text-slate-500 mb-1">
                        {kpi.label}
                        <kpi.icon className="h-3.5 w-3.5" />
                      </div>
                      <div className="text-xl font-semibold text-slate-900 tabular-nums">{kpi.value}</div>
                    </div>
                  ))}
                </div>

                <div className="grid gap-3 lg:grid-cols-2 mb-3">
                  <div className="rounded-lg border border-[#e2e8f0] bg-white p-3">
                    <div className="text-[12px] font-semibold text-slate-900 mb-2">Recent agents</div>
                    {[
                      { name: "Ava", status: "PUBLISHED" },
                      { name: "Kabir", status: "PUBLISHED" },
                    ].map((agent) => (
                      <div key={agent.name} className="flex items-center justify-between rounded-md border border-[#e2e8f0] px-2.5 py-2 mb-1.5 last:mb-0">
                        <div className="flex items-center gap-2 text-[12px] font-medium text-slate-800">
                          <Bot className="h-3.5 w-3.5 text-slate-400" />
                          {agent.name}
                        </div>
                        <StatusBadge tone="success">{agent.status}</StatusBadge>
                      </div>
                    ))}
                  </div>
                  <div className="rounded-lg border border-[#e2e8f0] bg-white p-3">
                    <div className="text-[12px] font-semibold text-slate-900 mb-2">Active campaigns</div>
                    <div className="flex items-center justify-between rounded-md border border-[#e2e8f0] px-2.5 py-2">
                      <div>
                        <div className="text-[12px] font-medium text-slate-800">Edoply Weekend Visit Drive</div>
                        <div className="text-[10px] text-slate-500">Ava · Asia/Kolkata</div>
                      </div>
                      <StatusBadge>RUNNING</StatusBadge>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-[#e2e8f0] bg-white p-3">
                  <div className="text-[12px] font-semibold text-slate-900 mb-2">Recent calls</div>
                  <div className="space-y-1.5">
                    {[
                      { contact: "Riya Sharma", detail: "OUTBOUND · Ava", status: "AI_ACTIVE" },
                      { contact: "Arjun Mehta", detail: "OUTBOUND · Ava", status: "COMPLETED" },
                      { contact: "Priya Nair", detail: "INBOUND · Kabir", status: "HUMAN_HANDOFF" },
                    ].map((call) => (
                      <div key={call.contact} className="flex items-center justify-between rounded-md border border-[#e2e8f0] px-2.5 py-2">
                        <div>
                          <div className="text-[12px] font-medium text-slate-800">{call.contact}</div>
                          <div className="text-[10px] text-slate-500">{call.detail}</div>
                        </div>
                        <StatusBadge>{call.status}</StatusBadge>
                      </div>
                    ))}
                  </div>
                </div>
              </DashboardFrame>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
