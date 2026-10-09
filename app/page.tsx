import { BarChart3, ChevronRight } from "lucide-react";
import { AIRecommendationCard } from "@/components/dashboard/ai-recommendation-card";
import { ForgeScoreCard } from "@/components/dashboard/forge-score-card";
import { QuickActions } from "@/components/dashboard/quick-actions";
import { Recommendations } from "@/components/dashboard/recommendations";
import { RecentActivity } from "@/components/dashboard/recent-activity";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-950">

      <div className="flex min-w-0 flex-1 flex-col">

        <main className="flex-1">
          <section className="mx-auto w-full max-w-7xl p-5 sm:p-8">
            <div className="mb-8">
              <p className="mb-1 text-sm font-medium text-blue-600">
                Your professional workspace
              </p>

              <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Good morning, Sachin
              </h1>

              <p className="mt-2 max-w-2xl text-sm text-slate-500 sm:text-base">
                Turn your LinkedIn presence into a professional asset.
                Here&apos;s what you can work on next.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              <ForgeScoreCard />

              <div className="lg:col-span-2">
                <AIRecommendationCard />
              </div>
            </div>

            <div className="mt-8">
              <QuickActions />
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <Recommendations />
              <RecentActivity />
            </div>

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