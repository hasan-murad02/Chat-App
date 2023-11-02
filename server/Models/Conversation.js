const mongoose = require('mongoose');

// Define a schema
const ConversationSchema = new mongoose.Schema({
    MessageId: {
        type: String,
    },
    content: [
        {
            SenderId: {
                type: String,
            },
            text: {
                type: String,
            },
            Time: {
                type: Date
            },
        },
    ],
  }, { strict: false });
 
// Create a model based on the schema
const Conversation = mongoose.model('Conversation', ConversationSchema);

module.exports = Conversation;
