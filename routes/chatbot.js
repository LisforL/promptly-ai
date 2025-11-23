import express from "express";
import { createChatbot } from "../controllers/chatbotController.js";

const router = express.Router();

router.post("/create", createChatbot);

export default router;
