import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({
    success: true,
    message: "Admin logged out successfully.",
  });

  // Expire the admin session cookie immediately
  response.cookies.set({
    name: "admin_session",
    value: "",
    httpOnly: true,
    path: "/",
    expires: new Date(0),
  });

  return response;
}
