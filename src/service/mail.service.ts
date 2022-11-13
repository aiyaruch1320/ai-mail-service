import { IMailRequest } from "../interface/mail";

export default class MailService {
  sendMail = (body: IMailRequest) => body;
}
