import mongoose from "mongoose";

const Users = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: false,
  },
  gender: {
    type: String,
    required: true,
  },
  hobby: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
});

export default mongoose.model("User", Users);
