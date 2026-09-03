export interface NavItem {
  label: string;
  href: string;
  badge?: string;
}

export interface CallSimulationStep {
  id: number;
  speaker: "customer" | "agent" | "system";
  text: string;
  timestamp: string;
  toolCall?: {
    name: string;
    action: string;
    payload?: Record<string, any>;
    result?: string;
    status: "executing" | "success" | "error";
  };
  reasoning?: string;
}

export interface SupportMetric {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  change: string;
  trend: "up" | "down";
}

export interface SupportTicket {
  id: string;
  customer: string;
  channel: string;
  intent: string;
  duration: string;
  status: "Resolved" | "In-Flight" | "Action Taken";
  apiCalled: string;
}

export interface CrmLead {
  name: string;
  company: string;
  role: string;
  intentScore: number;
  dealSize: string;
  status: string;
  actionTaken: string;
  summary: string;
  crmSynced: boolean;
}

export interface CodeSnippet {
  id: string;
  label: string;
  filename: string;
  language: string;
  code: string;
  description: string;
}

export interface LanguageItem {
  code: string;
  name: string;
  nativeName: string;
  sampleGreeting: string;
  sampleResolution: string;
  activeCallCount: string;
}

export interface UseCaseItem {
  title: string;
  category: string;
  description: string;
  capabilities: string[];
  metrics: string;
  metricLabel: string;
  badge: string;
}

export interface HowItWorksStep {
  step: string;
  title: string;
  description: string;
  detail: string;
  features: string[];
  previewType: "account" | "knowledge" | "apis" | "deploy";
}
