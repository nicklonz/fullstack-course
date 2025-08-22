"use client";

import { useTransition } from "react";
import { del, putJSON } from "@/lib/api";
import { useRouter } from "next/navigation";

export default function PostActions({ id, title, content }: { id: string; title: string; content: string; }) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  async function onDelete() {
    const ok = confirm("Delete this post?");
    if (!ok) return;
    await del(`/api/posts/${id}`);
    startTransition(() => router.refresh());
  }

  async function onEdit() {
    const newTitle = prompt("New title:", title) ?? "";
    const newContent = prompt("New content:", content) ?? "";
    if (!newTitle.trim() && !newContent.trim()) return;
    await putJSON(`/api/posts/${id}`, {
      title: newTitle.trim() || undefined,
      content: newContent.trim() || undefined,
    });
    startTransition(() => router.refresh());
  }

  return (
    <span style={{ marginLeft: 8 }}>
      <button onClick={onEdit} disabled={pending} style={{ marginRight: 8, borderRadius: 6, padding: "4px 8px" }}>
        Edit
      </button>
      <button onClick={onDelete} disabled={pending} style={{ borderRadius: 6, padding: "4px 8px" }}>
        Delete
      </button>
    </span>
  );
}
