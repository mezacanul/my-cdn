import { sendEmail } from "@/app/actions/email";
import files from "@/lib/files";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const {
    name,
    email,
    subject,
    message,
    region,
    projectId,
  } = body;
  const mailContent = await files.getFileContent({
    projectId: projectId,
    region: region,
    resource: "mail",
  });

  const clientEmail = email;
  const clientSubject = subject;
  const messageBody = `${mailContent.response.replace(
    "{name}",
    name.charAt(0).toUpperCase() + name.slice(1)
  )}\n\n${mailContent.feedback.replace(
    "{message}",
    message
  )}\n\n${mailContent.footer}`;

  // const clientResponse = await sendEmail({
  //   subject: `Hola ${name}!`,
  //   message:
  //     "Gracias por tu mensaje. Me pondré en contacto contigo lo antes posible.",
  //   sendTo: clientEmail,
  // });
  // console.log(clientResponse);

  // await new Promise((resolve) => setTimeout(resolve, 1000));
  const contentObject = {
    from_prefix: mailContent.from_prefix,
    subject: clientSubject,
    message: messageBody,
    sendTo: clientEmail,
  };
  const response = await sendEmail(contentObject);
  console.log(response);

  const { error, data } = response;
  if (!error && data) {
    return NextResponse.json({
      message: "Email sent",
      status: 200,
      mail: contentObject,
    });
  } else {
    return NextResponse.json({
      message: "Email not sent",
      status: 400,
      body: { name, email, subject, message },
    });
  }
}
