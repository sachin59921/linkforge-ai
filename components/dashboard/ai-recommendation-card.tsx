import { ChevronRight, Lightbulb } from "lucide-react";

export function AIRecommendationCard() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <div className="flex size-8 items-center justify-center rounded-lg bg-violet-50">
              <Lightbulb className="size-4 text-violet-600" />
            </div>

            <span className="text-sm font-semibold">AI Recommendation</span>
          </div>

          <h2 className="text-lg font-semibold tracking-tight">
            Make your positioning clearer
          </h2>

          <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
            Your profile has solid experience. Clarifying who you help and what
            you are known for can make the profile more memorable.
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
  );
}