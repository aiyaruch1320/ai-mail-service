import { Request, Response } from "express";
import { IMailRequest } from "../interface/mail";
import MailService from "../service/mail.service";

class MailController {
  constructor(private mailService = new MailService()) {}

  sendMail = (req: Request, res: Response) => {
    const mail: IMailRequest = req.body;
    const result = this.mailService.sendMail(mail);
    res.status(200).send(result);
  };
}

export default MailController;
