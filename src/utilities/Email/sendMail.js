
 import nodemailer from "nodemailer"
import { emailTemplate } from "./emailTemplate.js";
   

// Create a test account or replace with real credentials.
const transporter = nodemailer.createTransport({
  service: "gmail",

  auth: {
    user: "ahmed.abdelmawgood200@gmail.com",
    pass: "zgue jhli tgff xdiu", //from google app password, must enable 2-way verification
  },
  tls:{
     rejectUnauthorized:false
  }
});

// Wrap in an async IIFE so we can use await.
export const sendMail = async (email) => {

  const info = await transporter.sendMail({
    from: '"NTIG13" <ahmed.abdelmawgood200@gmail.com>',

    to: email,

    subject: "Hello ✔",
    text: "Hello world?", 
    html: emailTemplate(email), 
  });

  console.log("Message sent:", info.messageId);
}
