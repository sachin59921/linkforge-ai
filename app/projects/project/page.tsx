"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  ExternalLink,
  FileText,
  Github,
  Lightbulb,
  Pencil,
  Sparkles,
  Target,
  TrendingUp,
  UserRound,
  WandSparkles,
} from "lucide-react";

import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";

const project = {
  title: "AI Content Platform",
  role: "Founder & Product Builder",
  score: 86,
  description:
    "An AI-powered platform designed to help professionals create, refine, and manage high-quality LinkedIn content.",
  technologies: ["Next.js", "TypeScript", "OpenAI", "PostgreSQL"],
  highlights: [
    "Designed an AI-assisted content workflow",
    "Built a modern full-stack product experience",
    "Focused the product around professional personal branding",
  ],
};

const scoreAreas = [
  {
    title: "Problem clarity",
    score: 90,
    description: "The problem and target user are easy to understand.",
  },
  {
    title: "Technical depth",
    score: 88,
    description: "The project demonstrates meaningful technical ownership.",
  },
  {
    title: "Impact",
    score: 72,
    description: "The outcome could be communicated with stronger evidence.",
  },
  {
    title: "Storytelling",
    score: 82,
    description: "The project has a solid narrative with room for refinement.",
  },
];

const improvements = [
  {
    title: "Add measurable outcomes",
    description:
      "Include real metrics such as users, performance improvements, adoption, time saved, revenue, or other measurable outcomes when available.",
  },
  {
    title: "Explain your decisions",
    description:
      "Highlight important technical or product decisions and explain why you made them.",
  },
  {
    title: "Show the transformation",
    description:
      "Describe the situation before the project and what became possible after you built it.",
  },
];

export default function ProjectPage() {
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
                href="/projects"
                className="flex items-center gap-1.5 text-slate-400 transition hover:text-slate-700"
              >
                <ArrowLeft className="size-4" />
                Projects
              </Link>

              <span className="text-slate-300">/</span>

              <span className="text-slate-600">Project Forge</span>
            </div>

            {/* Header */}
            <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div className="flex gap-4">
                <div className="hidden size-14 shrink-0 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-sm ring-1 ring-slate-200 sm:flex">
                  <BriefcaseBusiness className="size-6" />
                </div>

                <div>
                  <div className="mb-2 flex items-center gap-2 text-sm font-medium text-blue-600">
                    <Sparkles className="size-4" />
                    Project Forge
                  </div>

                  <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                    {project.title}
                  </h1>

                  <p className="mt-2 text-sm text-slate-500">
                    {project.role}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50"
                >
                  <Pencil className="size-4" />
                  Edit Project
                </button>

                <Link
                  href="/projects/project/optimize"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700"
                >
                  <WandSparkles className="size-4" />
                  Optimize with AI
                </Link>
              </div>
            </div>

            {/* Score overview */}
            <div className="grid gap-5 lg:grid-cols-[280px_minmax(0,1fr)]">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-500">
                      Project Score
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      Overall project strength
                    </p>
                  </div>

                  <div className="rounded-lg bg-blue-50 p-2.5 text-blue-600">
                    <TrendingUp className="size-5" />
                  </div>
                </div>

                <div className="mt-7 flex items-end gap-2">
                  <span className="text-5xl font-semibold tracking-tight">
                    {project.score}
                  </span>

                  <span className="mb-1.5 text-sm text-slate-400">/100</span>
                </div>

                <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-blue-600"
                    style={{ width: `${project.score}%` }}
                  />
                </div>

                <div className="mt-4 flex items-center justify-between text-xs">
                  <span className="font-medium text-slate-600">
                    Strong project
                  </span>

                  <span className="text-slate-400">14 points to 100</span>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-2xl border border-blue-100 bg-blue-50/60 p-6 shadow-sm">
                <div className="absolute -right-12 -top-12 size-40 rounded-full bg-blue-100/70 blur-3xl" />

                <div className="relative">
                  <div className="mb-4 flex items-center gap-2">
                    <div className="rounded-lg bg-white p-2 text-blue-600 shadow-sm">
                      <Sparkles className="size-5" />
                    </div>

                    <span className="text-sm font-semibold text-blue-700">
                      AI Project Assessment
                    </span>
                  </div>

                  <h2 className="text-xl font-semibold tracking-tight text-slate-900">
                    Strong technical story. Make the business impact clearer.
                  </h2>

                  <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
                    This project demonstrates ownership, technical ability, and
                    product thinking. The biggest opportunity is to show what
                    changed because you built it.
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className="rounded-full bg-white px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm">
                      Strong technical depth
                    </span>

                    <span className="rounded-full bg-white px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm">
                      Clear ownership
                    </span>

                    <span className="rounded-full bg-white px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm">
                      Impact opportunity
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Main content */}
            <div className="mt-8 grid gap-5 lg:grid-cols-[minmax(0,1fr)_320px]">
              <div className="space-y-5">
                {/* Overview */}
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="rounded-lg bg-slate-100 p-2 text-slate-600">
                      <FileText className="size-5" />
                    </div>

                    <div>
                      <h2 className="font-semibold">Project overview</h2>

                      <p className="text-xs text-slate-400">
                        How your project is currently presented
                      </p>
                    </div>
                  </div>

                  <p className="text-sm leading-7 text-slate-600">
                    {project.description}
                  </p>

                  <div className="mt-6">
                    <h3 className="text-sm font-semibold text-slate-900">
                      Key highlights
                    </h3>

                    <div className="mt-3 space-y-3">
                      {project.highlights.map((highlight) => (
                        <div
                          key={highlight}
                          className="flex items-start gap-3 text-sm text-slate-600"
                        >
                          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-blue-600" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Score breakdown */}
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="mb-5">
                    <h2 className="font-semibold">Project strength</h2>

                    <p className="mt-1 text-sm text-slate-500">
                      See how your project performs across the areas that
                      matter most for professional positioning.
                    </p>
                  </div>

                  <div className="space-y-5">
                    {scoreAreas.map((area) => (
                      <div key={area.title}>
                        <div className="flex items-center justify-between gap-4">
                          <div>
                            <p className="text-sm font-medium text-slate-800">
                              {area.title}
                            </p>

                            <p className="mt-1 text-xs text-slate-400">
                              {area.description}
                            </p>
                          </div>

                          <span className="shrink-0 text-sm font-semibold text-slate-700">
                            {area.score}
                          </span>
                        </div>

                        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-100">
                          <div
                            className="h-full rounded-full bg-blue-600"
                            style={{ width: `${area.score}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Improvement opportunities */}
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="mb-5">
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-blue-50 p-2 text-blue-600">
                        <Lightbulb className="size-5" />
                      </div>

                      <div>
                        <h2 className="font-semibold">
                          Improvement opportunities
                        </h2>

                        <p className="text-xs text-slate-400">
                          Recommended next steps
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {improvements.map((improvement, index) => (
                      <div
                        key={improvement.title}
                        className="flex gap-4 rounded-xl bg-slate-50 p-4"
                      >
                        <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-white text-xs font-semibold text-slate-500 shadow-sm">
                          0{index + 1}
                        </div>

                        <div>
                          <h3 className="text-sm font-semibold text-slate-900">
                            {improvement.title}
                          </h3>

                          <p className="mt-1 text-sm leading-6 text-slate-500">
                            {improvement.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <aside className="space-y-5">
                {/* Project details */}
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h2 className="font-semibold">Project details</h2>

                  <div className="mt-5 space-y-5">
                    <DetailItem
                      icon={<UserRound className="size-4" />}
                      label="Your role"
                      value={project.role}
                    />

                    <div>
                      <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
                        <BriefcaseBusiness className="size-4" />
                        Technologies
                      </div>

                      <div className="mt-3 flex flex-wrap gap-2">
                        {project.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="rounded-md bg-slate-100 px-2.5 py-1.5 text-xs font-medium text-slate-600"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Links */}
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h2 className="font-semibold">Project links</h2>

                  <div className="mt-4 space-y-2">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between rounded-lg border border-slate-200 px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                    >
                      <span className="flex items-center gap-2">
                        <ExternalLink className="size-4 text-slate-400" />
                        Live project
                      </span>

                      <ArrowRight className="size-4 text-slate-400" />
                    </button>

                    <button
                      type="button"
                      className="flex w-full items-center justify-between rounded-lg border border-slate-200 px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                    >
                      <span className="flex items-center gap-2">
                        <Github className="size-4 text-slate-400" />
                        GitHub repository
                      </span>

                      <ArrowRight className="size-4 text-slate-400" />
                    </button>
                  </div>
                </div>

                {/* Optimize CTA */}
                <div className="rounded-2xl border border-blue-100 bg-blue-50/60 p-5">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
                    <WandSparkles className="size-5" />
                  </div>

                  <h2 className="mt-4 font-semibold text-slate-900">
                    Ready to strengthen this project?
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Let AI rewrite your project story while keeping your real
                    experience and achievements at the center.
                  </p>

                  <Link
                    href="/projects/project/optimize"
                    className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
                  >
                    Optimize with AI
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </aside>
            </div>

            {/* Bottom navigation */}
            <div className="mt-8 flex flex-col gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-slate-900"
              >
                <ArrowLeft className="size-4" />
                Back to Projects
              </Link>

              <Link
                href="/projects/project/optimize"
                className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 transition hover:text-blue-700"
              >
                Continue to AI Optimization
                <ArrowRight className="size-4" />
              </Link>
            </div>

            <div className="flex items-center justify-center gap-2 pb-4 pt-8 text-xs text-slate-400">
              <Target className="size-3.5" />
              Build proof of expertise, not just a list of technologies.
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

function DetailItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div>
      <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
        {icon}
        {label}
      </div>

      <p className="mt-2 text-sm font-medium text-slate-700">{value}</p>
    </div>
  );
}