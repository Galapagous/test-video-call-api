import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    avatar: { type: String },
    online: { type: Boolean, default: false }
  }, { timestamps: true });

const userModel = mongoose.model('UserModel', userSchema)

export default userModel