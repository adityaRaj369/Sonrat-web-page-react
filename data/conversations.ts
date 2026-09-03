import { CallSimulationStep, CrmLead, SupportTicket } from "@/types";

export const SUPPORT_CALL_STEPS: CallSimulationStep[] = [
  {
    id: 1,
    speaker: "customer",
    text: "Hi, my payment went through but my order still says pending.",
    timestamp: "00:03",
  },
  {
    id: 2,
    speaker: "agent",
    text: "I can check that for you right now. Let me inspect your latest payment and order record in our database.",
    timestamp: "00:06",
    toolCall: {
      name: "Payment API",
      action: "verify_transaction_status",
      payload: { customer_id: "cust_90214", window_minutes: 15 },
      result: "Payment $249.00 Captured (Stripe ch_3N28kx)",
      status: "success",
    },
    reasoning: "Customer reports state mismatch: payment succeeded but order pending.",
  },
  {
    id: 3,
    speaker: "system",
    text: "Order API: Checking order #89210 state across inventory and fulfillment queues...",
    timestamp: "00:08",
    toolCall: {
      name: "Order API",
      action: "get_order_state",
      payload: { order_id: "ord_89210" },
      result: "Order Status: Pending Dispatch / Webhook timeout detected",
      status: "success",
    },
    reasoning: "Webhook delivery failure between payment gateway and fulfillment queue.",
  },
  {
    id: 4,
    speaker: "system",
    text: "Autonomous Decision: Payment confirmed but fulfillment pipeline dropped webhook. Triggering automated reconciliation.",
    timestamp: "00:10",
    toolCall: {
      name: "Support API",
      action: "create_ticket",
      payload: {
        ticket_id: "TICKET #48291",
        priority: "High",
        category: "Payment-Order Reconciliation",
        automated_action: "retry_order_fulfillment",
      },
      result: "Ticket #48291 Created & Auto-Assigned",
      status: "success",
    },
  },
  {
    id: 5,
    speaker: "system",
    text: "Fulfillment Action: Retrying order confirmation pipeline via internal RPC...",
    timestamp: "00:12",
    toolCall: {
      name: "Fulfillment API",
      action: "confirm_order",
      payload: { order_id: "ord_89210", payment_ref: "ch_3N28kx" },
      result: "Order Confirmed. Tracking ID: TRK-99214-US assigned.",
      status: "success",
    },
  },
  {
    id: 6,
    speaker: "agent",
    text: "Your payment was successful, and I've resolved the sync issue. Your order #89210 is now confirmed and scheduled for shipping today.",
    timestamp: "00:15",
    reasoning: "Issue successfully resolved with verifiable confirmation to customer.",
  },
  {
    id: 7,
    speaker: "customer",
    text: "Perfect, thank you! That was insanely fast.",
    timestamp: "00:18",
  },
];

export const SALES_CALL_SAMPLE: CrmLead = {
  name: "Sarah Johnson",
  company: "Acme Cloud Corp",
  role: "VP of Global Customer Operations",
  intentScore: 96,
  dealSize: "$72,000 / year",
  status: "Enterprise Qualified (BANT Met)",
  actionTaken: "Executive Demo Scheduled for Thursday 2:00 PM EST",
  summary: "Currently handling 45k monthly support calls with 65 reps. Seeking to automate Tier-1 order and account inquiries with sub-300ms voice latency.",
  crmSynced: true,
};

export const LIVE_SUPPORT_TICKETS: SupportTicket[] = [
  {
    id: "TCK-89210",
    customer: "Marcus Vance",
    channel: "Inbound Voice",
    intent: "Expedited Shipping Address Change",
    duration: "24s",
    status: "Resolved",
    apiCalled: "AddressVerificationAPI.patch()",
  },
  {
    id: "TCK-89211",
    customer: "Elena Rostova",
    channel: "Inbound Voice",
    intent: "Subscription Upgrade & Invoice Split",
    duration: "38s",
    status: "Resolved",
    apiCalled: "BillingEngine.updateSubscription()",
  },
  {
    id: "TCK-89212",
    customer: "David Chen",
    channel: "Inbound Voice",
    intent: "Lost Luggage Status & Claim",
    duration: "42s",
    status: "Action Taken",
    apiCalled: "BaggageTrackerAPI.createClaim()",
  },
  {
    id: "TCK-89213",
    customer: "Amina Al-Mansoor",
    channel: "Inbound Voice",
    intent: "Identity Verification & PIN Reset",
    duration: "19s",
    status: "Resolved",
    apiCalled: "SecurityAuth.verifyPasscode()",
  },
];
