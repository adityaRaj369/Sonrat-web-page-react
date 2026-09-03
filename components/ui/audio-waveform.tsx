"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface AudioWaveformProps {
  isPlaying?: boolean;
  barCount?: number;
  className?: string;
  color?: string;
}

export function AudioWaveform({
  isPlaying = true,
  barCount = 18,
  className,
  color = "bg-white",
}: AudioWaveformProps) {
  // deterministic varied heights for realistic speech frequency visualization
  const heights = [
    30, 65, 90, 45, 80, 100, 70, 40, 85, 95, 60, 35, 75, 90, 50, 80, 45, 60,
    30, 70, 85, 40, 95, 60,
  ];

  return (
    <div className={cn("flex items-center gap-[3px] h-6 px-1", className)}>
      {Array.from({ length: barCount }).map((_, i) => {
        const heightPercent = isPlaying ? heights[i % heights.length] : 20;
        const animationDelay = `${(i * 0.08) % 1.2}s`;
        const animationDuration = `${0.8 + ((i % 5) * 0.15)}s`;

        return (
          <span
            key={i}
            style={{
              height: `${heightPercent}%`,
              animationDelay,
              animationDuration,
            }}
            className={cn(
              "w-[2.5px] rounded-full transition-all duration-300",
              color,
              isPlaying ? "animate-pulse opacity-90" : "opacity-30"
            )}
          />
        );
      })}
    </div>
  );
}
