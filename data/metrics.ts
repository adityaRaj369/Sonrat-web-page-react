import { SupportMetric } from "@/types";

export const HERO_TRUST_STATS = [
  { label: "Turnaround Latency", value: "< 240ms", detail: "Global edge audio turnaround" },
  { label: "Resolution Rate", value: "92.4%", detail: "First-call autonomous resolution" },
  { label: "System Availability", value: "99.99%", detail: "Mission-critical telephony SLA" },
  { label: "Languages Supported", value: "35+", detail: "Native accent & cultural context" },
];

export const SUPPORT_STATS: SupportMetric[] = [
  {
    label: "Incoming Calls",
    value: 184920,
    change: "+14.2% vs last month",
    trend: "up",
  },
  {
    label: "Tickets Created",
    value: 41208,
    change: "Automated ticket orchestration",
    trend: "up",
  },
  {
    label: "Autonomous Resolutions",
    value: 91.8,
    suffix: "%",
    change: "No human agent needed",
    trend: "up",
  },
  {
    label: "Avg Resolution Time",
    value: 28,
    suffix: "s",
    change: "-74% vs legacy phone queues",
    trend: "down",
  },
  {
    label: "Human Escalation Rate",
    value: 2.1,
    suffix: "%",
    change: "Seamless warm handoff",
    trend: "down",
  },
];

export const SALES_BENCHMARKS = [
  { label: "Lead Response Time", legacy: "42 hours", sonrat: "< 8 seconds" },
  { label: "Connection & Pitch Rate", legacy: "18%", sonrat: "67%" },
  { label: "BANT Qualification Depth", legacy: "Variable / Incomplete", sonrat: "100% Deterministic" },
  { label: "Instant Meeting Booking", legacy: "Back-and-forth emails", sonrat: "Direct on-call calendar lock" },
  { label: "Cost Per Qualified Lead", legacy: "$145.00", sonrat: "$11.20" },
];

export const CONTROL_CENTER_STATS = {
  activeClusters: "US-East, US-West, EU-Central, AP-South",
  liveCallsNow: 412,
  callsHandledToday: 14892,
  avgTurnaroundMs: 218,
  uptimePercentage: "99.995%",
  activeWebhooksToday: 489102,
};
