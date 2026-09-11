"use client";

import React from "react";

export function Atmosphere({
  className = "",
  variant = "default",
}: {
  className?: string;
  variant?: "default" | "dense" | "dark";
}) {
  return (
    <div className={`atmosphere ${className}`} aria-hidden>
      <div className="atmosphere__grid" />
      <div className="atmosphere__noise" />
      <div
        className={`atmosphere__orb atmosphere__orb--navy ${
          variant === "dense" ? "w-[34rem] h-[34rem]" : "w-[28rem] h-[28rem]"
        }`}
        style={{ top: "-8%", right: "8%" }}
      />
      <div
        className={`atmosphere__orb atmosphere__orb--teal ${
          variant === "dense" ? "w-[26rem] h-[26rem]" : "w-[22rem] h-[22rem]"
        }`}
        style={{ bottom: "4%", left: "-4%", animationDelay: "-4s" }}
      />
      {variant !== "default" && (
        <div
          className="atmosphere__orb atmosphere__orb--navy w-64 h-64"
          style={{ top: "40%", left: "42%", animationDelay: "-7s", opacity: 0.55 }}
        />
      )}
    </div>
  );
}

export function SignalGraphic({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 280 120"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M8 72C28 72 28 28 48 28C68 28 68 92 88 92C108 92 108 40 128 40C148 40 148 80 168 80C188 80 188 20 208 20C228 20 228 64 248 64C260 64 268 52 272 44"
        stroke="url(#signalStroke)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {[28, 40, 52, 64, 76, 88].map((y, i) => (
        <rect
          key={y}
          x={40 + i * 34}
          y={y}
          width="8"
          height={100 - y}
          rx="4"
          fill={i % 2 === 0 ? "#163a78" : "#1f8a9a"}
          opacity={0.18 + i * 0.08}
          className="wave-bar"
          style={{ animationDelay: `${i * 0.12}s` }}
        />
      ))}
      <defs>
        <linearGradient id="signalStroke" x1="0" y1="0" x2="280" y2="0">
          <stop stopColor="#163a78" stopOpacity="0.15" />
          <stop offset="0.5" stopColor="#1f8a9a" stopOpacity="0.7" />
          <stop offset="1" stopColor="#163a78" stopOpacity="0.2" />
        </linearGradient>
      </defs>
    </svg>
  );
}
