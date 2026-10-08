"use client";

import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Bot,
  ChevronDown,
  ChevronRight,
  CircleHelp,
  FileText,
  Mail,
  MessageCircle,
  Search,
  ShieldCheck,
  Sparkles,
  UserRound,
} from "lucide-react";

const popularTopics = [
  {
    title: "Getting started with LinkForge",
    description:
      "Learn how to set up your profile, brand context, and first AI workflow.",
    icon: BookOpen,
  },
  {
    title: "Improving your LinkedIn profile",
    description:
      "Understand how Profile Forge analyzes positioning, clarity, and credibility.",
    icon: UserRound,
  },
  {
    title: "Creating better LinkedIn posts",
    description:
      "Use Post Forge to turn your experience and ideas into stronger content.",
    icon: FileText,
  },
  {
    title: "Using AI Copilot",
    description:
      "Learn how to work with your personal AI assistant across LinkForge.",
    icon: Bot,
  },
];

const faqs = [
  {
    question: "What is LinkForge AI?",
    answer:
      "LinkForge AI is a professional branding workspace designed to help you improve your LinkedIn profile, create stronger content, optimize projects, and build a consistent professional presence.",
  },
  {
    question: "What is the Forge Score?",
    answer:
      "Forge Score is LinkForge's overall assessment of your professional positioning. It combines signals such as profile clarity, expertise, content consistency, authority, and project strength.",
  },
  {
    question: "How does LinkForge use my professional information?",
    answer:
      "Your professional context can be used to make AI recommendations more relevant to you. The product is designed to avoid inventing achievements, credentials, metrics, or experiences that you have not provided.",
  },
  {
    question: "Can LinkForge automatically publish to LinkedIn?",
    answer:
      "The current frontend includes content planning and creation workflows. Direct LinkedIn publishing and deeper LinkedIn integrations can be connected later where supported.",
  },
  {
    question: "Can I edit AI-generated content?",
    answer:
      "Yes. AI-generated recommendations and content should be treated as a starting point that you can review, edit, and personalize before using.",
  },
  {
    question: "Where can I manage my account?",
    answer:
      "Open Settings from the sidebar to manage account information, AI preferences, notifications, connected accounts, security, and your plan.",
  },
];

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-sm text-slate-500">
          <Link href="/" className="transition hover:text-slate-900">
            Dashboard
          </Link>
          <span>/</span>
          <span className="font-medium text-slate-900">Help</span>
        </div>

        {/* Hero */}
        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="relative px-6 py-10 text-center sm:px-10 sm:py-14">
            <div className="absolute left-1/2 top-0 size-64 -translate-x-1/2 rounded-full bg-blue-50 blur-3xl" />

            <div className="relative">
              <div className="mx-auto flex size-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <CircleHelp className="size-6" />
              </div>

              <h1 className="mt-5 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                How can we help?
              </h1>

              <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                Find answers, learn how LinkForge works, or get help with your
                professional branding workflow.
              </p>

              <div className="mx-auto mt-6 max-w-xl">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
                  <input
                    type="search"
                    placeholder="Search help articles..."
                    className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular topics */}
        <section className="mt-6">
          <div className="mb-4">
            <h2 className="font-semibold text-slate-900">
              Popular topics
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Start with the areas people use most.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {popularTopics.map((topic) => {
              const Icon = topic.icon;

              return (
                <button
                  key={topic.title}
                  type="button"
                  className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-600 transition group-hover:bg-blue-50 group-hover:text-blue-600">
                    <Icon className="size-4" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-semibold text-slate-900">
                      {topic.title}
                    </h3>
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      {topic.description}
                    </p>
                  </div>

                  <ChevronRight className="mt-1 size-4 shrink-0 text-slate-300 transition group-hover:text-slate-500" />
                </button>
              );
            })}
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-8 rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 px-6 py-5">
            <div className="flex items-center gap-2">
              <CircleHelp className="size-4 text-slate-500" />
              <h2 className="font-semibold text-slate-900">
                Frequently asked questions
              </h2>
            </div>
            <p className="mt-1 text-sm text-slate-500">
              Quick answers to common LinkForge questions.
            </p>
          </div>

          <div className="divide-y divide-slate-100">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group px-6 py-5"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <span className="text-sm font-semibold text-slate-800">
                    {faq.question}
                  </span>

                  <ChevronDown className="size-4 shrink-0 text-slate-400 transition group-open:rotate-180" />
                </summary>

                <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-500">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* Learn + security */}
        <section className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex size-10 items-center justify-center rounded-lg bg-violet-50 text-violet-600">
              <Sparkles className="size-4" />
            </div>

            <h2 className="mt-4 font-semibold text-slate-900">
              Build a stronger professional brand
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Start with your profile, strengthen your positioning, then use
              Post Forge, Project Forge, Calendar, and AI Copilot to maintain
              a consistent professional presence.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <Link
                href="/profile/analysis"
                className="inline-flex items-center gap-2 rounded-lg bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Analyze Profile
                <ArrowRight className="size-4" />
              </Link>

              <Link
                href="/copilot"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Open Copilot
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex size-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
              <ShieldCheck className="size-4" />
            </div>

            <h2 className="mt-4 font-semibold text-slate-900">
              Your professional context matters
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              LinkForge is designed to help you communicate your real
              experience more clearly. Review AI suggestions before using them
              and add real evidence whenever possible.
            </p>

            <Link
              href="/settings"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-700"
            >
              Review AI preferences
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </section>

        {/* Contact support */}
        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <div className="flex items-center gap-2">
                <MessageCircle className="size-4 text-blue-600" />
                <h2 className="font-semibold text-slate-900">
                  Still need help?
                </h2>
              </div>

              <p className="mt-1 text-sm leading-6 text-slate-500">
                We&apos;re here to help you get the most out of LinkForge AI.
              </p>
            </div>

            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              <Mail className="size-4" />
              Contact support
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}