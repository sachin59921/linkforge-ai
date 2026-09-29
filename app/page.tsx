import {
  ArrowUpRight,
  BarChart3,
  Bot,
  BriefcaseBusiness,
  CalendarDays,
  ChevronRight,
  FileText,
  Lightbulb,
  Plus,
  Settings,
  Sparkles,
  Target,
  UserRound,
} from "lucide-react";

const navigation = [
  { label: "Dashboard", icon: BarChart3, active: true },
  { label: "Profile", icon: UserRound },
  { label: "Posts", icon: FileText },
  { label: "Projects", icon: BriefcaseBusiness },
  { label: "Calendar", icon: CalendarDays },
  { label: "Brand", icon: Target },
];

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

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="hidden w-64 shrink-0 border-r bg-white lg:flex lg:flex-col">
          <div className="flex h-16 items-center border-b px-6">
            <div className="flex items-center gap-2.5">
              <div className="flex size-8 items-center justify-center rounded-lg bg-blue-600 text-white">
                <Sparkles className="size-4" />
              </div>
              <span className="text-lg font-semibold tracking-tight">
                LinkForge <span className="text-blue-600">AI</span>
              </span>
            </div>
          </div>

          <nav className="flex-1 space-y-7 p-4">
            <div>
              <p className="mb-2 px-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                Workspace
              </p>

              <div className="space-y-1">
                {navigation.map((item) => {
                  const Icon = item.icon;

                  return (
                    <button
                      key={item.label}
                      className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                        item.active
                          ? "bg-blue-50 text-blue-700"
                          : "text-slate-600 hover:bg-slate-50 hover:text-slate-950"
                      }`}
                    >
                      <Icon className="size-4" />
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <p className="mb-2 px-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                AI
              </p>

              <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-slate-950">
                <Bot className="size-4" />
                Copilot
              </button>
            </div>
          </nav>

          <div className="border-t p-4">
            <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-950">
              <Settings className="size-4" />
              Settings
            </button>

            <div className="mt-4 flex items-center gap-3 rounded-lg bg-slate-50 p-3">
              <div className="flex size-9 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                S
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-medium">Your workspace</p>
                <p className="truncate text-xs text-slate-500">Free plan</p>
              </div>
            </div>
          </div>
        </aside>

        {/* Main workspace */}
        <div className="flex min-w-0 flex-1 flex-col">
          <header className="flex h-16 items-center justify-between border-b bg-white px-5 sm:px-8">
            <div>
              <p className="text-sm text-slate-500 lg:hidden">LinkForge AI</p>
              <p className="hidden text-sm text-slate-500 lg:block">
                Professional workspace
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button className="hidden rounded-lg border bg-white px-3 py-2 text-sm font-medium text-slate-600 shadow-sm transition hover:bg-slate-50 sm:flex sm:items-center sm:gap-2">
                <Plus className="size-4" />
                Create
              </button>

              <div className="flex size-9 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                S
              </div>
            </div>
          </header>

          <section className="mx-auto w-full max-w-7xl flex-1 p-5 sm:p-8">
            {/* Welcome */}
            <div className="mb-8">
              <p className="mb-1 text-sm font-medium text-blue-600">
                Your professional workspace
              </p>
              <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Good morning, Sachin
              </h1>
              <p className="mt-2 max-w-2xl text-sm text-slate-500 sm:text-base">
                Turn your LinkedIn presence into a professional asset. Here’s
                what you can work on next.
              </p>
            </div>

            {/* Top cards */}
            <div className="grid gap-5 lg:grid-cols-3">
              <div className="rounded-2xl border bg-white p-6 shadow-sm lg:col-span-1">
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

                <button className="mt-5 flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700">
                  Improve your score
                  <ArrowUpRight className="size-4" />
                </button>
              </div>

              <div className="rounded-2xl border bg-white p-6 shadow-sm lg:col-span-2">
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

                <button className="mt-5 flex items-center gap-2 rounded-lg bg-slate-950 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800">
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
                {[
                  ["Improve Profile", UserRound],
                  ["Create Post", FileText],
                  ["Forge Project", BriefcaseBusiness],
                  ["Ask Copilot", Bot],
                ].map(([label, Icon]) => (
                  <button
                    key={String(label)}
                    className="group flex items-center justify-between rounded-xl border bg-white p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
                  >
                    <span className="flex items-center gap-3">
                      <span className="flex size-9 items-center justify-center rounded-lg bg-slate-100 transition group-hover:bg-blue-50">
                        <Icon className="size-4 text-slate-600 group-hover:text-blue-600" />
                      </span>
                      <span className="text-sm font-medium">
                        {String(label)}
                      </span>
                    </span>

                    <ChevronRight className="size-4 text-slate-400" />
                  </button>
                ))}
              </div>
            </div>

            {/* Recommendations */}
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-semibold tracking-tight">
                      Recommended next
                    </h2>
                    <p className="mt-1 text-sm text-slate-500">
                      Small improvements that compound over time.
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {recommendations.map((recommendation) => (
                    <div
                      key={recommendation.title}
                      className="rounded-xl border bg-white p-5 shadow-sm"
                    >
                      <h3 className="font-medium">{recommendation.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-500">
                        {recommendation.description}
                      </p>
                      <button className="mt-4 text-sm font-medium text-blue-600 hover:text-blue-700">
                        {recommendation.action} →
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="mb-4">
                  <h2 className="text-lg font-semibold tracking-tight">
                    Recent activity
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Your latest work will appear here.
                  </p>
                </div>

                <div className="flex min-h-52 items-center justify-center rounded-xl border border-dashed bg-white p-6 text-center">
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
          </section>
        </div>
      </div>
    </main>
  );
}