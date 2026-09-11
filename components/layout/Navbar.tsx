"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";
import { Logo } from "@/components/brand/Logo";
import { NAV_LINKS } from "@/data/navigation";
import { ArrowRight, Menu, X } from "lucide-react";

interface NavbarProps {
  onOpenAuthModal?: () => void;
  onOpenDemoModal?: () => void;
}

export function Navbar({ onOpenAuthModal, onOpenDemoModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-[#050505] origin-left z-50 pointer-events-none"
        style={{ scaleX }}
      />

      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-xl border-b border-slate-200/80 shadow-[0_8px_30px_-18px_rgba(15,23,42,0.25)] py-3"
            : "bg-transparent border-b border-transparent py-4 sm:py-5"
        }`}
      >
        <div className="site-shell flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Logo size="md" />
          </Link>

          <nav className="hidden md:flex items-center gap-1 rounded-2xl border border-slate-200/80 bg-white/70 backdrop-blur-md p-1.5">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-950 rounded-xl transition-colors hover:bg-slate-100/80"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenAuthModal}
              className="text-xs font-medium text-slate-700 hover:text-slate-950 px-3 py-1.5 rounded-xl hover:bg-white/70"
            >
              Sign in
            </button>
            <button onClick={onOpenDemoModal} className="btn-primary !py-2 !px-4 !text-xs">
              Book a demo
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="flex md:hidden items-center gap-2.5">
            <button onClick={onOpenDemoModal} className="btn-primary !py-1.5 !px-3 !text-xs">
              Demo
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-700 rounded-xl hover:bg-white/70"
              aria-label="Toggle navigation"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 px-4 pt-3 pb-6 space-y-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 text-sm font-medium text-slate-700 border-b border-slate-100"
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenDemoModal?.();
              }}
              className="btn-primary w-full justify-center"
            >
              Book a demo
            </button>
          </div>
        )}
      </header>
    </>
  );
}
