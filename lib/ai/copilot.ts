"use server";

import { generateText } from "@/lib/ai/client";
import { analyzeProfile, improveAbout, improveHeadline } from "@/lib/ai/profile";
import { generatePost, suggestPostIdeas } from "@/lib/ai/posts";

export type CopilotContext = {
  profile?: {
    name?: string;
    headline?: string;
    about?: string;
    jobTitle?: string;
    industry?: string;
    experienceLevel?: string;
    careerGoal?: string;
    targetAudience?: string;
    skills?: string[];
  };
  recentPosts?: string[];
  projects?: string[];
  brand?: {
    positioning?: string;
    audience?: string;
    voice?: string;
    expertise?: string;
    topics?: string[];
  };
};

export async function askCopilot(
  message: string,
  context: CopilotContext = {},
) {
  const intent = detectIntent(message);

  switch (intent) {
    case "profile-analysis":
      return analyzeProfile(context.profile || {});

    case "headline":
      return improveHeadline(context.profile || {});

    case "about":
      return improveAbout(context.profile || {});

    case "post-ideas":
      return suggestPostIdeas(
        context.brand?.topics?.join(", ") || "professional expertise",
        context.profile?.targetAudience || context.brand?.audience,
        context.brand?.expertise || context.profile?.jobTitle,
      );

    case "content-plan":
      return createContentPlan(context);

    case "project-post":
      return createProjectPost(context, message);

    case "next-step":
      return suggestNextStep(context);

    default:
      return generalCopilotResponse(message, context);
  }
}

function detectIntent(message: string) {
  const text = message.toLowerCase();

  if (
    text.includes("analyze my profile") ||
    text.includes("analyze profile") ||
    text.includes("profile analysis")
  ) {
    return "profile-analysis" as const;
  }

  if (
    text.includes("headline") ||
    text.includes("profile headline")
  ) {
    return "headline" as const;
  }

  if (
    text.includes("rewrite my about") ||
    text.includes("improve my about") ||
    text.includes("about section")
  ) {
    return "about" as const;
  }

  if (
    text.includes("post ideas") ||
    text.includes("content ideas") ||
    text.includes("ideas for posts")
  ) {
    return "post-ideas" as const;
  }

  if (
    text.includes("content plan") ||
    text.includes("content calendar") ||
    text.includes("posting plan")
  ) {
    return "content-plan" as const;
  }

  if (
    text.includes("project") &&
    (text.includes("post") || text.includes("linkedin"))
  ) {
    return "project-post" as const;
  }

  if (
    text.includes("what should i improve") ||
    text.includes("what should i do next") ||
    text.includes("next step") ||
    text.includes("what should i work on")
  ) {
    return "next-step" as const;
  }

  return "general" as const;
}

async function createContentPlan(context: CopilotContext) {
  return generateText({
    system: `You are LinkForge AI, a professional LinkedIn content strategist.

Create a practical content plan based only on the supplied professional context.

Do not invent experience, achievements, metrics, or expertise.

Return:
1. CONTENT DIRECTION
2. CONTENT PILLARS
3. WEEKLY PLAN
4. POST IDEAS

Keep it practical and sustainable.`,
    prompt: `
Professional profile:
${JSON.stringify(context.profile || {}, null, 2)}

Brand context:
${JSON.stringify(context.brand || {}, null, 2)}

Recent posts:
${context.recentPosts?.join("\n\n") || "No recent posts provided."}
`,
    maxOutputTokens: 1500,
  });
}

async function createProjectPost(
  context: CopilotContext,
  message: string,
) {
  return generatePost({
    postType: "Case Study",
    tone: context.brand?.voice || "Professional and human",
    audience:
      context.profile?.targetAudience ||
      context.brand?.audience ||
      "Professional LinkedIn audience",
    length: "Medium",
    idea: `
User request:
${message}

Project information:
${context.projects?.join("\n\n") || "No project details were provided."}
`,
    profileContext: JSON.stringify(context.profile || {}),
  });
}

async function suggestNextStep(context: CopilotContext) {
  return generateText({
    system: `You are LinkForge AI, a professional growth assistant.

Determine the most useful next improvement area from the available profile and brand context.

Do not invent missing information.

Return:
CURRENT STATE
PRIORITY
WHY IT MATTERS
NEXT ACTION

Be specific and actionable.`,
    prompt: `
Profile:
${JSON.stringify(context.profile || {}, null, 2)}

Brand:
${JSON.stringify(context.brand || {}, null, 2)}

Recent posts:
${context.recentPosts?.join("\n\n") || "No recent posts provided."}

Projects:
${context.projects?.join("\n\n") || "No projects provided."}
`,
    maxOutputTokens: 900,
  });
}

async function generalCopilotResponse(
  message: string,
  context: CopilotContext,
) {
  return generateText({
    system: `You are LinkForge AI Copilot.

You help professionals improve their LinkedIn presence and professional brand.

Your advice should be:
- practical
- specific
- professional
- human
- honest about missing information

Never invent user achievements, metrics, employers, credentials, or experiences.

When relevant, recommend a concrete LinkForge workflow such as Profile Forge, Post Forge, Project Forge, or Brand Forge.`,
    prompt: `
User message:
${message}

Available profile context:
${JSON.stringify(context.profile || {}, null, 2)}

Available brand context:
${JSON.stringify(context.brand || {}, null, 2)}

Recent posts:
${context.recentPosts?.join("\n\n") || "None provided."}

Projects:
${context.projects?.join("\n\n") || "None provided."}
`,
    maxOutputTokens: 1200,
  });
}