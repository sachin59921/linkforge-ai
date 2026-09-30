"use server";

import { generateText } from "@/lib/ai/client";

export type PostContext = {
  postType?: string;
  tone?: string;
  audience?: string;
  length?: string;
  idea?: string;
  profileContext?: string;
};

export type PostImprovement =
  | "hook"
  | "human"
  | "argument"
  | "storytelling"
  | "shorten"
  | "expand"
  | "cta";

export async function generatePost(context: PostContext) {
  return generateText({
    system: `You are LinkForge AI, a professional LinkedIn content strategist.

Create useful, credible, human-sounding LinkedIn posts.

Rules:
- Never invent personal experiences, achievements, metrics, companies, or facts.
- Preserve the user's actual idea.
- Avoid generic AI language.
- Avoid excessive emojis.
- Avoid clickbait.
- Avoid unnecessary hashtags.
- Give the reader a clear takeaway.
- Use LinkedIn-friendly paragraph spacing.
- Match the requested tone and audience.

Return only the finished post.`,
    prompt: buildGenerationPrompt(context),
    maxOutputTokens: getMaxTokens(context.length),
  });
}

export async function improvePost(
  content: string,
  improvement: PostImprovement,
  context?: PostContext,
) {
  const instruction = getImprovementInstruction(improvement);

  return generateText({
    system: `You are LinkForge AI, a professional LinkedIn editor.

Improve the supplied LinkedIn post while preserving the author's original meaning and facts.

Never invent:
- achievements
- statistics
- experiences
- customers
- companies
- credentials
- outcomes

Do not make the writing sound robotic or overly polished.

Return only the revised post.`,
    prompt: `
Improve this LinkedIn post.

Requested improvement:
${instruction}

Post type:
${context?.postType || "Not provided"}

Tone:
${context?.tone || "Not provided"}

Audience:
${context?.audience || "Not provided"}

Original post:
${content}
`,
    maxOutputTokens: 1400,
  });
}

export async function suggestPostIdeas(
  topic: string,
  audience?: string,
  expertise?: string,
) {
  return generateText({
    system: `You are LinkForge AI, a LinkedIn content strategist.

Generate practical LinkedIn post ideas for professionals.

Ideas should:
- be specific rather than generic
- provide a useful reader takeaway
- connect naturally to the person's expertise
- avoid invented personal experiences
- avoid engagement bait

Return exactly 10 ideas as a numbered list.`,
    prompt: `
Topic:
${topic}

Target audience:
${audience || "Not provided"}

Expertise:
${expertise || "Not provided"}
`,
    maxOutputTokens: 1000,
  });
}

function buildGenerationPrompt(context: PostContext) {
  return `
Create a LinkedIn post using the following information.

Post type:
${context.postType || "Professional insight"}

Tone:
${context.tone || "Professional and human"}

Audience:
${context.audience || "Professional LinkedIn audience"}

Length:
${context.length || "Medium"}

Core idea:
${context.idea || "Not provided"}

Additional professional context:
${context.profileContext || "Not provided"}
`;
}

function getImprovementInstruction(
  improvement: PostImprovement,
): string {
  switch (improvement) {
    case "hook":
      return "Strengthen the opening so the reader immediately understands why the post is worth reading.";

    case "human":
      return "Make the writing warmer, more natural, conversational, and authentic without adding fictional personal details.";

    case "argument":
      return "Make the central argument clearer and support it with the reasoning already available in the original post.";

    case "storytelling":
      return "Improve the narrative flow using only the experiences and information already present.";

    case "shorten":
      return "Make the post more concise while preserving its main idea and strongest points.";

    case "expand":
      return "Add useful explanation and context without inventing facts or padding the post.";

    case "cta":
      return "Add a natural, relevant closing call-to-action that encourages thoughtful discussion without engagement bait.";

    default:
      return "Improve the overall clarity and usefulness of the post.";
  }
}

function getMaxTokens(length?: string) {
  switch (length?.toLowerCase()) {
    case "short":
      return 700;

    case "long":
      return 1800;

    default:
      return 1200;
  }
}