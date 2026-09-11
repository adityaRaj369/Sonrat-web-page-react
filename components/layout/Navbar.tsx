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

  // Scroll progress indicator
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-gray-950 via-gray-700 to-black origin-left z-50 pointer-events-none"
        style={{ scaleX }}
      />

      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md border-b border-gray-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.04)] py-3"
            : "bg-white/80 backdrop-blur-sm border-b border-transparent py-4 sm:py-5"
        }`}
      >
        <div className="site-shell flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center group">
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Logo size="md" />
            </motion.div>
          </Link>

          {/* Center Nav Links - Desktop */}
          <nav className="hidden md:flex items-center gap-1 bg-gray-100/70 p-1.5 rounded-full border border-gray-200/50 backdrop-blur-sm">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="relative px-3.5 py-1.5 text-xs font-medium text-gray-600 hover:text-gray-950 rounded-full transition-all duration-200 hover:bg-white hover:shadow-xs group"
              >
                <span>{link.label}</span>
              </Link>
            ))}
          </nav>

          {/* Right CTAs - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenAuthModal}
              className="text-xs font-medium text-gray-700 hover:text-gray-950 transition-colors px-3 py-1.5 rounded-full hover:bg-gray-100/70"
            >
              Sign in
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              onClick={onOpenDemoModal}
              className="group inline-flex items-center gap-1.5 bg-[#163a78] hover:bg-[#122f61] text-white text-xs font-medium px-4 py-2 rounded-full transition-all shadow-sm"
            >
              <span>Get a Demo</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2.5">
            <button
              onClick={onOpenDemoModal}
              className="inline-flex items-center gap-1 bg-[#163a78] text-white text-xs font-medium px-3 py-1.5 rounded-full"
            >
              <span>Demo</span>
              <ArrowRight className="w-3 h-3" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-700 hover:text-gray-950 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle navigation"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-white border-b border-gray-200 px-4 pt-3 pb-6 space-y-3 shadow-lg"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 text-sm font-medium text-gray-700 hover:text-gray-950 border-b border-gray-100"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenAuthModal?.();
                }}
                className="w-full text-center py-2.5 text-xs font-medium text-gray-700 border border-gray-200 rounded-full hover:bg-gray-50"
              >
                Sign in
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenDemoModal?.();
                }}
                className="w-full text-center py-2.5 text-xs font-medium text-white bg-[#163a78] rounded-full hover:bg-[#122f61] flex items-center justify-center gap-1.5"
              >
                <span>Get a Demo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        )}
      </header>
    </>
  );
}
