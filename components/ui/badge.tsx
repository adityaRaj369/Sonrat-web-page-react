import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outline" | "success" | "warning" | "neutral" | "glow";
  dot?: boolean;
}

export function Badge({
  className,
  variant = "default",
  dot = false,
  children,
  ...props
}: BadgeProps) {
  const variants = {
    default: "bg-zinc-800/80 text-zinc-300 border-zinc-700/60",
    outline: "bg-transparent text-zinc-300 border-white/15",
    success: "bg-emerald-950/40 text-emerald-300 border-emerald-500/30",
    warning: "bg-amber-950/40 text-amber-300 border-amber-500/30",
    neutral: "bg-white/[0.05] text-zinc-400 border-white/[0.08]",
    glow: "bg-white/[0.08] text-white border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)]",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono font-medium rounded-full border transition-colors",
        variants[variant],
        className
      )}
      {...props}
    >
      {dot && (
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
        </span>
      )}
      {children}
    </div>
  );
}
