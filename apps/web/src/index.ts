import express from "express";
import cors from "cors";

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

// Example route
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from the API 🚀" });
});

app.listen(PORT, () => {
  console.log(`API running at http://localhost:${PORT}`);
});
