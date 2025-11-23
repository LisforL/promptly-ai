import express from "express";
import { createChatbot } from "../controllers/chatbotController.js";
import auth from "../middleware/authMiddleware.js";

const router = express.Router();

// Protected route - user must be logged in
router.post("/create", auth, createChatbot);

export default router;
