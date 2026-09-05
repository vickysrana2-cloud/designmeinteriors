import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { createEnquiry } from "@/lib/api/enquiries";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, location, serviceType, budget, message } = body;

    // Basic Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    // Persist to MockAPI alongside email functionality
    try {
      await createEnquiry({
        fullName: name,
        email: email,
        phone: phone || "",
        projectLocation: location || "",
        serviceCategory: serviceType || "",
        estimatedBudget: budget || "",
        projectOverview: message,
      });
    } catch (mockApiError) {
      // Log MockAPI persistence error without interrupting email workflow
      console.error("MockAPI Enquiry Recording Error:", mockApiError);
    }

    const receiverEmail =
      process.env.CONTACT_RECEIVER_EMAIL || "sonamtiwari1202@gmail.com";
    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = parseInt(process.env.SMTP_PORT || "587", 10);
    const smtpSecure = process.env.SMTP_SECURE === "true";
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    // Check if SMTP credentials are provided
    if (!smtpUser || !smtpPass) {
      console.warn(
        "Nodemailer Warning: SMTP_USER or SMTP_PASS is missing in .env.local. " +
          "Inquiry received for: " +
          receiverEmail
      );

      // Return informative response for development when SMTP credentials are not yet set
      return NextResponse.json(
        {
          success: true,
          message:
            "Inquiry received successfully (Development Mode: Set SMTP_USER & SMTP_PASS in .env.local to send live emails).",
          warning: "SMTP credentials missing in environment variables.",
        },
        { status: 200 }
      );
    }

    // Create Nodemailer Transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure, // true for port 465, false for 587 or other ports
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // Format HTML Email Template
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #F5F2EC; color: #242321; margin: 0; padding: 20px; }
            .container { max-width: 600px; margin: 0 auto; background: #FCFBF8; border: 1px solid #D7D0C5; border-radius: 4px; overflow: hidden; }
            .header { background-color: #191816; color: #FCFBF8; padding: 24px; text-align: center; }
            .header h1 { margin: 0; font-size: 22px; font-weight: 500; letter-spacing: 1px; }
            .header p { margin: 4px 0 0 0; font-size: 12px; color: #9A8060; text-transform: uppercase; letter-spacing: 2px; }
            .content { padding: 30px; }
            .field-group { margin-bottom: 18px; border-bottom: 1px solid #D7D0C5; padding-bottom: 12px; }
            .field-label { font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; color: #9A8060; font-weight: 600; margin-bottom: 4px; }
            .field-value { font-size: 15px; color: #242321; font-weight: 400; }
            .message-box { background: #F5F2EC; border-left: 3px solid #9A8060; padding: 16px; margin-top: 20px; font-style: italic; white-space: pre-line; }
            .footer { background: #E8E1D7; padding: 16px; text-align: center; font-size: 12px; color: #706B63; border-top: 1px solid #D7D0C5; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>DESIGNMEINTERIORS STUDIO</h1>
              <p>New Project Inquiry</p>
            </div>
            <div class="content">
              <div class="field-group">
                <div class="field-label">Full Name</div>
                <div class="field-value">${name}</div>
              </div>
              <div class="field-group">
                <div class="field-label">Email Address</div>
                <div class="field-value"><a href="mailto:${email}">${email}</a></div>
              </div>
              <div class="field-group">
                <div class="field-label">Phone Number</div>
                <div class="field-value">${phone || "Not provided"}</div>
              </div>
              <div class="field-group">
                <div class="field-label">Project Location</div>
                <div class="field-value">${location || "Not specified"}</div>
              </div>
              <div class="field-group">
                <div class="field-label">Service Category</div>
                <div class="field-value" style="text-transform: capitalize;">${serviceType}</div>
              </div>
              <div class="field-group">
                <div class="field-label">Estimated Budget</div>
                <div class="field-value">${budget || "Not specified"}</div>
              </div>
              <div class="field-group" style="border-bottom: none;">
                <div class="field-label">Project Overview & Vision</div>
                <div class="message-box">${message}</div>
              </div>
            </div>
            <div class="footer">
              This message was sent from the DesignMeInteriors Studio Contact Form.<br/>
              Submitted on ${new Date().toLocaleString()}
            </div>
          </div>
        </body>
      </html>
    `;

    // Plain text alternative
    const textContent = `
NEW PROJECT INQUIRY - DESIGNMEINTERIORS STUDIO
--------------------------------------
Full Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Location: ${location || "Not specified"}
Service Category: ${serviceType}
Estimated Budget: ${budget || "Not specified"}

Project Overview:
${message}
--------------------------------------
Sent on: ${new Date().toLocaleString()}
    `;

    // Send Mail
    await transporter.sendMail({
      from: `"${name} (via DesignMeInteriors Studio)" <${smtpUser}>`,
      to: receiverEmail,
      replyTo: email,
      subject: `New Project Inquiry: ${name} (${serviceType})`,
      text: textContent,
      html: htmlContent,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Your inquiry has been sent successfully!",
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("Nodemailer Email Error:", error);
    const message =
      error instanceof Error
        ? error.message
        : "Failed to send email. Please check server logs and SMTP settings.";
    return NextResponse.json(
      {
        error: message,
      },
      { status: 500 }
    );
  }
}
