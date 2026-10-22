import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Sonrat collects, uses, and protects information.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-16 text-slate-900 sm:px-6">
      <article className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white px-6 py-10 shadow-sm sm:px-10">
        <p className="text-sm font-semibold text-slate-500">Sonrat</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight">Privacy Policy</h1>
        <p className="mt-3 text-sm text-slate-500">Last updated: October 23, 2026</p>

        <div className="mt-10 space-y-8 text-sm leading-7 text-slate-700">
          <section>
            <h2 className="text-lg font-semibold text-slate-900">What this policy covers</h2>
            <p className="mt-2">
              This policy explains how Sonrat collects, uses, and protects information when you
              visit our website or use the Sonrat dashboard and voice-agent services.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-slate-900">Information we collect</h2>
            <p className="mt-2">
              We may collect account details such as your name, work email address, organization,
              and login information. When you use the product, we may process workspace data,
              configuration, call metadata, transcripts, support tickets, orders, and other data
              that your organization chooses to provide.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-slate-900">Google sign-in</h2>
            <p className="mt-2">
              If you sign in with Google, Sonrat receives the basic profile information that you
              authorize, such as your name, email address, and profile identifier. We use it to
              identify your account, enforce organization access, and maintain your session. We do
              not sell Google account information or use it for advertising.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-slate-900">How we use information</h2>
            <p className="mt-2">
              We use information to provide and secure the service, authenticate users, operate
              voice agents, maintain organization workspaces, provide support, improve reliability,
              and comply with applicable law. We share information with service providers only
              when needed to operate the service and under appropriate safeguards.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-slate-900">Security and retention</h2>
            <p className="mt-2">
              We use access controls, encrypted connections, and organizational permissions to
              protect information. We retain information for as long as needed to provide the
              service, meet contractual obligations, resolve disputes, and comply with law.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-slate-900">Contact</h2>
            <p className="mt-2">
              Questions about privacy can be sent to{" "}
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
