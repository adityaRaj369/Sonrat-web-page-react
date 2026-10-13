"use client";

import React from "react";
import { motion } from "framer-motion";
import { Atmosphere } from "@/components/ui/atmosphere";

export function DashboardVideo() {
  return (
    <section id="dashboard-video" className="relative py-16 md:py-24 border-t border-slate-200/70 overflow-hidden">
      <Atmosphere />
      <div className="site-shell relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          <div className="lg:col-span-4">
            <p className="section-label mb-3">Platform walkthrough</p>
            <h2 className="headline text-4xl sm:text-5xl mb-4 max-w-[12ch]">
              See Sonrat in action.
            </h2>
            <p className="text-base text-neutral-700 leading-relaxed font-medium">
              Take an end-to-end look through the Sonrat platform: configuring voice agents,
              inspecting live call records, testing phone orders, and managing customer
              tickets in real time.
            </p>  
          </div>

          <div className="lg:col-span-8 min-w-0">
            <div className="overflow-hidden rounded-xl sm:rounded-2xl bg-black shadow-[0_12px_40px_-16px_rgba(15,23,42,0.25)] sm:shadow-[0_20px_60px_-20px_rgba(15,23,42,0.3)]">
              <video
                className="block aspect-video w-full max-w-full bg-black object-contain"
                src="/demo/sonrat-dashboard-demo.mp4"
                poster="/demo/sonrat-dashboard-poster.jpg"
                controls
                preload="metadata"
                playsInline
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
