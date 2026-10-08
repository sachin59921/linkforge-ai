"use client";

import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Lightbulb,
  Sparkles,
  Target,
  TrendingUp,
  UserRound,
  WandSparkles,
} from "lucide-react";
import Link from "next/link";

import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";

const sections = [
  {
    title: "Headline",
    score: 82,
    status: "Strong",
    description:
      "Your headline communicates your role, but it could do more to highlight your unique positioning and value.",
    recommendation:
      "Lead with the outcome you create rather than only describing your current role.",
  },
  {
    title: "About",
    score: 68,
    status: "Needs improvement",
    description:
      "Your About section has useful experience, but your story and professional positioning could be clearer.",
    recommendation:
      "Create a stronger opening statement, explain your expertise, and finish with a clear professional direction.",
  },
  {
    title: "Experience",
    score: 76,
    status: "Good",
    description:
      "Your experience demonstrates useful work, but several entries could better communicate impact.",
    recommendation:
      "Rewrite responsibilities as outcome-focused achievements and add measurable results where available.",
  },
  {
    title: "Education",
    score: 90,
    status: "Excellent",
    description:
      "Your education section is clear and provides useful supporting context for your professional profile.",
    recommendation:
      "Keep the section concise and consider adding relevant coursework, projects, or achievements when useful.",
  },
];

const priorities = [
  {
    number: "01",
    title: "Clarify your professional positioning",
    description:
      "Make it immediately clear what you do, who you help, and what you want to be known for.",
    impact: "High impact",
  },
  {
    number: "02",
    title: "Strengthen your About section",
    description:
      "Turn your experience into a concise professional story that gives visitors a reason to remember you.",
    impact: "High impact",
  },
  {
    number: "03",
    title: "Add stronger evidence of impact",
    description:
      "Where possible, support your experience with outcomes, metrics, projects, or concrete examples.",
    impact: "Medium impact",
  },
];

export default function ProfileAnalysisPage() {
  const overallScore = 72;

  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-950">
      <Sidebar />

      <div className="flex min-w-0 flex-1 flex-col">
        <Header />

        <main className="flex-1">
          <section className="mx-auto w-full max-w-7xl p-5 sm:p-8">
            {/* Breadcrumb */}
            <div className="mb-6 flex items-center gap-2 text-sm">
              <Link
                href="/profile"
                className="flex items-center gap-1.5 text-slate-400 transition hover:text-slate-700"
              >
                <ArrowLeft className="size-4" />
                Profile Forge
              </Link>

              <span className="text-slate-300">/</span>

              <span className="text-slate-600">Profile Analysis</span>
            </div>

            {/* Header */}
            <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <div className="mb-3 flex items-center gap-2 text-sm font-medium text-blue-600">
                  <WandSparkles className="size-4" />
                  AI Profile Analysis
                </div>

                <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  Profile Analysis
                </h1>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
                  Understand what is working, identify gaps, and get practical
                  recommendations to strengthen your LinkedIn presence.
                </p>
              </div>

              <Link
                href="/profile"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50"
              >
                <UserRound className="size-4" />
                Edit Profile
              </Link>
            </div>

            {/* Score + insight */}
            <div className="grid gap-5 lg:grid-cols-[280px_minmax(0,1fr)]">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-500">
                      Forge Score
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      Overall profile strength
                    </p>
                  </div>

                  <div className="rounded-lg bg-blue-50 p-2.5 text-blue-600">
                    <TrendingUp className="size-5" />
                  </div>
                </div>

                <div className="mt-7 flex items-end gap-2">
                  <span className="text-5xl font-semibold tracking-tight">
                    {overallScore}
                  </span>
                  <span className="mb-1.5 text-sm text-slate-400">/100</span>
                </div>

                <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-blue-600"
                    style={{ width: `${overallScore}%` }}
                  />
                </div>

                <div className="mt-4 flex items-center justify-between text-xs">
                  <span className="font-medium text-slate-600">
                    Good foundation
                  </span>
                  <span className="text-slate-400">Top opportunity: About</span>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-2xl border border-blue-100 bg-blue-50/60 p-6 shadow-sm">
                <div className="absolute -right-10 -top-10 size-36 rounded-full bg-blue-100/60 blur-2xl" />

                <div className="relative">
                  <div className="mb-4 flex items-center gap-2">
                    <div className="rounded-lg bg-white p-2 text-blue-600 shadow-sm">
                      <Sparkles className="size-5" />
                    </div>

                    <span className="text-sm font-semibold text-blue-700">
                      AI Recommendation
                    </span>
                  </div>

                  <h2 className="text-xl font-semibold tracking-tight text-slate-900">
                    Clarify what you want to be known for
                  </h2>

                  <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                    Your profile has solid experience, but your positioning can
                    be sharper. A clearer professional narrative will help
                    visitors quickly understand your expertise and the value
                    you bring.
                  </p>

                  <div className="mt-5 flex flex-wrap gap-3">
                    <button
                      type="button"
                      className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700"
                    >
                      Improve positioning
                      <ArrowRight className="size-4" />
                    </button>

                    <Link
                      href="/profile"
                      className="inline-flex items-center gap-2 rounded-lg border border-blue-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-blue-50"
                    >
                      Review profile
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Section analysis */}
            <div className="mt-8">
              <div className="mb-4">
                <h2 className="text-lg font-semibold tracking-tight">
                  Section analysis
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  A breakdown of the sections that influence your profile
                  strength.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {sections.map((section) => (
                  <div
                    key={section.title}
                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-semibold text-slate-900">
                          {section.title}
                        </h3>

                        <span className="mt-1 inline-block text-xs font-medium text-slate-400">
                          {section.status}
                        </span>
                      </div>

                      <div className="text-right">
                        <span className="text-2xl font-semibold tracking-tight">
                          {section.score}
                        </span>
                        <span className="text-xs text-slate-400">/100</span>
                      </div>
                    </div>

                    <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-slate-100">
                      <div
                        className="h-full rounded-full bg-blue-600"
                        style={{ width: `${section.score}%` }}
                      />
                    </div>

                    <p className="mt-4 text-sm leading-6 text-slate-500">
                      {section.description}
                    </p>

                    <div className="mt-4 rounded-xl bg-slate-50 p-4">
                      <div className="flex gap-3">
                        <Lightbulb className="mt-0.5 size-4 shrink-0 text-blue-600" />

                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                            Recommendation
                          </p>

                          <p className="mt-1 text-sm leading-6 text-slate-600">
                            {section.recommendation}
                          </p>
                        </div>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 transition hover:text-blue-700"
                    >
                      Improve section
                      <ArrowRight className="size-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Priority improvements */}
            <div className="mt-8">
              <div className="mb-4">
                <h2 className="text-lg font-semibold tracking-tight">
                  Priority improvements
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Start with the changes most likely to improve your profile.
                </p>
              </div>

              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                {priorities.map((priority, index) => (
                  <div
                    key={priority.number}
                    className={`flex flex-col gap-4 p-5 sm:flex-row sm:items-center ${
                      index !== priorities.length - 1
                        ? "border-b border-slate-100"
                        : ""
                    }`}
                  >
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-sm font-semibold text-slate-500">
                      {priority.number}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-semibold text-slate-900">
                          {priority.title}
                        </h3>

                        <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-600">
                          {priority.impact}
                        </span>
                      </div>

                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        {priority.description}
                      </p>
                    </div>

                    <button
                      type="button"
                      className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                    >
                      Work on it
                      <ArrowRight className="size-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Completion */}
            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex gap-4">
                  <div className="rounded-xl bg-emerald-50 p-3 text-emerald-600">
                    <CheckCircle2 className="size-5" />
                  </div>

                  <div>
                    <h2 className="font-semibold text-slate-900">
                      Your profile has a strong foundation
                    </h2>

                    <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-500">
                      Focus on positioning, your About section, and measurable
                      impact to move your profile from good to standout.
                    </p>
                  </div>
                </div>

                <Link
                  href="/profile"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800"
                >
                  Back to Profile
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-8 flex items-center justify-center gap-2 pb-4 text-xs text-slate-400">
              <Target className="size-3.5" />
              Keep improving one high-impact section at a time.
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}