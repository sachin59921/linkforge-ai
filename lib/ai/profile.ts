"use server";

import { generateText } from "@/lib/ai/client";

export type ProfileContext = {
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

export async function analyzeProfile(profile: ProfileContext) {
  const result = await generateText({
    system: `You are LinkForge AI, a professional LinkedIn profile strategist.

Your job is to provide practical, human-first recommendations for improving a professional LinkedIn profile.

Focus on:
- clarity
- positioning
- credibility
- specificity
- audience relevance
- evidence of impact
- professional tone

Do not invent achievements, metrics, employers, skills, or experience.

Return your response using exactly these sections:

SUMMARY
STRENGTHS
WEAKNESSES
RECOMMENDATIONS

Keep the recommendations specific and actionable.`,
    prompt: buildProfilePrompt(profile),
    maxOutputTokens: 1400,
  });

  return result;
}

export async function improveHeadline(
  profile: ProfileContext,
  currentHeadline?: string,
) {
  return generateText({
    system: `You are LinkForge AI, a LinkedIn headline specialist.

Create professional LinkedIn headline alternatives based only on information supplied by the user.

Do not invent:
- job titles
- companies
- achievements
- metrics
- certifications
- expertise

Return exactly 5 alternatives.

Each alternative should be one line and should be meaningfully different from the others.`,
    prompt: `
Create 5 improved LinkedIn headline options.

Name:
${profile.name || "Not provided"}

Current headline:
${currentHeadline || profile.headline || "Not provided"}

Job title:
${profile.jobTitle || "Not provided"}

Industry:
${profile.industry || "Not provided"}

Experience level:
${profile.experienceLevel || "Not provided"}

Career goal:
${profile.careerGoal || "Not provided"}

Target audience:
${profile.targetAudience || "Not provided"}

Skills:
${profile.skills?.join(", ") || "Not provided"}
`,
    maxOutputTokens: 700,
  });
}

export async function improveAbout(profile: ProfileContext) {
  return generateText({
    system: `You are LinkForge AI, a professional LinkedIn About-section writer.

Rewrite the supplied professional information into a clear, credible, human-sounding LinkedIn About section.

Rules:
- Never invent facts.
- Never add unsupported metrics.
- Never exaggerate achievements.
- Keep the person's authentic professional identity.
- Avoid generic AI phrases.
- Make the value proposition clear.
- Use short paragraphs for LinkedIn readability.

Return only the finished About section.`,
    prompt: `
Write an improved LinkedIn About section using this information:

Name:
${profile.name || "Not provided"}

Current About:
${profile.about || "Not provided"}

Headline:
${profile.headline || "Not provided"}

Job title:
${profile.jobTitle || "Not provided"}

Industry:
${profile.industry || "Not provided"}

Experience level:
${profile.experienceLevel || "Not provided"}

Career goal:
${profile.careerGoal || "Not provided"}

Target audience:
${profile.targetAudience || "Not provided"}

Skills:
${profile.skills?.join(", ") || "Not provided"}
`,
    maxOutputTokens: 1200,
  });
}

function buildProfilePrompt(profile: ProfileContext) {
  return `
Analyze this LinkedIn profile information.

Name:
${profile.name || "Not provided"}

Headline:
${profile.headline || "Not provided"}

About:
${profile.about || "Not provided"}

Job title:
${profile.jobTitle || "Not provided"}

Industry:
${profile.industry || "Not provided"}

Experience level:
${profile.experienceLevel || "Not provided"}

Career goal:
${profile.careerGoal || "Not provided"}

Target audience:
${profile.targetAudience || "Not provided"}

Skills:
${profile.skills?.join(", ") || "Not provided"}
`;
}