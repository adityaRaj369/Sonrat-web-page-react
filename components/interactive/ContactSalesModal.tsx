"use client";

import React, { useState } from "react";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

interface ContactSalesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactSalesModal({ isOpen, onClose }: ContactSalesModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    useCase: "Outbound sales campaigns",
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
      title={submitted ? "Request received" : "Book a Sonrat demo"}
      description={
        submitted
          ? "We’ll reach out to schedule a walkthrough of agents, campaigns, and inbound support."
          : "See how Sonrat trains voice agents, dials outbound campaigns, and answers inbound support calls."
      }
    >
      {submitted ? (
        <div className="space-y-6 text-center py-4">
          <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <p className="text-sm text-zinc-300">Thanks — our team will follow up shortly.</p>
          <Button onClick={handleReset} variant="silver" size="md" className="w-full justify-center">
            Close
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-xs uppercase tracking-wider text-zinc-400 block mb-1">Full name</label>
            <input
              required
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-white text-sm focus:outline-none focus:border-white/30"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-wider text-zinc-400 block mb-1">Work email</label>
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-white text-sm focus:outline-none focus:border-white/30"
              placeholder="you@company.com"
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-wider text-zinc-400 block mb-1">Company</label>
            <input
              required
              type="text"
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-white text-sm focus:outline-none focus:border-white/30"
              placeholder="Company name"
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-wider text-zinc-400 block mb-1">Primary use case</label>
            <select
              value={form.useCase}
              onChange={(e) => setForm({ ...form, useCase: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-white text-sm focus:outline-none focus:border-white/30"
            >
              <option>Outbound sales campaigns</option>
              <option>Inbound customer support</option>
              <option>Both sales and support</option>
            </select>
          </div>
          <Button type="submit" variant="silver" size="md" className="w-full justify-center mt-2">
            Request demo
          </Button>
        </form>
      )}
    </Modal>
  );
}
