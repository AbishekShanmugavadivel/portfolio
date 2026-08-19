import { sendContactEmail } from '../services/emailService.js';

export const handleContact = async (req, res, next) => {
  try {
    const { name, email, subject, message, website } = req.body;

    // 1. Honeypot check for spam bots
    if (website && website.trim() !== '') {
      console.log('[Honeypot Triggered] Bot submission blocked silently.');
      return res.status(200).json({
        success: true,
        message: "Your message has been sent successfully."
      });
    }

    // 2. Required fields check
    if (!name || !name.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Please provide your name.'
      });
    }

    if (!email || !email.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Please provide your email address.'
      });
    }

    // 3. Email format regex check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address.'
      });
    }

    if (!subject || !subject.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a subject.'
      });
    }

    if (!message || !message.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Please enter your message.'
      });
    }

    // 4. Minimum length validation
    if (message.trim().length < 10) {
      return res.status(400).json({
        success: false,
        message: 'Message content must be at least 10 characters long.'
      });
    }

    // 5. Trigger Resend email delivery
    try {
      await sendContactEmail({
        name: name.trim(),
        email: email.trim(),
        subject: subject.trim(),
        message: message.trim()
      });
    } catch (emailErr) {
      console.error("[Email Delivery Exception]:", emailErr);
      // Return friendly 500 error if email delivery fails
      return res.status(500).json({
        success: false,
        message: 'Unable to send your message right now due to server email configuration. Please try again later.'
      });
    }

    return res.status(200).json({
      success: true,
      message: "Your message has been sent successfully. I'll get back to you soon."
    });

  } catch (error) {
    next(error);
  }
};
