import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();
    const { firstname, lastname, mail, message } = body;

    console.log(mail, message);

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // `true` for port 465, `false` for all other ports
      auth: {
        user: "muratcanyilmaz9936@gmail.com",
        pass: process.env.NODEMAILER,
      },
    });

    await transporter.sendMail({
      from: "muratcanyilmaz9936@gmail.com", // sender address
      to: mail, // list of receivers
      subject: "Hello ✔", // Subject line
      text: message, // plain text body
      html: "<b>Hello world?</b>", // html body
    });

    return NextResponse.json({ message: "successed" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
