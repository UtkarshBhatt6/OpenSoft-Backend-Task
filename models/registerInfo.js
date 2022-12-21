const mongoose = require("mongoose");
const newUserSchema = mongoose.Schema(
  {
    Email: {
      type: String,
      required: true,
    },
    user_name: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    contact_number: {
      type: Number,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const newUserModel = mongoose.model("NewUser", newUserSchema);
module.exports = newUserModel;
