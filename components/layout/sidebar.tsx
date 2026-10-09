"use client";

import { useEffect, type ReactNode } from "react";
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
  X,
} from "lucide-react";

const workspaceItems = [
  { label: "Dashboard", href: "/", icon: LayoutDashboard },
  { label: "Profile", href: "/profile", icon: UserRound },
  { label: "Posts", href: "/posts", icon: FileText },
  { label: "Projects", href: "/projects", icon: FolderKanban },
  { label: "Calendar", href: "/calendar", icon: CalendarDays },
  { label: "Brand", href: "/profile/analysis", icon: WandSparkles },
  { label: "Analytics", href: "/analytics", icon: BarChart3 },
];

const accountItems = [
  { label: "Settings", href: "/settings", icon: Settings },
  { label: "Help", href: "/help", icon: HelpCircle },
];

type SidebarProps = {
  mobileOpen: boolean;
  onMobileMenuClose: () => void;
};

export function Sidebar({
  mobileOpen,
  onMobileMenuClose,
}: SidebarProps) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  useEffect(() => {
    if (!mobileOpen) return;

    const previousOverflow = document.body.style.overflow;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onMobileMenuClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileOpen, onMobileMenuClose]);

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden h-screen w-64 shrink-0 flex-col border-r border-slate-200 bg-white lg:flex">
        <SidebarContent isActive={isActive} />
      </aside>

      {/* Mobile backdrop */}
      {mobileOpen && (
        <button
          type="button"
          aria-label="Close navigation menu"
          onClick={onMobileMenuClose}
          className="fixed inset-0 z-40 bg-slate-950/40 backdrop-blur-[2px] lg:hidden"
        />
      )}

      {/* Mobile navigation drawer */}
      <aside
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!mobileOpen}
        inert={!mobileOpen}
        className={[
          "fixed inset-y-0 left-0 z-50 flex w-[min(18rem,85vw)] flex-col border-r border-slate-200 bg-white shadow-2xl transition-transform duration-200 ease-out lg:hidden",
          mobileOpen ? "translate-x-0" : "-translate-x-full",
          !mobileOpen ? "pointer-events-none" : "",
        ].join(" ")}
      >
        <div className="flex h-16 shrink-0 items-center justify-between border-b border-slate-200 px-5">
          <Link
            href="/"
            onClick={onMobileMenuClose}
            className="flex items-center gap-2.5"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
              <Gauge className="size-4" />
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

          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={onMobileMenuClose}
            className="flex size-9 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <X className="size-5" />
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto">
          <SidebarNavigation
            isActive={isActive}
            onNavigate={onMobileMenuClose}
          />
        </div>

        <SidebarUserCard />
      </aside>
    </>
  );
}

function SidebarContent({
  isActive,
}: {
  isActive: (href: string) => boolean;
}) {
  return (
    <>
      <div className="flex h-16 shrink-0 items-center border-b border-slate-200 px-5">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
            <Gauge className="size-4" />
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

      <div className="min-h-0 flex-1 overflow-y-auto">
        <SidebarNavigation isActive={isActive} />
      </div>

      <SidebarUserCard />
    </>
  );
}

function SidebarNavigation({
  isActive,
  onNavigate,
}: {
  isActive: (href: string) => boolean;
  onNavigate?: () => void;
}) {
  return (
    <nav aria-label="Main navigation" className="px-3 py-5">
      <NavSection title="Workspace">
        {workspaceItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              aria-current={active ? "page" : undefined}
              className={[
                "group flex min-h-11 items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                active
                  ? "bg-blue-50 text-blue-700"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900",
              ].join(" ")}
            >
              <Icon
                className={[
                  "size-[18px] shrink-0",
                  active
                    ? "text-blue-600"
                    : "text-slate-400 group-hover:text-slate-600",
                ].join(" ")}
              />

              <span>{item.label}</span>

              {active && <ChevronRight className="ml-auto size-4 text-blue-500" />}
            </Link>
          );
        })}
      </NavSection>

      <NavSection title="AI">
        <Link
          href="/copilot"
          onClick={onNavigate}
          aria-current={isActive("/copilot") ? "page" : undefined}
          className={[
            "group flex min-h-11 items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
            isActive("/copilot")
              ? "bg-violet-50 text-violet-700"
              : "text-slate-600 hover:bg-slate-50 hover:text-slate-900",
          ].join(" ")}
        >
          <Sparkles
            className={[
              "size-[18px] shrink-0",
              isActive("/copilot") ? "text-violet-600" : "text-violet-500",
            ].join(" ")}
          />

          <span>AI Copilot</span>

          <span className="ml-auto rounded-full bg-violet-100 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-violet-700">
            AI
          </span>
        </Link>
      </NavSection>

      <NavSection title="Account">
        {accountItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              aria-current={active ? "page" : undefined}
              className={[
                "group flex min-h-11 items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                active
                  ? "bg-slate-100 text-slate-900"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900",
              ].join(" ")}
            >
              <Icon className="size-[18px] shrink-0 text-slate-400 group-hover:text-slate-600" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </NavSection>
    </nav>
  );
}

function SidebarUserCard() {
  return (
    <div className="shrink-0 border-t border-slate-200 bg-white p-3">
      <div className="flex items-center gap-3 rounded-lg bg-slate-50 px-3 py-3">
        <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
          JD
        </div>

        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-slate-900">
            John Doe
          </p>
          <p className="truncate text-xs text-slate-500">Free plan</p>
        </div>

        <button
          type="button"
          aria-label="Log out"
          className="rounded-md p-1.5 text-slate-400 transition-colors hover:bg-white hover:text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          <LogOut className="size-4" />
        </button>
      </div>
    </div>
  );
}

function NavSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
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
