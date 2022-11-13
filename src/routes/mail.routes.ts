import * as express from "express";

const router = express.Router();

router.post("/sendMail", (req, res) => {
  res.send("Sending Mail");
});

export default router;
