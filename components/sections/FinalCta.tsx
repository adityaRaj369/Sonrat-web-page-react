"use client";

import React from "react";
import { ArrowRight, Mail } from "lucide-react";

export function FinalCta() {
  return (
    <section id="pricing" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="site-shell">
        <div className="relative rounded-[24px] sm:rounded-[32px] border border-slate-200/90 bg-white shadow-[0_20px_60px_-20px_rgba(15,23,42,0.1)] p-8 sm:p-12 lg:p-14 overflow-hidden">
          {/* Subtle background glow matching light theme */}
          <div
            className="absolute inset-0 opacity-40 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 10% 20%, rgba(241,245,249,0.9), transparent 45%), radial-gradient(circle at 90% 80%, rgba(226,232,240,0.6), transparent 50%)",
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(to right, #0f172a 1px, transparent 1px), linear-gradient(to bottom, #0f172a 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 border border-slate-200/80 px-3 py-1 text-xs font-semibold text-slate-700 mb-3.5">
                Get started
              </span>

              <h2 className="headline text-3xl sm:text-4xl lg:text-5xl text-slate-950 tracking-tight leading-[1.08] mb-4">
                Sonrat is still being built.
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
                The dashboard, voice workflows, and demo video on this page are a product preview.
                Public launch, demo booking, and onboarding will open only after the build is ready.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <a
                href="https://app.sonrat.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 bg-[#050505] hover:bg-zinc-800 text-white font-semibold text-sm px-6 py-3.5 rounded-full transition-colors shadow-sm"
              >
                Open live dashboard
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href="mailto:support@sonrat.com"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-800 text-sm font-semibold px-5 py-3.5 transition-colors"
              >
                <Mail className="w-4 h-4 text-slate-500" />
                support@sonrat.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
