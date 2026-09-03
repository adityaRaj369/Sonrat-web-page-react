import { HowItWorksStep, LanguageItem } from "@/types";

export const CONNECTED_SYSTEMS = [
  { id: "crm", name: "CRM", detail: "Salesforce, HubSpot, Custom RPC", role: "Contact history & Deal lifecycle" },
  { id: "orders", name: "Orders", detail: "Shopify, Commerce Layer, ERP", role: "Order fulfillment & Tracking query" },
  { id: "payments", name: "Payments", detail: "Stripe, Adyen, Banking APIs", role: "Ledger status, Invoices, Refunds" },
  { id: "support", name: "Helpdesk", detail: "Zendesk, Linear, Jira Service", role: "Ticket creation & Tier-2 escalation" },
  { id: "database", name: "Database", detail: "PostgreSQL, Snowflake, BigQuery", role: "High-speed customer vector context" },
  { id: "calendar", name: "Calendar", detail: "Google Meet, Outlook, Cal.com", role: "Real-time outbound slot booking" },
  { id: "apis", name: "Internal APIs", detail: "REST, GraphQL, gRPC", role: "Custom proprietary microservices" },
  { id: "webhooks", name: "Webhooks", detail: "Signed Event Dispatchers", role: "Real-time bi-directional triggers" },
];

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    step: "01",
    title: "Create your account",
    description: "Register your company and configure your secure workspace.",
    detail: "Set up organization boundaries, provision dedicated voice infrastructure clusters, configure role-based access, and establish telephony trunk credentials in minutes.",
    features: ["Instant tenant provisioning", "Sub-organization partitioning", "Custom telephony routing (SIP/WebRTC)"],
    previewType: "account",
  },
  {
    step: "02",
    title: "Teach your agent",
    description: "Add company information, policies, workflows, and business context.",
    detail: "Ingest documentation, refund policies, FAQs, product catalogs, and edge-case workflows. SonRat converts your business knowledge into real-time deterministic agent decision graphs.",
    features: ["Dynamic vector indexing", "Strict policy boundaries", "Zero hallucinations on company facts"],
    previewType: "knowledge",
  },
  {
    step: "03",
    title: "Connect your systems",
    description: "Connect your APIs and internal tools so the agent can retrieve information and take action.",
    detail: "Supply OpenAPI specs, REST endpoints, database connectors, or authenticated webhooks. Define parameter schemas for actions like order lookups, card updates, or CRM logging.",
    features: ["OpenAPI & JSON Schema auto-import", "Encrypted mTLS & HMAC auth", "Sub-50ms tool execution latency"],
    previewType: "apis",
  },
  {
    step: "04",
    title: "Go live",
    description: "Deploy your AI voice agent and start handling conversations 24/7.",
    detail: "Assign local or toll-free numbers worldwide, embed a WebRTC audio widget on your web app, or hook into your existing PBX / contact center stack with zero customer downtime.",
    features: ["Global phone numbers in 50+ countries", "WebRTC web & mobile widget", "Zero downtime rolling updates"],
    previewType: "deploy",
  },
];

export const SUPPORTED_LANGUAGES: LanguageItem[] = [
  {
    code: "en",
    name: "English",
    nativeName: "English (US, UK, AU)",
    sampleGreeting: "Hello! How can I resolve your request today?",
    sampleResolution: "Your tracking number has been updated and texted to your phone.",
    activeCallCount: "8,920 live calls",
  },
  {
    code: "hi",
    name: "Hindi",
    nativeName: "हिन्दी",
    sampleGreeting: "नमस्ते! मैं आपकी किस प्रकार सहायता कर सकता हूँ?",
    sampleResolution: "आपका आर्डर सफलतापूर्वक अपडेट कर दिया गया है।",
    activeCallCount: "3,140 live calls",
  },
  {
    code: "es",
    name: "Spanish",
    nativeName: "Español",
    sampleGreeting: "¡Hola! ¿En qué puedo asistirte el día de hoy?",
    sampleResolution: "Su reembolso ha sido procesado de inmediato a su cuenta.",
    activeCallCount: "2,840 live calls",
  },
  {
    code: "fr",
    name: "French",
    nativeName: "Français",
    sampleGreeting: "Bonjour ! Comment puis-je vous aider aujourd'hui ?",
    sampleResolution: "Votre réservation a été confirmée et envoyée par e-mail.",
    activeCallCount: "1,450 live calls",
  },
  {
    code: "de",
    name: "German",
    nativeName: "Deutsch",
    sampleGreeting: "Guten Tag! Wie kann ich Ihnen heute behilflich sein?",
    sampleResolution: "Ihre Lieferadresse wurde erfolgreich im System aktualisiert.",
    activeCallCount: "1,120 live calls",
  },
  {
    code: "pt",
    name: "Portuguese",
    nativeName: "Português",
    sampleGreeting: "Olá! Como posso ajudar você hoje com sua conta?",
    sampleResolution: "Seu pagamento foi confirmado e o acesso liberado.",
    activeCallCount: "980 live calls",
  },
  {
    code: "ja",
    name: "Japanese",
    nativeName: "日本語",
    sampleGreeting: "こんにちは！本日はどのようなご用件でしょうか？",
    sampleResolution: "ご注文の変更が正常に完了いたしました。",
    activeCallCount: "740 live calls",
  },
];
