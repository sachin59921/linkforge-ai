"use client";

import Link from "next/link";
import {
  Bell,
  Bot,
  Check,
  ChevronRight,
  CreditCard,
  KeyRound,
  Link2,
  Lock,
  Save,
  Settings2,
  ShieldCheck,
  UserRound,
  Trash2,
} from "lucide-react";

const settingsSections = [
  {
    title: "Account",
    description: "Manage your personal account information.",
    icon: UserRound,
  },
  {
    title: "AI Preferences",
    description: "Control how LinkForge AI assists you.",
    icon: Bot,
  },
  {
    title: "Notifications",
    description: "Choose which updates you receive.",
    icon: Bell,
  },
  {
    title: "Connected Accounts",
    description: "Manage external accounts and integrations.",
    icon: Link2,
  },
  {
    title: "Security",
    description: "Protect your account and sessions.",
    icon: ShieldCheck,
  },
  {
    title: "Plan & Billing",
    description: "Manage your subscription and billing.",
    icon: CreditCard,
  },
];

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="mb-4 flex items-center gap-2 text-sm text-slate-500">
            <Link href="/" className="transition hover:text-slate-900">
              Dashboard
            </Link>
            <span>/</span>
            <span className="font-medium text-slate-900">Settings</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex size-11 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
              <Settings2 className="size-5" />
            </div>

            <div>
              <h1 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                Settings
              </h1>
              <p className="mt-1 text-sm text-slate-500">
                Manage your LinkForge AI account, preferences, and workspace.
              </p>
            </div>
          </div>
        </div>

        {/* Settings navigation */}
        <section className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {settingsSections.map((section) => {
            const Icon = section.icon;

            return (
              <button
                key={section.title}
                type="button"
                className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-600 transition group-hover:bg-blue-50 group-hover:text-blue-600">
                  <Icon className="size-4" />
                </div>

                <div className="min-w-0 flex-1">
                  <h2 className="text-sm font-semibold text-slate-900">
                    {section.title}
                  </h2>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    {section.description}
                  </p>
                </div>

                <ChevronRight className="mt-1 size-4 shrink-0 text-slate-300 transition group-hover:text-slate-500" />
              </button>
            );
          })}
        </section>

        {/* Account */}
        <section className="mb-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 px-6 py-5">
            <div className="flex items-center gap-2">
              <UserRound className="size-4 text-slate-500" />
              <h2 className="font-semibold text-slate-900">
                Account information
              </h2>
            </div>
            <p className="mt-1 text-sm text-slate-500">
              Update the information associated with your LinkForge account.
            </p>
          </div>

          <div className="grid gap-5 p-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Full name
              </label>
              <input
                type="text"
                defaultValue="John Doe"
                className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Email address
              </label>
              <input
                type="email"
                defaultValue="john@example.com"
                className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Professional role
              </label>
              <input
                type="text"
                defaultValue="Product Builder"
                className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Location
              </label>
              <input
                type="text"
                defaultValue="India"
                className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>
          </div>

          <div className="flex justify-end border-t border-slate-100 px-6 py-4">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-lg bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              <Save className="size-4" />
              Save changes
            </button>
          </div>
        </section>

        {/* AI preferences */}
        <section className="mb-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 px-6 py-5">
            <div className="flex items-center gap-2">
              <Bot className="size-4 text-violet-500" />
              <h2 className="font-semibold text-slate-900">
                AI preferences
              </h2>
            </div>
            <p className="mt-1 text-sm text-slate-500">
              Customize how LinkForge AI creates recommendations and content.
            </p>
          </div>

          <div className="divide-y divide-slate-100">
            <div className="flex items-center justify-between gap-5 px-6 py-5">
              <div>
                <h3 className="text-sm font-semibold text-slate-900">
                  Use my professional context
                </h3>
                <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-500">
                  Let AI use your profile, projects, skills, and brand
                  information when generating recommendations.
                </p>
              </div>

              <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                <Check className="size-3.5" />
              </div>
            </div>

            <div className="flex items-center justify-between gap-5 px-6 py-5">
              <div>
                <h3 className="text-sm font-semibold text-slate-900">
                  Prioritize authentic suggestions
                </h3>
                <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-500">
                  Avoid invented achievements, credentials, metrics, or
                  experiences when creating content.
                </p>
              </div>

              <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                <Check className="size-3.5" />
              </div>
            </div>

            <div className="flex items-center justify-between gap-5 px-6 py-5">
              <div>
                <h3 className="text-sm font-semibold text-slate-900">
                  Ask before using missing information
                </h3>
                <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-500">
                  Have AI identify important missing context instead of
                  guessing.
                </p>
              </div>

              <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                <Check className="size-3.5" />
              </div>
            </div>
          </div>
        </section>

        {/* Notifications */}
        <section className="mb-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 px-6 py-5">
            <div className="flex items-center gap-2">
              <Bell className="size-4 text-slate-500" />
              <h2 className="font-semibold text-slate-900">
                Notifications
              </h2>
            </div>
            <p className="mt-1 text-sm text-slate-500">
              Choose which LinkForge updates you want to receive.
            </p>
          </div>

          <div className="divide-y divide-slate-100">
            {[
              {
                title: "Weekly brand recommendations",
                description:
                  "Receive a weekly summary of opportunities to strengthen your professional presence.",
              },
              {
                title: "Content reminders",
                description:
                  "Get reminders when it is time to review or create planned content.",
              },
              {
                title: "Product updates",
                description:
                  "Stay informed about new LinkForge AI features and improvements.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-center justify-between gap-5 px-6 py-5"
              >
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-500">
                    {item.description}
                  </p>
                </div>

                <div className="relative h-6 w-11 shrink-0 rounded-full bg-blue-600">
                  <div className="absolute right-1 top-1 size-4 rounded-full bg-white shadow-sm" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Connected accounts + security */}
        <section className="mb-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-100 px-6 py-5">
              <div className="flex items-center gap-2">
                <Link2 className="size-4 text-slate-500" />
                <h2 className="font-semibold text-slate-900">
                  Connected accounts
                </h2>
              </div>
              <p className="mt-1 text-sm text-slate-500">
                Manage services connected to LinkForge.
              </p>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between rounded-xl border border-slate-200 p-4">
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    LinkedIn
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Not connected
                  </p>
                </div>

                <button
                  type="button"
                  className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Connect
                </button>
              </div>

              <div className="mt-3 flex items-center justify-between rounded-xl border border-slate-200 p-4">
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    GitHub
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Not connected
                  </p>
                </div>

                <button
                  type="button"
                  className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Connect
                </button>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-100 px-6 py-5">
              <div className="flex items-center gap-2">
                <Lock className="size-4 text-slate-500" />
                <h2 className="font-semibold text-slate-900">
                  Security
                </h2>
              </div>
              <p className="mt-1 text-sm text-slate-500">
                Keep your account protected.
              </p>
            </div>

            <div className="space-y-3 p-6">
              <button
                type="button"
                className="flex w-full items-center justify-between rounded-xl border border-slate-200 p-4 text-left transition hover:bg-slate-50"
              >
                <span className="flex items-center gap-3">
                  <KeyRound className="size-4 text-slate-500" />
                  <span>
                    <span className="block text-sm font-semibold text-slate-900">
                      Change password
                    </span>
                    <span className="mt-1 block text-xs text-slate-500">
                      Update your account password.
                    </span>
                  </span>
                </span>
                <ChevronRight className="size-4 text-slate-400" />
              </button>

              <button
                type="button"
                className="flex w-full items-center justify-between rounded-xl border border-slate-200 p-4 text-left transition hover:bg-slate-50"
              >
                <span className="flex items-center gap-3">
                  <ShieldCheck className="size-4 text-slate-500" />
                  <span>
                    <span className="block text-sm font-semibold text-slate-900">
                      Active sessions
                    </span>
                    <span className="mt-1 block text-xs text-slate-500">
                      Review where your account is signed in.
                    </span>
                  </span>
                </span>
                <ChevronRight className="size-4 text-slate-400" />
              </button>
            </div>
          </div>
        </section>

        {/* Plan */}
        <section className="mb-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 px-6 py-5">
            <div className="flex items-center gap-2">
              <CreditCard className="size-4 text-slate-500" />
              <h2 className="font-semibold text-slate-900">
                Plan & billing
              </h2>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-5 p-6 sm:flex-row sm:items-center">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-slate-950">
                  Free Plan
                </h3>
                <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">
                  Current plan
                </span>
              </div>

              <p className="mt-2 text-sm text-slate-500">
                Explore LinkForge AI and build your professional brand.
              </p>
            </div>

            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              <CreditCard className="size-4" />
              View plans
            </button>
          </div>
        </section>

        {/* Danger zone */}
        <section className="rounded-2xl border border-red-200 bg-white shadow-sm">
          <div className="border-b border-red-100 px-6 py-5">
            <div className="flex items-center gap-2">
              <Trash2 className="size-4 text-red-500" />
              <h2 className="font-semibold text-red-700">Danger zone</h2>
            </div>
            <p className="mt-1 text-sm text-slate-500">
              These actions can permanently affect your LinkForge account.
            </p>
          </div>

          <div className="flex flex-col justify-between gap-4 p-6 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-sm font-semibold text-slate-900">
                Delete account
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                Permanently delete your account and associated workspace data.
              </p>
            </div>

            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-red-200 px-4 py-2.5 text-sm font-semibold text-red-600 transition hover:bg-red-50"
            >
              <Trash2 className="size-4" />
              Delete account
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}