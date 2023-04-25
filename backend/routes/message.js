const express = require('express');
const router = express.Router();

const Message = require('../models/message');

router.post('/create', async (req, res) => {
  try {
    const { sender_id, receiver_id, content } = req.body;
    const newMessage = await Message.create(sender_id, receiver_id, content);
    return res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while sending the message' });
  }
});

router.get('/chat_history/:user1_id/:user2_id', async (req, res) => {
  try {
    const { user1_id, user2_id } = req.params;
    const chatHistory = await Message.getChatHistory(user1_id, user2_id);
    return res.status(200).json(chatHistory);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching chat history' });
  }
});

module.exports = router;
