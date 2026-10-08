"use client";

import Link from "next/link";
import {
  Bell,
  ChevronDown,
  Command,
  Menu,
  Search,
  Sparkles,
} from "lucide-react";

export function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-4 sm:px-6">
      {/* Left */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          aria-label="Open navigation"
          className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900 lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>

        <div className="hidden items-center gap-2 md:flex">
          <span className="text-sm text-slate-400">Workspace</span>
          <span className="text-slate-300">/</span>
          <span className="text-sm font-medium text-slate-900">
            Dashboard
          </span>
        </div>

        <Link
          href="/"
          className="flex items-center gap-2 md:hidden"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
            <Sparkles className="h-4 w-4" />
          </div>

          <span className="text-sm font-bold text-slate-900">
            LinkForge
          </span>
        </Link>
      </div>

      {/* Right */}
      <div className="flex items-center gap-1 sm:gap-2">
        {/* Search */}
        <button
          type="button"
          aria-label="Search LinkForge"
          className="hidden h-9 items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 text-sm text-slate-400 transition-colors hover:border-slate-300 hover:bg-white hover:text-slate-600 sm:flex"
        >
          <Search className="h-4 w-4" />

          <span>Search</span>

          <span className="ml-4 flex items-center gap-0.5 rounded border border-slate-200 bg-white px-1.5 py-0.5 text-[10px] font-medium text-slate-400">
            <Command className="h-2.5 w-2.5" />
            K
          </span>
        </button>

        {/* Mobile search */}
        <button
          type="button"
          aria-label="Search"
          className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900 sm:hidden"
        >
          <Search className="h-5 w-5" />
        </button>

        {/* AI Copilot */}
        <Link
          href="/copilot"
          className="hidden items-center gap-2 rounded-lg bg-violet-50 px-3 py-2 text-sm font-medium text-violet-700 transition-colors hover:bg-violet-100 md:flex"
        >
          <Sparkles className="h-4 w-4" />
          <span>Copilot</span>
        </Link>

        {/* Notifications */}
        <button
          type="button"
          aria-label="Notifications"
          className="relative rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900"
        >
          <Bell className="h-5 w-5" />

          <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-blue-600 ring-2 ring-white" />
        </button>

        {/* Divider */}
        <div className="mx-1 hidden h-6 w-px bg-slate-200 sm:block" />

        {/* User */}
        <Link
          href="/dashboard/settings"
          className="flex items-center gap-2 rounded-lg p-1.5 transition-colors hover:bg-slate-50"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-[11px] font-semibold text-white">
            JD
          </div>

          <div className="hidden text-left sm:block">
            <p className="text-xs font-semibold text-slate-900">
              John Doe
            </p>

            <p className="text-[10px] text-slate-400">
              Free plan
            </p>
          </div>

          <ChevronDown className="hidden h-4 w-4 text-slate-400 sm:block" />
        </Link>
      </div>
    </header>
  );
}