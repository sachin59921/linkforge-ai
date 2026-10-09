import {
  ArrowRight,
  CheckCircle2,
  FileText,
  GraduationCap,
  Lightbulb,
  Pencil,
  Plus,
  Target,
  UserRound,
} from "lucide-react";

const profileSections = [
  {
    title: "Headline",
    description: "Your professional positioning in one line.",
    value:
      "Product Designer | Building simple digital experiences for growing teams",
    score: 82,
    icon: Target,
  },
  {
    title: "About",
    description: "Your professional story and value proposition.",
    value:
      "Your About section is ready to be improved with clearer positioning, stronger proof, and a more memorable narrative.",
    score: 68,
    icon: FileText,
  },
  {
    title: "Experience",
    description: "Your roles, responsibilities, and achievements.",
    value: "3 experience entries",
    score: 76,
    icon: UserRound,
  },
  {
    title: "Education",
    description: "Your academic background.",
    value: "2 education entries",
    score: 90,
    icon: GraduationCap,
  },
];

export default function ProfilePage() {
  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-950">

      <div className="flex min-w-0 flex-1 flex-col">

        <main className="flex-1">
          <section className="mx-auto w-full max-w-7xl p-5 sm:p-8">
            <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <div className="mb-2 flex items-center gap-2 text-sm text-slate-400">
                  <span>Workspace</span>
                  <span>/</span>
                  <span className="text-slate-600">Profile Forge</span>
                </div>

                <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  Profile Forge
                </h1>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
                  Improve your LinkedIn profile with AI-powered analysis,
                  recommendations, and professional positioning.
                </p>
              </div>

              <button
                type="button"
                className="flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800"
              >
                <Lightbulb className="size-4" />
                Analyze Profile
              </button>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-500">
                      Forge Score
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      Profile readiness
                    </p>
                  </div>

                  <div className="flex size-10 items-center justify-center rounded-full bg-blue-50">
                    <Target className="size-5 text-blue-600" />
                  </div>
                </div>

                <div className="mt-6 flex items-end gap-2">
                  <span className="text-5xl font-semibold tracking-tight">
                    72
                  </span>
                  <span className="mb-1 text-sm text-slate-400">/ 100</span>
                </div>

                <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full w-[72%] rounded-full bg-blue-600" />
                </div>

                <p className="mt-4 text-xs leading-5 text-slate-500">
                  Your profile has a solid foundation. A few targeted
                  improvements can make your positioning clearer.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2">
                <div className="flex items-start gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-violet-50">
                    <Lightbulb className="size-5 text-violet-600" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-violet-600">
                      AI Insight
                    </p>

                    <h2 className="mt-1 text-lg font-semibold">
                      Clarify what you want to be known for
                    </h2>

                    <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                      Your experience communicates capability, but your profile
                      can do more to connect your expertise with the audience
                      you want to reach.
                    </p>

                    <button
                      type="button"
                      className="mt-4 flex items-center gap-2 text-sm font-medium text-violet-700 hover:text-violet-800"
                    >
                      View recommendation
                      <ArrowRight className="size-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold tracking-tight">
                    Profile sections
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Review and improve each part of your professional profile.
                  </p>
                </div>

                <button
                  type="button"
                  className="hidden items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 sm:flex"
                >
                  <Plus className="size-4" />
                  Add section
                </button>
              </div>

              <div className="grid gap-4 lg:grid-cols-2">
                {profileSections.map((section) => {
                  const Icon = section.icon;

                  return (
                    <div
                      key={section.title}
                      className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-3">
                          <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-slate-100">
                            <Icon className="size-4 text-slate-600" />
                          </div>

                          <div>
                            <h3 className="font-semibold">
                              {section.title}
                            </h3>

                            <p className="mt-0.5 text-xs text-slate-400">
                              {section.description}
                            </p>
                          </div>
                        </div>

                        <span className="text-sm font-semibold text-slate-700">
                          {section.score}
                        </span>
                      </div>

                      <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-slate-100">
                        <div
                          className="h-full rounded-full bg-blue-600"
                          style={{ width: `${section.score}%` }}
                        />
                      </div>

                      <p className="mt-4 text-sm leading-6 text-slate-500">
                        {section.value}
                      </p>

                      <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
                        <div className="flex items-center gap-1.5 text-xs font-medium text-emerald-600">
                          <CheckCircle2 className="size-3.5" />
                          Ready for improvement
                        </div>

                        <button
                          type="button"
                          className="flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-700"
                        >
                          <Pencil className="size-3.5" />
                          Improve
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-white p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold">
                    Ready to forge a stronger profile?
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    Start with an AI analysis to identify the highest-impact
                    improvements.
                  </p>
                </div>

                <button
                  type="button"
                  className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
                >
                  Analyze with AI
                  <ArrowRight className="size-4" />
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}