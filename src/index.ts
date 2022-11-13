import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import { logDebug } from "./utils/winston";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8001;

app.get("/health", (req: Request, res: Response) => {
  res.send("Hello World!");
  logDebug("Hello World!");
});

app.listen(port, () => {
  console.log(
    `Example app listening at http://localhost:${port} 🚀 environment: ${process.env.ENVIROMENT}`
  );
});
