import express from "express";
import {
  createJournal,
  getAllJournals,
} from "../controllers/journalController";
import { verifyToken } from "../middlewares/token/verifyToken";

const router = express.Router();

router.get("/api/v1/journals", getAllJournals);
router.post("/api/v1/journals/createJournal", verifyToken, createJournal);

export default router;
