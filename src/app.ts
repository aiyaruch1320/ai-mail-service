import express, { Request, Response } from "express";
import appRoutes from "./routes/app.routes";
import { logDebug } from "./utils/winston";

export const buildExpress = () => {
  const app = express();
  app.get("/health", (req: Request, res: Response) => {
    res.send("Hello World!");
    logDebug("Hello World!");
  });
  app.use("/api", appRoutes);
  return app;
};
