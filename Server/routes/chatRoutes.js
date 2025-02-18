const express = require('express');
const ChatMessage = require('../models/chatMessage');

const router = express.Router();

// Endpoint to fetch all chat messages
router.get('/', async (req, res) => {
  try {
    const allMessages = await ChatMessage.find().sort({ postedAt: 1 });
    res.json(allMessages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
