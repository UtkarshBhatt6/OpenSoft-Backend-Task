const express = require("express");
const router = express.Router();
const app = express();

const Student = require("../models/student");

router.get("/getallstudents", async (req, res) => {
  try {
    const students = await Student.find({});
    // return res.json({rooms});
    res.send(students);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

module.exports = router;
