"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  FileText,
  Lightbulb,
  Pencil,
  Sparkles,
  Target,
  TrendingUp,
  WandSparkles,
} from "lucide-react";

const improvements = [
  {
    title: "Strengthen project positioning",
    description:
      "Make the project immediately understandable by leading with the problem, audience, and value created.",
    impact: "High impact",
    icon: Target,
  },
  {
    title: "Add measurable outcomes",
    description:
      "Include real metrics such as users, performance improvements, adoption, revenue, or delivery time when available.",
    impact: "High impact",
    icon: TrendingUp,
  },
  {
    title: "Clarify your contribution",
    description:
      "Explain what you personally designed, built, improved, or led instead of describing only the product.",
    impact: "Medium impact",
    icon: Pencil,
  },
];

const strengths = [
  "Clear technical scope",
  "Strong product-building signal",
  "Relevant AI positioning",
  "Good technology coverage",
];

export default function ProjectOptimizePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-sm text-slate-500">
          <Link
            href="/projects"
            className="transition hover:text-slate-900"
          >
            Projects
          </Link>
          <span>/</span>
          <Link
            href="/projects/project"
            className="transition hover:text-slate-900"
          >
            AI Content Platform
          </Link>
          <span>/</span>
          <span className="font-medium text-slate-900">Optimize</span>
        </div>

        {/* Header */}
        <section className="mb-8 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <Link
              href="/projects/project"
              className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-slate-900"
            >
              <ArrowLeft className="size-4" />
              Back to project
            </Link>

            <div className="flex items-center gap-3">
              <div className="flex size-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <WandSparkles className="size-5" />
              </div>

              <div>
                <h1 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                  AI Project Optimizer
                </h1>
                <p className="mt-1 text-sm text-slate-500">
                  Improve how your project communicates your skills, impact,
                  and professional value.
                </p>
              </div>
            </div>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
          >
            <Sparkles className="size-4" />
            Run AI Analysis
          </button>
        </section>

        {/* Score + insight */}
        <section className="mb-6 grid gap-5 lg:grid-cols-[280px_1fr]">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-center justify-between">
              <p className="text-sm font-semibold text-slate-700">
                Project Score
              </p>
              <Sparkles className="size-4 text-violet-500" />
            </div>

            <div className="flex items-end gap-2">
              <span className="text-5xl font-bold tracking-tight text-slate-950">
                86
              </span>
              <span className="mb-2 text-sm text-slate-400">/ 100</span>
            </div>

            <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-100">
              <div className="h-full w-[86%] rounded-full bg-blue-600" />
            </div>

            <p className="mt-3 text-sm text-slate-500">
              Strong foundation with room to improve positioning and measurable
              impact.
            </p>
          </div>

          <div className="rounded-2xl border border-violet-100 bg-gradient-to-br from-violet-50 to-white p-6 shadow-sm">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex size-9 items-center justify-center rounded-lg bg-violet-100 text-violet-600">
                <Sparkles className="size-4" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  AI Project Insight
                </p>
                <p className="text-xs text-slate-500">
                  Generated from your current project information
                </p>
              </div>
            </div>

            <p className="max-w-3xl text-sm leading-6 text-slate-600">
              Your project already communicates strong technical ability. The
              biggest opportunity is to shift the description from
              <span className="font-semibold text-slate-900">
                {" "}
                what the platform is
              </span>{" "}
              toward
              <span className="font-semibold text-slate-900">
                {" "}
                what you built, why it mattered, and what changed because of
                your work.
              </span>
            </p>
          </div>
        </section>

        {/* Main workspace */}
        <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Left */}
          <div className="space-y-6">
            {/* Current project */}
            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="border-b border-slate-100 px-6 py-5">
                <div className="flex items-center gap-2">
                  <FileText className="size-4 text-slate-500" />
                  <h2 className="font-semibold text-slate-900">
                    Current project description
                  </h2>
                </div>
                <p className="mt-1 text-sm text-slate-500">
                  The description currently used for this project.
                </p>
              </div>

              <div className="p-6">
                <div className="rounded-xl bg-slate-50 p-5 text-sm leading-7 text-slate-600">
                  AI Content Platform is an AI-powered platform designed to
                  help professionals create, organize, and improve content.
                  The platform combines AI generation, content workflows, and
                  a modern dashboard to make professional content creation
                  easier and more efficient.
                </div>
              </div>
            </div>

            {/* Optimized description */}
            <div className="rounded-2xl border border-blue-100 bg-white shadow-sm">
              <div className="border-b border-blue-50 px-6 py-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <Sparkles className="size-4 text-blue-600" />
                      <h2 className="font-semibold text-slate-900">
                        AI-optimized description
                      </h2>
                    </div>
                    <p className="mt-1 text-sm text-slate-500">
                      A stronger version based on the information currently
                      available.
                    </p>
                  </div>

                  <span className="hidden rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 sm:block">
                    Recommended
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="rounded-xl border border-blue-100 bg-blue-50/40 p-5 text-sm leading-7 text-slate-700">
                  Built an AI-powered content platform focused on helping
                  professionals turn ideas into structured, high-quality
                  content. Designed the product experience around AI-assisted
                  generation, content organization, and repeatable workflows,
                  combining product thinking with modern web application
                  development.
                </div>

                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
                  >
                    <CheckCircle2 className="size-4" />
                    Apply Improvement
                  </button>

                  <button
                    type="button"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                  >
                    <Pencil className="size-4" />
                    Edit
                  </button>
                </div>
              </div>
            </div>

            {/* Missing information */}
            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="border-b border-slate-100 px-6 py-5">
                <div className="flex items-center gap-2">
                  <Lightbulb className="size-4 text-amber-500" />
                  <h2 className="font-semibold text-slate-900">
                    Information that could strengthen this project
                  </h2>
                </div>
                <p className="mt-1 text-sm text-slate-500">
                  Adding real evidence will make the project more credible.
                </p>
              </div>

              <div className="divide-y divide-slate-100">
                {[
                  "What measurable result did the platform achieve?",
                  "How many users, customers, or internal users interacted with it?",
                  "What performance, workflow, or productivity improvement did you create?",
                  "What part of the product did you personally own?",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 px-6 py-4"
                  >
                    <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-semibold text-slate-500">
                      ?
                    </span>
                    <p className="text-sm leading-6 text-slate-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="space-y-6">
            {/* Strengths */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="font-semibold text-slate-900">
                What is already strong
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Areas your project communicates effectively.
              </p>

              <div className="mt-5 space-y-3">
                {strengths.map((strength) => (
                  <div
                    key={strength}
                    className="flex items-center gap-3 rounded-lg bg-slate-50 px-3 py-3"
                  >
                    <CheckCircle2 className="size-4 shrink-0 text-blue-600" />
                    <span className="text-sm font-medium text-slate-700">
                      {strength}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Improvements */}
            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="border-b border-slate-100 px-6 py-5">
                <h2 className="font-semibold text-slate-900">
                  Recommended improvements
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Prioritized changes to increase project strength.
                </p>
              </div>

              <div className="divide-y divide-slate-100">
                {improvements.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.title} className="p-5">
                      <div className="flex gap-3">
                        <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                          <Icon className="size-4" />
                        </div>

                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <h3 className="text-sm font-semibold text-slate-900">
                              {item.title}
                            </h3>
                            <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-500">
                              {item.impact}
                            </span>
                          </div>

                          <p className="mt-2 text-sm leading-6 text-slate-500">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Score breakdown */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="font-semibold text-slate-900">
                Optimization breakdown
              </h2>

              <div className="mt-5 space-y-4">
                {[
                  ["Positioning", 91],
                  ["Description", 84],
                  ["Impact", 72],
                  ["Skills", 89],
                  ["Credibility", 82],
                ].map(([label, score]) => (
                  <div key={label}>
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className="font-medium text-slate-600">
                        {label}
                      </span>
                      <span className="font-semibold text-slate-900">
                        {score}
                      </span>
                    </div>

                    <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">
                      <div
                        className="h-full rounded-full bg-blue-600"
                        style={{ width: `${score}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
            <div>
              <div className="flex items-center gap-2">
                <Sparkles className="size-4 text-violet-500" />
                <h2 className="font-semibold text-slate-900">
                  Ready to strengthen this project?
                </h2>
              </div>
              <p className="mt-1 text-sm text-slate-500">
                Apply the recommended improvements and make this project
                stronger for your LinkedIn profile.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/projects/project"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Review Project
                <ArrowLeft className="size-4" />
              </Link>

              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Apply All Improvements
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}