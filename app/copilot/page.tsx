import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";
import { CopilotWorkspace } from "@/components/copilot/copilot-workspace";

export default function CopilotPage() {
  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-950">
      <Sidebar />

      <div className="flex min-w-0 flex-1 flex-col">
        <Header />

        <main className="flex-1">
          <section className="mx-auto w-full max-w-7xl p-5 sm:p-8">
            <div className="mb-8">
              <div className="mb-2 flex items-center gap-2 text-sm text-slate-400">
                <span>AI</span>
                <span>/</span>
                <span className="text-slate-600">Copilot</span>
              </div>

              <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                AI Copilot
              </h1>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
                Your context-aware assistant for improving your profile,
                creating content, and building your professional brand.
              </p>
            </div>

            <CopilotWorkspace />
          </section>
        </main>
      </div>
    </div>
  );
}