import express from "express";
import {
  createComment,
  getComments,
  getPostComments,
} from "../controllers/commentController";
import { verifyToken } from "../middlewares/token/verifyToken";

const router = express.Router();

router.get("/api/v1/comments", getComments);
router.post("/api/v1/comments/postComments", verifyToken, getPostComments);
router.post("/api/v1/comments/create", verifyToken, createComment);

export default router;
