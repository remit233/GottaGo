const db = require('../db');

class Message {
  static async create(sender_id, receiver_id, content) {
    const timestamp = new Date();
    const is_read = false;

    const result = await db.query(
      `INSERT INTO chat_messages (sender_id, receiver_id, content, timestamp, is_read)
       VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [sender_id, receiver_id, content, timestamp, is_read]
    );

    return result.rows[0];
  }

  static async getChatHistory(user1_id, user2_id) {
    const result = await db.query(
      `SELECT * FROM chat_messages
       WHERE (sender_id = $1 AND receiver_id = $2) OR (sender_id = $2 AND receiver_id = $1)
       ORDER BY timestamp ASC`,
      [user1_id, user2_id]
    );

    return result.rows;
  }
}

module.exports = Message;
