import { getJSON } from "@/lib/api";

type Post = { id: string; title: string; content: string; createdAt: string };

export default async function PostList() {
  const posts = await getJSON<Post[]>("/api/posts");
  if (!posts.length) return <p style={{ opacity: 0.7 }}>No posts yet.</p>;

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {posts.map((p) => (
        <li key={p.id} style={{ marginBottom: 12 }}>
          <strong>{p.title}</strong>
          <br />
          <span style={{ opacity: 0.85 }}>{p.content}</span>
          <br />
          <small style={{ opacity: 0.6 }}>{new Date(p.createdAt).toLocaleString()}</small>
        </li>
      ))}
    </ul>
  );
}
