"use client";

import React from "react";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className = "", showText = true, size = "md" }: LogoProps) {
  const iconSizes = {
    sm: "w-7 h-7",
    md: "w-8 h-8",
    lg: "w-10 h-10",
  };

  const textSizes = {
    sm: "text-base tracking-tight",
    md: "text-lg tracking-tight",
    lg: "text-xl tracking-tight",
  };

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Precision Geometric Brandmark */}
      <div className={`relative flex items-center justify-center ${iconSizes[size]} rounded-lg bg-zinc-900 border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.12)] group-hover:border-white/40 transition-colors`}>
        {/* Subtle radial inner glow */}
        <div className="absolute inset-0 rounded-lg bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.15),transparent_70%)]" />
        
        {/* Vector SVG acoustic / neural node mark */}
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-white"
        >
          {/* Outer diamond-hex boundary */}
          <polygon
            points="16,3 27,9 27,23 16,29 5,23 5,9"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-70"
          />
          {/* Internal acoustic waveform bars */}
          <line
            x1="11"
            y1="13"
            x2="11"
            y2="19"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            className="opacity-90"
          />
          <line
            x1="16"
            y1="9"
            x2="16"
            y2="23"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="21"
            y1="12"
            x2="21"
            y2="20"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            className="opacity-90"
          />
          {/* Center core pulse dot */}
          <circle cx="16" cy="16" r="1.5" fill="white" className="shadow-[0_0_8px_#ffffff]" />
        </svg>
      </div>

      {showText && (
        <div className="flex items-center gap-1.5">
          <span className={`font-semibold tracking-[-0.03em] text-white ${textSizes[size]}`}>
            SonRat
          </span>
          <span className="text-[10px] font-mono tracking-widest uppercase px-1.5 py-0.5 rounded border border-white/20 bg-white/[0.06] text-zinc-300">
            AI
          </span>
        </div>
      )}
    </div>
  );
}
