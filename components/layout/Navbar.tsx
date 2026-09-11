"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { NAV_LINKS } from "@/data/navigation";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  onOpenAuthModal?: () => void;
  onOpenDemoModal?: () => void;
}

export function Navbar(_props: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 inset-x-0 z-40 py-5 pointer-events-none">
      <div className="site-shell flex items-center justify-between gap-6 pointer-events-auto">
        <Link href="/" className="shrink-0">
          <Logo size="md" />
        </Link>

        <nav className="hidden md:flex items-center gap-1 rounded-full border border-slate-200/80 bg-white/70 backdrop-blur-md p-1.5 shadow-[0_8px_30px_-18px_rgba(15,23,42,0.25)]">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="px-3.5 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-950 rounded-full transition-colors hover:bg-slate-100/80"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((v) => !v)}
          className="md:hidden p-1 text-slate-700"
          aria-label="Toggle navigation"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden site-shell mt-3 flex flex-col gap-3 pointer-events-auto">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sm font-medium text-slate-700"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
