import express from "express";
import morgan from "morgan";
import { Router } from "./routes.js";

const app = express();

app.set("port", 3000);

app.use(morgan("dev"));
app.use(express.json());
app.use(Router);

app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
