"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface EmailParams {
  from_prefix: string;
  subject: string;
  message: string;
  sendTo: string;
}

export async function sendEmail({
  from_prefix,
  subject,
  message,
  sendTo,
}: EmailParams) {
  const { EMAIL_DOMAIN, EMAIL_TO } = process.env;

  const response = await resend.emails.send({
    from: `Eduardo Meza <${from_prefix}@${EMAIL_DOMAIN}>`,
    to: sendTo,
    replyTo: sendTo,
    bcc: EMAIL_TO as string,
    subject: subject,
    text: message,
  });
  return response;
}
