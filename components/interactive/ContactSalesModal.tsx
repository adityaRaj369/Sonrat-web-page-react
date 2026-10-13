"use client";

import React from "react";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { Clock3, Mail } from "lucide-react";

interface ContactSalesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactSalesModal({ isOpen, onClose }: ContactSalesModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Demo booking is upcoming"
      description="Sonrat is currently in build phase and is not publicly launched yet."
    >
      <div className="space-y-5 text-center py-4">
        <div className="w-14 h-14 rounded-full bg-amber-500/15 border border-amber-400/35 text-amber-300 flex items-center justify-center mx-auto">
          <Clock3 className="w-7 h-7" />
        </div>
        <div className="space-y-2">
          <p className="text-sm text-zinc-200">
            We are not taking demo bookings yet because the product is still being built.
          </p>
          <p className="text-xs leading-relaxed text-zinc-400">
            This page shows a development preview of the dashboard and the workflows Sonrat is
            building toward: agents, company orders, support tickets, outbound sales, and admin
            controls. Public access and scheduled demos will open after launch readiness.
          </p>
        </div>

        <div className="pt-2 border-t border-zinc-800">
          <p className="text-xs text-zinc-400 mb-2">Have questions or want early access?</p>
          <a
            href="mailto:support@sonrat.com"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-800/80 hover:bg-zinc-700/80 text-white text-xs font-semibold px-4 py-2 transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-zinc-400" />
            Email us at support@sonrat.com
          </a>
        </div>

        <Button onClick={onClose} variant="silver" size="md" className="w-full justify-center">
          Got it
        </Button>
      </div>
    </Modal>
  );
}
