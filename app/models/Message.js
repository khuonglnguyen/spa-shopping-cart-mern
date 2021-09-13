const mongoose = require('mongoose');

const MessageSchema = mongoose.Schema({
  from_user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  to_user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  status: {
    type: Boolean,
    default: true
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  content: {
    type: String,
    required: true,
    unique: false,
  }
});

module.exports = mongoose.model('Message', MessageSchema);