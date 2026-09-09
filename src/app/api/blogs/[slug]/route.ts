import { NextRequest, NextResponse } from "next/server";
import { getBloggerPostBySlug } from "@/lib/blogger/blogger";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const blog = await getBloggerPostBySlug(slug);
    if (!blog) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }
    return NextResponse.json(blog);
  } catch (error) {
    console.error("Error in GET /api/blogs/[slug]:", error);
    return NextResponse.json(
      { error: "Failed to fetch Blogger post" },
      { status: 500 }
    );
  }
}
