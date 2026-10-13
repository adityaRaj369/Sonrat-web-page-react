"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Headphones, Megaphone, Pause, Play, ShoppingCart } from "lucide-react";
import { Atmosphere } from "@/components/ui/atmosphere";

type Scenario = {
  id: string;
  label: string;
  title: string;
  module: string;
  icon: React.ComponentType<{ className?: string }>;
  statuses: string[];
  tools: string;
  lines: Array<{ from: "customer" | "agent"; text: string }>;
};

const SCENARIOS: Scenario[] = [
  {
    id: "order",
    label: "Pizza order",
    title: "I want to order this pizza.",
    module: "Company Agent",
    icon: ShoppingCart,
    statuses: ["INBOUND_CALL", "PRODUCT_FOUND", "CART_UPDATED", "ORDER_CONFIRMED"],
    tools: "search_products · add_to_cart · confirm_order",
    lines: [
      { from: "customer", text: "Hi, I want to order a large Margherita pizza and garlic bread." },
      { from: "agent", text: "Sure. I found both items in the catalog. Should I add one large Margherita and one garlic bread?" },
      { from: "customer", text: "Yes. Delivery to Koramangala, cash on delivery." },
      { from: "agent", text: "Read-back complete. Order confirmed and saved in the Company Agent orders table." },
    ],
  },
  {
    id: "refund",
    label: "Refund complaint",
    title: "I want to complain about payment refund.",
    module: "Customer Support",
    icon: Headphones,
    statuses: ["INBOUND_CALL", "ISSUE_CAPTURED", "TICKET_CREATED", "FOLLOW_UP_PENDING"],
    tools: "create_ticket · get_ticket · transfer_to_human",
    lines: [
      { from: "customer", text: "My payment was deducted twice and I still have not received the refund." },
      { from: "agent", text: "I understand. I will create a refund complaint with the payment details you shared." },
      { from: "customer", text: "Please mark it urgent. It has been five days." },
      { from: "agent", text: "Ticket created as a high-priority refund issue. The support dashboard now has the complaint and call evidence." },
    ],
  },
  {
    id: "sales",
    label: "Sales enquiry",
    title: "I want to know your pricing and book a callback.",
    module: "Sales",
    icon: Megaphone,
    statuses: ["OUTBOUND_CALL", "ANSWER_RECORDED", "LEAD_CAPTURED", "CALLBACK_SCHEDULED"],
    tools: "record_answer · create_lead · schedule_callback",
    lines: [
      { from: "agent", text: "Hi, I am calling about your interest in the service. Is now a good time?" },
      { from: "customer", text: "Yes, send pricing first. I may need this for my support team." },
      { from: "agent", text: "Got it. I will mark you as interested and schedule a callback for tomorrow." },
      { from: "customer", text: "Tomorrow 5 PM works." },
    ],
  },
];

function StatusBadge({
  children,
  tone = "outline",
}: {
  children: React.ReactNode;
  tone?: "outline" | "accent";
}) {
  const className =
    tone === "accent"
      ? "border-sky-200 bg-sky-50 text-sky-700"
      : "border-slate-200 bg-white text-slate-700";
  return (
    <span className={`inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-medium ${className}`}>
      {children}
    </span>
  );
}

export function LiveDemo() {
  const [activeId, setActiveId] = useState(SCENARIOS[0].id);
  const [playing, setPlaying] = useState(true);
  const [visibleCount, setVisibleCount] = useState(2);
  const active = useMemo(
    () => SCENARIOS.find((scenario) => scenario.id === activeId) ?? SCENARIOS[0],
    [activeId],
  );
  const ActiveIcon = active.icon;

  useEffect(() => {
    setVisibleCount(2);
  }, [activeId]);

  useEffect(() => {
    if (!playing) return;
    const id = window.setInterval(() => {
      setVisibleCount((count) => (count >= active.lines.length ? 1 : count + 1));
    }, 1800);
    return () => window.clearInterval(id);
  }, [active.lines.length, playing]);

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
          <p className="section-label mb-3">Voice workflow demos</p>
          <h2 className="headline text-3xl sm:text-4xl lg:text-[2.75rem] mb-4 leading-[1.15] tracking-[-0.02em]">
            Calls can create orders, tickets, and leads.
          </h2>
          <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-medium">
            The demo now mirrors Sonrat’s actual product modules: Company Agent for orders,
            Customer Support for complaints, and Sales for outbound follow-up.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-2 mb-8">
          {SCENARIOS.map((scenario) => {
            const Icon = scenario.icon;
            const activeScenario = scenario.id === active.id;
            return (
              <button
                key={scenario.id}
                type="button"
                onClick={() => setActiveId(scenario.id)}
                className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-xs font-semibold transition-colors ${
                  activeScenario
                    ? "border-slate-950 bg-slate-950 text-white"
                    : "border-slate-200 bg-white/80 text-slate-700 hover:text-slate-950"
                }`}
              >
                <Icon className="h-4 w-4" />
                {scenario.label}
              </button>
            );
          })}
        </div>

        <motion.div
          key={active.id}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
        >
          <div className="rounded-2xl border border-slate-200 bg-[#0f172a] overflow-hidden shadow-[0_24px_60px_-24px_rgba(15,23,42,0.55)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[420px]">
              <div className="lg:col-span-5 p-6 sm:p-7 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col">
                <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400 mb-2">
                  {active.module}
                </p>
                <h3 className="text-white text-xl font-semibold mb-2">{active.title}</h3>
                <p className="text-xs text-slate-400 mb-5">
                  This is a product preview. It shows intended dashboard records, not a public launch.
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {active.statuses.map((status, i) => (
                    <StatusBadge key={status} tone={i === active.statuses.length - 1 ? "accent" : "outline"}>
                      {status}
                    </StatusBadge>
                  ))}
                </div>

                <div className="space-y-2 text-xs text-slate-300 mb-auto">
                  <div className="flex justify-between gap-4 border border-white/10 rounded-lg px-3 py-2">
                    <span>Module</span>
                    <span className="text-white text-right">{active.module}</span>
                  </div>
                  <div className="flex justify-between gap-4 border border-white/10 rounded-lg px-3 py-2">
                    <span>Tools</span>
                    <span className="text-white text-right">{active.tools}</span>
                  </div>
                  <div className="flex justify-between gap-4 border border-white/10 rounded-lg px-3 py-2">
                    <span>Dashboard output</span>
                    <span className="text-white text-right">{active.statuses.at(-1)}</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setPlaying((value) => !value)}
                  className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-white/80 hover:text-white hover:bg-white/5"
                >
                  {playing ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  {playing ? "Pause demo" : "Play demo"}
                </button>
              </div>

              <div className="lg:col-span-7 p-6 sm:p-7 bg-[#111827]">
                <div className="mb-5 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-2xl bg-white text-slate-950 flex items-center justify-center">
                    <ActiveIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{active.label}</p>
                    <p className="text-[11px] text-emerald-300">Live call transcript preview</p>
                  </div>
                </div>

                <div className="rounded-[24px] bg-black/45 border border-white/10 p-4 min-h-[300px]">
                  <div className="space-y-3">
                    {active.lines.slice(0, visibleCount).map((line, index) => (
                      <motion.div
                        key={`${active.id}-${index}-${line.text}`}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                          line.from === "customer"
                            ? "ml-auto bg-white text-slate-900"
                            : "mr-auto bg-zinc-800 text-zinc-100 border border-white/10"
                        }`}
                      >
                        {line.text}
                      </motion.div>
                    ))}
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
