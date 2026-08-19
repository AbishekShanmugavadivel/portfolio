import dotenv from "dotenv";
dotenv.config();

import { Resend } from "resend";

// Check whether the API key is loaded
if (!process.env.RESEND_API_KEY) {
  console.error("[Resend] RESEND_API_KEY is missing.");
} else {
  console.log("[Resend] API key loaded successfully.");
}

const resend = new Resend(process.env.RESEND_API_KEY);

// Escape HTML to safely display user-submitted content
const escapeHtml = (value = "") =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

export const sendContactEmail = async ({
  name,
  email,
  subject,
  message,
}) => {
  // Validate Resend API key
  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY is not configured");
  }

  // Email where portfolio messages will be received
  const receiverEmail =
    process.env.CONTACT_EMAIL ||
    "abishekgasckcs@gmail.com";

  // India time
  const submittedAt = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Kolkata",
  });

  // Safely escape user input for HTML
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeSubject = escapeHtml(subject);
  const safeMessage = escapeHtml(message);
  const safeSubmittedAt = escapeHtml(submittedAt);

  // Email HTML content
  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />

        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f8fafc;
            color: #1e293b;
            margin: 0;
            padding: 20px;
          }

          .container {
            max-width: 600px;
            margin: 0 auto;
            background: #ffffff;
            border-radius: 16px;
            padding: 32px;
            border: 1px solid #e2e8f0;
          }

          .header {
            border-bottom: 2px solid #2563eb;
            padding-bottom: 16px;
            margin-bottom: 24px;
          }

          .header h2 {
            color: #0f172a;
            margin: 0;
            font-size: 22px;
          }

          .field {
            margin-bottom: 16px;
          }

          .field-label {
            font-size: 11px;
            text-transform: uppercase;
            font-weight: bold;
            color: #64748b;
            margin-bottom: 4px;
          }

          .field-value {
            font-size: 15px;
            font-weight: 600;
            color: #0f172a;
          }

          .message-box {
            background: #f1f5f9;
            padding: 16px;
            border-radius: 12px;
            border-left: 4px solid #2563eb;
            font-size: 14px;
            line-height: 1.6;
            white-space: pre-wrap;
            margin-top: 8px;
          }

          .footer {
            margin-top: 32px;
            padding-top: 16px;
            border-top: 1px solid #e2e8f0;
            font-size: 12px;
            color: #94a3b8;
            text-align: center;
          }

          a {
            color: #2563eb;
            text-decoration: none;
          }
        </style>
      </head>

      <body>
        <div class="container">

          <div class="header">
            <h2>New Portfolio Contact</h2>
          </div>

          <div class="field">
            <div class="field-label">Name</div>

            <div class="field-value">
              ${safeName}
            </div>
          </div>

          <div class="field">
            <div class="field-label">Email</div>

            <div class="field-value">
              <a href="mailto:${safeEmail}">
                ${safeEmail}
              </a>
            </div>
          </div>

          <div class="field">
            <div class="field-label">Subject</div>

            <div class="field-value">
              ${safeSubject}
            </div>
          </div>

          <div class="field">
            <div class="field-label">Message</div>

            <div class="message-box">
              ${safeMessage}
            </div>
          </div>

          <div class="field">
            <div class="field-label">Submitted</div>

            <div class="field-value">
              ${safeSubmittedAt}
            </div>
          </div>

          <div class="footer">
            Sent automatically from Abishek Portfolio Contact Engine
          </div>

        </div>
      </body>
    </html>
  `;

  // Send email through Resend
  const { data, error } = await resend.emails.send({
    from:
      process.env.RESEND_FROM_EMAIL ||
      "onboarding@resend.dev",

    to: [receiverEmail],

    // When you click Reply, it replies to the person
    // who submitted the portfolio form.
    replyTo: email,

    subject: `[Portfolio Contact] ${subject}`,

    // Plain-text version
    text: `
New Portfolio Contact

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

Submitted: ${submittedAt}
    `,

    // HTML version
    html: htmlContent,
  });

  // Resend returned an error
  if (error) {
    console.error("[Resend Error]:", error);

    throw new Error(
      error.message || "Failed to send contact email"
    );
  }

  // Successful email
  console.log(
    "[Resend] Contact email sent successfully:",
    data?.id
  );

  return data;
};