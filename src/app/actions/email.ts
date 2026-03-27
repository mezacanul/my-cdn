"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface EmailParams {
  subject: string;
  message: string;
  to: string;
}

export async function sendEmail({
  subject,
  message,
  to,
}: EmailParams) {
  const { EMAIL_FROM, EMAIL_TO } = process.env;

  const response = await resend.emails.send({
    from: EMAIL_FROM as string,
    to: EMAIL_TO as string,
    subject: subject,
    text: message,
  });
  return response;
}
