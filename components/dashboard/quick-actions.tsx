import Link from "next/link";
import {
  Bot,
  BriefcaseBusiness,
  ChevronRight,
  FileText,
  UserRound,
} from "lucide-react";

const quickActions = [
  {
    label: "Improve Profile",
    href: "/dashboard/profile/analysis",
    icon: UserRound,
  },
  {
    label: "Create Post",
    href: "/dashboard/content/create",
    icon: FileText,
  },
  {
    label: "Forge Project",
    href: "/dashboard/projects",
    icon: BriefcaseBusiness,
  },
  {
    label: "Ask Copilot",
    href: "/copilot",
    icon: Bot,
  },
];

export function QuickActions() {
  return (
    <section>
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
            <Link
              key={action.label}
              href={action.href}
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

              <ChevronRight className="size-4 text-slate-400 transition-transform group-hover:translate-x-0.5" />
            </Link>
          );
        })}
      </div>
    </section>
  );
}