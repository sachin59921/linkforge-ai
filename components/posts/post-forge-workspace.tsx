"use client";

import {
  ArrowRight,
  ChevronDown,
  FileText,
  Lightbulb,
  MessageSquareText,
  PenLine,
  RefreshCw,
  Save,
  Sparkles,
  WandSparkles,
} from "lucide-react";
import { useMemo, useState } from "react";

const postTypes = [
  "Story",
  "Educational",
  "Opinion",
  "Case Study",
  "Career Lesson",
  "Industry Insight",
  "Personal Experience",
];

const tones = ["Professional", "Conversational", "Bold", "Thoughtful"];

const audiences = [
  "Professionals",
  "Hiring Managers",
  "Founders",
  "Creators",
  "Students",
  "My Network",
];

const lengths = ["Short", "Medium", "Long"];

const aiActions = [
  "Improve hook",
  "Make more human",
  "Strengthen argument",
  "Add storytelling",
  "Shorten",
  "Expand",
  "Suggest CTA",
];

const generatedTemplates: Record<string, string> = {
  Story: `One of the most useful lessons I've learned recently is that progress rarely looks impressive while you're in the middle of it.

There are days when the work feels slow. Decisions take longer. Small problems keep appearing.

But those small steps add up.

The biggest shift for me was stopping myself from measuring progress only by the final result and starting to pay attention to what I was learning along the way.

That's where meaningful growth happens.

What is one lesson you've learned from a project that didn't go exactly as planned?`,

  Educational: `A simple framework I use when approaching a new problem:

1. Understand the real problem.
2. Identify what actually matters.
3. Start with the smallest useful solution.
4. Learn from the result.
5. Improve from there.

The important part isn't getting everything right on the first attempt.

It's creating a process that helps you get better with every iteration.

Simple doesn't mean easy.

It means intentional.`,

  Opinion: `I think we spend too much time trying to make professional content sound impressive.

Clear thinking is more valuable than complicated language.

A useful idea explained simply can create more value than a long post filled with buzzwords.

The goal shouldn't be to sound like an expert.

The goal should be to make your expertise useful to someone else.`,

  "Case Study": `A recent project reminded me of something important:

The strongest solutions don't always come from adding more.

Sometimes they come from removing what isn't necessary.

We started by looking at the problem from the user's perspective, identified the biggest friction point, and focused our effort there.

The result wasn't a more complicated solution.

It was a clearer one.

That experience reinforced a principle I want to keep applying: solve the right problem before trying to build the perfect solution.`,

  "Career Lesson": `A career lesson I've come back to repeatedly:

You don't need to know exactly where you're going before you start moving.

Some of the most useful opportunities I've had came from saying yes to projects that taught me something new.

Clarity often comes after action, not before it.

So instead of waiting until you have the perfect plan, start with the next useful step.`,

  "Industry Insight": `One trend I keep noticing in professional work is the growing value of people who can connect ideas across disciplines.

Technical knowledge matters.

Domain expertise matters.

But the ability to communicate, simplify complexity, and understand different perspectives is becoming increasingly valuable.

The future isn't only about knowing more.

It's also about connecting what you know to problems that matter.`,

  "Personal Experience": `Something I've been thinking about lately:

The work that teaches you the most isn't always the work that gets the most attention.

Some of the most valuable experiences happen quietly — solving a difficult problem, helping a teammate, learning from a mistake, or figuring something out for the first time.

Those experiences shape how we work.

And over time, they become part of our professional story.`,
};

export function PostForgeWorkspace() {
  const [postType, setPostType] = useState("Story");
  const [tone, setTone] = useState("Professional");
  const [audience, setAudience] = useState("Professionals");
  const [length, setLength] = useState("Medium");
  const [idea, setIdea] = useState("");
  const [draft, setDraft] = useState("");
  const [saved, setSaved] = useState(false);
  const [message, setMessage] = useState("");

  const characterCount = draft.length;

  const wordCount = useMemo(() => {
    if (!draft.trim()) return 0;
    return draft.trim().split(/\s+/).length;
  }, [draft]);

  function generatePost() {
    const base = generatedTemplates[postType] ?? generatedTemplates.Story;

    const context = idea.trim()
      ? `\n\nContext from you:\n${idea.trim()}`
      : "";

    setDraft(`${base}${context}`);
    setSaved(false);
    setMessage("Draft generated.");
  }

  function startBlank() {
    setDraft("");
    setSaved(false);
    setMessage("");
  }

  function regenerate() {
    generatePost();
    setMessage("Draft regenerated.");
  }

  function applyAction(action: string) {
    if (!draft.trim()) {
      setMessage("Generate or write a draft first.");
      return;
    }

    if (action === "Improve hook") {
      const lines = draft.split("\n");
      const firstTextIndex = lines.findIndex((line) => line.trim());

      if (firstTextIndex >= 0) {
        lines[firstTextIndex] =
          "A lesson from my recent work changed how I think about progress.";
      }

      setDraft(lines.join("\n"));
    } else if (action === "Make more human") {
      setDraft(
        `${draft}\n\nThis is something I've been learning firsthand, and I'm still figuring out how to apply it consistently.`,
      );
    } else if (action === "Strengthen argument") {
      setDraft(
        `${draft}\n\nThe reason this matters is simple: clear thinking creates better decisions, and better decisions create better outcomes.`,
      );
    } else if (action === "Add storytelling") {
      setDraft(
        `A few weeks ago, I found myself looking at a problem that seemed much bigger than it actually was.\n\n${draft}`,
      );
    } else if (action === "Shorten") {
      const sentences = draft
        .split(/(?<=[.!?])\s+/)
        .filter(Boolean)
        .slice(0, 5);

      setDraft(sentences.join(" "));
    } else if (action === "Expand") {
      setDraft(
        `${draft}\n\nAnother part of this lesson is that improvement rarely happens in one dramatic moment. It comes from repeated decisions, small experiments, and being willing to adjust.`,
      );
    } else if (action === "Suggest CTA") {
      setDraft(
        `${draft}\n\nWhat would you add to this perspective? I'd be interested to hear your experience.`,
      );
    }

    setSaved(false);
    setMessage(`${action} applied.`);
  }

  function saveDraft() {
    if (!draft.trim()) {
      setMessage("There is nothing to save yet.");
      return;
    }

    setSaved(true);
    setMessage("Draft saved locally.");
  }

  return (
    <div className="grid gap-5 xl:grid-cols-[280px_minmax(0,1fr)_280px]">
      {/* Settings */}
      <aside className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="mb-5 flex items-center gap-2">
          <div className="flex size-8 items-center justify-center rounded-lg bg-blue-50">
            <PenLine className="size-4 text-blue-600" />
          </div>

          <div>
            <h2 className="text-sm font-semibold">Post settings</h2>
            <p className="text-xs text-slate-400">Shape your post</p>
          </div>
        </div>

        <div className="space-y-5">
          <SettingGroup
            label="Post type"
            options={postTypes}
            selected={postType}
            onSelect={setPostType}
          />

          <SettingGroup
            label="Tone"
            options={tones}
            selected={tone}
            onSelect={setTone}
          />

          <SettingGroup
            label="Audience"
            options={audiences}
            selected={audience}
            onSelect={setAudience}
          />

          <SelectSetting
            label="Length"
            value={length}
            options={lengths}
            onChange={setLength}
          />
        </div>
      </aside>

      {/* Editor */}
      <div className="min-w-0 rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
          <div>
            <h2 className="text-sm font-semibold">Post editor</h2>
            <p className="mt-0.5 text-xs text-slate-400">
              Draft your next LinkedIn post
            </p>
          </div>

          <span
            className={[
              "rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide",
              saved
                ? "bg-emerald-50 text-emerald-700"
                : "bg-slate-100 text-slate-500",
            ].join(" ")}
          >
            {saved ? "Saved" : "Draft"}
          </span>
        </div>

        <div className="p-5">
          <div className="mb-5 rounded-xl border border-blue-100 bg-blue-50/50 p-4">
            <div className="mb-2 flex items-center gap-2">
              <Lightbulb className="size-4 text-blue-600" />

              <span className="text-xs font-semibold text-blue-700">
                Start with an idea
              </span>
            </div>

            <p className="text-xs leading-5 text-slate-500">
              Tell AI what you want to talk about. The current prototype
              generates a local draft without calling an external AI service.
            </p>
          </div>

          <label className="mb-2 block text-sm font-medium text-slate-700">
            What do you want to write about?
          </label>

          <textarea
            value={idea}
            onChange={(event) => setIdea(event.target.value)}
            placeholder="Example: I recently learned an important lesson while building a product with a small team..."
            className="min-h-28 w-full resize-none rounded-xl border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
          />

          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={generatePost}
              className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
            >
              <Sparkles className="size-4" />
              Generate post
            </button>

            <button
              type="button"
              onClick={startBlank}
              className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
            >
              <WandSparkles className="size-4" />
              Start blank
            </button>
          </div>
        </div>

        <div className="border-t border-slate-200 p-5">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h3 className="text-sm font-semibold">Post draft</h3>
              <p className="mt-0.5 text-xs text-slate-400">
                Edit the draft directly before saving.
              </p>
            </div>

            <button
              type="button"
              onClick={regenerate}
              aria-label="Regenerate post"
              className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
            >
              <RefreshCw className="size-4" />
            </button>
          </div>

          <textarea
            value={draft}
            onChange={(event) => {
              setDraft(event.target.value);
              setSaved(false);
              setMessage("");
            }}
            placeholder="Your generated post will appear here..."
            className="min-h-80 w-full resize-y rounded-xl border border-slate-200 bg-white p-5 text-sm leading-7 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
          />

          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4 text-xs text-slate-400">
              <span>{characterCount} / 3,000 characters</span>
              <span>{wordCount} words</span>
            </div>

            <button
              type="button"
              onClick={saveDraft}
              className="flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
            >
              <Save className="size-4" />
              Save draft
            </button>
          </div>

          {message && (
            <p className="mt-3 text-xs font-medium text-blue-600">{message}</p>
          )}
        </div>
      </div>

      {/* AI Assistant */}
      <aside className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="mb-5 flex items-center gap-2">
          <div className="flex size-8 items-center justify-center rounded-lg bg-violet-50">
            <Sparkles className="size-4 text-violet-600" />
          </div>

          <div>
            <h2 className="text-sm font-semibold">AI Assistant</h2>
            <p className="text-xs text-slate-400">Improve your draft</p>
          </div>
        </div>

        <div className="mb-5 rounded-xl bg-violet-50 p-4">
          <p className="text-xs font-semibold text-violet-700">Forge tip</p>

          <p className="mt-1 text-xs leading-5 text-violet-700/70">
            Strong LinkedIn posts usually start with a clear idea, useful
            insight, or specific experience.
          </p>
        </div>

        <div>
          <p className="mb-2 text-xs font-semibold text-slate-600">
            Quick improvements
          </p>

          <div className="space-y-1.5">
            {aiActions.map((action) => (
              <button
                key={action}
                type="button"
                onClick={() => applyAction(action)}
                className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-xs font-medium text-slate-600 transition hover:bg-slate-50 hover:text-slate-900"
              >
                <span>{action}</span>
                <ArrowRight className="size-3.5 text-slate-400" />
              </button>
            ))}
          </div>
        </div>

        <div className="mt-5 border-t border-slate-100 pt-5">
          <button
            type="button"
            onClick={() => setMessage("AI Copilot will be connected later.")}
            className="flex w-full items-center justify-center gap-2 rounded-lg border border-violet-200 bg-violet-50 px-3 py-2.5 text-xs font-semibold text-violet-700 transition hover:bg-violet-100"
          >
            <MessageSquareText className="size-3.5" />
            Ask AI about this post
          </button>
        </div>
      </aside>
    </div>
  );
}

function SettingGroup({
  label,
  options,
  selected,
  onSelect,
}: {
  label: string;
  options: string[];
  selected: string;
  onSelect: (value: string) => void;
}) {
  return (
    <div>
      <label className="mb-2 block text-xs font-semibold text-slate-600">
        {label}
      </label>

      <div className="space-y-1">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => onSelect(option)}
            className={[
              "w-full rounded-lg px-3 py-2 text-left text-xs font-medium transition",
              option === selected
                ? "bg-blue-50 text-blue-700"
                : "text-slate-500 hover:bg-slate-50 hover:text-slate-800",
            ].join(" ")}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

function SelectSetting({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <label className="mb-2 block text-xs font-semibold text-slate-600">
        {label}
      </label>

      <div className="relative">
        <select
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="w-full appearance-none rounded-lg border border-slate-200 bg-white px-3 py-2.5 pr-9 text-sm text-slate-700 outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
        >
          {options.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>

        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
      </div>
    </div>
  );
}