"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock3, Languages, PhoneIncoming, SunMoon } from "lucide-react";
import { Atmosphere } from "@/components/ui/atmosphere";

const LANGUAGES = [
  {
    id: "en",
    label: "English",
    agent: "Sonrat · Support",
    lines: [
      { from: "customer", text: "Hi, my refund is still pending after the payment failed." },
      { from: "agent", text: "I understand. I can create a refund complaint and mark it high priority." },
      { from: "customer", text: "Please do that. It has already been five days." },
      { from: "agent", text: "Done. The ticket is saved with the call details and next-step notes." },
    ],
  },
  {
    id: "hi",
    label: "Hindi",
    agent: "Sonrat · Support",
    lines: [
      { from: "customer", text: "Namaste, mera refund abhi tak nahi aaya." },
      { from: "agent", text: "Samajh gaya. Main refund complaint high priority par create kar raha hoon." },
      { from: "customer", text: "Please, payment fail hua tha aur paise cut ho gaye." },
      { from: "agent", text: "Ticket save ho gaya. Team ko payment refund details ke saath follow-up milega." },
    ],
  },
  {
    id: "ta",
    label: "Tamil",
    agent: "Sonrat · Support",
    lines: [
      { from: "customer", text: "Vanakkam, refund innum varala." },
      { from: "agent", text: "Purinjuthu. Refund complaint ticket create pannuren." },
      { from: "customer", text: "Payment fail aachu, aana amount deduct aayiduchu." },
      { from: "agent", text: "Ticket save aagiduchu. Support team evidence oda follow up pannum." },
    ],
  },
  {
    id: "te",
    label: "Telugu",
    agent: "Sonrat · Support",
    lines: [
      { from: "customer", text: "Namaskaram, refund inka raledu." },
      { from: "agent", text: "Ardham ayindi. Refund complaint ticket create chesthanu." },
      { from: "customer", text: "Payment fail ayyindi, kani amount deduct ayyindi." },
      { from: "agent", text: "Ticket save ayyindi. Support team payment evidence tho follow up chestundi." },
    ],
  },
  {
    id: "kn",
    label: "Kannada",
    agent: "Sonrat · Support",
    lines: [
      { from: "customer", text: "Namaskara, refund innu bandilla." },
      { from: "agent", text: "Artha aaytu. Refund complaint ticket create madthini." },
      { from: "customer", text: "Payment fail aagide, aadre amount cut aagide." },
      { from: "agent", text: "Ticket save aagide. Support team evidence jothe follow up madutte." },
    ],
  },
];

function formatKolkata(now: Date) {
  return new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  }).format(now);
}

function kolkataHour(now: Date) {
  const parts = new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    hour: "numeric",
    hour12: false,
  }).formatToParts(now);
  return Number(parts.find((p) => p.type === "hour")?.value ?? 0);
}

export function Coverage() {
  const [langId, setLangId] = useState(LANGUAGES[0].id);
  const [now, setNow] = useState(() => new Date());
  const lang = LANGUAGES.find((l) => l.id === langId) ?? LANGUAGES[0];
  const hour = kolkataHour(now);
  const isNight = hour < 7 || hour >= 21;

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => {
      setLangId((prev) => {
        const idx = LANGUAGES.findIndex((l) => l.id === prev);
        return LANGUAGES[(idx + 1) % LANGUAGES.length].id;
      });
    }, 7000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section id="coverage" className="relative py-16 md:py-24 border-t border-slate-200/70 overflow-hidden">
      <Atmosphere variant="dense" />
      <div className="site-shell relative z-10">
        <div className="max-w-3xl mb-10">
          <p className="section-label mb-3">Languages · always on</p>
          <h2 className="headline text-3xl sm:text-4xl lg:text-[2.75rem] mb-4 leading-[1.15] tracking-[-0.02em]">
            Multiple languages. 24/7 support.
          </h2>
          <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-medium max-w-2xl">
            Agents switch mid-call across English, Hindi, and South India language packs —
            while inbound lines stay live through the night in Asia/Kolkata.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-4">
              <Languages className="w-4 h-4 text-slate-700" />
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                Live language demo
              </span>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {LANGUAGES.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setLangId(item.id)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-colors ${
                    item.id === lang.id
                      ? "bg-[#050505] text-white"
                      : "bg-white/80 text-slate-600 border border-slate-200 hover:text-slate-950"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="rounded-[24px] border border-slate-200 bg-white/80 backdrop-blur-sm p-5 sm:p-6 min-h-[280px]">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400 mb-1">Inbound support</p>
                  <p className="text-sm font-semibold text-slate-900">{lang.agent}</p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-emerald-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Speaking {lang.label}
                </span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={lang.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.28 }}
                  className="space-y-2.5"
                >
                  {lang.lines.map((line) => (
                    <div
                      key={`${lang.id}-${line.text}`}
                      className={`max-w-[92%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                        line.from === "customer"
                          ? "ml-auto bg-[#050505] text-white"
                          : "mr-auto bg-slate-100 text-slate-800"
                      }`}
                    >
                      {line.text}
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-2 mb-1">
              <SunMoon className="w-4 h-4 text-slate-700" />
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                24/7 inbound line
              </span>
            </div>

            <div
              className={`rounded-[24px] border p-5 sm:p-6 transition-colors ${
                isNight
                  ? "border-slate-800 bg-[#0f172a] text-white"
                  : "border-slate-200 bg-white/80 text-slate-900"
              }`}
            >
              <div className="flex items-start justify-between gap-3 mb-6">
                <div>
                  <p className={`text-[10px] uppercase tracking-[0.18em] mb-1 ${isNight ? "text-slate-400" : "text-slate-400"}`}>
                    Asia/Kolkata
                  </p>
                  <p suppressHydrationWarning className="headline text-3xl sm:text-4xl tabular-nums tracking-tight">
                    {formatKolkata(now)}
                  </p>
                </div>
                <div
                  className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium ${
                    isNight ? "bg-emerald-500/15 text-emerald-300" : "bg-emerald-50 text-emerald-700"
                  }`}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Line live
                </div>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <PhoneIncoming className={`w-4 h-4 shrink-0 ${isNight ? "text-slate-300" : "text-slate-600"}`} />
                  <span className={isNight ? "text-slate-200" : "text-slate-700"}>
                    Support line answering preview
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock3 className={`w-4 h-4 shrink-0 ${isNight ? "text-slate-300" : "text-slate-600"}`} />
                  <span className={isNight ? "text-slate-200" : "text-slate-700"}>
                    {isNight ? "Night coverage · no hold queue" : "Daytime surge · same agent version"}
                  </span>
                </div>
              </div>

              <div className={`mt-6 pt-4 border-t text-xs leading-relaxed ${isNight ? "border-white/10 text-slate-400" : "border-slate-200 text-slate-500"}`}>
                Sales campaigns can keep calling hours. Support agents stay published and answer every inbound — midnight included.
              </div>
            </div>

            <p className="text-sm text-neutral-700 font-medium leading-relaxed">
              One published agent version. Multiple languages. Always-on inbound — without staffing a night shift.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
