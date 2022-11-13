import * as express from "express";
import mailRoutes from "./mail.routes";

const appRoutes = express.Router();

appRoutes.use("/mail", mailRoutes);

export default appRoutes;
