"use client";

import React, { useState } from "react";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { CheckCircle2, PhoneOutgoing } from "lucide-react";

interface ContactSalesModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
}

export function ContactSalesModal({
  isOpen,
  onClose,
  title = "Talk to Solutions Architecture",
  description = "Schedule an enterprise technical evaluation and dedicated voice infrastructure briefing.",
}: ContactSalesModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    callVolume: "50,000 - 200,000 calls/month",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleReset}
      title={submitted ? "Request Dispatched" : title}
      description={
        submitted
          ? "Our Solutions Architecture team will initiate a sub-minute voice briefing to your registered endpoint."
          : description
      }
    >
      {submitted ? (
        <div className="space-y-6 text-center py-4">
          <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white font-mono">
              Inbound Priority Ticket Created
            </h3>
            <p className="text-xs text-zinc-400 font-mono mt-1">
              Estimated Callback Time: &lt; 30 seconds
            </p>
          </div>
          <Button
            onClick={handleReset}
            variant="silver"
            size="md"
            className="w-full justify-center text-xs font-mono"
          >
            Close
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-1">
              Full Name
            </label>
            <input
              required
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-white/30"
              placeholder="e.g. Elena Rostova"
            />
          </div>

          <div>
            <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-1">
              Work Email
            </label>
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-white/30"
              placeholder="elena@enterprise.com"
            />
          </div>

          <div>
            <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-1">
              Company
            </label>
            <input
              required
              type="text"
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-white/30"
              placeholder="Acme Corp"
            />
          </div>

          <div>
            <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-1">
              Monthly Call Volume
            </label>
            <select
              value={form.callVolume}
              onChange={(e) => setForm({ ...form, callVolume: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-white/30"
            >
              <option>10,000 - 50,000 calls/month</option>
              <option>50,000 - 200,000 calls/month</option>
              <option>200,000 - 1,000,000+ calls/month</option>
            </select>
          </div>

          <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
            <span className="text-xs font-mono text-zinc-500">
              Response SLA: &lt; 15 mins
            </span>
            <Button
              type="submit"
              variant="silver"
              size="md"
              className="font-mono text-xs px-6"
            >
              Request Executive Demo
            </Button>
          </div>
        </form>
      )}
    </Modal>
  );
}
