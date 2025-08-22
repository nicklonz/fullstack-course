import { Schema, model, models } from "mongoose";

const PostSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    content: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

export type PostDoc = {
  _id: any;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
};

export const Post = models.Post || model<PostDoc>("Post", PostSchema);
