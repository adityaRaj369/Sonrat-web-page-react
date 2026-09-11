"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { FOOTER_COLUMNS } from "@/data/navigation";
import { ArrowRight, Linkedin, Youtube } from "lucide-react";

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
            <p className="text-xs text-slate-500 max-w-xs leading-relaxed">
              AI voice agents for outbound sales and inbound support calls.
            </p>
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

        {/* Bottom copyright and social */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            © 2026 Sonrat. All rights reserved.
          </div>

          <div className="flex items-center gap-5">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-gray-900 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-gray-900 transition-colors font-bold"
              aria-label="X (Twitter)"
            >
              <span className="text-sm leading-none">𝕏</span>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-gray-900 transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
