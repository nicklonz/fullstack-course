# Fullstack Course — All-in-One Docker (Mongo + API + Web)

This bundle lets you run **MongoDB**, **Express API**, and **Next.js Web** with **one command**:

```bash
docker compose up --build
```

- Web: http://localhost:3000
- API: http://localhost:4000
- Mongo: mongodb://localhost:27017 (container name: mongo)

## Quick Start
```bash
unzip fullstack-course-m6-docker.zip
cd fullstack-course-m6-docker
docker compose up --build
# open http://localhost:3000
```

### Dev tips
- Containers hot-reload on code changes (volumes are mounted).
- Web talks to API via `http://api:4000` inside the Docker network; the browser uses `http://localhost:4000` via port mapping.

## Services
- **mongo** — MongoDB 6 (port 27017)
- **api** — Express + TypeScript + Mongoose (port 4000)
- **web** — Next.js 15 (port 3000)
