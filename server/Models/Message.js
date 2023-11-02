const mongoose = require('mongoose');

// Define a schema
const MessageSchema = new mongoose.Schema({
    // Message: String,
    // SendingTime: Date,
    // Read: Boolean,
    // ReadTime: Date,
    // Deleted: Boolean,
    SenderId: String,
    RecieverId: String,
  }, { strict: false });
 
// Create a model based on the schema
const Message = mongoose.model('messages', MessageSchema);

module.exports = Message;
