"use client";

import React from "react";
import {
  ArrowRight,
  BookOpen,
  ShoppingCart,
  TicketCheck,
} from "lucide-react";
import { Atmosphere } from "@/components/ui/atmosphere";

export function Hero() {
  return (
    <section className="relative pt-28 pb-12 sm:pt-32 sm:pb-16 md:pt-36 md:pb-20 overflow-hidden">
      <Atmosphere variant="dense" />

      <div className="site-shell relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <div
              className="inline-flex items-center gap-2 section-label mb-5"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 rounded-full bg-emerald-500/20" />
                <span className="relative h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Product preview · currently in build
            </div>

            <h1
              className="headline text-3xl sm:text-5xl lg:text-[3.25rem] mb-4 sm:mb-5 max-w-[13ch] leading-[1.05]"
            >
              Voice agents
              <br />
              for orders,
              <br />
              support, and sales.
            </h1>

            <p
              className="text-sm sm:text-base text-neutral-700 max-w-lg leading-relaxed mb-6 font-medium"
            >
              Sonrat is being built as a voice workspace for company-trained agents:
              product ordering, refund complaints, support tickets, sales campaigns, call
              evidence, roles, and admin controls.
            </p>

            <div
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-6 w-full sm:w-auto"
            >
              <a
                href="https://app.sonrat.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full sm:w-auto justify-center"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#product-modules" className="btn-secondary w-full sm:w-auto justify-center">
                View platform modules
              </a>
            </div>

            <div
              className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm font-semibold text-neutral-800"
            >
              <span className="inline-flex items-center gap-1.5"><BookOpen className="w-3.5 h-3.5 text-slate-700" /> Agents · tools</span>
              <span className="inline-flex items-center gap-1.5"><ShoppingCart className="w-3.5 h-3.5 text-slate-700" /> Orders + catalog</span>
              <span className="inline-flex items-center gap-1.5"><TicketCheck className="w-3.5 h-3.5 text-slate-700" /> Support tickets</span>
            </div>

          </div>

          <div className="lg:col-span-7 min-w-0">
            <div
              className="min-w-0"
            >
              {/* Simple clean screenshot of real analytics dashboard, no borders */}
              <div className="overflow-hidden rounded-xl sm:rounded-2xl bg-white shadow-[0_12px_40px_-16px_rgba(15,23,42,0.2)] sm:shadow-[0_20px_60px_-20px_rgba(15,23,42,0.25)]">
                <img
                  src="/dashboard-screens/01-overview.png"
                  alt="Sonrat real analytics dashboard"
                  className="w-full object-contain"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
