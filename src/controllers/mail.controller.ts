import { Request, Response } from "express";
import { IMail } from "../interface/mail";
import MailService from "../service/mail.service";

class MailController {
  constructor(private mailService = new MailService()) {}

  sendMail = (req: Request, res: Response) => {
    const mail: IMail = req.body;
    const result = this.mailService.sendEmail(mail);
    res.status(200).send(result);
  };
}

export default MailController;
