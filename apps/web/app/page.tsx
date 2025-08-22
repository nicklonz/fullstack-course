import { getJSON } from "@/lib/api";

type HelloResponse = { message: string };

export default async function Home() {
  let apiMessage = "(loading...)";
  try {
    const data = await getJSON<HelloResponse>("/api/hello");
    apiMessage = data.message;
  } catch (e: any) {
    apiMessage = \`Error: \${e.message || "Failed to reach API"}\`;
  }

  return (
    <main style={{ fontFamily: "system-ui", maxWidth: 800, margin: "40px auto" }}>
      <h1 style={{ marginBottom: 16 }}>Frontend ↔ API</h1>
      <p style={{ opacity: 0.8, marginBottom: 24 }}>
        This page is rendered on the server and fetches from the API during the request.
      </p>

      <section style={{ border: "1px solid #333", borderRadius: 12, padding: 16 }}>
        <h3>API says:</h3>
        <pre style={{ whiteSpace: "pre-wrap" }}>{apiMessage}</pre>
        <div style={{ opacity: 0.7, marginTop: 8 }}>
          (From <code>{process.env.NEXT_PUBLIC_API_URL}/api/hello</code>)
        </div>
      </section>
    </main>
  );
}
