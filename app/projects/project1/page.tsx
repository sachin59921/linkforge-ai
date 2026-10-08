"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  ExternalLink,
  FileText,
  Lightbulb,
  Pencil,
  Sparkles,
  Target,
  TrendingUp,
  UserRound,
  WandSparkles,
} from "lucide-react";

const strengths = [
  {
    title: "Clear problem statement",
    description:
      "The project communicates a practical problem and gives the audience a clear reason to care.",
    score: 90,
  },
  {
    title: "Strong technical depth",
    description:
      "The technology choices demonstrate hands-on product and engineering capability.",
    score: 88,
  },
  {
    title: "Product thinking",
    description:
      "The project shows an ability to connect technical implementation with user outcomes.",
    score: 84,
  },
];

const improvements = [
  "Add measurable outcomes such as users, performance improvements, or adoption.",
  "Clarify your personal contribution and ownership of the most important features.",
  "Add a concise explanation of the business or user impact.",
];

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "OpenAI",
];

export default function ProjectOnePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-slate-500">
          <Link href="/projects" className="transition hover:text-slate-900">
            Projects
          </Link>
          <span>/</span>
          <span className="font-medium text-slate-900">
            Project 1
          </span>
        </div>

        {/* Back */}
        <Link
          href="/projects"
          className="mb-5 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-slate-900"
        >
          <ArrowLeft className="size-4" />
          Back to projects
        </Link>

        {/* Header */}
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex gap-4">
              <div className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <BriefcaseBusiness className="size-6" />
              </div>

              <div>
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700">
                    Project 1
                  </span>

                  <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
                    Featured Project
                  </span>
                </div>

                <h1 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                  AI Content Platform
                </h1>

                <p className="mt-2 flex items-center gap-2 text-sm text-slate-500">
                  <UserRound className="size-4" />
                  Founder & Product Builder
                </p>

                <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600">
                  An AI-powered platform designed to help professionals
                  create, refine, and organize high-quality content for their
                  professional brand.
                </p>
              </div>
            </div>

            <div className="flex shrink-0 items-center gap-3">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                <Pencil className="size-4" />
                Edit
              </button>

              <Link
                href="/projects/project/optimize"
                className="inline-flex items-center gap-2 rounded-lg bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                <WandSparkles className="size-4" />
                Optimize with AI
              </Link>
            </div>
          </div>

          {/* Score */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                Project Score
              </p>
              <div className="mt-2 flex items-end gap-2">
                <span className="text-3xl font-bold text-slate-950">86</span>
                <span className="mb-1 text-sm text-slate-400">/ 100</span>
              </div>
              <p className="mt-1 text-xs font-medium text-emerald-600">
                Strong project positioning
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                Project Type
              </p>
              <p className="mt-3 text-sm font-semibold text-slate-900">
                SaaS / AI Product
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Product-focused build
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                Status
              </p>
              <p className="mt-3 text-sm font-semibold text-slate-900">
                Active
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Continuously improving
              </p>
            </div>
          </div>
        </section>

        {/* AI assessment */}
        <section className="mt-6 rounded-2xl border border-blue-100 bg-blue-50/70 p-6 sm:p-7">
          <div className="flex items-start gap-4">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-white text-blue-600 shadow-sm">
              <Sparkles className="size-5" />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
                AI Project Assessment
              </p>

              <h2 className="mt-1 text-lg font-semibold text-slate-900">
                Strong foundation — add evidence to make the project more
                credible.
              </h2>

              <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
                The project already communicates strong technical and product
                capability. The biggest opportunity is to connect the work to
                measurable outcomes and clearly explain your individual
                contribution.
              </p>
            </div>
          </div>
        </section>

        {/* Overview + highlights */}
        <section className="mt-6 grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2">
            <div className="flex items-center gap-2">
              <FileText className="size-4 text-slate-500" />
              <h2 className="font-semibold text-slate-900">
                Project overview
              </h2>
            </div>

            <div className="mt-5 space-y-4 text-sm leading-6 text-slate-600">
              <p>
                AI Content Platform is positioned as a professional content
                creation product that helps users move from an idea to
                publish-ready content more efficiently.
              </p>

              <p>
                The product combines structured workflows, AI assistance, and
                content organization into one workspace. Its positioning can
                demonstrate both engineering ability and product thinking.
              </p>

              <p>
                For a LinkedIn portfolio, the strongest story is not only what
                was built, but why it was built, what you personally owned,
                and what changed because of the work.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2">
              <Target className="size-4 text-slate-500" />
              <h2 className="font-semibold text-slate-900">
                Key highlights
              </h2>
            </div>

            <div className="mt-5 space-y-4">
              {[
                "AI-assisted content workflow",
                "Professional branding focus",
                "Structured SaaS experience",
                "Modern full-stack architecture",
              ].map((highlight) => (
                <div key={highlight} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-500" />
                  <span className="text-sm text-slate-600">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Strength breakdown */}
        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="font-semibold text-slate-900">
                Project strength breakdown
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                How LinkForge currently evaluates the project.
              </p>
            </div>

            <TrendingUp className="size-5 text-blue-500" />
          </div>

          <div className="mt-6 space-y-6">
            {strengths.map((strength) => (
              <div key={strength.title}>
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-slate-800">
                      {strength.title}
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      {strength.description}
                    </p>
                  </div>

                  <span className="text-sm font-bold text-slate-900">
                    {strength.score}
                  </span>
                </div>

                <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-blue-600"
                    style={{ width: `${strength.score}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Improvements */}
        <section className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2">
              <Lightbulb className="size-4 text-amber-500" />
              <h2 className="font-semibold text-slate-900">
                Improvement opportunities
              </h2>
            </div>

            <div className="mt-5 space-y-4">
              {improvements.map((item, index) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl bg-slate-50 p-4"
                >
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-white text-xs font-semibold text-slate-500">
                    {index + 1}
                  </span>

                  <p className="text-sm leading-5 text-slate-600">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2">
              <BriefcaseBusiness className="size-4 text-slate-500" />
              <h2 className="font-semibold text-slate-900">
                Project details
              </h2>
            </div>

            <dl className="mt-5 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <dt className="text-sm text-slate-500">Role</dt>
                <dd className="text-sm font-medium text-slate-900">
                  Founder & Product Builder
                </dd>
              </div>

              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <dt className="text-sm text-slate-500">Category</dt>
                <dd className="text-sm font-medium text-slate-900">
                  AI / SaaS
                </dd>
              </div>

              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <dt className="text-sm text-slate-500">Visibility</dt>
                <dd className="text-sm font-medium text-slate-900">
                  Public
                </dd>
              </div>

              <div className="flex items-center justify-between">
                <dt className="text-sm text-slate-500">Last updated</dt>
                <dd className="text-sm font-medium text-slate-900">
                  Recently
                </dd>
              </div>
            </dl>
          </div>
        </section>

        {/* Technologies */}
        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="font-semibold text-slate-900">Technologies</h2>

          <div className="mt-4 flex flex-wrap gap-2">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-600"
              >
                {technology}
              </span>
            ))}
          </div>
        </section>

        {/* Links */}
        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="font-semibold text-slate-900">Project links</h2>

          <div className="mt-4 flex flex-wrap gap-3">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
            >
              <span className="flex size-4 items-center justify-center text-xs font-bold text-slate-500">
                GH
              </span>
              GitHub repository
              <ExternalLink className="size-3.5 text-slate-400" />
            </button>

            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
            >
              <ExternalLink className="size-4 text-slate-400" />
              Live project
            </button>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="mt-6 rounded-2xl bg-slate-950 p-6 text-white shadow-sm sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-white">
                Ready to strengthen this project?
              </p>
              <p className="mt-1 max-w-xl text-sm leading-6 text-slate-400">
                Let AI improve the project description, positioning, evidence,
                and LinkedIn-ready presentation.
              </p>
            </div>

            <Link
              href="/projects/project/optimize"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
            >
              Optimize Project
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}