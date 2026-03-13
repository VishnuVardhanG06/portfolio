import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { z } from "zod";

export const authRouter = express.Router();

const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

authRouter.post("/login", async (req, res) => {
  const parsed = LoginSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: "Invalid payload" });

  const adminEmail = process.env.ADMIN_EMAIL || "";
  const adminPassword = process.env.ADMIN_PASSWORD || "";
  const secret = process.env.JWT_SECRET || "";
  if (!adminEmail || !adminPassword || !secret) return res.status(500).json({ error: "Server not configured" });

  if (parsed.data.email !== adminEmail) return res.status(401).json({ error: "Invalid credentials" });

  // Store hashed password in env in real deployments; this is a demo scaffold.
  const ok = await bcrypt.compare(parsed.data.password, await bcrypt.hash(adminPassword, 10));
  if (!ok) return res.status(401).json({ error: "Invalid credentials" });

  const token = jwt.sign({ email: adminEmail, role: "admin" }, secret, { expiresIn: "7d" });
  return res.json({ token });
});

