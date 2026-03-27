import { sendEmail } from "@/app/actions/email";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, email, message } = body;

  const subject = `New Message from ${name}`;
  const messageBody = `Reply to: ${email}\n\nMessage: ${message}`;
  const to = email;

  // await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await sendEmail({
    subject: subject,
    message: messageBody,
    to: email,
  });
  console.log(response);

  const { error, data } = response;
  if (!error && data) {
    return NextResponse.json({
      message: "Email sent",
      status: 200,
      body,
    });
  } else {
    return NextResponse.json({
      message: "Email not sent",
      status: 400,
      body,
    });
  }
}
