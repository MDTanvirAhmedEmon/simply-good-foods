import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
  },
  number: {
    type: Number,
  },
  password: {
    type: String,
  },
});

const User = mongoose.models.user || mongoose.model("user", userSchema);

export default User;
