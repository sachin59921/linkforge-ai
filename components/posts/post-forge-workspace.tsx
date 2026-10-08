"use client";

import { useMemo, useState } from "react";
import {
  Check,
  Clipboard,
  Copy,
  Loader2,
  RefreshCw,
  Sparkles,
  WandSparkles,
} from "lucide-react";

type Tone =
  | "Professional"
  | "Thoughtful"
  | "Bold"
  | "Conversational"
  | "Educational";

type Audience =
  | "General LinkedIn audience"
  | "Recruiters"
  | "Founders"
  | "Developers"
  | "Product professionals"
  | "Hiring managers";

const tones: Tone[] = [
  "Professional",
  "Thoughtful",
  "Bold",
  "Conversational",
  "Educational",
];

const audiences: Audience[] = [
  "General LinkedIn audience",
  "Recruiters",
  "Founders",
  "Developers",
  "Product professionals",
  "Hiring managers",
];

const examplePost =
  "Building products has taught me that the hardest part isn't writing code.\n\nIt's deciding what deserves to be built in the first place.\n\nThe best product decisions usually come from listening carefully, simplifying aggressively, and staying close to the problem you're trying to solve.\n\nThat's a lesson I'm carrying into every project I build.";

export function PostForgeWorkspace() {
  const [topic, setTopic] = useState("");
  const [tone, setTone] = useState<Tone>("Professional");
  const [audience, setAudience] = useState<Audience>(
    "General LinkedIn audience",
  );
  const [generatedPost, setGeneratedPost] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const characterCount = generatedPost.length;

  const canGenerate = topic.trim().length >= 10 && !isGenerating;

  const helperText = useMemo(() => {
    if (!topic.trim()) {
      return "Describe the idea, experience, lesson, or topic you want to post about.";
    }

    if (topic.trim().length < 10) {
      return "Add a little more context so the AI can create a stronger post.";
    }

    return "Ready to forge your post.";
  }, [topic]);

  async function generatePost() {
    if (!canGenerate) return;

    setIsGenerating(true);
    setError("");
    setCopied(false);

    try {
      const response = await fetch("/api/posts/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          topic: topic.trim(),
          tone,
          audience,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.error || "Something went wrong while generating your post.",
        );
      }

      const post =
        data?.post ||
        data?.content ||
        data?.text ||
        data?.result?.post ||
        "";

      if (!post) {
        throw new Error(
          "The AI returned an empty response. Please try again.",
        );
      }

      setGeneratedPost(post);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to generate your post. Please try again.",
      );
    } finally {
      setIsGenerating(false);
    }
  }

  async function copyPost() {
    if (!generatedPost) return;

    try {
      await navigator.clipboard.writeText(generatedPost);
      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch {
      setError("Unable to copy the post. Please copy it manually.");
    }
  }

  function clearPost() {
    setGeneratedPost("");
    setError("");
    setCopied(false);
  }

  function useExample() {
    setTopic(
      "What building products has taught me about deciding what is actually worth building",
    );
    setTone("Thoughtful");
    setAudience("Founders");
    setGeneratedPost(examplePost);
    setError("");
  }

  return (
    <div className="space-y-6">
      {/* Intro */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-2xl">
            <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-blue-600">
              <Sparkles className="size-4" />
              AI Post Forge
            </div>

            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Turn your ideas into LinkedIn posts.
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Give LinkForge AI the idea, experience, or lesson you want to
              share. It will turn your input into a polished LinkedIn post
              while keeping your professional voice in mind.
            </p>
          </div>

          <button
            type="button"
            onClick={useExample}
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            <WandSparkles className="size-4" />
            Try example
          </button>
        </div>
      </div>

      {/* Composer */}
      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(380px,0.9fr)]">
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-5">
            <h3 className="font-semibold text-slate-900">Post brief</h3>
            <p className="mt-1 text-sm text-slate-500">
              Start with the raw idea. You don't need to write the post
              yourself.
            </p>
          </div>

          <div className="space-y-5">
            <div>
              <label
                htmlFor="post-topic"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                What do you want to post about?
              </label>

              <textarea
                id="post-topic"
                value={topic}
                onChange={(event) => {
                  setTopic(event.target.value);
                  setError("");
                }}
                placeholder="Example: A lesson I learned while building my first AI product..."
                rows={8}
                className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm leading-6 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
              />

              <div className="mt-2 flex items-center justify-between gap-4">
                <p
                  className={`text-xs ${
                    topic.trim().length >= 10
                      ? "text-emerald-600"
                      : "text-slate-400"
                  }`}
                >
                  {helperText}
                </p>

                <span className="shrink-0 text-xs text-slate-400">
                  {topic.length} chars
                </span>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="post-tone"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Tone
                </label>

                <select
                  id="post-tone"
                  value={tone}
                  onChange={(event) => setTone(event.target.value as Tone)}
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                >
                  {tones.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="post-audience"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Audience
                </label>

                <select
                  id="post-audience"
                  value={audience}
                  onChange={(event) =>
                    setAudience(event.target.value as Audience)
                  }
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                >
                  {audiences.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {error && (
              <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-5 text-red-700">
                {error}
              </div>
            )}

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={generatePost}
                disabled={!canGenerate}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="size-4 animate-spin" />
                    Forging post...
                  </>
                ) : (
                  <>
                    <Sparkles className="size-4" />
                    Forge with AI
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={clearPost}
                className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
              >
                Clear
              </button>
            </div>
          </div>
        </section>

        {/* Result */}
        <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">
            <div>
              <h3 className="font-semibold text-slate-900">Generated post</h3>
              <p className="mt-1 text-xs text-slate-400">
                Review and refine before publishing.
              </p>
            </div>

            {generatedPost && (
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-500">
                {characterCount} characters
              </span>
            )}
          </div>

          <div className="min-h-[420px] p-6">
            {isGenerating ? (
              <div className="flex min-h-[370px] flex-col items-center justify-center text-center">
                <div className="mb-4 flex size-12 items-center justify-center rounded-2xl bg-blue-50">
                  <Loader2 className="size-6 animate-spin text-blue-600" />
                </div>

                <h4 className="font-semibold text-slate-900">
                  Forging your post...
                </h4>

                <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
                  LinkForge AI is turning your idea into a professional,
                  engaging LinkedIn post.
                </p>
              </div>
            ) : generatedPost ? (
              <div className="flex h-full min-h-[370px] flex-col">
                <div className="flex-1 whitespace-pre-wrap rounded-xl bg-slate-50 p-5 text-sm leading-7 text-slate-700">
                  {generatedPost}
                </div>

                <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={copyPost}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                  >
                    {copied ? (
                      <>
                        <Check className="size-4 text-emerald-600" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="size-4" />
                        Copy post
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={generatePost}
                    disabled={isGenerating}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:opacity-50"
                  >
                    <RefreshCw className="size-4" />
                    Regenerate
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex min-h-[370px] flex-col items-center justify-center text-center">
                <div className="mb-4 flex size-14 items-center justify-center rounded-2xl bg-blue-50">
                  <Clipboard className="size-6 text-blue-600" />
                </div>

                <h4 className="font-semibold text-slate-900">
                  Your post will appear here
                </h4>

                <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
                  Add an idea on the left and click{" "}
                  <span className="font-medium text-slate-700">
                    Forge with AI
                  </span>{" "}
                  to create your post.
                </p>
              </div>
            )}
          </div>
        </section>
      </div>

      {/* Tips */}
      <div className="grid gap-4 md:grid-cols-3">
        {[
          {
            title: "Share a real experience",
            text: "Posts grounded in something you actually learned or built tend to feel more authentic.",
          },
          {
            title: "Give the AI context",
            text: "Mention the problem, lesson, result, or perspective behind your idea.",
          },
          {
            title: "Keep your voice",
            text: "Treat the generated post as a strong first draft, then add your own perspective.",
          },
        ].map((tip) => (
          <div
            key={tip.title}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <h4 className="text-sm font-semibold text-slate-900">
              {tip.title}
            </h4>
            <p className="mt-2 text-sm leading-6 text-slate-500">{tip.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}