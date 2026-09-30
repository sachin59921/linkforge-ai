import { FileText } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";
import { PostForgeWorkspace } from "@/components/posts/post-forge-workspace";

export default function PostsPage() {
  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-950">
      <Sidebar />

      <div className="flex min-w-0 flex-1 flex-col">
        <Header />

        <main className="flex-1">
          <section className="mx-auto w-full max-w-7xl p-5 sm:p-8">
            <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <div className="mb-2 flex items-center gap-2 text-sm text-slate-400">
                  <span>Workspace</span>
                  <span>/</span>
                  <span className="text-slate-600">Post Forge</span>
                </div>

                <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  Post Forge
                </h1>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
                  Turn your ideas and professional experiences into thoughtful
                  LinkedIn content with AI assistance.
                </p>
              </div>

              <button
                type="button"
                className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50"
              >
                <FileText className="size-4" />
                My Posts
              </button>
            </div>

            <PostForgeWorkspace />

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <InfoCard
                title="Human-first writing"
                description="Keep your experience and voice at the center of every draft."
              />

              <InfoCard
                title="Build credibility"
                description="Turn projects, lessons, and expertise into useful professional stories."
              />

              <InfoCard
                title="Forge consistently"
                description="Create a repeatable workflow for publishing valuable content."
              />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

function InfoCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-sm font-semibold">{title}</h3>

      <p className="mt-2 text-xs leading-5 text-slate-500">{description}</p>
    </div>
  );
}