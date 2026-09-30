import { NextResponse } from "next/server";
import { z } from "zod";
import { askCopilot } from "@/lib/ai/copilot";

const copilotRequestSchema = z.object({
  message: z.string().trim().min(1).max(4000),
  context: z
    .object({
      profile: z
        .object({
          name: z.string().optional(),
          headline: z.string().optional(),
          about: z.string().optional(),
          jobTitle: z.string().optional(),
          industry: z.string().optional(),
          experienceLevel: z.string().optional(),
          careerGoal: z.string().optional(),
          targetAudience: z.string().optional(),
          skills: z.array(z.string()).optional(),
        })
        .optional(),

      recentPosts: z.array(z.string()).max(20).optional(),
      projects: z.array(z.string()).max(20).optional(),

      brand: z
        .object({
          positioning: z.string().optional(),
          audience: z.string().optional(),
          voice: z.string().optional(),
          expertise: z.string().optional(),
          topics: z.array(z.string()).optional(),
        })
        .optional(),
    })
    .optional(),
});

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();

    const parsed = copilotRequestSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          error: "Invalid Copilot request.",
          details: parsed.error.flatten(),
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
  } catch (error) {
    console.error("Copilot API error:", error);

    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Unable to process Copilot request.",
      },
      { status: 500 },
    );
  }
}