import dotenv from "dotenv";
import { buildExpress } from "./app";

dotenv.config();

const port = process.env.PORT || 8001;
const start = () => {
  const app = buildExpress();
  app.listen(port, () => {
    console.log(
      `Example app listening at http://localhost:${port} 🚀 environment: ${process.env.ENVIROMENT}`
    );
  });
  return app;
};

start();
