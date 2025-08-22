import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://mongo:27017/fullstack_course";

if (!globalThis.__mongooseConn) {
  // @ts-ignore
  globalThis.__mongooseConn = { conn: null, promise: null };
}

type GlobalConn = { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null };
declare global { var __mongooseConn: GlobalConn; }

export async function connectToDB() {
  if (globalThis.__mongooseConn.conn) return globalThis.__mongooseConn.conn;
  if (!globalThis.__mongooseConn.promise) {
    globalThis.__mongooseConn.promise = mongoose.connect(MONGODB_URI, { dbName: "fullstack_course" });
  }
  globalThis.__mongooseConn.conn = await globalThis.__mongooseConn.promise;
  return globalThis.__mongooseConn.conn;
}
