"use client";

import React from "react";
import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { FOOTER_COLUMNS } from "@/data/navigation";
import { CheckCircle2, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/[0.08] pt-16 pb-12 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Tier: Logo & Description & Operational Status */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-12 border-b border-white/[0.08]">
          <div>
            <Logo size="lg" />
            <p className="mt-3 text-sm text-zinc-400 max-w-sm leading-relaxed">
              AI voice agents for customer support and sales.
            </p>
          </div>

          <div className="flex items-center gap-3 p-2.5 rounded-xl bg-zinc-950 border border-white/[0.08] font-mono text-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-zinc-300 font-medium">All Global Voice Clusters Operational</span>
            <span className="text-zinc-600">|</span>
            <span className="text-emerald-400">99.995% Uptime</span>
          </div>
        </div>

        {/* Middle Tier: 6 Columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 py-12">
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title} className="space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                {col.title}
              </h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-zinc-400 hover:text-white transition-colors block text-xs"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Tier: Copyright, Legal Links, Contact */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-zinc-500">
          <div>
            © {new Date().getFullYear()} SonRat AI Inc. All rights reserved. Built for autonomous enterprise telephony.
          </div>

          <div className="flex items-center gap-6">
            <Link href="#privacy" className="hover:text-zinc-300 transition-colors">
              Privacy
            </Link>
            <Link href="#terms" className="hover:text-zinc-300 transition-colors">
              Terms
            </Link>
            <Link href="#contact" className="hover:text-zinc-300 transition-colors">
              Contact
            </Link>
            <span className="text-zinc-700">•</span>
            <span className="text-zinc-400">Security Architecture v3.2</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
