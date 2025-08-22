"use client";

import { useState, useTransition } from "react";
import { postJSON } from "@/lib/api";
import { useRouter } from "next/navigation";

export default function PostForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [err, setErr] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();
  const router = useRouter();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);
    try {
      await postJSON("/api/posts", { title, content });
      setTitle("");
      setContent("");
      startTransition(() => router.refresh());
    } catch (e: any) {
      setErr(e.message || "Failed to create post");
    }
  }

  return (
    <form onSubmit={onSubmit} style={{ display: "grid", gap: 12 }}>
      <div>
        <label style={{ display: "block", marginBottom: 6 }}>Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Post title"
          style={{ width: "100%", padding: 10, borderRadius: 8 }}
        />
      </div>
      <div>
        <label style={{ display: "block", marginBottom: 6 }}>Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write something…"
          style={{ width: "100%", padding: 10, borderRadius: 8 }}
        />
      </div>
      <div>
        <button type="submit" disabled={pending || !title || !content} style={{ padding: "10px 14px", borderRadius: 8 }}>
          {pending ? "Adding…" : "Add Post"}
        </button>
      </div>
      {err && <p style={{ color: "#f87171" }}>Error: {err}</p>}
    </form>
  );
}
