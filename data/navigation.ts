import { NavItem } from "@/types";

export const NAV_LINKS: NavItem[] = [
  { label: "Product", href: "#product" },
  { label: "Solutions", href: "#solutions" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Developers", href: "#developers" },
  { label: "Enterprise", href: "#trust" },
];

export const FOOTER_COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "AI Voice Engine", href: "#product" },
      { label: "Autonomous Reasoner", href: "#difference" },
      { label: "Multi-system Tool Calling", href: "#integrations" },
      { label: "Sub-250ms Audio Pipeline", href: "#architecture" },
      { label: "Control Center", href: "#control-center" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Customer Support Ops", href: "#support" },
      { label: "Outbound Sales & Booking", href: "#sales" },
      { label: "Global Multilingual", href: "#multilingual" },
      { label: "24/7 Always On", href: "#always-on" },
      { label: "Industry Verticals", href: "#use-cases" },
    ],
  },
  {
    title: "Developers",
    links: [
      { label: "REST & Streaming API", href: "#developers" },
      { label: "Webhooks Engine", href: "#developers" },
      { label: "Function Calling Tools", href: "#developers" },
      { label: "SDK Documentation", href: "#developers" },
      { label: "Telephony & SIP Trunks", href: "#developers" },
    ],
  },
  {
    title: "Enterprise",
    links: [
      { label: "Security & Governance", href: "#trust" },
      { label: "Role-Based Access Control", href: "#trust" },
      { label: "Audit Logs", href: "#trust" },
      { label: "Human-in-the-Loop Fallbacks", href: "#trust" },
      { label: "SLA Guarantees", href: "#trust" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About SonRat AI", href: "#" },
      { label: "Research & Benchmarks", href: "#architecture" },
      { label: "Customer Stories", href: "#" },
      { label: "Careers", href: "#" },
      { label: "System Status", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Data Processing Agreement", href: "#" },
      { label: "Responsible AI Policy", href: "#" },
      { label: "Security Whitepaper", href: "#" },
    ],
  },
];
