import { Sparkles } from "lucide-react";

export function RecentActivity() {
  return (
    <section>
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

          <p className="text-sm font-medium">Your workspace is ready</p>

          <p className="mt-1 text-xs leading-5 text-slate-500">
            Create your first post or improve your profile to start building
            your Forge history.
          </p>
        </div>
      </div>
    </section>
  );
}