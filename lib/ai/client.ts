"use server";

const DEFAULT_MODEL = "gemini-3.8-flash";
const MAX_RETRIES = 3;

type GenerateTextOptions = {
  system?: string;
  prompt: string;
  model?: string;
  maxOutputTokens?: number;
};

type GeminiInteractionResponse = {
  id?: string;
  status?: string;
  output_text?: string;
  steps?: Array<{
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
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error(
      "GEMINI_API_KEY is not configured. Add it to your local environment.",
    );
  }

  const input = system
    ? `SYSTEM INSTRUCTIONS:
${system}

USER REQUEST:
${prompt}`
    : prompt;

  let lastError = "Gemini request failed.";

  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    try {
      const response = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/interactions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-goog-api-key": apiKey,
          },
          body: JSON.stringify({
            model,
            input,
            generation_config: {
              max_output_tokens: maxOutputTokens,
              temperature: 0.7,
            },
          }),
        },
      );

      const data =
        (await response.json()) as GeminiInteractionResponse;

      if (response.ok) {
        const text = extractOutputText(data);

        if (!text) {
          throw new Error("Gemini returned an empty response.");
        }

        return text;
      }

      lastError =
        data.error?.message ||
        `Gemini request failed with status ${response.status}.`;

      const isRetryable =
        response.status === 429 ||
        response.status === 500 ||
        response.status === 502 ||
        response.status === 503 ||
        response.status === 504;

      if (!isRetryable || attempt === MAX_RETRIES) {
        throw new Error(lastError);
      }

      const delay = 1500 * 2 ** attempt;

      await sleep(delay);
    } catch (error) {
      if (attempt === MAX_RETRIES) {
        throw error;
      }

      const message =
        error instanceof Error ? error.message : "Unknown Gemini error.";

      lastError = message;

      await sleep(1500 * 2 ** attempt);
    }
  }

  throw new Error(lastError);
}

function extractOutputText(
  response: GeminiInteractionResponse,
): string {
  if (response.output_text) {
    return response.output_text.trim();
  }

  return (
    response.steps
      ?.filter((step) => step.type === "model_output")
      .flatMap((step) => step.content ?? [])
      .filter((content) => content.type === "text")
      .map((content) => content.text ?? "")
      .join("") ?? ""
  ).trim();
}

function sleep(milliseconds: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
}