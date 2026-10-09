
import { NextResponse } from "next/server";
import { z } from "zod";
import { askCopilot } from "@/lib/ai/copilot";

const copilotRequestSchema = z
  .object({
    message: z.string().trim().min(1).max(4000),
    context: z
      .object({
        profile: z
          .object({
            name: z.string().max(200).optional(),
            headline: z.string().max(500).optional(),
            about: z.string().max(4000).optional(),
            jobTitle: z.string().max(200).optional(),
            industry: z.string().max(200).optional(),
            experienceLevel: z.string().max(100).optional(),
            careerGoal: z.string().max(1000).optional(),
            targetAudience: z.string().max(1000).optional(),
            skills: z.array(z.string().max(200)).max(100).optional(),
          })
          .optional(),

        recentPosts: z.array(z.string().max(5000)).max(20).optional(),
        projects: z.array(z.string().max(2000)).max(20).optional(),

        brand: z
          .object({
            positioning: z.string().max(1000).optional(),
            audience: z.string().max(1000).optional(),
            voice: z.string().max(500).optional(),
            expertise: z.string().max(1000).optional(),
            topics: z.array(z.string().max(200)).max(50).optional(),
          })
          .optional(),
      })
      .optional(),
  })
  .strict();

export async function POST(request: Request) {
  try {
    const contentLength = request.headers.get("content-length");

    if (
      contentLength &&
      (!/^\d+$/.test(contentLength) ||
        Number(contentLength) > 100_000)
    ) {
      return NextResponse.json(
        { success: false, error: "Request body is too large." },
        { status: 413 },
      );
    }

    const body: unknown = await request.json();
    const parsed = copilotRequestSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid Copilot request.",
        },
        { status: 400 },
      );
    }

    const result = await askCopilot(
      parsed.data.message,
      parsed.data.context ?? {},
    );

    return NextResponse.json({
      success: true,
      response: result,
    });
  } catch {
    console.error("Copilot API request failed.");

    return NextResponse.json(
      {
        success: false,
        error: "Unable to process Copilot request. Please try again.",
      },
      { status: 500 },
    );
  }
}