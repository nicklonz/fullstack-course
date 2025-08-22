import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

export default function Home() {
  return (
    <main style={{ fontFamily: "system-ui", maxWidth: 900, margin: "40px auto" }}>
      <h1 style={{ marginBottom: 16 }}>Posts (MongoDB)</h1>
      <p style={{ opacity: 0.8, marginBottom: 24 }}>
        Create a post, then see it appear below (persisted in MongoDB).
      </p>

      <section style={{ border: "1px solid #333", borderRadius: 12, padding: 16, marginBottom: 16 }}>
        <h3>Add Post</h3>
        <PostForm />
      </section>

      <section style={{ border: "1px solid #333", borderRadius: 12, padding: 16 }}>
        <h3>Latest Posts</h3>
        {/* @ts-expect-error Async Server Component */}
        <PostList />
      </section>
    </main>
  );
}
