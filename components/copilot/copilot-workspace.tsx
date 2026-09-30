"use client";

import {
  ArrowUp,
  Bot,
  Check,
  Copy,
  FileText,
  Lightbulb,
  Loader2,
  Plus,
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
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [copiedId, setCopiedId] = useState<number | null>(null);

  async function sendMessage(message?: string) {
    const content = (message ?? input).trim();

    if (!content || isLoading) return;

    const userMessage: Message = {
      id: Date.now(),
      role: "user",
      content,
    };

    setMessages((current) => [...current, userMessage]);
    setInput("");
    setError("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/ai/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: content,
          context: {},
        }),
      });

      const data = (await response.json()) as {
        success?: boolean;
        response?: string;
        error?: string;
      };

      if (!response.ok || !data.success || !data.response) {
        throw new Error(
          data.error || "Unable to get a response from Copilot.",
        );
      }

      const assistantMessage: Message = {
        id: Date.now() + 1,
        role: "assistant",
        content: data.response,
      };

      setMessages((current) => [...current, assistantMessage]);
    } catch (requestError) {
      const message =
        requestError instanceof Error
          ? requestError.message
          : "Something went wrong while contacting Copilot.";

      setError(message);
    } finally {
      setIsLoading(false);
    }
  }

  function startNewConversation() {
    setMessages(initialMessages);
    setInput("");
    setError("");
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
      <aside className="flex flex-col rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 p-4">
          <button
            type="button"
            onClick={startNewConversation}
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
              Current session
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

      <section className="flex min-h-[680px] min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
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

          <span
            className={[
              "hidden rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide sm:block",
              isLoading
                ? "bg-amber-50 text-amber-700"
                : "bg-emerald-50 text-emerald-700",
            ].join(" ")}
          >
            {isLoading ? "Thinking" : "Ready"}
          </span>
        </div>

        <div className="flex-1 overflow-y-auto p-5">
          {messages.length === 1 && !isLoading && (
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
                      disabled={isLoading}
                      className="group rounded-xl border border-slate-200 bg-white p-4 text-left transition hover:border-violet-200 hover:bg-violet-50/40 disabled:cursor-not-allowed disabled:opacity-60"
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

            {isLoading && (
              <div className="flex gap-3">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-violet-50">
                  <Sparkles className="size-4 text-violet-600" />
                </div>

                <div className="rounded-2xl bg-slate-50 px-4 py-3">
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Loader2 className="size-4 animate-spin" />
                    Copilot is thinking...
                  </div>
                </div>
              </div>
            )}

            {error && (
              <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3">
                <p className="text-sm font-medium text-red-800">
                  Copilot couldn&apos;t respond
                </p>

                <p className="mt-1 text-xs leading-5 text-red-600">
                  {error}
                </p>

                <button
                  type="button"
                  onClick={() => setError("")}
                  className="mt-2 text-xs font-medium text-red-700 underline underline-offset-2"
                >
                  Dismiss
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="border-t border-slate-100 px-5 py-3">
          <div className="mx-auto flex max-w-3xl items-center gap-2 text-xs text-slate-400">
            <span className="size-1.5 rounded-full bg-emerald-500" />
            <span>Context-aware AI workspace</span>
          </div>
        </div>

        <div className="border-t border-slate-200 p-4">
          <div className="mx-auto max-w-3xl">
            <div className="relative rounded-xl border border-slate-200 bg-white transition focus-within:border-violet-300 focus-within:ring-4 focus-within:ring-violet-50">
              <textarea
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" && !event.shiftKey) {
                    event.preventDefault();
                    void sendMessage();
                  }
                }}
                placeholder="Ask Copilot anything about your LinkedIn presence..."
                rows={3}
                disabled={isLoading}
                className="w-full resize-none bg-transparent px-4 py-3 pr-14 text-sm leading-6 text-slate-900 outline-none placeholder:text-slate-400 disabled:cursor-not-allowed disabled:opacity-60"
              />

              <button
                type="button"
                onClick={() => void sendMessage()}
                disabled={!input.trim() || isLoading}
                aria-label="Send message"
                className="absolute bottom-3 right-3 flex size-9 items-center justify-center rounded-lg bg-violet-600 text-white transition hover:bg-violet-700 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-400"
              >
                {isLoading ? (
                  <Loader2 className="size-4 animate-spin" />
                ) : (
                  <ArrowUp className="size-4" />
                )}
              </button>
            </div>

            <div className="mt-2 flex items-center justify-between">
              <p className="text-[10px] text-slate-400">
                Enter to send · Shift + Enter for a new line
              </p>

              <div className="flex items-center gap-1.5 text-[10px] text-slate-400">
                <Sparkles className="size-3" />
                Server-side AI
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}