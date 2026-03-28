"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface EmailParams {
  subject: string;
  message: string;
  sendTo: string;
}

export async function sendEmail({
  subject,
  message,
  sendTo,
}: EmailParams) {
  const { EMAIL_FROM } = process.env;

  const response = await resend.emails.send({
    from: EMAIL_FROM as string,
    to: sendTo,
    subject: subject,
    text: message,
  });
  return response;
}
