"use client";

import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  ExternalLink,
  FolderKanban,
  Github,
  Lightbulb,
  Plus,
  Sparkles,
  Target,
  TrendingUp,
  WandSparkles,
} from "lucide-react";
import Link from "next/link";

import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";

const projects = [
  {
    id: "project1",
    title: "AI Content Platform",
    description:
      "An AI-powered platform designed to help professionals create, refine, and manage high-quality content.",
    role: "Founder & Product Builder",
    score: 86,
    status: "Strong",
    technologies: ["Next.js", "TypeScript", "OpenAI", "PostgreSQL"],
    impact:
      "Strong product story with clear technical depth and ownership.",
    highlights: [
      "AI-powered workflow",
      "Full-stack product development",
      "User-focused experience",
    ],
  },
  {
    id: "project2",
    title: "Developer Portfolio",
    description:
      "A professional portfolio showcasing software projects, technical expertise, and experience.",
    role: "Developer",
    score: 74,
    status: "Good",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    impact:
      "Good technical showcase with an opportunity to communicate outcomes more clearly.",
    highlights: [
      "Responsive interface",
      "Project showcase",
      "Modern frontend architecture",
    ],
  },
  {
    id: "project3",
    title: "Automation Dashboard",
    description:
      "A dashboard concept for managing recurring workflows, tasks, and operational processes.",
    role: "Developer",
    score: 68,
    status: "Needs improvement",
    technologies: ["React", "Node.js", "API"],
    impact:
      "Useful project concept, but its business value and measurable results need stronger presentation.",
    highlights: [
      "Workflow automation",
      "Dashboard experience",
      "API integrations",
    ],
  },
];

const recommendations = [
  {
    title: "Add measurable impact",
    description:
      "Show what changed because of your work. Add metrics, scale, performance improvements, users, or other concrete outcomes when available.",
  },
  {
    title: "Lead with the problem",
    description:
      "Explain the problem your project solves before describing the technologies used to build it.",
  },
  {
    title: "Strengthen your project story",
    description:
      "Connect your role, decisions, challenges, and results into a concise narrative recruiters and clients can understand quickly.",
  },
];

export default function ProjectsPage() {
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
                href="/"
                className="text-slate-400 transition hover:text-slate-700"
              >
                Workspace
              </Link>

              <span className="text-slate-300">/</span>

              <span className="text-slate-600">Projects</span>
            </div>

            {/* Page header */}
            <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <div className="mb-3 flex items-center gap-2 text-sm font-medium text-blue-600">
                  <FolderKanban className="size-4" />
                  Project Forge
                </div>

                <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  Projects
                </h1>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
                  Turn your projects into stronger proof of expertise,
                  ownership, and professional impact.
                </p>
              </div>

              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800"
              >
                <Plus className="size-4" />
                Add Project
              </button>
            </div>

            {/* Overview */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <StatCard
                icon={<FolderKanban className="size-5" />}
                label="Projects"
                value="3"
                description="In your workspace"
              />

              <StatCard
                icon={<TrendingUp className="size-5" />}
                label="Average Score"
                value="76"
                suffix="/100"
                description="Project strength"
              />

              <StatCard
                icon={<Target className="size-5" />}
                label="Strong Projects"
                value="1"
                description="Ready to showcase"
              />

              <StatCard
                icon={<Sparkles className="size-5" />}
                label="AI Opportunities"
                value="7"
                description="Improvements available"
              />
            </div>

            {/* AI insight */}
            <div className="relative mt-6 overflow-hidden rounded-2xl border border-blue-100 bg-blue-50/60 p-6 shadow-sm">
              <div className="absolute -right-12 -top-12 size-40 rounded-full bg-blue-100/70 blur-3xl" />

              <div className="relative flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex gap-4">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
                    <WandSparkles className="size-5" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-blue-700">
                      AI Project Insight
                    </p>

                    <h2 className="mt-1 text-lg font-semibold tracking-tight text-slate-900">
                      Your projects show technical ability — now make the
                      impact impossible to miss.
                    </h2>

                    <p className="mt-1 max-w-3xl text-sm leading-6 text-slate-600">
                      Strong project descriptions combine the problem, your
                      contribution, the solution, and the result. Focus on
                      those four elements when optimizing your projects.
                    </p>
                  </div>
                </div>

                <Link
                  href="/projects/project/optimize"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700"
                >
                  Optimize Project
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>

            {/* Projects */}
            <div className="mt-8">
              <div className="mb-4 flex items-end justify-between gap-4">
                <div>
                  <h2 className="text-lg font-semibold tracking-tight">
                    Your projects
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Review and improve how each project represents your
                    professional experience.
                  </p>
                </div>

                <span className="hidden text-xs font-medium text-slate-400 sm:block">
                  {projects.length} projects
                </span>
              </div>

              <div className="grid gap-5 lg:grid-cols-2">
                {projects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>

            {/* Recommendations */}
            <div className="mt-8">
              <div className="mb-4">
                <h2 className="text-lg font-semibold tracking-tight">
                  Project improvement ideas
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Use these principles to turn project descriptions into
                  stronger professional proof.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {recommendations.map((recommendation, index) => (
                  <div
                    key={recommendation.title}
                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                  >
                    <div className="flex size-9 items-center justify-center rounded-lg bg-slate-100 text-sm font-semibold text-slate-600">
                      0{index + 1}
                    </div>

                    <h3 className="mt-4 font-semibold text-slate-900">
                      {recommendation.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {recommendation.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex gap-4">
                  <div className="rounded-xl bg-slate-100 p-3 text-slate-600">
                    <Lightbulb className="size-5" />
                  </div>

                  <div>
                    <h2 className="font-semibold text-slate-900">
                      Have another project to showcase?
                    </h2>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      Add your project and use AI to turn the raw details into
                      a polished professional story.
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                >
                  <Plus className="size-4" />
                  Add Project
                </button>
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-center gap-2 pb-4 pt-8 text-xs text-slate-400">
              <BriefcaseBusiness className="size-3.5" />
              Your projects are proof of what you can build.
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

function StatCard({
  icon,
  label,
  value,
  suffix,
  description,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  suffix?: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="rounded-lg bg-slate-100 p-2.5 text-slate-600">
          {icon}
        </div>

        <span className="text-xs font-medium text-slate-400">
          {description}
        </span>
      </div>

      <div className="mt-5">
        <div className="flex items-baseline gap-1">
          <span className="text-2xl font-semibold tracking-tight">
            {value}
          </span>

          {suffix && (
            <span className="text-sm text-slate-400">{suffix}</span>
          )}
        </div>

        <p className="mt-1 text-sm font-medium text-slate-500">{label}</p>
      </div>
    </div>
  );
}

function ProjectCard({
  project,
}: {
  project: (typeof projects)[number];
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-slate-300 hover:shadow-md">
      {/* Card header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex min-w-0 gap-3">
          <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
            <FolderKanban className="size-5" />
          </div>

          <div className="min-w-0">
            <h3 className="truncate font-semibold text-slate-900">
              {project.title}
            </h3>

            <p className="mt-1 text-xs text-slate-400">{project.role}</p>
          </div>
        </div>

        <div className="shrink-0 text-right">
          <div className="flex items-baseline justify-end gap-1">
            <span className="text-2xl font-semibold tracking-tight text-slate-900">
              {project.score}
            </span>
            <span className="text-xs text-slate-400">/100</span>
          </div>

          <span className="text-xs font-medium text-slate-400">
            {project.status}
          </span>
        </div>
      </div>

      {/* Score */}
      <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-blue-600"
          style={{ width: `${project.score}%` }}
        />
      </div>

      {/* Description */}
      <p className="mt-4 text-sm leading-6 text-slate-500">
        {project.description}
      </p>

      {/* Highlights */}
      <div className="mt-4 grid gap-2">
        {project.highlights.map((highlight) => (
          <div
            key={highlight}
            className="flex items-center gap-2 text-sm text-slate-600"
          >
            <CheckCircle2 className="size-4 shrink-0 text-blue-600" />
            {highlight}
          </div>
        ))}
      </div>

      {/* Technologies */}
      <div className="mt-5 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600"
          >
            {technology}
          </span>
        ))}
      </div>

      {/* AI impact */}
      <div className="mt-5 rounded-xl bg-slate-50 p-4">
        <div className="flex gap-3">
          <Sparkles className="mt-0.5 size-4 shrink-0 text-blue-600" />

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              AI assessment
            </p>

            <p className="mt-1 text-sm leading-6 text-slate-600">
              {project.impact}
            </p>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-5 flex flex-wrap items-center gap-2">
        <Link
          href={`/projects/${project.id}`}
          className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-3.5 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
        >
          View project
          <ArrowRight className="size-4" />
        </Link>

        <Link
          href="/projects/project/optimize"
          className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
        >
          <WandSparkles className="size-4" />
          Optimize
        </Link>

        <button
          type="button"
          aria-label={`Open ${project.title} external link`}
          className="ml-auto rounded-lg border border-slate-200 p-2 text-slate-400 transition hover:bg-slate-50 hover:text-slate-700"
        >
          <ExternalLink className="size-4" />
        </button>
      </div>
    </div>
  );
}