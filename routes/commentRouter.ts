import express from "express";
import { createComment } from "../controllers/commentController";
import { verifyToken } from "../middlewares/token/verifyToken";

const router = express.Router();

router.post("/api/v1/comments/create", verifyToken, createComment);

export default router;
