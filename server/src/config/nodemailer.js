import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

export const createTransporter = () => {
  const host = process.env.SMTP_HOST || 'smtp.gmail.com';
  const port = parseInt(process.env.SMTP_PORT || '587', 10);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465, // true for 465, false for 587
    auth: {
      user,
      pass,
    },
    connectionTimeout: 8000, // 8 sec connection timeout
    greetingTimeout: 5000,   // 5 sec greeting timeout
    socketTimeout: 10000,    // 10 sec socket timeout
    tls: {
      rejectUnauthorized: false
    }
  });
};
