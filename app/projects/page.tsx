"use client";

import { useState } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  ExternalLink,
  FolderKanban,
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

const initialProjects = [
  {
    id: "project1",
    title: "AI Content Platform",
    description:
      "An AI-powered platform that helps professionals create better LinkedIn content and build a stronger personal brand.",
    role: "Founder & Product Builder",
    score: 86,
    status: "Strong",
    technologies: ["Next.js", "TypeScript", "OpenAI", "PostgreSQL"],
    impact:
      "Built an AI-powered workflow for professional content creation and personal branding.",
    highlights: [
      "AI content generation",
      "Professional positioning",
      "Personal brand workflow",
    ],
  },
  {
    id: "project2",
    title: "Developer Portfolio",
    description:
      "A modern developer portfolio designed to showcase technical projects, skills, and professional experience.",
    role: "Developer",
    score: 74,
    status: "Good",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    impact:
      "Created a focused portfolio experience that communicates technical capability and project outcomes.",
    highlights: [
      "Responsive portfolio",
      "Project showcase",
      "Technical storytelling",
    ],
  },
  {
    id: "project3",
    title: "Automation Dashboard",
    description:
      "A dashboard for monitoring automated workflows, integrations, and operational activity.",
    role: "Developer",
    score: 68,
    status: "Needs improvement",
    technologies: ["React", "Node.js", "API"],
    impact:
      "Centralized automation activity into a single dashboard for easier monitoring.",
    highlights: [
      "Workflow monitoring",
      "API integrations",
      "Operational dashboard",
    ],
  },
];

const recommendations = [
  {
    title: "Add measurable outcomes",
    description:
      "Projects become more compelling when they show concrete results, improvements, or business impact.",
    icon: TrendingUp,
  },
  {
    title: "Strengthen your project story",
    description:
      "Explain the problem, your contribution, and the outcome instead of only listing technologies.",
    icon: Target,
  },
  {
    title: "Highlight your strongest projects",
    description:
      "Lead with projects that best support the professional identity you want to build.",
    icon: Sparkles,
  },
];

type Project = (typeof initialProjects)[number];

export default function ProjectsPage() {
  const [projects, setProjects] = useState(initialProjects);
  const [isAddProjectOpen, setIsAddProjectOpen] = useState(false);

  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    role: "",
    technologies: "",
  });

  function openAddProject() {
    setNewProject({
      title: "",
      description: "",
      role: "",
      technologies: "",
    });

    setIsAddProjectOpen(true);
  }

  function closeAddProject() {
    setIsAddProjectOpen(false);
  }

  function handleAddProject() {
    const title = newProject.title.trim();
    const description = newProject.description.trim();
    const role = newProject.role.trim();

    if (!title || !description || !role) {
      return;
    }

    const project: Project = {
      id: `project-${Date.now()}`,
      title,
      description,
      role,
      score: 0,
      status: "Needs improvement",
      technologies: newProject.technologies
        .split(",")
        .map((technology) => technology.trim())
        .filter(Boolean),
      impact:
        "New project added. Add measurable outcomes and stronger evidence of impact to improve its professional presentation.",
      highlights: [
        "Project added to workspace",
        "Ready for AI optimization",
        "Professional story can be strengthened",
      ],
    };

    setProjects((current) => [project, ...current]);
    setIsAddProjectOpen(false);
  }

  const strongProjects = projects.filter((project) => project.score >= 80).length;

  const averageScore =
    projects.length > 0
      ? Math.round(
          projects.reduce((total, project) => total + project.score, 0) /
            projects.length,
        )
      : 0;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Sidebar />

      <div className="lg:pl-64">
        <Header />

        <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center gap-2 text-sm text-slate-500">
            <Link href="/" className="transition hover:text-slate-900">
              Dashboard
            </Link>

            <span>/</span>

            <span className="font-medium text-slate-900">Projects</span>
          </div>

          {/* Header */}
          <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="mb-2 flex items-center gap-2">
                <div className="flex size-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <FolderKanban className="size-5" />
                </div>

                <span className="text-sm font-semibold text-blue-600">
                  Project Forge
                </span>
              </div>

              <h1 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                Projects
              </h1>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
                Turn your projects into stronger professional proof points with
                AI-powered positioning, storytelling, and optimization.
              </p>
            </div>

            <button
              type="button"
              onClick={openAddProject}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
            >
              <Plus className="size-4" />
              Add Project
            </button>
          </div>

          {/* Stats */}
          <section className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard
              label="Total Projects"
              value={projects.length.toString()}
              description="Projects in workspace"
              icon={FolderKanban}
            />

            <StatCard
              label="Average Score"
              value={`${averageScore}/100`}
              description="Project positioning"
              icon={TrendingUp}
            />

            <StatCard
              label="Strong Projects"
              value={strongProjects.toString()}
              description="Score above 80"
              icon={CheckCircle2}
            />

            <StatCard
              label="AI Opportunities"
              value={projects.length.toString()}
              description="Projects to improve"
              icon={WandSparkles}
            />
          </section>

          {/* AI Insight */}
          <section className="mb-8 overflow-hidden rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 via-white to-violet-50">
            <div className="flex flex-col gap-5 p-6 md:flex-row md:items-center md:justify-between">
              <div className="flex gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm ring-1 ring-blue-100">
                  <Sparkles className="size-5" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-blue-700">
                    AI Project Insight
                  </p>

                  <h2 className="mt-1 text-lg font-bold text-slate-950">
                    Your projects can tell a stronger professional story.
                  </h2>

                  <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-600">
                    Focus on outcomes, your specific contribution, and why the
                    project mattered. This makes your experience easier for
                    recruiters, clients, and your network to understand.
                  </p>
                </div>
              </div>

              <Link
                href="/projects/project/optimize"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-slate-200 transition hover:bg-slate-50"
              >
                Optimize with AI
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </section>

          {/* Projects */}
          <section className="mb-10">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-slate-950">
                  Your Projects
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Review and improve the projects that represent your work.
                </p>
              </div>

              <span className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 ring-1 ring-slate-200">
                {projects.length} project{projects.length === 1 ? "" : "s"}
              </span>
            </div>

            {projects.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center">
                <div className="mx-auto flex size-12 items-center justify-center rounded-xl bg-slate-100 text-slate-500">
                  <FolderKanban className="size-6" />
                </div>

                <h3 className="mt-4 text-base font-semibold text-slate-950">
                  No projects yet
                </h3>

                <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                  Add your first project and start turning your work into a
                  stronger professional story.
                </p>

                <button
                  type="button"
                  onClick={openAddProject}
                  className="mt-5 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  <Plus className="size-4" />
                  Add your first project
                </button>
              </div>
            ) : (
              <div className="grid gap-5 lg:grid-cols-2">
                {projects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            )}
          </section>

          {/* Improvement Ideas */}
          <section className="mb-10">
            <div className="mb-4">
              <h2 className="text-lg font-bold text-slate-950">
                AI Improvement Ideas
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Simple ways to make your projects more valuable on LinkedIn.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {recommendations.map((recommendation) => {
                const Icon = recommendation.icon;

                return (
                  <div
                    key={recommendation.title}
                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                  >
                    <div className="flex size-10 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                      <Icon className="size-5" />
                    </div>

                    <h3 className="mt-4 font-semibold text-slate-950">
                      {recommendation.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {recommendation.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Bottom CTA */}
          <section className="rounded-2xl bg-slate-950 p-6 text-white shadow-sm sm:p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="mb-2 flex items-center gap-2 text-blue-300">
                  <BriefcaseBusiness className="size-4" />

                  <span className="text-sm font-semibold">
                    Build stronger proof
                  </span>
                </div>

                <h2 className="text-xl font-bold sm:text-2xl">
                  Add another project to your professional portfolio.
                </h2>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                  Capture the work you have done and let LinkForge help turn it
                  into a clear, compelling professional story.
                </p>
              </div>

              <button
                type="button"
                onClick={openAddProject}
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
              >
                <Plus className="size-4" />
                Add Project
              </button>
            </div>
          </section>
        </main>

        {/* Add Project Modal */}
        {isAddProjectOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-4 backdrop-blur-sm"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                closeAddProject();
              }
            }}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="add-project-title"
              className="w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl"
            >
              {/* Modal Header */}
              <div className="border-b border-slate-200 px-6 py-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="mb-2 flex items-center gap-2 text-blue-600">
                      <div className="flex size-8 items-center justify-center rounded-lg bg-blue-50">
                        <Plus className="size-4" />
                      </div>

                      <span className="text-xs font-bold uppercase tracking-wide">
                        Project Forge
                      </span>
                    </div>

                    <h2
                      id="add-project-title"
                      className="text-xl font-bold text-slate-950"
                    >
                      Add a new project
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                      Add the basics now. You can optimize the project with AI
                      later.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={closeAddProject}
                    aria-label="Close"
                    className="flex size-9 items-center justify-center rounded-lg text-xl text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                  >
                    ×
                  </button>
                </div>
              </div>

              {/* Modal Body */}
              <div className="space-y-5 p-6">
                <div>
                  <label
                    htmlFor="project-title"
                    className="mb-2 block text-sm font-semibold text-slate-800"
                  >
                    Project name
                  </label>

                  <input
                    id="project-title"
                    type="text"
                    value={newProject.title}
                    onChange={(event) =>
                      setNewProject((current) => ({
                        ...current,
                        title: event.target.value,
                      }))
                    }
                    placeholder="e.g. AI Career Assistant"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                  />
                </div>

                <div>
                  <label
                    htmlFor="project-role"
                    className="mb-2 block text-sm font-semibold text-slate-800"
                  >
                    Your role
                  </label>

                  <input
                    id="project-role"
                    type="text"
                    value={newProject.role}
                    onChange={(event) =>
                      setNewProject((current) => ({
                        ...current,
                        role: event.target.value,
                      }))
                    }
                    placeholder="e.g. Founder & Full-Stack Developer"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                  />
                </div>

                <div>
                  <label
                    htmlFor="project-description"
                    className="mb-2 block text-sm font-semibold text-slate-800"
                  >
                    Project description
                  </label>

                  <textarea
                    id="project-description"
                    value={newProject.description}
                    onChange={(event) =>
                      setNewProject((current) => ({
                        ...current,
                        description: event.target.value,
                      }))
                    }
                    placeholder="Describe what you built, the problem it solves, and who it helps."
                    rows={5}
                    className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm leading-6 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                  />
                </div>

                <div>
                  <label
                    htmlFor="project-technologies"
                    className="mb-2 block text-sm font-semibold text-slate-800"
                  >
                    Technologies
                  </label>

                  <input
                    id="project-technologies"
                    type="text"
                    value={newProject.technologies}
                    onChange={(event) =>
                      setNewProject((current) => ({
                        ...current,
                        technologies: event.target.value,
                      }))
                    }
                    placeholder="Next.js, TypeScript, OpenAI, PostgreSQL"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                  />

                  <p className="mt-2 text-xs text-slate-400">
                    Separate technologies with commas.
                  </p>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex flex-col-reverse gap-3 border-t border-slate-200 bg-slate-50 px-6 py-4 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={closeAddProject}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
                >
                  Cancel
                </button>

                <button
                  type="button"
                  onClick={handleAddProject}
                  disabled={
                    !newProject.title.trim() ||
                    !newProject.description.trim() ||
                    !newProject.role.trim()
                  }
                  className="rounded-xl bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Add Project
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function StatCard({
  label,
  value,
  description,
  icon: Icon,
}: {
  label: string;
  value: string;
  description: string;
  icon: typeof FolderKanban;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-slate-500">{label}</p>

          <p className="mt-2 text-2xl font-bold tracking-tight text-slate-950">
            {value}
          </p>

          <p className="mt-1 text-xs text-slate-400">{description}</p>
        </div>

        <div className="flex size-10 items-center justify-center rounded-xl bg-slate-50 text-slate-600">
          <Icon className="size-5" />
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="flex min-w-0 gap-3">
          <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
            <BriefcaseBusiness className="size-5" />
          </div>

          <div className="min-w-0">
            <h3 className="truncate text-base font-bold text-slate-950">
              {project.title}
            </h3>

            <p className="mt-1 text-sm text-slate-500">{project.role}</p>
          </div>
        </div>

        <div className="shrink-0 text-right">
          <div className="text-xl font-bold text-slate-950">
            {project.score}
          </div>

          <div className="text-[11px] font-medium uppercase tracking-wide text-slate-400">
            Score
          </div>
        </div>
      </div>

      <p className="mt-5 text-sm leading-6 text-slate-600">
        {project.description}
      </p>

      <div className="mt-5">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
          Technologies
        </p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-lg bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600 ring-1 ring-slate-200"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-5 rounded-xl bg-slate-50 p-4">
        <div className="flex items-start gap-3">
          <Lightbulb className="mt-0.5 size-4 shrink-0 text-blue-600" />

          <div>
            <p className="text-xs font-semibold text-slate-700">
              Professional impact
            </p>

            <p className="mt-1 text-sm leading-5 text-slate-500">
              {project.impact}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.highlights.map((highlight) => (
          <span
            key={highlight}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500"
          >
            <CheckCircle2 className="size-3.5 text-emerald-500" />
            {highlight}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-col gap-2 sm:flex-row">
        <Link
          href={`/projects/${project.id}`}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
        >
          View Project
          <ArrowRight className="size-4" />
        </Link>

        <Link
          href="/projects/project/optimize"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          <WandSparkles className="size-4" />
          Optimize with AI
        </Link>

        <button
          type="button"
          aria-label={`Open external link for ${project.title}`}
          className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-slate-500 transition hover:bg-slate-50 hover:text-slate-900"
        >
          <ExternalLink className="size-4" />
        </button>
      </div>
    </article>
  );
}