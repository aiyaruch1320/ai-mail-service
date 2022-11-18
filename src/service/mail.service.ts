import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import { IMail } from "../interface/mail";
import { logDebug, logError } from "../utils/winston";
export default class MailService {
  private createTransport(): Mail {
    return nodemailer.createTransport(
      new SMTPTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_HOST_PORT),
        auth: {
          user: process.env.SMTP_USERNAME,
          pass: process.env.SMTP_PASSWORD,
        },
      })
    );
  }

  sendEmail = ({ subject, to, cc, text }: IMail) => {
    const mailOptions = {
      subject,
      from: `${process.env.SENDER_NAME} <${process.env.SENDER_MAIL}>`,
      to,
      cc,
      text,
    };
    this.createTransport().sendMail(mailOptions, (error, info) => {
      if (error) {
        logError(
          `Message Cannot Sent Email To:${mailOptions.to}: ${error.message}`
        );
        return;
      }
      logDebug(`Message Sent Email To:${mailOptions.to} ${info.response}`);
    });
  };
}
