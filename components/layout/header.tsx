
"use client";

import Link from "next/link";
import {
  Bell,
  ChevronDown,
  Command,
  Menu,
  Search,
  Sparkles,
  X,
} from "lucide-react";

export function Header({
  mobileOpen,
  onMobileMenuToggle,
}: {
  mobileOpen: boolean;
  onMobileMenuToggle: () => void;
}) {
  return (
    <header className="sticky top-0 z-30 flex h-16 min-w-0 items-center justify-between gap-2 border-b border-slate-200 bg-white px-3 sm:px-6">
      {/* Left */}
      <div className="flex min-w-0 items-center gap-2 sm:gap-3">
        <button
          type="button"
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          onClick={onMobileMenuToggle}
          className="flex size-10 shrink-0 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 lg:hidden"
        >
          {mobileOpen ? (
            <X className="size-5" />
          ) : (
            <Menu className="size-5" />
          )}
        </button>

        <div className="hidden items-center gap-2 md:flex">
          <span className="text-sm text-slate-400">Workspace</span>
          <span className="text-slate-300">/</span>
          <span className="text-sm font-medium text-slate-900">
            Dashboard
          </span>
        </div>

        <Link href="/" className="flex shrink-0 items-center gap-2 md:hidden">
          <div className="flex size-8 items-center justify-center rounded-lg bg-blue-600 text-white">
            <Sparkles className="size-4" />
          </div>
          <span className="text-sm font-bold text-slate-900">LinkForge</span>
        </Link>
      </div>

      {/* Right */}
      <div className="flex shrink-0 items-center gap-1 sm:gap-2">
        <button
          type="button"
          aria-label="Search LinkForge"
          className="hidden h-9 items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 text-sm text-slate-400 transition-colors hover:border-slate-300 hover:bg-white hover:text-slate-600 sm:flex"
        >
          <Search className="size-4" />
          <span>Search</span>
          <span className="ml-2 flex items-center gap-0.5 rounded border border-slate-200 bg-white px-1.5 py-0.5 text-[10px] font-medium text-slate-400 md:ml-4">
            <Command className="size-2.5" />
            K
          </span>
        </button>

        <button
          type="button"
          aria-label="Search"
          className="flex size-10 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 sm:hidden"
        >
          <Search className="size-5" />
        </button>

        <Link
          href="/copilot"
          className="hidden items-center gap-2 rounded-lg bg-violet-50 px-3 py-2 text-sm font-medium text-violet-700 transition-colors hover:bg-violet-100 md:flex"
        >
          <Sparkles className="size-4" />
          <span>Copilot</span>
        </Link>

        <button
          type="button"
          aria-label="Notifications"
          className="relative flex size-10 shrink-0 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
        >
          <Bell className="size-5" />
          <span className="absolute right-2 top-2 size-1.5 rounded-full bg-blue-600 ring-2 ring-white" />
        </button>

        <div className="mx-1 hidden h-6 w-px bg-slate-200 sm:block" />

        <Link
          href="/settings"
          aria-label="Account settings"
          className="flex shrink-0 items-center gap-1.5 rounded-lg p-1.5 transition-colors hover:bg-slate-50 sm:gap-2"
        >
          <div className="flex size-8 items-center justify-center rounded-full bg-slate-900 text-[11px] font-semibold text-white">
            JD
          </div>

          <div className="hidden text-left sm:block">
            <p className="text-xs font-semibold text-slate-900">John Doe</p>
            <p className="text-[10px] text-slate-400">Free plan</p>
          </div>

          <ChevronDown className="hidden size-4 text-slate-400 sm:block" />
        </Link>
      </div>
    </header>
  );
}