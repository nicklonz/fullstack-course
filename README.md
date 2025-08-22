# 📚 Fullstack Course — TypeScript, Next.js, Express

This repository follows along a **hands-on fullstack journey**:  
Next.js (frontend) + Express (backend API) + TypeScript everywhere.  
Built step by step with clean commits and clear structure.

---

## 🚀 Tech Stack

- **Frontend:** [Next.js 15](https://nextjs.org/) (App Router, TS)
- **Backend:** [Express](https://expressjs.com/) + TypeScript
- **Package Manager:** npm (workspaces)
- **Environment:** Node.js ≥ 20

---

## 📂 Project Structure

fullstack-course/
│
├── apps/
│ ├── web/ # Next.js frontend
│ └── api/ # Express backend
│
├── package.json # workspace config + dev scripts
├── README.md # this file 🙂
└── .gitignore

---

## ⚡ Quick Start

### 1. Clone & Install

```bash
git clone https://github.com/nicklonz/fullstack-course.git
cd fullstack-course
npm install

2. Run the API
npm run dev:api
# → starts Express server at http://localhost:4000
# try http://localhost:4000/api/hello

3. Run the Web
npm run dev:web
# → starts Next.js app at http://localhost:3000
# loads API response into homepage

🔑 Environment Variables

Frontend (apps/web/.env.local):

NEXT_PUBLIC_API_URL=http://localhost:4000


Backend (apps/api/.env — optional for DB config later):

PORT=4000

🧑‍💻 Available Scripts

From repo root:

Command What it does
npm run dev:api Run Express API on http://localhost:4000

npm run dev:web Run Next.js frontend on http://localhost:3000

npm run dev (optional) Run both concurrently (later setup)
🏗 Lessons Covered So Far

Monorepo setup with npm workspaces

Next.js app (apps/web)

Express API (apps/api)

Fetching API data into frontend

Environment variable config

📌 Next Steps

Add CRUD posts API + frontend form

Introduce GraphQL (Yoga or Apollo)

Add MongoDB for persistence

Dockerize for local + production use

🤝 Contributing

This is a learning repo — feel free to fork, tweak, and PR improvements.
Each lesson is meant to be small, clear, and incremental.

📜 License

MIT — free to use & remix.
