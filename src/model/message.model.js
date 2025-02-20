import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    sender: { type: mongoose.Schema.Types.ObjectId, ref: 'UserModel' },
    receiver: { type: mongoose.Schema.Types.ObjectId, ref: 'UserModel' },
    type: { type: String, enum: ['text', 'audio', 'video'], default: 'text' },
    content: { type: String },
    read: { type: Boolean, default: false }
  }, { timestamps: true });
  
  const Message = mongoose.model('Message', messageSchema);