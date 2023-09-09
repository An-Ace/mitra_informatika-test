import express from "express";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import { fileURLToPath } from 'url';
import path from 'path';
import { router } from "./routes/index.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.static('public'))

app.use(morgan("common"));

app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use("/api/", router);

app.use("/", (_req, res) => {
  res.sendFile(path.join(__dirname, './pages/index.html'));
});

export { app };
