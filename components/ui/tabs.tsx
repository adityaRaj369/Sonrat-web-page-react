"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface TabsProps {
  tabs: { id: string; label: string; icon?: React.ReactNode }[];
  activeTab: string;
  onChange: (id: string) => void;
  className?: string;
}

export function Tabs({ tabs, activeTab, onChange, className }: TabsProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 p-1 rounded-xl bg-zinc-900/90 border border-white/[0.08] backdrop-blur-md overflow-x-auto max-w-full",
        className
      )}
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={cn(
              "relative flex items-center gap-2 px-3.5 py-1.5 text-xs font-mono font-medium rounded-lg transition-all duration-200 whitespace-nowrap select-none",
              isActive
                ? "text-white bg-white/[0.12] border border-white/20 shadow-sm"
                : "text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.04] border border-transparent"
            )}
          >
            {tab.icon}
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
