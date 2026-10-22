import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing use of Sonrat services.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-16 text-slate-900 sm:px-6">
      <article className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white px-6 py-10 shadow-sm sm:px-10">
        <p className="text-sm font-semibold text-slate-500">Sonrat</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight">Terms of Service</h1>
        <p className="mt-3 text-sm text-slate-500">Last updated: October 23, 2026</p>

        <div className="mt-10 space-y-8 text-sm leading-7 text-slate-700">
          <section>
            <h2 className="text-lg font-semibold text-slate-900">Using Sonrat</h2>
            <p className="mt-2">
              Sonrat provides organization-managed software for AI voice agents, customer support,
              orders, campaigns, and related workflows. You must use the service lawfully and have
              authority to provide the data and instructions submitted to your organization.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-slate-900">Organization responsibility</h2>
            <p className="mt-2">
              Each organization is responsible for its users, permissions, call destinations,
              notices, consent, recordings, transcripts, product information, and compliance with
              applicable telecommunications and privacy requirements.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-slate-900">Service changes</h2>
            <p className="mt-2">
              Sonrat may improve, modify, suspend, or discontinue parts of the service when needed
              for security, maintenance, legal compliance, or product development. We will make
              reasonable efforts to communicate material changes.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-slate-900">Contact</h2>
            <p className="mt-2">
              For questions about these terms, contact{" "}
              <a className="font-semibold text-slate-900 underline" href="mailto:support@sonrat.com">
                support@sonrat.com
              </a>
              .
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
