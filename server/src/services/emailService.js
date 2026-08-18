import { createTransporter } from '../config/nodemailer.js';

export const sendContactEmail = async ({ name, email, subject, message }) => {
  const transporter = createTransporter();
  const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || process.env.SMTP_USER || 'abishekgasckcs@gmail.com';
  const submittedAt = new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });

  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: 'Segoe UI', Arial, sans-serif; background-color: #f8fafc; color: #1e293b; margin: 0; padding: 20px; }
          .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; padding: 32px; border: 1px solid #e2e8f0; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
          .header { border-bottom: 2px solid #2563eb; padding-bottom: 16px; margin-bottom: 24px; }
          .header h2 { color: #0f172a; margin: 0; font-size: 22px; }
          .field { margin-bottom: 16px; }
          .field-label { font-size: 11px; text-transform: uppercase; font-weight: bold; color: #64748b; margin-bottom: 4px; }
          .field-value { font-size: 15px; font-weight: 600; color: #0f172a; }
          .message-box { background: #f1f5f9; padding: 16px; border-radius: 12px; border-left: 4px solid #2563eb; font-size: 14px; line-height: 1.6; white-space: pre-wrap; margin-top: 8px; }
          .footer { margin-top: 32px; padding-top: 16px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8; text-align: center; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>📬 New Portfolio Contact</h2>
          </div>

          <div class="field">
            <div class="field-label">Name</div>
            <div class="field-value">${name}</div>
          </div>

          <div class="field">
            <div class="field-label">Email</div>
            <div class="field-value"><a href="mailto:${email}">${email}</a></div>
          </div>

          <div class="field">
            <div class="field-label">Subject</div>
            <div class="field-value">${subject}</div>
          </div>

          <div class="field">
            <div class="field-label">Message</div>
            <div class="message-box">${message}</div>
          </div>

          <div class="field">
            <div class="field-label">Submitted</div>
            <div class="field-value">${submittedAt}</div>
          </div>

          <div class="footer">
            Sent automatically from Abishek Portfolio Contact Engine
          </div>
        </div>
      </body>
    </html>
  `;

  const mailOptions = {
    from: `"Portfolio Contact" <${process.env.SMTP_USER || 'abishekgasckcs@gmail.com'}>`,
    to: receiverEmail,
    replyTo: email,
    subject: `[Portfolio Contact] ${subject}`,
    text: `New Portfolio Contact\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}\n\nSubmitted: ${submittedAt}`,
    html: htmlContent,
  };

  const sendPromise = transporter.sendMail(mailOptions);
  const timeoutPromise = new Promise((_, reject) =>
    setTimeout(() => reject(new Error('Email server connection timed out. Please try again later.')), 9000)
  );

  return await Promise.race([sendPromise, timeoutPromise]);
};
