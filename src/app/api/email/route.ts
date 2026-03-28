import { sendEmail } from "@/app/actions/email";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, email, message } = body;
  const EMAIL_TO = process.env.EMAIL_TO;

  const clientEmail = email;
  const subject = `New Message from ${name}`;
  const messageBody = `Reply to: ${clientEmail}\n\nMessage: ${message}`;

  const clientResponse = await sendEmail({
    subject: `Hola ${name}!`,
    message:
      "Gracias por tu mensaje. Me pondré en contacto contigo lo antes posible.",
    to: clientEmail,
  });
  console.log(clientResponse);

  // await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await sendEmail({
    subject: subject,
    message: messageBody,
    to: EMAIL_TO as string,
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
