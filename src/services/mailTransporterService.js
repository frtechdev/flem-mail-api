import { createTransport } from "nodemailer";

// INSTANCIA UM TRANSPORT DE EMAILS DO NODEMAILER
export const mailTransporter = createTransport({
  host: process.env.NEXT_MAILSERVICE_HOST,
  port: process.env.NEXT_MAILSERVICE_PORT,
  secure: false,
  auth: {
    user: process.env.NEXT_MAILSERVICE_USER,
    pass: process.env.NEXT_MAILSERVICE_PASS,
  },
  logger: process.env.NEXT_DEBUG_SMTP === "true",
});
