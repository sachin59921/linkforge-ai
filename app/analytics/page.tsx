"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  ChevronDown,
  Eye,
  FileText,
  MessageCircle,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  WandSparkles,
} from "lucide-react";

const metrics = [
  {
    label: "Forge Score",
    value: "78",
    change: "+6",
    description: "vs. last month",
    icon: Target,
    positive: true,
  },
  {
    label: "Profile views",
    value: "1,284",
    change: "+18%",
    description: "vs. last month",
    icon: Eye,
    positive: true,
  },
  {
    label: "Post impressions",
    value: "8.6K",
    change: "+24%",
    description: "vs. last month",
    icon: BarChart3,
    positive: true,
  },
  {
    label: "Engagement rate",
    value: "5.8%",
    change: "+1.2%",
    description: "vs. last month",
    icon: MessageCircle,
    positive: true,
  },
];

const performance = [
  { label: "Week 1", value: 42 },
  { label: "Week 2", value: 56 },
  { label: "Week 3", value: 68 },
  { label: "Week 4", value: 61 },
  { label: "Week 5", value: 78 },
  { label: "Week 6", value: 86 },
  { label: "Week 7", value: 74 },
  { label: "Week 8", value: 92 },
];

const contentPerformance = [
  {
    title: "3 lessons from building a product",
    type: "Insight",
    impressions: "2,840",
    engagement: "7.4%",
    score: 91,
  },
  {
    title: "What I learned building with AI",
    type: "Story",
    impressions: "2,140",
    engagement: "6.8%",
    score: 87,
  },
  {
    title: "Behind the scenes: AI Content Platform",
    type: "Project",
    impressions: "1,760",
    engagement: "5.9%",
    score: 82,
  },
  {
    title: "The biggest mistake I made early",
    type: "Story",
    impressions: "1,420",
    engagement: "4.7%",
    score: 76,
  },
];

const brandSignals = [
  {
    label: "Expertise",
    score: 84,
    description: "Strong technical and product positioning.",
  },
  {
    label: "Clarity",
    score: 76,
    description: "Your positioning is becoming more focused.",
  },
  {
    label: "Consistency",
    score: 82,
    description: "Your publishing rhythm is improving.",
  },
  {
    label: "Authority",
    score: 71,
    description: "More proof and measurable outcomes can help.",
  },
];

const recommendations = [
  {
    title: "Publish more educational content",
    description:
      "Your educational and insight-based posts are generating stronger engagement.",
    impact: "High impact",
    icon: Sparkles,
  },
  {
    title: "Add measurable project outcomes",
    description:
      "Specific results can strengthen your credibility and authority signals.",
    impact: "High impact",
    icon: TrendingUp,
  },
  {
    title: "Strengthen your profile CTA",
    description:
      "Make it easier for profile visitors to understand what you can help them with.",
    impact: "Medium impact",
    icon: Target,
  },
];

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-sm text-slate-500">
          <Link href="/" className="transition hover:text-slate-900">
            Dashboard
          </Link>
          <span>/</span>
          <span className="font-medium text-slate-900">Analytics</span>
        </div>

        {/* Header */}
        <section className="mb-8 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex size-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <BarChart3 className="size-5" />
              </div>

              <div>
                <h1 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                  Brand Analytics
                </h1>
                <p className="mt-1 text-sm text-slate-500">
                  Understand how your professional presence is performing and
                  where to improve.
                </p>
              </div>
            </div>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
          >
            Last 30 days
            <ChevronDown className="size-4" />
          </button>
        </section>

        {/* Metric cards */}
        <section className="mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {metrics.map((metric) => {
            const Icon = metric.icon;

            return (
              <div
                key={metric.label}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div className="flex size-9 items-center justify-center rounded-lg bg-slate-50 text-slate-500">
                    <Icon className="size-4" />
                  </div>

                  <div className="flex items-center gap-1 text-xs font-semibold text-emerald-600">
                    <ArrowUpRight className="size-3.5" />
                    {metric.change}
                  </div>
                </div>

                <p className="mt-4 text-sm font-medium text-slate-500">
                  {metric.label}
                </p>

                <div className="mt-1 flex items-end gap-2">
                  <span className="text-2xl font-bold tracking-tight text-slate-950">
                    {metric.value}
                  </span>
                  <span className="mb-0.5 text-xs text-slate-400">
                    {metric.description}
                  </span>
                </div>
              </div>
            );
          })}
        </section>

        {/* Main analytics */}
        <section className="mb-6 grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
          {/* Performance chart */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
              <div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="size-4 text-blue-600" />
                  <h2 className="font-semibold text-slate-900">
                    Brand performance
                  </h2>
                </div>

                <p className="mt-1 text-sm text-slate-500">
                  Your overall professional presence score over the selected
                  period.
                </p>
              </div>

              <div className="text-right">
                <p className="text-2xl font-bold text-slate-950">+24%</p>
                <p className="text-xs text-slate-400">growth</p>
              </div>
            </div>

            {/* Chart */}
            <div className="mt-8">
              <div className="flex h-64 items-end gap-2 sm:gap-4">
                {performance.map((item) => (
                  <div
                    key={item.label}
                    className="flex h-full flex-1 flex-col justify-end"
                  >
                    <div className="group relative flex h-full items-end">
                      <div
                        className="w-full rounded-t-lg bg-blue-600/90 transition hover:bg-blue-700"
                        style={{ height: `${item.value}%` }}
                      >
                        <div className="absolute -top-8 left-1/2 hidden -translate-x-1/2 rounded-md bg-slate-950 px-2 py-1 text-[10px] font-semibold text-white group-hover:block">
                          {item.value}
                        </div>
                      </div>
                    </div>

                    <span className="mt-3 text-center text-[10px] text-slate-400">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4 text-xs text-slate-400">
              <span>Brand activity</span>
              <span>Higher is better</span>
            </div>
          </div>

          {/* Forge score */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-semibold text-slate-900">
                  Forge Score
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Overall brand strength
                </p>
              </div>

              <WandSparkles className="size-4 text-violet-500" />
            </div>

            <div className="mt-8 flex justify-center">
              <div className="relative flex size-44 items-center justify-center rounded-full bg-slate-50">
                <div className="absolute inset-3 rounded-full border-[10px] border-slate-100" />
                <div className="absolute inset-3 rounded-full border-[10px] border-blue-600 border-b-transparent border-l-transparent rotate-[-42deg]" />

                <div className="text-center">
                  <div className="text-4xl font-bold text-slate-950">78</div>
                  <div className="text-xs font-medium text-slate-400">
                    out of 100
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-7 rounded-xl bg-blue-50 p-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-blue-600" />
                <p className="text-sm font-semibold text-slate-900">
                  Strong progress
                </p>
              </div>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                Your profile and content are moving in the right direction.
                Focus on authority and measurable proof next.
              </p>
            </div>

            <Link
              href="/profile/analysis"
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Improve Score
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </section>

        {/* Brand signals */}
        <section className="mb-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-6">
            <h2 className="font-semibold text-slate-900">
              Personal brand signals
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              How LinkForge currently evaluates the strength of your
              professional positioning.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {brandSignals.map((signal) => (
              <div key={signal.label}>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-slate-700">
                    {signal.label}
                  </span>
                  <span className="text-sm font-bold text-slate-900">
                    {signal.score}
                  </span>
                </div>

                <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-blue-600"
                    style={{ width: `${signal.score}%` }}
                  />
                </div>

                <p className="mt-2 text-xs leading-5 text-slate-500">
                  {signal.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Content performance */}
        <section className="mb-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex flex-col justify-between gap-3 border-b border-slate-100 px-6 py-5 sm:flex-row sm:items-center">
            <div>
              <h2 className="font-semibold text-slate-900">
                Content performance
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Posts generating the strongest signals.
              </p>
            </div>

            <Link
              href="/posts"
              className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 transition hover:text-blue-700"
            >
              View all posts
              <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="hidden overflow-x-auto md:block">
            <table className="w-full min-w-[700px]">
              <thead>
                <tr className="border-b border-slate-100 text-left">
                  <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Post
                  </th>
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Type
                  </th>
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Impressions
                  </th>
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Engagement
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Score
                  </th>
                </tr>
              </thead>

              <tbody>
                {contentPerformance.map((post) => (
                  <tr
                    key={post.title}
                    className="border-b border-slate-100 last:border-b-0"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-slate-500">
                          <FileText className="size-4" />
                        </div>
                        <span className="max-w-xs text-sm font-semibold text-slate-700">
                          {post.title}
                        </span>
                      </div>
                    </td>

                    <td className="px-4 py-4 text-sm text-slate-500">
                      {post.type}
                    </td>

                    <td className="px-4 py-4 text-sm font-medium text-slate-700">
                      {post.impressions}
                    </td>

                    <td className="px-4 py-4 text-sm font-medium text-slate-700">
                      {post.engagement}
                    </td>

                    <td className="px-6 py-4 text-right">
                      <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-bold text-blue-700">
                        {post.score}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="divide-y divide-slate-100 md:hidden">
            {contentPerformance.map((post) => (
              <div key={post.title} className="p-5">
                <div className="flex items-start gap-3">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-slate-500">
                    <FileText className="size-4" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-semibold leading-5 text-slate-800">
                      {post.title}
                    </h3>

                    <p className="mt-1 text-xs text-slate-400">
                      {post.type}
                    </p>
                  </div>

                  <span className="rounded-full bg-blue-50 px-2 py-1 text-xs font-bold text-blue-700">
                    {post.score}
                  </span>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-lg bg-slate-50 p-3">
                    <p className="text-[10px] uppercase tracking-wide text-slate-400">
                      Impressions
                    </p>
                    <p className="mt-1 text-sm font-semibold text-slate-800">
                      {post.impressions}
                    </p>
                  </div>

                  <div className="rounded-lg bg-slate-50 p-3">
                    <p className="text-[10px] uppercase tracking-wide text-slate-400">
                      Engagement
                    </p>
                    <p className="mt-1 text-sm font-semibold text-slate-800">
                      {post.engagement}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recommendations */}
        <section className="mb-6 grid gap-6 lg:grid-cols-[1fr_0.8fr]">
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-100 px-6 py-5">
              <div className="flex items-center gap-2">
                <Sparkles className="size-4 text-violet-500" />
                <h2 className="font-semibold text-slate-900">
                  AI recommendations
                </h2>
              </div>

              <p className="mt-1 text-sm text-slate-500">
                Highest-value opportunities based on your current performance.
              </p>
            </div>

            <div className="divide-y divide-slate-100">
              {recommendations.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="p-5">
                    <div className="flex gap-4">
                      <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-violet-50 text-violet-600">
                        <Icon className="size-4" />
                      </div>

                      <div className="flex-1">
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

                      <ArrowRight className="mt-1 size-4 shrink-0 text-slate-300" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Audience */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2">
              <Users className="size-4 text-slate-500" />
              <h2 className="font-semibold text-slate-900">
                Audience growth
              </h2>
            </div>

            <p className="mt-1 text-sm text-slate-500">
              Your professional audience is trending upward.
            </p>

            <div className="mt-7 flex items-end gap-2">
              <span className="text-4xl font-bold tracking-tight text-slate-950">
                1,842
              </span>
              <span className="mb-1 flex items-center gap-1 text-xs font-semibold text-emerald-600">
                <ArrowUpRight className="size-3.5" />
                12.4%
              </span>
            </div>

            <div className="mt-6 flex items-end gap-1">
              {[30, 42, 35, 55, 48, 64, 58, 72, 68, 84, 76, 92].map(
                (height, index) => (
                  <div
                    key={index}
                    className="flex-1 rounded-t-sm bg-blue-100"
                    style={{ height: `${height}px` }}
                  />
                ),
              )}
            </div>

            <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
              <span>30 days ago</span>
              <span>Today</span>
            </div>

            <div className="mt-6 rounded-xl bg-slate-50 p-4">
              <div className="flex items-center gap-2">
                <Users className="size-4 text-blue-600" />
                <p className="text-xs font-semibold text-slate-700">
                  Audience signal
                </p>
              </div>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                Your audience is growing alongside your publishing consistency.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
            <div>
              <div className="flex items-center gap-2">
                <WandSparkles className="size-4 text-blue-600" />
                <h2 className="font-semibold text-slate-900">
                  Want to improve your brand score?
                </h2>
              </div>

              <p className="mt-1 text-sm text-slate-500">
                Review your profile and turn these insights into concrete
                improvements.
              </p>
            </div>

            <Link
              href="/profile/analysis"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Analyze Profile
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}