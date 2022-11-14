import * as express from "express";
import MailController from "../controllers/mail.controller";

const router = express.Router();

router.post("/sendmail", new MailController().sendMail);

export default router;
