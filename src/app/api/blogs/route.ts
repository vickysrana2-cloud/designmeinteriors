import { NextResponse } from "next/server";
import { getBloggerPosts } from "@/lib/blogger/blogger";

export async function GET() {
  try {
    const { blogs } = await getBloggerPosts({ maxResults: 50 });
    return NextResponse.json(blogs);
  } catch (error) {
    console.error("Error in GET /api/blogs:", error);
    return NextResponse.json(
      { error: "Failed to fetch Blogger posts" },
      { status: 500 }
    );
  }
}
