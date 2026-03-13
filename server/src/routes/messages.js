import express from "express";
import { z } from "zod";

import { Message } from "../models/Message.js";
import { requireAuth } from "../middleware/auth.js";

export const messagesRouter = express.Router();

const CreateSchema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email().max(200),
  message: z.string().min(10).max(5000),
});

messagesRouter.post("/", async (req, res) => {
  const parsed = CreateSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: "Invalid payload" });

  const created = await Message.create(parsed.data);
  return res.status(201).json({ id: created._id });
});

messagesRouter.get("/", requireAuth, async (_req, res) => {
  const items = await Message.find().sort({ createdAt: -1 }).limit(100).lean();
  return res.json({ items });
});

messagesRouter.delete("/:id", requireAuth, async (req, res) => {
  await Message.deleteOne({ _id: req.params.id });
  return res.json({ ok: true });
});

