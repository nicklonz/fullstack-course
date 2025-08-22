import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT ? Number(process.env.PORT) : 4000;

app.use(cors());
app.use(express.json());

// Health check
app.get("/api/health", (_req, res) => {
  res.json({ ok: true, service: "api", version: "1.0.0" });
});

// Demo route
app.get("/api/hello", (_req, res) => {
  res.json({ message: "Hello from the API 🚀" });
});

app.listen(PORT, () => {
  console.log(`API running at http://localhost:${PORT}`);
});
