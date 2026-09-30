"use server";

const OPENAI_API_URL = "https://api.openai.com/v1/responses";

const DEFAULT_MODEL = "gpt-5.6-luna";

type GenerateTextOptions = {
  system?: string;
  prompt: string;
  model?: string;
  maxOutputTokens?: number;
};

type OpenAIResponse = {
  output?: Array<{
    type?: string;
    content?: Array<{
      type?: string;
      text?: string;
    }>;
  }>;
  error?: {
    message?: string;
  };
};

export async function generateText({
  system,
  prompt,
  model = DEFAULT_MODEL,
  maxOutputTokens = 1200,
}: GenerateTextOptions): Promise<string> {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    throw new Error(
      "OPENAI_API_KEY is not configured. Add it to your local environment before using the AI service.",
    );
  }

  const input = system
    ? [
        {
          role: "system",
          content: system,
        },
        {
          role: "user",
          content: prompt,
        },
      ]
    : prompt;

  const response = await fetch(OPENAI_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      input,
      max_output_tokens: maxOutputTokens,
    }),
  });

  const data = (await response.json()) as OpenAIResponse;

  if (!response.ok) {
    throw new Error(
      data.error?.message ||
        `OpenAI request failed with status ${response.status}.`,
    );
  }

  const text = extractOutputText(data);

  if (!text) {
    throw new Error("OpenAI returned an empty response.");
  }

  return text;
}

function extractOutputText(response: OpenAIResponse): string {
  return (
    response.output
      ?.flatMap((item) => item.content ?? [])
      .filter((content) => content.type === "output_text")
      .map((content) => content.text ?? "")
      .join("") ?? ""
  ).trim();
}