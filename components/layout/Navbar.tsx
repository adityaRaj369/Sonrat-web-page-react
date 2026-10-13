"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { NAV_LINKS } from "@/data/navigation";
import { Menu, X, Mail, Linkedin, Youtube } from "lucide-react";

interface NavbarProps {
  onOpenAuthModal?: () => void;
  onOpenDemoModal?: () => void;
}

export function Navbar(_props: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 inset-x-0 z-50 py-3 sm:py-4 pointer-events-none">
      <div className="site-shell grid grid-cols-[1fr_auto_1fr] items-center gap-3 pointer-events-auto">
        <Link href="/" className="relative z-10 justify-self-start shrink-0">
          <Logo size="md" />
        </Link>

        <nav className="hidden lg:flex min-w-0 max-w-full items-center gap-1 rounded-full border border-slate-200/80 bg-white/75 backdrop-blur-md p-1.5 shadow-[0_8px_30px_-18px_rgba(15,23,42,0.25)]">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="whitespace-nowrap px-3.5 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-950 rounded-full transition-colors hover:bg-slate-100/80"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((v) => !v)}
          className="lg:hidden relative z-10 justify-self-end rounded-full border border-slate-200/80 bg-white/85 p-2.5 text-slate-700 shadow-[0_8px_30px_-18px_rgba(15,23,42,0.25)] backdrop-blur-md"
          aria-label="Toggle navigation"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        <div className="hidden lg:flex justify-self-end items-center gap-2">
          <a
            href="mailto:support@sonrat.com"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-slate-700 hover:text-slate-950 rounded-full border border-slate-200/80 bg-white/75 backdrop-blur-md shadow-sm transition-colors hover:bg-slate-100"
          >
            <Mail className="w-3.5 h-3.5 text-slate-500" />
            support@sonrat.com
          </a>

          <a
            href="https://linkedin.com/company/108078956/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            title="LinkedIn Profile"
            className="w-8 h-8 rounded-full border border-slate-200/80 bg-white/75 backdrop-blur-md shadow-sm flex items-center justify-center text-slate-700 hover:text-[#0a66c2] hover:bg-slate-100 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <a
            href="https://youtu.be/iLz3c5lJIIw?si=PPCBiO3yXpusgOCd"
            target="_blank"
            rel="noreferrer"
            aria-label="YouTube Video"
            title="Watch YouTube Video"
            className="w-8 h-8 rounded-full border border-slate-200/80 bg-white/75 backdrop-blur-md shadow-sm flex items-center justify-center text-slate-700 hover:text-[#ff0000] hover:bg-slate-100 transition-colors"
          >
            <Youtube className="w-4 h-4" />
          </a>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden site-shell mt-2 pointer-events-auto">
          <div className="rounded-2xl border border-slate-200/80 bg-white/95 p-3 shadow-[0_18px_48px_-28px_rgba(15,23,42,0.35)] backdrop-blur-xl">
            <div className="grid gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-100 hover:text-slate-950 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 mt-1 border-t border-slate-100">
                <a
                  href="mailto:support@sonrat.com"
                  className="flex items-center gap-2 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-900 bg-slate-50 hover:bg-slate-100 transition-colors"
                >
                  <Mail className="w-4 h-4 text-slate-500" />
                  support@sonrat.com
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
