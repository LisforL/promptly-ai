import Chatbot from "../models/chatbot.js";

export const createChatbot = async (req, res) => {
  try {
    const chatbot = await Chatbot.create({
      userId: req.body.userId,
      businessName: req.body.businessName,
      businessDescription: req.body.businessDescription,
      systemPrompt: req.body.systemPrompt,
      personality: req.body.personality,
    });

    res.status(201).json({ message: "Chatbot created", chatbot });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
