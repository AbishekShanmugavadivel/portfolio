import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

export const createTransporter = () => {
  const host = process.env.SMTP_HOST || 'smtp.gmail.com';
  const port = parseInt(process.env.SMTP_PORT || '465', 10);
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
    connectionTimeout: 10000, // 10 sec connection timeout
    greetingTimeout: 8000,   // 8 sec greeting timeout
    socketTimeout: 15000,    // 15 sec socket timeout
    tls: {
      rejectUnauthorized: false
    }
  });
};
