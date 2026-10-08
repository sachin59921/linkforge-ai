"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  CalendarDays,
  ChevronRight,
  FileText,
  FolderKanban,
  Gauge,
  HelpCircle,
  LayoutDashboard,
  LogOut,
  Settings,
  Sparkles,
  UserRound,
  WandSparkles,
} from "lucide-react";

const workspaceItems = [
  {
    label: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    label: "Profile",
    href: "/dashboard/profile",
    icon: UserRound,
  },
  {
    label: "Posts",
    href: "/dashboard/content/create",
    icon: FileText,
  },
  {
    label: "Projects",
    href: "/dashboard/projects",
    icon: FolderKanban,
  },
  {
    label: "Calendar",
    href: "/dashboard/content/calendar",
    icon: CalendarDays,
  },
  {
    label: "Brand",
    href: "/dashboard/profile/analysis",
    icon: WandSparkles,
  },
  {
    label: "Analytics",
    href: "/dashboard/analytics",
    icon: BarChart3,
  },
];

const accountItems = [
  {
    label: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
  {
    label: "Help",
    href: "/dashboard/help",
    icon: HelpCircle,
  },
];

export function Sidebar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <aside className="hidden h-screen w-64 shrink-0 flex-col border-r border-slate-200 bg-white lg:flex">
      {/* Logo */}
      <div className="flex h-16 items-center border-b border-slate-200 px-5">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
            <Gauge className="h-4 w-4" />
          </div>

          <div>
            <p className="text-sm font-bold tracking-tight text-slate-900">
              LinkForge
            </p>

            <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
              AI Workspace
            </p>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-3 py-5">
        <NavSection title="Workspace">
          {workspaceItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                  active
                    ? "bg-blue-50 text-blue-700"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900",
                ].join(" ")}
              >
                <Icon
                  className={[
                    "h-[18px] w-[18px]",
                    active
                      ? "text-blue-600"
                      : "text-slate-400 group-hover:text-slate-600",
                  ].join(" ")}
                />

                <span>{item.label}</span>

                {active && (
                  <ChevronRight className="ml-auto h-4 w-4 text-blue-500" />
                )}
              </Link>
            );
          })}
        </NavSection>

        {/* AI */}
        <NavSection title="AI">
          <Link
            href="/copilot"
            className={[
              "group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
              isActive("/copilot")
                ? "bg-violet-50 text-violet-700"
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900",
            ].join(" ")}
          >
            <Sparkles
              className={[
                "h-[18px] w-[18px]",
                isActive("/copilot")
                  ? "text-violet-600"
                  : "text-violet-500",
              ].join(" ")}
            />

            <span>AI Copilot</span>

            <span className="ml-auto rounded-full bg-violet-100 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-violet-700">
              AI
            </span>
          </Link>
        </NavSection>

        {/* Account */}
        <NavSection title="Account">
          {accountItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                  active
                    ? "bg-slate-100 text-slate-900"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900",
                ].join(" ")}
              >
                <Icon className="h-[18px] w-[18px] text-slate-400 group-hover:text-slate-600" />

                <span>{item.label}</span>
              </Link>
            );
          })}
        </NavSection>
      </nav>

      {/* Bottom user card */}
      <div className="border-t border-slate-200 p-3">
        <div className="flex items-center gap-3 rounded-lg bg-slate-50 px-3 py-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
            JD
          </div>

          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold text-slate-900">
              John Doe
            </p>

            <p className="truncate text-xs text-slate-500">
              Free plan
            </p>
          </div>

          <button
            type="button"
            aria-label="Log out"
            className="rounded-md p-1.5 text-slate-400 transition-colors hover:bg-white hover:text-slate-700"
          >
            <LogOut className="h-4 w-4" />
          </button>
        </div>
      </div>
    </aside>
  );
}

function NavSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-6">
      <p className="mb-2 px-3 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
        {title}
      </p>

      <div className="space-y-1">{children}</div>
    </div>
  );
}