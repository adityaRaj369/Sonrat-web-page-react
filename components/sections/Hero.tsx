"use client";

import React from "react";
import { motion } from "framer-motion";
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
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.04 }}
              className="inline-flex items-center gap-2 section-label mb-5"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 rounded-full bg-emerald-500/50 animate-ping" />
                <span className="relative h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Product preview · currently in build
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 }}
              className="headline text-3xl sm:text-5xl lg:text-[3.25rem] mb-4 sm:mb-5 max-w-[13ch] leading-[1.05]"
            >
              Voice agents
              <br />
              for orders,
              <br />
              support, and sales.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 }}
              className="text-sm sm:text-base text-neutral-700 max-w-lg leading-relaxed mb-6 font-medium"
            >
              Sonrat is being built as a voice workspace for company-trained agents:
              product ordering, refund complaints, support tickets, sales campaigns, call
              evidence, roles, and admin controls.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-6 w-full sm:w-auto"
            >
              <a
                href="https://app.sonrat.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full sm:w-auto justify-center"
              >
                Open dashboard
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#product-modules" className="btn-secondary w-full sm:w-auto justify-center">
                View platform modules
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.22 }}
              className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm font-semibold text-neutral-800"
            >
              <span className="inline-flex items-center gap-1.5"><BookOpen className="w-3.5 h-3.5 text-slate-700" /> Agents · tools</span>
              <span className="inline-flex items-center gap-1.5"><ShoppingCart className="w-3.5 h-3.5 text-slate-700" /> Orders + catalog</span>
              <span className="inline-flex items-center gap-1.5"><TicketCheck className="w-3.5 h-3.5 text-slate-700" /> Support tickets</span>
            </motion.div>

          </div>

          <div className="lg:col-span-7 min-w-0">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.14, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
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
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
