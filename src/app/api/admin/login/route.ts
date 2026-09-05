import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { password } = body;

    const expectedPassword = process.env.ADMIN_SECRET_KEY || "interior@2026";

    if (!password || password !== expectedPassword) {
      return NextResponse.json(
        { error: "Invalid admin password. Access denied." },
        { status: 401 }
      );
    }

    const response = NextResponse.json({
      success: true,
      message: "Admin authentication successful.",
    });

    // Set secure HTTP-Only admin session cookie (valid for 24 hours)
    response.cookies.set({
      name: "admin_session",
      value: "authenticated",
      httpOnly: true,
      path: "/",
      sameSite: "lax",
      maxAge: 60 * 60 * 24, // 24 hours
    });

    return response;
  } catch (error) {
    console.error("Admin Login Error:", error);
    return NextResponse.json(
      { error: "Authentication failed. Please try again." },
      { status: 500 }
    );
  }
}
