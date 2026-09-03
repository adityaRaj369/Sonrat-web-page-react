"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/data/navigation";
import {
  Menu,
  X,
  ArrowUpRight,
  ChevronRight,
  Zap,
  Shield,
  Code2,
  BarChart3,
  Phone,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface NavbarProps {
  onOpenAuthModal?: () => void;
  onOpenDemoModal?: () => void;
}

const MEGA_ITEMS = [
  {
    icon: Phone,
    label: "Customer Support",
    desc: "24/7 autonomous resolution",
    color: "text-blue-400",
  },
  {
    icon: BarChart3,
    label: "Sales Velocity",
    desc: "Outbound & inbound automation",
    color: "text-emerald-400",
  },
  {
    icon: Zap,
    label: "Real-Time API Actions",
    desc: "Sub-40ms tool execution",
    color: "text-amber-400",
  },
  {
    icon: Shield,
    label: "Enterprise Security",
    desc: "SOC 2 Type II · HIPAA",
    color: "text-purple-400",
  },
  {
    icon: Code2,
    label: "Developer API",
    desc: "REST, WebSocket, SDKs",
    color: "text-pink-400",
  },
  {
    icon: Users,
    label: "Multi-Language",
    desc: "40+ native language voices",
    color: "text-cyan-400",
  },
];

export function Navbar({ onOpenAuthModal, onOpenDemoModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-500",
          isScrolled
            ? "py-3 bg-[#070709]/90 backdrop-blur-2xl border-b border-white/[0.07] shadow-[0_4px_30px_rgba(0,0,0,0.9)]"
            : "py-5 bg-transparent border-b border-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="group flex items-center shrink-0 z-10">
            <Logo size="md" />
          </Link>

          {/* Center Nav — desktop */}
          <nav
            ref={dropdownRef}
            className="hidden lg:flex items-center gap-0.5 rounded-full px-2 py-1.5 bg-white/[0.04] border border-white/[0.07] backdrop-blur-md"
          >
            {NAV_LINKS.map((link) => {
              const isProducts = link.label === "Product";
              const isOpen = activeDropdown === link.label;

              return (
                <div key={link.label} className="relative">
                  <button
                    onClick={() => {
                      if (isProducts) {
                        setActiveDropdown(isOpen ? null : link.label);
                      }
                    }}
                    className={cn(
                      "px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 flex items-center gap-1 select-none",
                      isOpen
                        ? "bg-white/[0.1] text-white"
                        : "text-zinc-400 hover:text-white hover:bg-white/[0.06]"
                    )}
                  >
                    <Link href={link.href} className="flex items-center gap-1">
                      {link.label}
                    </Link>
                  </button>

                  {/* Products Mega Dropdown */}
                  {isProducts && isOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[540px] rounded-2xl bg-zinc-950/95 border border-white/[0.12] shadow-[0_20px_60px_rgba(0,0,0,0.8)] backdrop-blur-2xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                      {/* Highlight line */}
                      <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                      <div className="p-4 grid grid-cols-2 gap-2">
                        {MEGA_ITEMS.map((item) => {
                          const Icon = item.icon;
                          return (
                            <button
                              key={item.label}
                              onClick={() => setActiveDropdown(null)}
                              className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/[0.05] transition-colors text-left group"
                            >
                              <div className={cn("p-1.5 rounded-lg bg-white/[0.06] mt-0.5", item.color)}>
                                <Icon className="w-3.5 h-3.5" />
                              </div>
                              <div>
                                <div className="text-xs font-semibold text-white group-hover:text-white transition-colors">
                                  {item.label}
                                </div>
                                <div className="text-[11px] text-zinc-500 mt-0.5">
                                  {item.desc}
                                </div>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                      <div className="border-t border-white/[0.06] px-4 py-3 flex items-center justify-between">
                        <span className="text-[11px] text-zinc-500 font-mono">
                          SonRat Engine v3.2 — Sub-240ms Global
                        </span>
                        <button
                          onClick={() => { setActiveDropdown(null); onOpenDemoModal?.(); }}
                          className="text-[11px] font-medium text-white flex items-center gap-1 hover:gap-2 transition-all"
                        >
                          Get Started <ChevronRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right actions — desktop */}
          <div className="hidden lg:flex items-center gap-2 shrink-0">
            <button
              onClick={onOpenAuthModal}
              className="text-xs font-medium text-zinc-400 hover:text-white px-3 py-1.5 rounded-full hover:bg-white/[0.05] transition-all duration-200 select-none"
            >
              Sign In
            </button>
            <Button
              onClick={onOpenDemoModal}
              variant="primary"
              size="sm"
              className="group text-xs"
            >
              <span>Get Started</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative z-10 p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-white/[0.08] transition-all duration-200 border border-white/[0.08]"
            aria-label="Toggle navigation"
          >
            <div className="relative w-5 h-5">
              <span
                className={cn(
                  "absolute inset-0 transition-all duration-300",
                  isMobileMenuOpen ? "opacity-100 rotate-0" : "opacity-0 rotate-90"
                )}
              >
                <X className="w-5 h-5" />
              </span>
              <span
                className={cn(
                  "absolute inset-0 transition-all duration-300",
                  isMobileMenuOpen ? "opacity-0 -rotate-90" : "opacity-100 rotate-0"
                )}
              >
                <Menu className="w-5 h-5" />
              </span>
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Overlay Menu — full screen */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden transition-all duration-400",
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Drawer panel */}
        <div
          className={cn(
            "absolute right-0 top-0 h-full w-full max-w-sm bg-zinc-950 border-l border-white/[0.08] shadow-2xl flex flex-col transition-transform duration-400",
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          {/* Drawer header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/[0.07]">
            <Logo size="sm" />
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-white/[0.08] transition-colors border border-white/[0.08]"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Links */}
          <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-1">
            {NAV_LINKS.map((link, idx) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/[0.06] transition-all duration-200 group"
                style={{ animationDelay: `${idx * 40}ms` }}
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-zinc-600 group-hover:text-zinc-300 group-hover:translate-x-0.5 transition-all" />
              </Link>
            ))}

            <div className="pt-4">
              <div className="label-mono px-4 mb-3">Platform Features</div>
              <div className="grid grid-cols-2 gap-2">
                {MEGA_ITEMS.slice(0, 4).map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.label}
                      className="flex flex-col items-start gap-1.5 p-3 rounded-xl bg-white/[0.03] border border-white/[0.05] hover:border-white/[0.12] hover:bg-white/[0.06] transition-all text-left"
                    >
                      <div className={cn("p-1 rounded-lg bg-white/[0.08]", item.color)}>
                        <Icon className="w-3 h-3" />
                      </div>
                      <span className="text-[11px] font-medium text-zinc-300">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </nav>

          {/* Drawer footer CTAs */}
          <div className="px-4 py-6 border-t border-white/[0.07] space-y-3">
            {/* Live status pill */}
            <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.03] border border-white/[0.06] text-[11px] font-mono text-zinc-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              All systems operational · 99.995% uptime
            </div>
            <Button
              onClick={() => { setIsMobileMenuOpen(false); onOpenAuthModal?.(); }}
              variant="outline"
              size="md"
              className="w-full justify-center text-sm"
            >
              Sign In
            </Button>
            <Button
              onClick={() => { setIsMobileMenuOpen(false); onOpenDemoModal?.(); }}
              variant="primary"
              size="md"
              className="w-full justify-center text-sm group"
            >
              <span>Get Started</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
