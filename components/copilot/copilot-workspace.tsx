"use client";

import {
  ArrowUp,
  Bot,
  Check,
  Copy,
  FileText,
  Lightbulb,
  Plus,
  Send,
  Sparkles,
  UserRound,
  WandSparkles,
} from "lucide-react";
import { useState } from "react";

type Message = {
  id: number;
  role: "user" | "assistant";
  content: string;
};

const suggestions = [
  {
    title: "Analyze my profile",
    description: "Find the highest-impact improvements.",
    icon: UserRound,
  },
  {
    title: "Give me 10 post ideas",
    description: "Create ideas around my expertise.",
    icon: Lightbulb,
  },
  {
    title: "Rewrite my About",
    description: "Make my positioning clearer.",
    icon: FileText,
  },
  {
    title: "Create a content plan",
    description: "Build a practical posting strategy.",
    icon: WandSparkles,
  },
];

const initialMessages: Message[] = [
  {
    id: 1,
    role: "assistant",
    content:
      "Hi! I'm your LinkForge AI Copilot. I can help you improve your profile, create LinkedIn content, clarify your positioning, and decide what to work on next.",
  },
];

export function CopilotWorkspace() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [copiedId, setCopiedId] = useState<number | null>(null);

  function sendMessage(message?: string) {
    const content = (message ?? input).trim();

    if (!content) return;

    const userMessage: Message = {
      id: Date.now(),
      role: "user",
      content,
    };

    const response = createLocalResponse(content);

    const assistantMessage: Message = {
      id: Date.now() + 1,
      role: "assistant",
      content: response,
    };

    setMessages((current) => [
      ...current,
      userMessage,
      assistantMessage,
    ]);

    setInput("");
  }

  async function copyMessage(id: number, content: string) {
    try {
      await navigator.clipboard.writeText(content);
      setCopiedId(id);

      window.setTimeout(() => {
        setCopiedId(null);
      }, 1500);
    } catch {
      setCopiedId(null);
    }
  }

  return (
    <div className="grid min-h-[680px] gap-5 lg:grid-cols-[250px_minmax(0,1fr)]">
      {/* Conversations */}
      <aside className="flex flex-col rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 p-4">
          <button
            type="button"
            onClick={() => setMessages(initialMessages)}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-slate-950 px-3 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800"
          >
            <Plus className="size-4" />
            New conversation
          </button>
        </div>

        <div className="flex-1 p-3">
          <p className="mb-2 px-2 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
            Conversations
          </p>

          <button
            type="button"
            className="w-full rounded-lg bg-violet-50 px-3 py-3 text-left"
          >
            <p className="truncate text-sm font-medium text-violet-800">
              New conversation
            </p>
            <p className="mt-1 text-xs text-violet-500">
              Just now
            </p>
          </button>
        </div>

        <div className="border-t border-slate-100 p-4">
          <div className="flex items-center gap-2 rounded-lg bg-slate-50 p-3">
            <div className="flex size-8 items-center justify-center rounded-lg bg-violet-100">
              <Sparkles className="size-4 text-violet-600" />
            </div>

            <div>
              <p className="text-xs font-semibold text-slate-700">
                AI Copilot
              </p>
              <p className="text-[10px] text-slate-400">
                LinkForge intelligence
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* Chat */}
      <section className="flex min-h-[680px] min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex size-9 items-center justify-center rounded-xl bg-violet-50">
              <Sparkles className="size-4 text-violet-600" />
            </div>

            <div>
              <h2 className="text-sm font-semibold">AI Copilot</h2>
              <p className="text-xs text-slate-400">
                Your professional growth assistant
              </p>
            </div>
          </div>

          <span className="hidden rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-emerald-700 sm:block">
            Ready
          </span>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-5">
          {messages.length === 1 && (
            <div className="mb-8">
              <div className="mx-auto max-w-2xl text-center">
                <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-2xl bg-violet-50">
                  <Bot className="size-6 text-violet-600" />
                </div>

                <h3 className="text-xl font-semibold tracking-tight">
                  What would you like to forge?
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Ask me about your profile, content, positioning, projects,
                  or your next professional move.
                </p>
              </div>

              <div className="mx-auto mt-6 grid max-w-3xl gap-3 sm:grid-cols-2">
                {suggestions.map((suggestion) => {
                  const Icon = suggestion.icon;

                  return (
                    <button
                      key={suggestion.title}
                      type="button"
                      onClick={() => sendMessage(suggestion.title)}
                      className="group rounded-xl border border-slate-200 bg-white p-4 text-left transition hover:border-violet-200 hover:bg-violet-50/40"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-slate-100 transition group-hover:bg-violet-100">
                          <Icon className="size-4 text-slate-500 group-hover:text-violet-600" />
                        </div>

                        <div>
                          <p className="text-sm font-medium text-slate-800">
                            {suggestion.title}
                          </p>

                          <p className="mt-1 text-xs leading-5 text-slate-500">
                            {suggestion.description}
                          </p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          <div className="mx-auto max-w-3xl space-y-6">
            {messages.map((message) => (
              <div
                key={message.id}
                className={[
                  "flex gap-3",
                  message.role === "user"
                    ? "justify-end"
                    : "justify-start",
                ].join(" ")}
              >
                {message.role === "assistant" && (
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-violet-50">
                    <Sparkles className="size-4 text-violet-600" />
                  </div>
                )}

                <div
                  className={[
                    "group relative max-w-[85%] rounded-2xl px-4 py-3",
                    message.role === "user"
                      ? "bg-slate-950 text-white"
                      : "bg-slate-50 text-slate-700",
                  ].join(" ")}
                >
                  <p className="whitespace-pre-wrap text-sm leading-6">
                    {message.content}
                  </p>

                  {message.role === "assistant" && (
                    <button
                      type="button"
                      onClick={() =>
                        copyMessage(message.id, message.content)
                      }
                      className="mt-3 flex items-center gap-1.5 text-xs text-slate-400 transition hover:text-slate-700"
                    >
                      {copiedId === message.id ? (
                        <>
                          <Check className="size-3.5" />
                          Copied
                        </>
                      ) : (
                        <>
                          <Copy className="size-3.5" />
                          Copy
                        </>
                      )}
                    </button>
                  )}
                </div>

                {message.role === "user" && (
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-slate-900">
                    <UserRound className="size-4 text-white" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Context */}
        <div className="border-t border-slate-100 px-5 py-3">
          <div className="mx-auto flex max-w-3xl items-center gap-2 text-xs text-slate-400">
            <span className="size-1.5 rounded-full bg-emerald-500" />
            <span>
              Context: Profile, professional goals, and workspace
            </span>
          </div>
        </div>

        {/* Composer */}
        <div className="border-t border-slate-200 p-4">
          <div className="mx-auto max-w-3xl">
            <div className="relative rounded-xl border border-slate-200 bg-white transition focus-within:border-violet-300 focus-within:ring-4 focus-within:ring-violet-50">
              <textarea
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" && !event.shiftKey) {
                    event.preventDefault();
                    sendMessage();
                  }
                }}
                placeholder="Ask Copilot anything about your LinkedIn presence..."
                rows={3}
                className="w-full resize-none bg-transparent px-4 py-3 pr-14 text-sm leading-6 text-slate-900 outline-none placeholder:text-slate-400"
              />

              <button
                type="button"
                onClick={() => sendMessage()}
                disabled={!input.trim()}
                aria-label="Send message"
                className="absolute bottom-3 right-3 flex size-9 items-center justify-center rounded-lg bg-violet-600 text-white transition hover:bg-violet-700 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-400"
              >
                <ArrowUp className="size-4" />
              </button>
            </div>

            <div className="mt-2 flex items-center justify-between">
              <p className="text-[10px] text-slate-400">
                Enter to send · Shift + Enter for a new line
              </p>

              <div className="flex items-center gap-1.5 text-[10px] text-slate-400">
                <Sparkles className="size-3" />
                AI-assisted workspace
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function createLocalResponse(input: string) {
  const normalized = input.toLowerCase();

  if (normalized.includes("profile")) {
    return `I'd start with your profile positioning.

Based on the current LinkForge workspace, the first areas I'd review are:

1. Headline — make your value proposition immediately clear.
2. About — connect your experience with the audience you want to reach.
3. Experience — emphasize outcomes and evidence instead of only responsibilities.
4. Featured — use it to reinforce the professional story you want people to remember.

The next step would be a full profile analysis once the AI backend is connected.`;
  }

  if (normalized.includes("post") || normalized.includes("content")) {
    return `A useful content strategy should connect your expertise with the problems your audience cares about.

You could start with three content directions:

• Lessons from your professional experience
• Practical frameworks or educational insights
• Opinions backed by specific examples

For each idea, aim for one clear takeaway rather than trying to cover everything in one post.

The Post Forge can then turn the strongest idea into a structured draft.`;
  }

  if (normalized.includes("about")) {
    return `A strong About section should answer three questions quickly:

1. What do you do?
2. What are you particularly good at?
3. Who do you help or what problems do you solve?

A useful structure is:

Positioning → Experience → Expertise → Evidence → Direction.

When the OpenAI layer is connected, Copilot will be able to use your actual profile context to rewrite the section rather than giving you generic copy.`;
  }

  if (normalized.includes("project")) {
    return `Projects are valuable raw material for professional content.

A simple Project Forge structure is:

Problem → Your role → Approach → Solution → Outcome → Lesson.

That structure can turn a project description into a credible professional story without making the result sound like generic AI-generated content.`;
  }

  return `That's a good area to explore.

In LinkForge, Copilot will eventually use your profile, professional goals, brand context, projects, and previous posts to give you context-aware recommendations.

For now, the Copilot prototype can help you explore the workflow. The OpenAI integration will be added later through the server-side AI layer.`;
}