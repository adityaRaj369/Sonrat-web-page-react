"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { FOOTER_COLUMNS } from "@/data/navigation";
import { ArrowRight, Linkedin, Mail, Youtube } from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer id="resources" className="border-t border-slate-200/80 pt-16 pb-12 bg-white/50 backdrop-blur-sm">
      <div className="site-shell">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-slate-200/80">
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link href="/" className="mb-3">
              <Logo size="md" />
            </Link>
            <p className="text-xs text-slate-500 max-w-xs leading-relaxed mb-4">
              AI voice workspace for orders, support tickets, outbound campaigns, and company knowledge.
            </p>
            <div className="inline-flex items-center gap-2 rounded-xl bg-white border border-slate-200 px-3 py-1.5 text-xs shadow-sm">
              <Mail className="w-3.5 h-3.5 text-slate-500" />
              <span className="text-slate-400 font-medium">Contact:</span>
              <a
                href="mailto:support@sonrat.com"
                className="font-semibold text-slate-900 hover:text-[#163a78] transition-colors"
              >
                support@sonrat.com
              </a>
            </div>
          </div>

          {/* Links Columns (Product, Resources, Company) */}
          <div className="lg:col-span-5 grid grid-cols-3 gap-6">
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.title}>
                <h4 className="text-xs font-semibold text-gray-900 mb-4 tracking-tight">
                  {col.title}
                </h4>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-xs text-gray-500 hover:text-gray-900 transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Stay updated newsletter */}
          <div className="lg:col-span-3 flex flex-col items-start">
            <h4 className="text-xs font-semibold text-gray-900 mb-1.5 tracking-tight">
              Stay updated
            </h4>
            <p className="text-xs text-gray-500 leading-relaxed mb-4">
              Get the latest product updates and news.
            </p>

            <form onSubmit={handleSubscribe} className="w-full relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={subscribed ? "Thank you for subscribing!" : "Enter your email"}
                className="w-full pl-4 pr-10 py-2.5 rounded-full border border-gray-200 bg-white text-xs text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-gray-900 transition-colors"
                required
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1.5 bottom-1.5 w-7 h-7 rounded-full bg-black text-white flex items-center justify-center hover:bg-zinc-800 transition-colors"
                aria-label="Submit newsletter"
              >
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom copyright and prominent social links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            © 2026 Sonrat. All rights reserved.
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href="https://linkedin.com/company/108078956/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="group inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 hover:text-[#0a66c2] transition-colors"
            >
              <div className="w-9 h-9 rounded-full bg-white border border-slate-200/90 shadow-sm flex items-center justify-center group-hover:border-[#0a66c2]/40 group-hover:bg-[#0a66c2]/10 transition-colors">
                <Linkedin className="w-5 h-5 text-slate-800 group-hover:text-[#0a66c2] transition-colors" />
              </div>
              <span>LinkedIn</span>
            </a>

            <a
              href="https://youtu.be/iLz3c5lJIIw?si=PPCBiO3yXpusgOCd"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube Video"
              className="group inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 hover:text-[#ff0000] transition-colors"
            >
              <div className="w-9 h-9 rounded-full bg-white border border-slate-200/90 shadow-sm flex items-center justify-center group-hover:border-[#ff0000]/40 group-hover:bg-[#ff0000]/10 transition-colors">
                <Youtube className="w-5 h-5 text-slate-800 group-hover:text-[#ff0000] transition-colors" />
              </div>
              <span>YouTube Video</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
