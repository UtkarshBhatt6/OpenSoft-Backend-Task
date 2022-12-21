const mongoose = require("mongoose");
const studentSchema = mongoose.Schema(
  {
    user_name: {
      type: String,
      required: true,
    },
    roll_number: {
      type: Number,
      required: true,
    },
    password: {
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
    email_id: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const studentModel = mongoose.model("students", studentSchema);
module.exports = studentModel;
