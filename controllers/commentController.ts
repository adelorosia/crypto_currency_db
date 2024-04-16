import asyncHandler from "express-async-handler";
import { IPost } from "../interface";
import { Request, Response } from "express";
import Comments from "../models/commentModel";

interface CustomRequest extends Request {
  userId?: IPost;
  postIdPublic?: IPost;
}

export const createComment = asyncHandler(
  async (req: CustomRequest, res: Response) => {
    const userId = req.userId;
    const { postIdPublic, comment } = req.body;
    try {
      const comments = await Comments.create({
        post: postIdPublic,
        comment,
        user: userId,
      });
      res.json({
        comment: comments,
        message: "Your comment has been successfully registered.",
      });
    } catch (error) {
      res.json(error);
    }
  }
);
