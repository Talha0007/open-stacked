import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, service, budget, timeline, requirements } =
      await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 1. Admin Copy (To You)
    const adminMail = {
      from: `"Open Stacked System" <sales@openstacked.com>`,
      to: process.env.EMAIL_USER,
      subject: `🚀 New Inquiry: ${service} from ${name}`,
      html: `
        <div style="font-family: sans-serif; background: #0b0b0b; color: #fff; padding: 30px; border-radius: 12px;">
          <h2 style="color: #06b6d4;">New Lead Details</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Budget:</strong> ${budget}</p>
          <p><strong>Timeline:</strong> ${timeline}</p>
          <p><strong>Requirements:</strong> ${requirements || "No extra details"}</p>
        </div>
      `,
    };

    // 2. Client Copy (To User)
    const clientMail = {
      from: `"Open Stacked" <sales@openstacked.com>`,
      to: email,
      replyTo: "sales@openstacked.com",
      subject: "We've received your request - Open Stacked",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 40px; border: 1px solid #e2e8f0; border-radius: 16px;">
          <h1 style="color: #000; font-style: italic; text-transform: uppercase;">Open Stacked.</h1>
          <p>Hi ${name},</p>
          <p>Thank you for reaching out! Our team has received your request for <b>${service}</b>.</p>
          <p>An engineer will review your project scope and provide a technical proposal within the next 12 hours.</p>
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #64748b;">
            <b>Open Stacked</b><br/>
            Full-Stack Solutions & Cloud Infrastructure
          </div>
        </div>
      `,
    };

    await Promise.all([
      transporter.sendMail(adminMail),
      transporter.sendMail(clientMail),
    ]);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: unknown) {
    console.error("SMTP Error:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
