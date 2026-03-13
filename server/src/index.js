import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import { authRouter } from "./routes/auth.js";
import { messagesRouter } from "./routes/messages.js";
import { projectsRouter } from "./routes/projects.js";

const app = express();
app.use(cors());
app.use(express.json({ limit: "1mb" }));

app.get("/health", (_req, res) => res.json({ ok: true }));
app.use("/api/auth", authRouter);
app.use("/api/messages", messagesRouter);
app.use("/api/projects", projectsRouter);

const port = Number(process.env.PORT || 8080);
const mongo = process.env.MONGODB_URI;
if (!mongo) throw new Error("Missing MONGODB_URI");

await mongoose.connect(mongo);
console.log(`[server] connected to mongodb`);

app.listen(port, () => {
  console.log(`[server] listening on http://localhost:${port}`);
});
