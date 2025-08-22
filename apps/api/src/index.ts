import express from "express";
import cors from "cors";
import postsRouter from "./routes/posts";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT ? Number(process.env.PORT) : 4000;

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.type("text/plain").send(
`API is running.

Useful routes:
  GET  /api/health
  GET  /api/hello
  GET  /api/posts
  POST /api/posts

Port: ${PORT}`
  );
});

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, service: "api", version: "1.0.0" });
});

app.get("/api/hello", (_req, res) => {
  res.json({ message: "Hello from the API 🚀" });
});

app.use("/api/posts", postsRouter);

app.listen(PORT, () => {
  console.log(`API running at http://localhost:${PORT}`);
});
