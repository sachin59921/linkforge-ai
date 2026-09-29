import { ArrowUpRight, Target } from "lucide-react";

export function ForgeScoreCard() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">Forge Score</p>
          <p className="mt-1 text-xs text-slate-400">
            Overall profile readiness
          </p>
        </div>

        <Target className="size-5 text-blue-600" />
      </div>

      <div className="flex items-end gap-2">
        <span className="text-5xl font-semibold tracking-tight">72</span>
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
  );
}