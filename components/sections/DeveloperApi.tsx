"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Tabs } from "@/components/ui/tabs";
import { DEVELOPER_TABS } from "@/data/developer";
import {
  Code2,
  Copy,
  Check,
  Terminal,
  ArrowRight,
  Workflow,
  Sparkles,
  Server,
  Layers,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function DeveloperApi() {
  const [activeTabId, setActiveTabId] = useState("api");
  const [copied, setCopied] = useState(false);

  const activeSnippet =
    DEVELOPER_TABS.find((t) => t.id === activeTabId) || DEVELOPER_TABS[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(activeSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="developers" className="relative py-24 md:py-32 border-t border-white/[0.06] overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <Badge variant="outline" className="mb-4 text-xs font-mono uppercase tracking-widest text-zinc-400">
            Developer Infrastructure & SDKs
          </Badge>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Built For Your Business. <br />
            <span className="silver-text-gradient">Ready For Your Stack.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed">
            Engineered for developers who refuse black-box limitations. Integrate voice agents using deterministic tool definitions, strict JSON schemas, signed webhooks, and sub-second execution APIs.
          </p>
        </div>

        {/* Conceptual Pipeline Flow diagram: Request -> AI Agent -> Business System -> Result */}
        <div className="mb-10 p-5 rounded-2xl bg-zinc-950/80 border border-white/[0.08] backdrop-blur-md">
          <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider mb-4">
            System Execution Pathway (Example Workflow)
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs font-mono">
            <div className="p-3 rounded-xl bg-zinc-900/60 border border-white/[0.06] flex items-center gap-2">
              <span className="w-5 h-5 rounded-md bg-white/[0.06] text-white flex items-center justify-center font-bold text-[10px]">
                1
              </span>
              <span className="text-zinc-300">API Request / Inbound Voice</span>
            </div>

            <div className="p-3 rounded-xl bg-zinc-900/60 border border-white/[0.06] flex items-center gap-2">
              <span className="w-5 h-5 rounded-md bg-white/[0.06] text-white flex items-center justify-center font-bold text-[10px]">
                2
              </span>
              <span className="text-zinc-300">SonRat Reasoning Engine</span>
            </div>

            <div className="p-3 rounded-xl bg-zinc-900/60 border border-white/[0.06] flex items-center gap-2">
              <span className="w-5 h-5 rounded-md bg-white/[0.06] text-white flex items-center justify-center font-bold text-[10px]">
                3
              </span>
              <span className="text-zinc-300">Your Business Systems</span>
            </div>

            <div className="p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/30 flex items-center gap-2">
              <span className="w-5 h-5 rounded-md bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-[10px]">
                4
              </span>
              <span className="text-emerald-300 font-bold">Verified Audio Resolution</span>
            </div>
          </div>
        </div>

        {/* Code Editor Container */}
        <div className="rounded-3xl bg-[#09090e] border border-white/15 shadow-2xl overflow-hidden relative">
          {/* Top highlight line */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

          {/* Top Header Bar with Tabs and Copy Button */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 sm:px-6 sm:py-4 border-b border-white/[0.08] bg-zinc-950/90">
            {/* 5 Tabs: API, Webhooks, Tools, Knowledge, Actions */}
            <Tabs
              tabs={DEVELOPER_TABS.map((t) => ({ id: t.id, label: t.label }))}
              activeTab={activeTabId}
              onChange={setActiveTabId}
            />

            <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
              <span className="text-xs font-mono text-zinc-500">
                {activeSnippet.filename}
              </span>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-zinc-400 hover:text-white bg-zinc-900 border border-white/10 hover:border-white/20 transition-all select-none"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Code Body */}
          <div className="p-6 sm:p-8 font-mono text-xs sm:text-sm text-zinc-300 overflow-x-auto bg-[#07070b]">
            <pre className="leading-relaxed whitespace-pre font-mono">
              <code>{activeSnippet.code}</code>
            </pre>
          </div>

          {/* Bottom snippet explanation */}
          <div className="p-4 sm:px-6 bg-zinc-950/80 border-t border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs font-mono text-zinc-400">
            <span>{activeSnippet.description}</span>
            <span className="text-zinc-500">
              Compatible with Python, Node.js, Go, Rust, and cURL
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
