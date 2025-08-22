import { Router } from "express";
import { connectToDB } from "../db";
import { Post } from "../models/Post";
import mongoose from "mongoose";

const router = Router();

// helper: validate Mongo ObjectId
function isValidId(id: string) {
  return mongoose.Types.ObjectId.isValid(id);
}

/**
 * GET /api/posts
 * Returns posts sorted by creation date (newest first)
 */
router.get("/", async (_req, res) => {
  try {
    await connectToDB();
    const posts = await Post.find().sort({ createdAt: -1 }).lean();
    const data = posts.map((p: any) => ({
      id: p._id.toString(),
      title: p.title,
      content: p.content,
      createdAt: p.createdAt,
      updatedAt: p.updatedAt,
    }));
    res.json(data);
  } catch (e: any) {
    res.status(500).json({ error: e.message || "Failed to fetch posts" });
  }
});

/**
 * POST /api/posts
 * Body: { title: string, content: string }
 */
router.post("/", async (req, res) => {
  try {
    const { title, content } = req.body || {};
    if (!title || !content || typeof title !== "string" || typeof content !== "string") {
      return res.status(400).json({ error: "title and content are required strings" });
    }
    await connectToDB();
    const created = await Post.create({ title: title.trim(), content: content.trim() });
    const p: any = created.toObject();
    res.status(201).json({
      id: p._id.toString(),
      title: p.title,
      content: p.content,
      createdAt: p.createdAt,
      updatedAt: p.updatedAt,
    });
  } catch (e: any) {
    res.status(500).json({ error: e.message || "Failed to create post" });
  }
});

/**
 * PUT /api/posts/:id
 * Body: { title?: string, content?: string }
 */
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (!isValidId(id)) return res.status(400).json({ error: "invalid id" });

    const { title, content } = req.body || {};
    const update: any = {};
    if (typeof title === "string" && title.trim().length) update.title = title.trim();
    if (typeof content === "string" && content.trim().length) update.content = content.trim();

    if (!Object.keys(update).length) {
      return res.status(400).json({ error: "nothing to update" });
    }

    await connectToDB();
    const updated = await Post.findByIdAndUpdate(id, update, { new: true }).lean();
    if (!updated) return res.status(404).json({ error: "not found" });

    res.json({
      id: updated._id.toString(),
      title: updated.title,
      content: updated.content,
      createdAt: updated.createdAt,
      updatedAt: updated.updatedAt,
    });
  } catch (e: any) {
    res.status(500).json({ error: e.message || "Failed to update post" });
  }
});

/**
 * DELETE /api/posts/:id
 */
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (!isValidId(id)) return res.status(400).json({ error: "invalid id" });

    await connectToDB();
    const deleted = await Post.findByIdAndDelete(id).lean();
    if (!deleted) return res.status(404).json({ error: "not found" });

    res.json({ ok: true });
  } catch (e: any) {
    res.status(500).json({ error: e.message || "Failed to delete post" });
  }
});

export default router;
