import { Router } from "express";
import { connectToDB } from "../db";
import { Post } from "../models/Post";

const router = Router();

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

router.post("/", async (req, res) => {
  try {
    const { title, content } = req.body || {};
    if (!title || !content) {
      return res.status(400).json({ error: "title and content are required" });
    }
    await connectToDB();
    const created = await Post.create({ title, content });
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

export default router;
