import { NextResponse } from "next/server";
import { z } from "zod";
import { generatePost } from "@/lib/ai/posts";

const schema = z.object({
  postType: z.string().trim().min(1).max(100),
  tone: z.string().trim().min(1).max(100),
  audience: z.string().trim().min(1).max(200),
  length: z.string().trim().min(1).max(50),
  idea: z.string().trim().min(1).max(5000),
  profileContext: z.string().max(5000).optional(),
});

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();
    const parsed = schema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Please provide a valid post brief.",
        },
        { status: 400 },
      );
    }

    const post = await generatePost(parsed.data);

    return NextResponse.json({
      success: true,
      post,
    });
  } catch (error) {
    console.error("Post generation error:", error);

    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Unable to generate the post.",
      },
      { status: 500 },
    );
  }
}