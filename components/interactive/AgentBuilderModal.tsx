"use client";

import React, { useState } from "react";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Cpu, Sparkles, PhoneCall, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface AgentBuilderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AgentBuilderModal({ isOpen, onClose }: AgentBuilderModalProps) {
  const [step, setStep] = useState(1);
  const [useCase, setUseCase] = useState<"support" | "sales">("support");
  const [agentName, setAgentName] = useState("SonRat Voice Dispatcher");
  const [selectedIntegrations, setSelectedIntegrations] = useState<string[]>([
    "Stripe Payments",
    "Warehouse ERP",
  ]);
  const [isProvisioning, setIsProvisioning] = useState(false);
  const [isDeployed, setIsDeployed] = useState(false);

  const toggleIntegration = (item: string) => {
    setSelectedIntegrations((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const handleDeploy = () => {
    setIsProvisioning(true);
    setTimeout(() => {
      setIsProvisioning(false);
      setIsDeployed(true);
    }, 1800);
  };

  const handleReset = () => {
    setStep(1);
    setIsDeployed(false);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleReset}
      title={isDeployed ? "Voice Agent Provisioned" : "Build Your AI Voice Agent"}
      description={
        isDeployed
          ? "Your dedicated enterprise voice cluster is live and ready for inbound & outbound traffic."
          : "Configure agent topology, tool calling permissions, and telephony endpoints."
      }
    >
      {isDeployed ? (
        <div className="space-y-6 text-center py-4 animate-in zoom-in-95 duration-200">
          <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(16,185,129,0.2)]">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div>
            <h3 className="text-xl font-bold text-white tracking-tight font-mono">
              Cluster: us-east-sonrat-902
            </h3>
            <p className="text-xs text-zinc-400 font-mono mt-1">
              Assigned Virtual Inbound Number: +1 (800) 412-8920
            </p>
          </div>

          <div className="p-4 rounded-xl bg-zinc-900/80 border border-white/[0.08] text-left text-xs font-mono space-y-2">
            <div className="flex justify-between text-zinc-400">
              <span>Agent Mode:</span>
              <span className="text-white uppercase font-bold">{useCase}</span>
            </div>
            <div className="flex justify-between text-zinc-400">
              <span>Target Latency:</span>
              <span className="text-emerald-400 font-bold">&lt; 220ms (Edge Route)</span>
            </div>
            <div className="flex justify-between text-zinc-400">
              <span>Connected APIs:</span>
              <span className="text-white">{selectedIntegrations.join(", ") || "None"}</span>
            </div>
          </div>

          <Button
            onClick={handleReset}
            variant="silver"
            size="md"
            className="w-full justify-center"
          >
            Launch in Control Console
          </Button>
        </div>
      ) : (
        <div className="space-y-5">
          {/* Step 1: Objective */}
          <div>
            <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-2">
              1. Select Primary Workload
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setUseCase("support")}
                className={cn(
                  "p-3.5 rounded-xl border text-left transition-all",
                  useCase === "support"
                    ? "bg-zinc-900 border-white text-white shadow-sm"
                    : "bg-zinc-950 border-white/10 text-zinc-400 hover:border-white/20"
                )}
              >
                <div className="text-xs font-bold font-mono">Customer Support</div>
                <div className="text-[11px] text-zinc-400 mt-1">
                  Orders, refunds, account issues, tickets
                </div>
              </button>

              <button
                type="button"
                onClick={() => setUseCase("sales")}
                className={cn(
                  "p-3.5 rounded-xl border text-left transition-all",
                  useCase === "sales"
                    ? "bg-zinc-900 border-white text-white shadow-sm"
                    : "bg-zinc-950 border-white/10 text-zinc-400 hover:border-white/20"
                )}
              >
                <div className="text-xs font-bold font-mono">Outbound Sales</div>
                <div className="text-[11px] text-zinc-400 mt-1">
                  Lead triage, BANT scoring, calendar booking
                </div>
              </button>
            </div>
          </div>

          {/* Step 2: Name */}
          <div>
            <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-1.5">
              2. Agent Identifier
            </label>
            <input
              type="text"
              value={agentName}
              onChange={(e) => setAgentName(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-white/30"
              placeholder="e.g. Acme Tier-1 Voice Assistant"
            />
          </div>

          {/* Step 3: Tool permissions */}
          <div>
            <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-2">
              3. Connect Authorized Microservices
            </label>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              {[
                "Stripe Payments",
                "Warehouse ERP",
                "Salesforce CRM",
                "Zendesk Helpdesk",
                "Google Calendar",
                "Internal REST APIs",
              ].map((tool) => {
                const checked = selectedIntegrations.includes(tool);
                return (
                  <button
                    type="button"
                    key={tool}
                    onClick={() => toggleIntegration(tool)}
                    className={cn(
                      "p-2.5 rounded-lg border text-left flex items-center justify-between transition-all",
                      checked
                        ? "bg-white/[0.08] border-white/30 text-white"
                        : "bg-zinc-950 border-white/10 text-zinc-400 hover:border-white/20"
                    )}
                  >
                    <span>{tool}</span>
                    {checked && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Action */}
          <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
            <span className="text-xs font-mono text-zinc-500">
              Latency Target: 220ms
            </span>
            <Button
              onClick={handleDeploy}
              isLoading={isProvisioning}
              variant="silver"
              size="md"
              className="font-mono text-xs px-6"
            >
              {isProvisioning ? "Provisioning Cluster..." : "Provision Voice Agent"}
            </Button>
          </div>
        </div>
      )}
    </Modal>
  );
}
