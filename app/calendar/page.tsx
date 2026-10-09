"use client";

import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock3,
  FileText,
  Plus,
  Sparkles,
  Target,
} from "lucide-react";

const days = [
  { day: "Mon", date: 1 },
  { day: "Tue", date: 2 },
  { day: "Wed", date: 3 },
  { day: "Thu", date: 4 },
  { day: "Fri", date: 5 },
  { day: "Sat", date: 6 },
  { day: "Sun", date: 7 },
  { day: "Mon", date: 8 },
  { day: "Tue", date: 9 },
  { day: "Wed", date: 10 },
  { day: "Thu", date: 11 },
  { day: "Fri", date: 12 },
  { day: "Sat", date: 13 },
  { day: "Sun", date: 14 },
  { day: "Mon", date: 15 },
  { day: "Tue", date: 16 },
  { day: "Wed", date: 17 },
  { day: "Thu", date: 18 },
  { day: "Fri", date: 19 },
  { day: "Sat", date: 20 },
  { day: "Sun", date: 21 },
  { day: "Mon", date: 22 },
  { day: "Tue", date: 23 },
  { day: "Wed", date: 24 },
  { day: "Thu", date: 25 },
  { day: "Fri", date: 26 },
  { day: "Sat", date: 27 },
  { day: "Sun", date: 28 },
  { day: "Mon", date: 29 },
  { day: "Tue", date: 30 },
];

const posts = [
  {
    date: 3,
    time: "09:00",
    title: "What I learned building with AI",
    type: "Story",
    status: "Draft",
  },
  {
    date: 8,
    time: "11:30",
    title: "3 lessons from building a product",
    type: "Insight",
    status: "Scheduled",
  },
  {
    date: 12,
    time: "09:30",
    title: "Behind the scenes: AI Content Platform",
    type: "Project",
    status: "Draft",
  },
  {
    date: 17,
    time: "12:00",
    title: "The biggest mistake I made early",
    type: "Story",
    status: "Scheduled",
  },
  {
    date: 23,
    time: "10:00",
    title: "How I approach product building",
    type: "Thought Leadership",
    status: "Draft",
  },
  {
    date: 26,
    time: "11:00",
    title: "A practical framework for AI products",
    type: "Educational",
    status: "Scheduled",
  },
];

const upcoming = [
  {
    date: "Sep 8",
    time: "11:30 AM",
    title: "3 lessons from building a product",
    type: "Insight",
  },
  {
    date: "Sep 17",
    time: "12:00 PM",
    title: "The biggest mistake I made early",
    type: "Story",
  },
  {
    date: "Sep 26",
    time: "11:00 AM",
    title: "A practical framework for AI products",
    type: "Educational",
  },
];

export default function CalendarPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-sm text-slate-500">
          <Link href="/" className="transition hover:text-slate-900">
            Dashboard
          </Link>
          <span>/</span>
          <span className="font-medium text-slate-900">Calendar</span>
        </div>

        {/* Header */}
        <section className="mb-8 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex size-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <CalendarDays className="size-5" />
              </div>

              <div>
                <h1 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                  Content Calendar
                </h1>
                <p className="mt-1 text-sm text-slate-500">
                  Plan, organize, and maintain a consistent LinkedIn presence.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/posts"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
            >
              <FileText className="size-4" />
              My Posts
            </Link>

            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              <Plus className="size-4" />
              Create Post
            </button>
          </div>
        </section>

        {/* Stats */}
        <section className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              label: "Planned posts",
              value: "6",
              detail: "This month",
              icon: FileText,
            },
            {
              label: "Scheduled",
              value: "3",
              detail: "Ready to publish",
              icon: CheckCircle2,
            },
            {
              label: "Drafts",
              value: "3",
              detail: "Need review",
              icon: Clock3,
            },
            {
              label: "Consistency",
              value: "82%",
              detail: "Strong momentum",
              icon: Target,
            },
          ].map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-slate-500">
                    {stat.label}
                  </p>
                  <Icon className="size-4 text-slate-400" />
                </div>

                <div className="mt-3 flex items-end gap-2">
                  <span className="text-2xl font-bold text-slate-950">
                    {stat.value}
                  </span>
                  <span className="mb-0.5 text-xs text-slate-400">
                    {stat.detail}
                  </span>
                </div>
              </div>
            );
          })}
        </section>

        {/* AI recommendation */}
        <section className="mb-6 rounded-2xl border border-violet-100 bg-gradient-to-r from-violet-50 to-white p-6 shadow-sm">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="flex gap-4">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-violet-600">
                <Sparkles className="size-5" />
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-900">
                  AI content recommendation
                </p>
                <p className="mt-1 max-w-3xl text-sm leading-6 text-slate-600">
                  Your calendar has good variety, but there is a gap between
                  Sep 12 and Sep 17. Consider adding a short educational post
                  based on one of your recent project lessons.
                </p>
              </div>
            </div>

            <button
              type="button"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Generate Idea
              <ArrowRight className="size-4" />
            </button>
          </div>
        </section>

        {/* Calendar */}
        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          {/* Calendar toolbar */}
          <div className="flex flex-col justify-between gap-4 border-b border-slate-100 px-5 py-5 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-lg font-bold text-slate-950">
                September 2026
              </h2>
              <p className="mt-1 text-xs text-slate-500">
                Plan your content for the month.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                className="flex size-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition hover:bg-slate-50"
              >
                <ChevronLeft className="size-4" />
              </button>

              <button
                type="button"
                className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Today
              </button>

              <button
                type="button"
                className="flex size-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition hover:bg-slate-50"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>

          {/* Week header */}
          <div className="grid grid-cols-7 border-b border-slate-100">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
              (day) => (
                <div
                  key={day}
                  className="border-r border-slate-100 px-2 py-3 text-center text-[11px] font-semibold uppercase tracking-wide text-slate-400 last:border-r-0"
                >
                  {day}
                </div>
              ),
            )}
          </div>

          {/* Days */}
          <div className="grid grid-cols-7">
            {days.map((item) => {
              const dayPosts = posts.filter((post) => post.date === item.date);

              return (
                <div
                  key={item.date}
                  className="min-h-[145px] border-b border-r border-slate-100 p-2 last:border-r-0 sm:min-h-[165px]"
                >
                  <div className="mb-2 flex items-center justify-between">
                    <span
                      className={`flex size-7 items-center justify-center rounded-full text-xs font-semibold ${
                        item.date === 19
                          ? "bg-slate-950 text-white"
                          : "text-slate-600"
                      }`}
                    >
                      {item.date}
                    </span>

                    {dayPosts.length > 0 && (
                      <span className="text-[10px] font-medium text-slate-400">
                        {dayPosts.length} post
                      </span>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    {dayPosts.map((post) => (
                      <button
                        key={`${post.date}-${post.title}`}
                        type="button"
                        className={`w-full rounded-lg border p-2 text-left transition hover:shadow-sm ${
                          post.status === "Scheduled"
                            ? "border-blue-100 bg-blue-50"
                            : "border-slate-200 bg-slate-50"
                        }`}
                      >
                        <div className="mb-1 flex items-center gap-1.5">
                          <span
                            className={`size-1.5 rounded-full ${
                              post.status === "Scheduled"
                                ? "bg-blue-600"
                                : "bg-slate-400"
                            }`}
                          />
                          <span className="text-[10px] font-medium text-slate-500">
                            {post.time}
                          </span>
                        </div>

                        <p className="line-clamp-2 text-[11px] font-semibold leading-4 text-slate-700">
                          {post.title}
                        </p>

                        <p className="mt-1 text-[10px] text-slate-400">
                          {post.type}
                        </p>
                      </button>
                    ))}
                  </div>

                  {dayPosts.length === 0 && (
                    <button
                      type="button"
                      className="mt-2 flex w-full items-center justify-center rounded-lg border border-dashed border-slate-200 py-2 text-slate-300 opacity-0 transition hover:border-slate-300 hover:text-slate-500 focus:opacity-100 group-hover:opacity-100"
                    >
                      <Plus className="size-3.5" />
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Bottom section */}
        <section className="mt-6 grid gap-6 lg:grid-cols-[1fr_0.85fr]">
          {/* Upcoming */}
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-100 px-6 py-5">
              <h2 className="font-semibold text-slate-900">
                Upcoming posts
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Your next scheduled content.
              </p>
            </div>

            <div className="divide-y divide-slate-100">
              {upcoming.map((post) => (
                <div
                  key={post.title}
                  className="flex items-center gap-4 px-6 py-4"
                >
                  <div className="flex size-11 shrink-0 flex-col items-center justify-center rounded-lg bg-slate-50">
                    <span className="text-[10px] font-semibold uppercase text-slate-400">
                      {post.date.split(" ")[0]}
                    </span>
                    <span className="text-sm font-bold text-slate-900">
                      {post.date.split(" ")[1]}
                    </span>
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="truncate text-sm font-semibold text-slate-800">
                      {post.title}
                    </h3>
                    <div className="mt-1 flex items-center gap-2 text-xs text-slate-400">
                      <span>{post.time}</span>
                      <span>•</span>
                      <span>{post.type}</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="hidden items-center gap-1 text-xs font-semibold text-slate-500 transition hover:text-slate-900 sm:flex"
                  >
                    Edit
                    <ArrowRight className="size-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Consistency */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2">
              <Target className="size-4 text-blue-600" />
              <h2 className="font-semibold text-slate-900">
                Publishing consistency
              </h2>
            </div>

            <p className="mt-1 text-sm text-slate-500">
              Your current posting rhythm.
            </p>

            <div className="mt-6 flex items-end gap-2">
              <span className="text-4xl font-bold tracking-tight text-slate-950">
                82%
              </span>
              <span className="mb-1 text-sm text-slate-400">
                consistency score
              </span>
            </div>

            <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
              <div className="h-full w-[82%] rounded-full bg-blue-600" />
            </div>

            <div className="mt-6 space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-500">Posts this month</span>
                <span className="font-semibold text-slate-900">6</span>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-500">Target</span>
                <span className="font-semibold text-slate-900">8</span>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-500">Recommended frequency</span>
                <span className="font-semibold text-slate-900">
                  2 / week
                </span>
              </div>
            </div>

            <div className="mt-6 rounded-xl bg-slate-50 p-4">
              <p className="text-xs font-semibold text-slate-700">
                AI recommendation
              </p>
              <p className="mt-1 text-xs leading-5 text-slate-500">
                Add two more educational or experience-based posts this month
                to maintain a stronger publishing rhythm.
              </p>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
            <div>
              <div className="flex items-center gap-2">
                <Sparkles className="size-4 text-violet-500" />
                <h2 className="font-semibold text-slate-900">
                  Need ideas for your calendar?
                </h2>
              </div>

              <p className="mt-1 text-sm text-slate-500">
                Let LinkForge AI generate content ideas based on your
                professional brand.
              </p>
            </div>

            <Link
              href="/copilot"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Ask AI Copilot
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}