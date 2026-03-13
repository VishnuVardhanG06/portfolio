import express from "express";
import { z } from "zod";

import { Project } from "../models/Project.js";
import { requireAuth } from "../middleware/auth.js";

export const projectsRouter = express.Router();

const ProjectSchema = z.object({
  name: z.string().min(2).max(200),
  slug: z.string().min(2).max(200),
  highlights: z.array(z.string()).default([]),
  technologies: z.array(z.string()).default([]),
  links: z
    .object({
      github: z.string().optional(),
      demo: z.string().optional(),
    })
    .optional(),
});

projectsRouter.get("/", async (_req, res) => {
  const items = await Project.find().sort({ createdAt: -1 }).limit(200).lean();
  return res.json({ items });
});

projectsRouter.post("/", requireAuth, async (req, res) => {
  const parsed = ProjectSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: "Invalid payload" });

  const created = await Project.create(parsed.data);
  return res.status(201).json({ id: created._id });
});

projectsRouter.delete("/:id", requireAuth, async (req, res) => {
  await Project.deleteOne({ _id: req.params.id });
  return res.json({ ok: true });
});

