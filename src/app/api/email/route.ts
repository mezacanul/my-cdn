import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return NextResponse.json({
    message: "Email sent",
    status: 200,
    body,
  });
}
