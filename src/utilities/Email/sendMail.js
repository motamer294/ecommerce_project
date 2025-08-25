import nodemailer from 'nodemailer';
import { emailTemplate } from './emailTemplate.js';

const transporter = nodemailer.createTransport({
  service: process.env.MAIL_SERVICE || 'gmail',
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  },
  tls: { rejectUnauthorized: false }
});

export const sendMail = async (email) => {
  const info = await transporter.sendMail({
    from: `NTIG13 <${process.env.MAIL_USER}>`,
    to: email,
    subject: 'Verify your account',
    html: emailTemplate(email)
  });
  console.log('Mail sent:', info.messageId);
};
