import {
  ArrowUpRight,
  BarChart3,
  Bot,
  BriefcaseBusiness,
  ChevronRight,
  FileText,
  Lightbulb,
  Sparkles,
  Target,
  UserRound,
} from "lucide-react";
import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";

const recommendations = [
  {
    title: "Strengthen your About section",
    description:
      "Your experience is strong, but your positioning could be clearer to your target audience.",
    action: "Improve About",
  },
  {
    title: "Create your next post",
    description:
      "Turn one of your recent professional experiences into a story your network can learn from.",
    action: "Create Post",
  },
];

const quickActions = [
  {
    label: "Improve Profile",
    icon: UserRound,
  },
  {
    label: "Create Post",
    icon: FileText,
  },
  {
    label: "Forge Project",
    icon: BriefcaseBusiness,
  },
  {
    label: "Ask Copilot",
    icon: Bot,
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-950">
      <Sidebar />

      <div className="flex min-w-0 flex-1 flex-col">
        <Header />

        <main className="flex-1">
          <section className="mx-auto w-full max-w-7xl p-5 sm:p-8">
            {/* Welcome */}
            <div className="mb-8">
              <p className="mb-1 text-sm font-medium text-blue-600">
                Your professional workspace
              </p>

              <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Good morning, Sachin
              </h1>

              <p className="mt-2 max-w-2xl text-sm text-slate-500 sm:text-base">
                Turn your LinkedIn presence into a professional asset. Here&apos;s
                what you can work on next.
              </p>
            </div>

            {/* Top cards */}
            <div className="grid gap-5 lg:grid-cols-3">
              {/* Forge Score */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-1">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-500">
                      Forge Score
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      Overall profile readiness
                    </p>
                  </div>

                  <Target className="size-5 text-blue-600" />
                </div>

                <div className="flex items-end gap-2">
                  <span className="text-5xl font-semibold tracking-tight">
                    72
                  </span>

                  <span className="mb-1 text-sm text-slate-400">/ 100</span>
                </div>

                <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full w-[72%] rounded-full bg-blue-600" />
                </div>

                <button
                  type="button"
                  className="mt-5 flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700"
                >
                  Improve your score
                  <ArrowUpRight className="size-4" />
                </button>
              </div>

              {/* AI Recommendation */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="mb-3 flex items-center gap-2">
                      <div className="flex size-8 items-center justify-center rounded-lg bg-violet-50">
                        <Lightbulb className="size-4 text-violet-600" />
                      </div>

                      <span className="text-sm font-semibold">
                        AI Recommendation
                      </span>
                    </div>

                    <h2 className="text-lg font-semibold tracking-tight">
                      Make your positioning clearer
                    </h2>

                    <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
                      Your profile has solid experience. Clarifying who you
                      help and what you are known for can make the profile more
                      memorable.
                    </p>
                  </div>

                  <span className="hidden rounded-full bg-violet-50 px-2.5 py-1 text-xs font-medium text-violet-700 sm:block">
                    High impact
                  </span>
                </div>

                <button
                  type="button"
                  className="mt-5 flex items-center gap-2 rounded-lg bg-slate-950 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800"
                >
                  Improve positioning
                  <ChevronRight className="size-4" />
                </button>
              </div>
            </div>

            {/* Quick actions */}
            <div className="mt-8">
              <div className="mb-4">
                <h2 className="text-lg font-semibold tracking-tight">
                  Quick actions
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Make progress on your LinkedIn presence.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {quickActions.map((action) => {
                  const Icon = action.icon;

                  return (
                    <button
                      key={action.label}
                      type="button"
                      className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
                    >
                      <span className="flex items-center gap-3">
                        <span className="flex size-9 items-center justify-center rounded-lg bg-slate-100 transition group-hover:bg-blue-50">
                          <Icon className="size-4 text-slate-600 group-hover:text-blue-600" />
                        </span>

                        <span className="text-sm font-medium">
                          {action.label}
                        </span>
                      </span>

                      <ChevronRight className="size-4 text-slate-400" />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Recommendations + Recent Activity */}
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {/* Recommendations */}
              <div>
                <div className="mb-4">
                  <h2 className="text-lg font-semibold tracking-tight">
                    Recommended next
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Small improvements that compound over time.
                  </p>
                </div>

                <div className="space-y-3">
                  {recommendations.map((recommendation) => (
                    <div
                      key={recommendation.title}
                      className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
                    >
                      <h3 className="font-medium">
                        {recommendation.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-500">
                        {recommendation.description}
                      </p>

                      <button
                        type="button"
                        className="mt-4 text-sm font-medium text-blue-600 hover:text-blue-700"
                      >
                        {recommendation.action} →
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Activity */}
              <div>
                <div className="mb-4">
                  <h2 className="text-lg font-semibold tracking-tight">
                    Recent activity
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Your latest work will appear here.
                  </p>
                </div>

                <div className="flex min-h-52 items-center justify-center rounded-xl border border-dashed border-slate-300 bg-white p-6 text-center">
                  <div>
                    <div className="mx-auto mb-3 flex size-10 items-center justify-center rounded-full bg-slate-100">
                      <Sparkles className="size-4 text-slate-500" />
                    </div>

                    <p className="text-sm font-medium">
                      Your workspace is ready
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Create your first post or improve your profile to start
                      building your Forge history.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom workspace status */}
            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-lg bg-blue-50">
                    <BarChart3 className="size-4 text-blue-600" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold">
                      Keep building your professional presence
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Your Forge workspace is ready for your next improvement.
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                >
                  Explore workspace
                  <ChevronRight className="size-4" />
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
