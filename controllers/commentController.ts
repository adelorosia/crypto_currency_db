import asyncHandler from "express-async-handler";
import { IPost } from "../interface";
import { Request, Response } from "express";
import Comments from "../models/commentModel";
import { populate } from "dotenv";

interface CustomRequest extends Request {
  userId?: IPost;
  postIdPublic?: IPost;
}

export const getComments = asyncHandler(async (req, res) => {
  try {
    const comments = await Comments.find().populate("user");
    res.json(comments);
  } catch (error) {
    res.json(error);
  }
});

export const getPostComments = asyncHandler(async (req, res) => {
  try {
    const { postIdPublic } = req.body;
    const comments = await Comments.findOne({ post: postIdPublic }).populate(
      "user"
    );
    res.json({ comment: comments });
  } catch (error) {
    res.json(error);
  }
});

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
      await comments.populate("user")
      res.json({
        comment: comments,
        message: "Your comment has been successfully registered.",
      });
    } catch (error) {
      res.json(error);
    }
  }
);

export const editComment = asyncHandler(
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

export const deleteComment = asyncHandler(
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
