
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock3,
  FileText,
  Plus,
  Sparkles,
  Target,
  X,
  Trash2,
} from "lucide-react";

type PostStatus = "Draft" | "Scheduled";
type PostType = "Story" | "Insight" | "Project" | "Thought Leadership" | "Educational";

type CalendarPost = {
  id: string;
  date: string;
  time: string;
  title: string;
  type: PostType;
  status: PostStatus;
  content: string;
};

const postTypes: PostType[] = [
  "Story",
  "Insight",
  "Project",
  "Thought Leadership",
  "Educational",
];

const ideas = [
  {
    title: "A lesson you learned the hard way",
    type: "Story" as PostType,
    content:
      "Share a professional mistake, what it taught you, and the practical advice you would give someone facing the same situation.",
  },
  {
    title: "Three things you would do differently",
    type: "Educational" as PostType,
    content:
      "Break down three lessons from a recent project. Explain what worked, what did not, and what you would change next time.",
  },
  {
    title: "Behind the scenes of your latest project",
    type: "Project" as PostType,
    content:
      "Take your audience behind the scenes. Describe the challenge, your approach, an unexpected obstacle, and the result.",
  },
  {
    title: "An opinion that changed your perspective",
    type: "Thought Leadership" as PostType,
    content:
      "Explain a professional belief you once held, what changed your mind, and how that new perspective affects your work.",
  },
];

function dateKey(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getInitialPosts(): CalendarPost[] {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const samples = [
    { day: 3, time: "09:00", title: "What I learned building with AI", type: "Story" as PostType, status: "Draft" as PostStatus },
    { day: 8, time: "11:30", title: "3 lessons from building a product", type: "Insight" as PostType, status: "Scheduled" as PostStatus },
    { day: 12, time: "09:30", title: "Behind the scenes: AI Content Platform", type: "Project" as PostType, status: "Draft" as PostStatus },
    { day: 17, time: "12:00", title: "The biggest mistake I made early", type: "Story" as PostType, status: "Scheduled" as PostStatus },
    { day: 23, time: "10:00", title: "How I approach product building", type: "Thought Leadership" as PostType, status: "Draft" as PostStatus },
    { day: 26, time: "11:00", title: "A practical framework for AI products", type: "Educational" as PostType, status: "Scheduled" as PostStatus },
  ];

  return samples.map((post, index) => ({
    id: `sample-${index}`,
    date: dateKey(new Date(year, month, Math.min(post.day, daysInMonth))),
    time: post.time,
    title: post.title,
    type: post.type,
    status: post.status,
    content: "",
  }));
}

function formatMonth(date: Date) {
  return date.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
}

function formatShortDate(dateString: string) {
  return new Date(`${dateString}T12:00:00`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

function formatTime(time: string) {
  const [hours, minutes] = time.split(":").map(Number);
  const date = new Date();
  date.setHours(hours, minutes, 0, 0);
  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
}

export default function CalendarPage() {
  const [currentMonth, setCurrentMonth] = useState(
    () => new Date(new Date().getFullYear(), new Date().getMonth(), 1),
  );
  const [posts, setPosts] = useState<CalendarPost[]>(getInitialPosts);
  const [selectedPost, setSelectedPost] = useState<CalendarPost | null>(null);
  const [formOpen, setFormOpen] = useState(false);
  const [formDate, setFormDate] = useState(dateKey(new Date()));
  const [formTitle, setFormTitle] = useState("");
  const [formTime, setFormTime] = useState("09:00");
  const [formType, setFormType] = useState<PostType>("Insight");
  const [formStatus, setFormStatus] = useState<PostStatus>("Draft");
  const [formContent, setFormContent] = useState("");
  const [ideaIndex, setIdeaIndex] = useState<number | null>(null);
  const [notice, setNotice] = useState("");

  const todayKey = dateKey(new Date());

  const calendarDays = useMemo(() => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const offset = (firstDay.getDay() + 6) % 7;
    const totalDays = new Date(year, month + 1, 0).getDate();

    return [
      ...Array.from({ length: offset }, (_, index) => ({
        key: `blank-${index}`,
        date: null as string | null,
        day: 0,
      })),
      ...Array.from({ length: totalDays }, (_, index) => {
        const date = new Date(year, month, index + 1);
        return {
          key: dateKey(date),
          date: dateKey(date),
          day: index + 1,
        };
      }),
    ];
  }, [currentMonth]);

  const visiblePosts = useMemo(
    () =>
      posts
        .filter((post) => post.date.startsWith(
          `${currentMonth.getFullYear()}-${String(currentMonth.getMonth() + 1).padStart(2, "0")}`,
        ))
        .sort((a, b) => `${a.date} ${a.time}`.localeCompare(`${b.date} ${b.time}`)),
    [posts, currentMonth],
  );

  const upcomingPosts = useMemo(
    () =>
      posts
        .filter((post) => post.status === "Scheduled" && post.date >= todayKey)
        .sort((a, b) => `${a.date} ${a.time}`.localeCompare(`${b.date} ${b.time}`))
        .slice(0, 3),
    [posts, todayKey],
  );

  const scheduledCount = visiblePosts.filter((post) => post.status === "Scheduled").length;
  const draftCount = visiblePosts.filter((post) => post.status === "Draft").length;
  const consistency = Math.min(100, Math.round((visiblePosts.length / 8) * 100));

  function changeMonth(amount: number) {
    setCurrentMonth(
      (previous) =>
        new Date(previous.getFullYear(), previous.getMonth() + amount, 1),
    );
  }

  function openNewPost(date = todayKey) {
    setSelectedPost(null);
    setFormDate(date);
    setFormTitle("");
    setFormTime("09:00");
    setFormType("Insight");
    setFormStatus("Draft");
    setFormContent("");
    setFormOpen(true);
    setNotice("");
  }

  function openEditPost(post: CalendarPost) {
    setSelectedPost(post);
    setFormDate(post.date);
    setFormTitle(post.title);
    setFormTime(post.time);
    setFormType(post.type);
    setFormStatus(post.status);
    setFormContent(post.content);
    setFormOpen(true);
    setNotice("");
  }

  function savePost(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const title = formTitle.trim();
    if (!title || !formDate) return;

    if (selectedPost) {
      setPosts((previous) =>
        previous.map((post) =>
          post.id === selectedPost.id
            ? {
                ...post,
                title,
                date: formDate,
                time: formTime,
                type: formType,
                status: formStatus,
                content: formContent,
              }
            : post,
        ),
      );
      setNotice("Post updated successfully.");
    } else {
      setPosts((previous) => [
        ...previous,
        {
          id: `post-${Date.now()}`,
          title,
          date: formDate,
          time: formTime,
          type: formType,
          status: formStatus,
          content: formContent,
        },
      ]);
      setNotice("Post added to your calendar.");
    }

    setCurrentMonth(new Date(
      Number(formDate.slice(0, 4)),
      Number(formDate.slice(5, 7)) - 1,
      1,
    ));
    setFormOpen(false);
    setSelectedPost(null);
  }

  function deletePost() {
    if (!selectedPost) return;
    setPosts((previous) =>
      previous.filter((post) => post.id !== selectedPost.id),
    );
    setFormOpen(false);
    setSelectedPost(null);
    setNotice("Post deleted.");
  }

  function generateIdea() {
    const nextIndex =
      ideaIndex === null ? 0 : (ideaIndex + 1) % ideas.length;
    setIdeaIndex(nextIndex);
  }

  function useIdea() {
    if (ideaIndex === null) return;
    const idea = ideas[ideaIndex];
    setFormTitle(idea.title);
    setFormType(idea.type);
    setFormContent(idea.content);
    setFormDate(todayKey);
    setFormTime("09:00");
    setFormStatus("Draft");
    setSelectedPost(null);
    setFormOpen(true);
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center gap-2 text-sm text-slate-500">
          <Link href="/" className="transition hover:text-slate-900">Dashboard</Link>
          <span>/</span>
          <span className="font-medium text-slate-900">Calendar</span>
        </div>

        <section className="mb-8 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div className="flex items-center gap-3">
            <div className="flex size-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <CalendarDays className="size-5" />
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                Content Calendar
              </h1>
              <p className="mt-1 text-sm text-slate-500">
                Plan, organize, and maintain a consistent LinkedIn presence.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/posts"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
            >
              <FileText className="size-4" />
              My Posts
            </Link>
            <button
              type="button"
              onClick={() => openNewPost()}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              <Plus className="size-4" />
              Create Post
            </button>
          </div>
        </section>

        {notice && (
          <div className="mb-5 flex items-center justify-between rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
            <span>{notice}</span>
            <button type="button" onClick={() => setNotice("")} aria-label="Dismiss message">
              <X className="size-4" />
            </button>
          </div>
        )}

        <section className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Planned posts", value: visiblePosts.length, detail: "This month", icon: FileText },
            { label: "Scheduled", value: scheduledCount, detail: "Ready to publish", icon: CheckCircle2 },
            { label: "Drafts", value: draftCount, detail: "Need review", icon: Clock3 },
            { label: "Consistency", value: `${consistency}%`, detail: "Monthly target: 8", icon: Target },
          ].map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-slate-500">{stat.label}</p>
                  <Icon className="size-4 text-slate-400" />
                </div>
                <div className="mt-3 flex items-end gap-2">
                  <span className="text-2xl font-bold text-slate-950">{stat.value}</span>
                  <span className="mb-0.5 text-xs text-slate-400">{stat.detail}</span>
                </div>
              </div>
            );
          })}
        </section>

        <section className="mb-6 rounded-2xl border border-violet-100 bg-gradient-to-r from-violet-50 to-white p-6 shadow-sm">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="flex gap-4">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-violet-600">
                <Sparkles className="size-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">AI content recommendation</p>
                {ideaIndex === null ? (
                  <p className="mt-1 max-w-3xl text-sm leading-6 text-slate-600">
                    Generate a content idea to add variety to your calendar and keep your publishing rhythm consistent.
                  </p>
                ) : (
                  <>
                    <p className="mt-1 text-sm font-semibold text-slate-800">{ideas[ideaIndex].title}</p>
                    <p className="mt-1 max-w-3xl text-sm leading-6 text-slate-600">{ideas[ideaIndex].content}</p>
                  </>
                )}
              </div>
            </div>
            <div className="flex shrink-0 flex-wrap gap-2">
              {ideaIndex !== null && (
                <button
                  type="button"
                  onClick={useIdea}
                  className="rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Use idea
                </button>
              )}
              <button
                type="button"
                onClick={generateIdea}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                {ideaIndex === null ? "Generate Idea" : "Another Idea"}
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>
        </section>

        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex flex-col justify-between gap-4 border-b border-slate-100 px-5 py-5 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-lg font-bold text-slate-950">{formatMonth(currentMonth)}</h2>
              <p className="mt-1 text-xs text-slate-500">Select a date to plan content.</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => changeMonth(-1)}
                aria-label="Previous month"
                className="flex size-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition hover:bg-slate-50"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                type="button"
                onClick={() => setCurrentMonth(new Date(new Date().getFullYear(), new Date().getMonth(), 1))}
                className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Today
              </button>
              <button
                type="button"
                onClick={() => changeMonth(1)}
                aria-label="Next month"
                className="flex size-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition hover:bg-slate-50"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-7 border-b border-slate-100">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
              <div key={day} className="border-r border-slate-100 px-1 py-3 text-center text-[10px] font-semibold uppercase tracking-wide text-slate-400 last:border-r-0 sm:text-[11px]">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7">
            {calendarDays.map((item) => {
              if (!item.date) {
                return <div key={item.key} className="min-h-24 border-b border-r border-slate-100 p-1 sm:min-h-[145px] sm:p-2" />;
              }

              const dayPosts = visiblePosts.filter((post) => post.date === item.date);
              const isToday = item.date === todayKey;

              return (
                <div key={item.key} className="min-h-24 border-b border-r border-slate-100 p-1 sm:min-h-[145px] sm:p-2">
                  <div className="mb-2 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => openNewPost(item.date!)}
                      aria-label={`Create post on ${item.date}`}
                      className={`flex size-7 items-center justify-center rounded-full text-xs font-semibold transition ${
                        isToday ? "bg-slate-950 text-white" : "text-slate-600 hover:bg-slate-100"
                      }`}
                    >
                      {item.day}
                    </button>
                    {dayPosts.length > 0 && (
                      <span className="text-[9px] font-medium text-slate-400 sm:text-[10px]">
                        {dayPosts.length}
                      </span>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    {dayPosts.map((post) => (
                      <button
                        key={post.id}
                        type="button"
                        onClick={() => openEditPost(post)}
                        title={`${post.title} — click to edit`}
                        className={`w-full rounded-md border p-1.5 text-left transition hover:shadow-sm sm:rounded-lg sm:p-2 ${
                          post.status === "Scheduled"
                            ? "border-blue-100 bg-blue-50"
                            : "border-slate-200 bg-slate-50"
                        }`}
                      >
                        <div className="mb-1 flex items-center gap-1">
                          <span className={`size-1.5 shrink-0 rounded-full ${post.status === "Scheduled" ? "bg-blue-600" : "bg-slate-400"}`} />
                          <span className="truncate text-[9px] font-medium text-slate-500 sm:text-[10px]">{post.time}</span>
                        </div>
                        <p className="line-clamp-2 text-[10px] font-semibold leading-4 text-slate-700 sm:text-[11px]">{post.title}</p>
                        <p className="mt-1 hidden truncate text-[10px] text-slate-400 sm:block">{post.type}</p>
                      </button>
                    ))}
                    <button
                      type="button"
                      onClick={() => openNewPost(item.date!)}
                      aria-label={`Add post on ${item.date}`}
                      className="flex w-full items-center justify-center rounded-md border border-dashed border-slate-200 py-1 text-slate-400 transition hover:border-slate-400 hover:text-slate-700 sm:py-1.5"
                    >
                      <Plus className="size-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mt-6 grid gap-6 lg:grid-cols-[1fr_0.85fr]">
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-100 px-6 py-5">
              <h2 className="font-semibold text-slate-900">Upcoming posts</h2>
              <p className="mt-1 text-sm text-slate-500">Your next scheduled content.</p>
            </div>
            <div className="divide-y divide-slate-100">
              {upcomingPosts.length === 0 ? (
                <div className="px-6 py-8 text-center">
                  <CalendarDays className="mx-auto size-7 text-slate-300" />
                  <p className="mt-2 text-sm font-medium text-slate-700">No upcoming scheduled posts</p>
                  <p className="mt-1 text-xs text-slate-500">Create a post and mark it as scheduled.</p>
                </div>
              ) : (
                upcomingPosts.map((post) => (
                  <div key={post.id} className="flex items-center gap-4 px-6 py-4">
                    <div className="flex size-11 shrink-0 flex-col items-center justify-center rounded-lg bg-slate-50">
                      <span className="text-[10px] font-semibold uppercase text-slate-400">{formatShortDate(post.date).split(" ")[0]}</span>
                      <span className="text-sm font-bold text-slate-900">{formatShortDate(post.date).split(" ")[1]}</span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="truncate text-sm font-semibold text-slate-800">{post.title}</h3>
                      <div className="mt-1 flex items-center gap-2 text-xs text-slate-400">
                        <span>{formatTime(post.time)}</span><span>•</span><span>{post.type}</span>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => openEditPost(post)}
                      className="hidden items-center gap-1 text-xs font-semibold text-slate-500 transition hover:text-slate-900 sm:flex"
                    >
                      Edit <ArrowRight className="size-3" />
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2">
              <Target className="size-4 text-blue-600" />
              <h2 className="font-semibold text-slate-900">Publishing consistency</h2>
            </div>
            <p className="mt-1 text-sm text-slate-500">Your current posting rhythm.</p>
            <div className="mt-6 flex items-end gap-2">
              <span className="text-4xl font-bold tracking-tight text-slate-950">{consistency}%</span>
              <span className="mb-1 text-sm text-slate-400">of monthly target</span>
            </div>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
              <div className="h-full rounded-full bg-blue-600 transition-all" style={{ width: `${consistency}%` }} />
            </div>
            <div className="mt-6 space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-500">Posts this month</span>
                <span className="font-semibold text-slate-900">{visiblePosts.length}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-500">Target</span>
                <span className="font-semibold text-slate-900">8</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-500">Recommended frequency</span>
                <span className="font-semibold text-slate-900">2 / week</span>
              </div>
            </div>
            <div className="mt-6 rounded-xl bg-slate-50 p-4">
              <p className="text-xs font-semibold text-slate-700">Publishing tip</p>
              <p className="mt-1 text-xs leading-5 text-slate-500">
                Share useful lessons, personal experiences, and practical advice to build a consistent professional presence.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
            <div>
              <div className="flex items-center gap-2">
                <Sparkles className="size-4 text-violet-500" />
                <h2 className="font-semibold text-slate-900">Need ideas for your calendar?</h2>
              </div>
              <p className="mt-1 text-sm text-slate-500">
                Explore content ideas with LinkForge AI Copilot.
              </p>
            </div>
            <Link href="/copilot" className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800">
              Ask AI Copilot <ArrowRight className="size-4" />
            </Link>
          </div>
        </section>
      </main>

      {formOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-slate-950/40 p-4"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setFormOpen(false);
          }}
        >
          <div role="dialog" aria-modal="true" aria-labelledby="post-form-title" className="my-auto w-full max-w-lg rounded-2xl border border-slate-200 bg-white shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
              <div>
                <h2 id="post-form-title" className="text-lg font-bold text-slate-950">
                  {selectedPost ? "Edit post" : "Create calendar post"}
                </h2>
                <p className="mt-1 text-xs text-slate-500">Plan your next piece of LinkedIn content.</p>
              </div>
              <button type="button" onClick={() => setFormOpen(false)} aria-label="Close form" className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700">
                <X className="size-5" />
              </button>
            </div>

            <form onSubmit={savePost} className="space-y-4 p-6">
              <div>
                <label htmlFor="post-title" className="mb-1.5 block text-sm font-medium text-slate-700">Post title</label>
                <input id="post-title" value={formTitle} onChange={(event) => setFormTitle(event.target.value)} required maxLength={120} placeholder="e.g. 3 lessons I learned this week" className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="post-date" className="mb-1.5 block text-sm font-medium text-slate-700">Date</label>
                  <input id="post-date" type="date" value={formDate} onChange={(event) => setFormDate(event.target.value)} required className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
                </div>
                <div>
                  <label htmlFor="post-time" className="mb-1.5 block text-sm font-medium text-slate-700">Time</label>
                  <input id="post-time" type="time" value={formTime} onChange={(event) => setFormTime(event.target.value)} required className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="post-type" className="mb-1.5 block text-sm font-medium text-slate-700">Content type</label>
                  <select id="post-type" value={formType} onChange={(event) => setFormType(event.target.value as PostType)} className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100">
                    {postTypes.map((type) => <option key={type} value={type}>{type}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="post-status" className="mb-1.5 block text-sm font-medium text-slate-700">Status</label>
                  <select id="post-status" value={formStatus} onChange={(event) => setFormStatus(event.target.value as PostStatus)} className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100">
                    <option value="Draft">Draft</option>
                    <option value="Scheduled">Scheduled</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="post-content" className="mb-1.5 block text-sm font-medium text-slate-700">Notes or draft content <span className="font-normal text-slate-400">(optional)</span></label>
                <textarea id="post-content" value={formContent} onChange={(event) => setFormContent(event.target.value)} rows={4} placeholder="Outline the main points you want to share..." className="w-full resize-y rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
              </div>

              <div className="flex flex-col-reverse gap-3 border-t border-slate-100 pt-4 sm:flex-row sm:items-center">
                {selectedPost && (
                  <button type="button" onClick={deletePost} className="inline-flex items-center justify-center gap-2 rounded-lg px-3 py-2.5 text-sm font-semibold text-red-600 transition hover:bg-red-50">
                    <Trash2 className="size-4" /> Delete
                  </button>
                )}
                <div className="flex flex-1 gap-3 sm:justify-end">
                  <button type="button" onClick={() => setFormOpen(false)} className="flex-1 rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 sm:flex-none">
                    Cancel
                  </button>
                  <button type="submit" className="flex-1 rounded-lg bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 sm:flex-none">
                    {selectedPost ? "Save changes" : "Add to calendar"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}