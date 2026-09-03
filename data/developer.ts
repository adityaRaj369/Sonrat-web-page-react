import { CodeSnippet } from "@/types";

export const DEVELOPER_TABS: CodeSnippet[] = [
  {
    id: "api",
    label: "API (Example Workflow)",
    filename: "workflow_dispatch.sh",
    language: "bash",
    description: "Programmatically trigger autonomous voice workflows or inspect live conversation state.",
    code: `# Example workflow: Trigger proactive resolution call
curl -X POST https://api.sonrat.ai/v1/agent/action \\
  -H "Authorization: Bearer sonrat_live_sec_7x9k2m..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "customer": {
      "id": "cust_882910",
      "phone": "+1 (415) 890-2194",
      "name": "Sarah Chen",
      "timezone": "America/Los_Angeles"
    },
    "intent": "order_issue",
    "context": {
      "order_id": "ord_89210",
      "issue_type": "delayed_webhook_confirmation",
      "payment_verified": true
    },
    "action": "resolve",
    "fallback_to_human_on_error": true
  }'`,
  },
  {
    id: "webhooks",
    label: "Webhooks",
    filename: "webhook_payload.json",
    language: "json",
    description: "Receive signed real-time events when calls complete, tickets are dispatched, or actions are taken.",
    code: `{
  "event": "voice.call.completed",
  "call_id": "call_v9011_live",
  "created_at": "2026-09-04T00:04:12Z",
  "duration_seconds": 22.4,
  "caller": "+1 (415) 890-2194",
  "outcome": {
    "intent": "payment_reconciliation",
    "status": "resolved",
    "sentiment": "positive",
    "confidence_score": 0.984
  },
  "actions_executed": [
    {
      "tool": "StripeBillingAPI.verify",
      "latency_ms": 48,
      "status": "200_OK"
    },
    {
      "tool": "WarehouseERP.confirm_order",
      "latency_ms": 62,
      "status": "200_OK"
    }
  ],
  "ticket_created": "TICKET-48291"
}`,
  },
  {
    id: "tools",
    label: "Tools & Functions",
    filename: "tool_definition.ts",
    language: "typescript",
    description: "Define callable schema-enforced tools for the agent to safely interact with your APIs.",
    code: `import { defineAgentTool } from "@sonrat/agent-sdk";

export const OrderLookupTool = defineAgentTool({
  name: "lookup_and_reconcile_order",
  description: "Queries ERP for order status and re-dispatches fulfillment if payment captured.",
  parameters: {
    type: "object",
    properties: {
      order_id: { type: "string", description: "The customer order number, e.g. ord_89210" },
      retry_sync: { type: "boolean", description: "Whether to force a webhook sync if stuck" }
    },
    required: ["order_id"]
  },
  execute: async ({ order_id, retry_sync }, { customerContext }) => {
    // Executes inside your private perimeter or serverless edge
    const order = await db.orders.findUnique({ where: { id: order_id } });
    if (order.status === "pending" && retry_sync) {
      await fulfillmentQueue.push({ id: order.id, force: true });
      return { status: "reconciled", tracking_number: "TRK-99214-US" };
    }
    return { status: order.status, items: order.line_items };
  }
});`,
  },
  {
    id: "knowledge",
    label: "Knowledge Sync",
    filename: "sync_knowledge.py",
    language: "python",
    description: "Stream business policies, catalog updates, and internal rules into the agent's real-time context.",
    code: `from sonrat import SonRatClient

client = SonRatClient(api_key="sonrat_live_sec_7x9k2m...")

# Index internal documentation and strict policies
collection = client.knowledge.sync(
    agent_id="agt_support_tier1",
    sources=[
        {
            "type": "notion_workspace",
            "database_id": "db_returns_policy_2026",
            "sync_interval": "hourly"
        },
        {
            "type": "openapi_spec",
            "url": "https://api.internal.company.com/v1/openapi.json"
        }
    ],
    enforce_guardrails={
        "prohibit_hallucinations": True,
        "max_refund_limit_usd": 500.00,
        "require_otp_above_usd": 100.00
    }
)
print(f"Agent knowledge synchronized: {collection.documents_count} nodes live")`,
  },
  {
    id: "actions",
    label: "Actions & State",
    filename: "state_machine.json",
    language: "json",
    description: "Declarative guardrails and action gates before any mission-critical API call is executed.",
    code: `{
  "agent_id": "agt_support_tier1",
  "action_policy": {
    "lookup_order": {
      "approval": "autonomous",
      "rate_limit_per_caller": 10
    },
    "issue_refund": {
      "approval": "conditional",
      "condition": "amount <= 250.00 && account_age_days >= 30",
      "on_failure": "escalate_to_human_supervisor"
    },
    "cancel_subscription": {
      "approval": "autonomous_with_save_attempt",
      "save_offer": "1_month_complimentary_tier"
    },
    "trigger_emergency_card_lock": {
      "approval": "instant_priority_zero",
      "require_two_factor": false
    }
  }
}`,
  },
];
