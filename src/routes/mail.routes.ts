import * as express from "express";

const router = express.Router();

router.post("/sendmail", (req, res) => {
  console.log(req.body);
  res.send({
    message: "Mail sent successfully",
  });
});

export default router;
