"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Pause, Play, Phone, PhoneOff, RotateCcw } from "lucide-react";
import { StatusBadge } from "@/components/product/DashboardFrame";
import { Atmosphere } from "@/components/ui/atmosphere";

type Phase = "ringing" | "pickup" | "talking";

const SCRIPT = [
  { delay: 3200, from: "customer" as const, text: "Hi — I saw Skyline Residences in Whitefield. Any 3BHK left?" },
  { delay: 5400, from: "agent" as const, text: "Yes, two units. I can book Saturday 11 AM — shall I confirm?" },
  { delay: 8400, from: "customer" as const, text: "Haan, Saturday theek hai. Call me if anything changes." },
  { delay: 10600, from: "agent" as const, text: "Booked. Lead created and callback set for tomorrow 5 PM." },
];

const LOOP_MS = 14500;

export function LiveDemo() {
  const [playing, setPlaying] = useState(true);
  const [phase, setPhase] = useState<Phase>("ringing");
  const [visibleCount, setVisibleCount] = useState(0);
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    if (!playing) return;
    const tick = window.setInterval(() => {
      setElapsed((prev) => (prev + 80) % LOOP_MS);
    }, 80);
    return () => window.clearInterval(tick);
  }, [playing]);

  useEffect(() => {
    if (elapsed < 1800) {
      setPhase("ringing");
      setVisibleCount(0);
      return;
    }
    if (elapsed < 3000) {
      setPhase("pickup");
      setVisibleCount(0);
      return;
    }
    setPhase("talking");
    setVisibleCount(SCRIPT.filter((line) => elapsed >= line.delay).length);
  }, [elapsed]);

  const restart = () => {
    setElapsed(0);
    setPhase("ringing");
    setVisibleCount(0);
    setPlaying(true);
  };

  const progress = Math.min(elapsed / LOOP_MS, 1);
  const statusLabel =
    phase === "ringing" ? "RINGING" : phase === "pickup" ? "CONNECTED" : "AI_ACTIVE";

  return (
    <section id="demo" className="relative py-16 md:py-24 border-t border-slate-200/70">
      <Atmosphere variant="dense" />
      <div className="site-shell relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-8 md:mb-10 max-w-3xl"
        >
          <p className="section-label mb-3">Live call path</p>
          <h2 className="headline text-3xl sm:text-4xl lg:text-[2.75rem] mb-4 leading-[1.15] tracking-[-0.02em]">
            From RINGING to APPOINTMENT BOOKED.
          </h2>
          <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-medium">
            Campaign dial → Ava answers as Edoply Homes → mid-call tools create the lead,
            book the visit, and schedule a callback. Same states your dashboard records.
          </p>
        </motion.div>

        <div className="flex flex-wrap items-center gap-2 mb-6">
          {["RINGING", "CONNECTED", "AI_ACTIVE", "APPOINTMENT_BOOKED"].map((s) => (
            <StatusBadge key={s} tone={s === "APPOINTMENT_BOOKED" ? "accent" : "outline"}>
              {s}
            </StatusBadge>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-3 mb-8">
          <button
            onClick={() => setPlaying((v) => !v)}
            className="btn-primary !py-2.5"
          >
            {playing ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            {playing ? "Pause" : "Play"}
          </button>
          <button
            onClick={restart}
            className="btn-secondary !py-2.5"
          >
            <RotateCcw className="w-4 h-4" />
            Replay
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
        >
            <div className="rounded-2xl border border-slate-200 bg-[#0f172a] overflow-hidden shadow-[0_24px_60px_-24px_rgba(15,23,42,0.55)]">
              <div className="grid grid-cols-1 sm:grid-cols-2 min-h-[420px]">
                <div className="p-6 sm:p-7 border-b sm:border-b-0 sm:border-r border-white/10 flex flex-col">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400 mb-2">
                    Edoply Weekend Visit Drive
                  </p>
                  <h3 className="text-white text-lg font-semibold mb-1">Ava · Sales agent</h3>
                  <p className="text-xs text-slate-400 mb-5">Contact: Riya Sharma · Bengaluru</p>
                  <div className="space-y-2 text-xs text-slate-300 mb-auto">
                    <div className="flex justify-between border border-white/10 rounded-lg px-3 py-2">
                      <span>Status</span>
                      <span className="text-emerald-400 font-medium">{statusLabel}</span>
                    </div>
                    <div className="flex justify-between border border-white/10 rounded-lg px-3 py-2">
                      <span>Tools</span>
                      <span className="text-white text-right">lead · appointment · callback</span>
                    </div>
                    <div className="flex justify-between border border-white/10 rounded-lg px-3 py-2">
                      <span>Languages</span>
                      <span className="text-white">EN → HI</span>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center gap-3 text-white/70">
                    <button onClick={() => setPlaying((v) => !v)} aria-label={playing ? "Pause" : "Play"}>
                      {playing ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    </button>
                    <div className="flex-1 h-1 rounded-full bg-white/15 overflow-hidden">
                      <div className="h-full bg-white rounded-full" style={{ width: `${progress * 100}%` }} />
                    </div>
                    <span className="text-[10px] tabular-nums">
                      0:{String(Math.floor((elapsed / 1000) % 60)).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-7 flex items-center justify-center bg-[#111827]">
                  <div className="w-full max-w-[250px] rounded-[32px] bg-black border border-white/15 p-3">
                    <div className="mx-auto mb-3 h-5 w-20 rounded-full bg-zinc-900" />
                    <div className="rounded-[24px] bg-zinc-900 min-h-[310px] px-4 py-5 flex flex-col">
                      <AnimatePresence mode="wait">
                        {phase !== "talking" ? (
                          <motion.div
                            key={phase}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            className="flex-1 flex flex-col items-center justify-center text-center"
                          >
                            <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-2">
                              {phase === "ringing" ? "Outbound dial" : "Connecting"}
                            </p>
                            <p className="text-white text-lg font-semibold mb-1">Riya Sharma</p>
                            <p className="text-zinc-500 text-xs mb-8">Prospect · +91 98…</p>
                            <div className="flex items-center gap-8">
                              <div className="flex flex-col items-center gap-2">
                                <div className="h-12 w-12 rounded-full bg-red-500/90 text-white flex items-center justify-center">
                                  <PhoneOff className="w-5 h-5" />
                                </div>
                                <span className="text-[10px] text-zinc-500">Decline</span>
                              </div>
                              <motion.div
                                animate={phase === "ringing" ? { scale: [1, 1.1, 1] } : { scale: 1.06 }}
                                transition={{ duration: 0.9, repeat: Infinity }}
                                className="flex flex-col items-center gap-2"
                              >
                                <div className="h-12 w-12 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-[0_0_24px_rgba(16,185,129,0.45)]">
                                  <Phone className="w-5 h-5" />
                                </div>
                                <span className="text-[10px] text-zinc-500">
                                  {phase === "pickup" ? "Answered" : "Accept"}
                                </span>
                              </motion.div>
                            </div>
                          </motion.div>
                        ) : (
                          <motion.div key="talking" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex-1 flex flex-col">
                            <div className="mb-4">
                              <p className="text-white text-sm font-semibold">Riya Sharma</p>
                              <p className="text-[10px] text-emerald-400">Live with Ava · Edoply Homes</p>
                            </div>
                            <div className="flex-1 space-y-2.5 overflow-y-auto">
                              {SCRIPT.slice(0, visibleCount).map((line) => (
                                <motion.div
                                  key={line.text}
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  className={`max-w-[95%] rounded-2xl px-3 py-2 text-[11px] leading-relaxed ${
                                    line.from === "customer"
                                      ? "ml-auto bg-white text-slate-900"
                                      : "mr-auto bg-zinc-800 text-zinc-100 border border-white/10"
                                  }`}
                                >
                                  {line.text}
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
      </div>
    </section>
  );
}
