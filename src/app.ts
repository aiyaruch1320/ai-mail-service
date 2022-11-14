import express, { Request, Response } from "express";
import appRoutes from "./routes/app.routes";
import { logDebug } from "./utils/winston";

export const buildExpress = () => {
  const app = express();
  app.get("/health", (req: Request, res: Response) => {
    res.send("Working");
    logDebug("Checking health");
  });
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use("/api", appRoutes);
  return app;
};
